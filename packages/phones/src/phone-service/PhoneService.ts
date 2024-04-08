import {
  getAsYouType,
  ParsedPhoneNumber,
  parsePhoneNumber,
} from 'awesome-phonenumber';
import { useMemo } from 'react';
import { APNStatic, getAPN, loadAPN } from '../apn/APN';
import {
  CountryISO,
  DEFAULT_COUNTRY,
  getCountryCode,
  toCountryISO,
} from '../country-code-metadata/CountryCodeMetadata';

const PLUS_SIGN = '+';
const NON_PHONE_SYMBOLS_PATTERN = /[^+\d]/g;
const PHONE_PATTERN = /^\+?\d+/g;

function getPrefix(country: CountryISO): string {
  return PLUS_SIGN + String(getCountryCode(toCountryISO(country)));
}

function trim(input: unknown): string | undefined {
  return typeof input == 'string' ? input.trim() : undefined;
}

function normalize(input: unknown): string {
  if (typeof input == 'string') {
    const matches = input
      .replace(NON_PHONE_SYMBOLS_PATTERN, '')
      .match(PHONE_PATTERN);
    if (matches?.[0]) return matches[0];
  }

  return '';
}

function normalizeNationalNumber(country: CountryISO, input: unknown): string {
  const phone = normalize(input);
  const prefix = getPrefix(country);

  if (phone.startsWith(PLUS_SIGN)) {
    return phone.slice(prefix.length);
  }

  return phone;
}

export type PhoneNumberPossibility =
  | 'is-possible'
  | 'invalid-country-code'
  | 'invalid-number'
  | 'too-long'
  | 'too-short'
  | 'unknown';

interface PhoneNumberJSON {
  valid: boolean;
  possible: boolean;
  possibility: PhoneNumberPossibility;

  regionCode: CountryISO;
  number: {
    input: string;
    international?: string;
    national?: string;
  };
}

export interface PhoneNumberInfo {
  country: CountryISO;
  nationalNumber: string;
}

export type PhoneNumberFormat =
  | 'e164'
  | 'international'
  | 'national'
  | 'rfc3966';

export interface PhoneValidationRules {
  required?: boolean;
  requiredMessage?: string;
  tooShortMessage?: string;
  tooLongMessage?: string;
  invalidMessage?: string;
}

export interface PhoneFormatOptions {
  fallback?: string;
  country?: CountryISO;
  format?: PhoneNumberFormat;
}

export class PhoneService {
  static load(): Promise<PhoneService> {
    return loadAPN().then((APN) => new PhoneService(APN));
  }

  static checkPossibility(input: unknown): Promise<PhoneNumberPossibility> {
    return this.load().then((phoneService) =>
      phoneService.checkPossibility(input),
    );
  }

  static validate(
    input: unknown,
    rules?: PhoneValidationRules,
  ): Promise<string | undefined> {
    return this.load().then((phoneService) =>
      phoneService.validate(input, rules),
    );
  }

  readonly APN;

  constructor(APN: APNStatic) {
    this.APN = APN;
  }

  createAPN(phone: string, country?: CountryISO): ParsedPhoneNumber {
    const asYouType = getAsYouType(toCountryISO(country));

    asYouType.reset(normalize(phone));

    return asYouType.getPhoneNumber();
  }

  getJSON(phone: string, country?: CountryISO): PhoneNumberJSON {
    return parsePhoneNumber(phone, { regionCode: country }) as PhoneNumberJSON;
  }

  checkPossibility(input: unknown): PhoneNumberPossibility {
    const phone = trim(input);

    if (!phone) {
      return 'unknown';
    }

    const apn = phone.startsWith(PLUS_SIGN)
      ? parsePhoneNumber(phone)
      : parsePhoneNumber(phone, { regionCode: DEFAULT_COUNTRY });
    const { valid, possible, possibility } = apn as PhoneNumberJSON;

    // Avoid false positive short phone numbers.
    if (!valid && possible) {
      return 'invalid-number';
    }

    return possibility;
  }

  validate(
    input: unknown,
    {
      required,
      requiredMessage = 'This field is required',
      invalidMessage = 'Invalid phone number',
      tooLongMessage = 'Phone number is too long',
      tooShortMessage = 'Phone number is too short',
    }: PhoneValidationRules = {},
  ): string | undefined {
    const phone = trim(input);

    if (!phone) {
      if (required) {
        return requiredMessage;
      }

      return undefined;
    }

    switch (this.checkPossibility(phone)) {
      case 'is-possible':
        return undefined;
      case 'too-long':
        return tooLongMessage;
      case 'too-short':
        return tooShortMessage;
    }

    return invalidMessage;
  }

  deletePrefix(phone: string, country: CountryISO): string {
    const prefix = getPrefix(country);

    if (phone.startsWith(PLUS_SIGN)) {
      const subNumber = phone.slice(prefix.length);
      return trim(subNumber) as string;
    }

    return phone;
  }

  getInfo(phone: string): PhoneNumberInfo {
    let {
      regionCode,
      number: { input, international: internationalNumber },
    } = this.getJSON(phone);

    let nationalNumber = '';
    const country = toCountryISO(regionCode);

    if (!internationalNumber) {
      nationalNumber = normalizeNationalNumber(country, input);
    } else {
      nationalNumber = this.deletePrefix(internationalNumber, country);
    }

    return { country, nationalNumber };
  }

  format(
    input: unknown,
    {
      fallback = '',
      format = 'e164',
      country: countryOption,
    }: PhoneFormatOptions = {},
  ): string {
    const phone = normalize(input);

    if (!phone) {
      return fallback;
    }

    const apn = parsePhoneNumber(phone, { regionCode: countryOption });
    const country = countryOption || toCountryISO(apn.regionCode);
    const international = apn.number?.international;
    const formattedNumber = apn.number ? apn.number[format] : '';
    const { regionCode } = apn;

    const formatted =
      format === 'national'
        ? this.formatNationalNumber(country, international)
        : formattedNumber;

    if (!formatted) {
      return this.customFormat(phone, format, regionCode);
    }

    return formatted;
  }

  formatNationalNumber(
    country: CountryISO,
    internationalNumber?: string,
  ): string | undefined {
    if (!internationalNumber) {
      return undefined;
    }

    return this.deletePrefix(internationalNumber, country);
  }

  private customFormat(
    phone: string,
    format: PhoneNumberFormat,
    regionCode?: string,
  ): string {
    let formatted = '';
    const country = toCountryISO(regionCode);

    const nationalNumber = normalizeNationalNumber(country, phone);

    if (format === 'national') {
      return nationalNumber;
    }

    let prefix = '';
    let separator = '';

    if (format === 'rfc3966') {
      prefix = 'tel:';
      separator = '-';
    }

    if (format === 'international') {
      separator = ' ';
    }

    formatted = prefix + getPrefix(country);

    if (nationalNumber) {
      formatted += separator + nationalNumber;
    }

    return formatted;
  }
}

export function usePhoneService(): PhoneService {
  const APN = getAPN();

  return useMemo(() => new PhoneService(APN), [APN]);
}
