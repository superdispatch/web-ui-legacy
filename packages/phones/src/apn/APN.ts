import type {
  AsYouType,
  ParsedPhoneNumber,
  PhoneNumberParseOptions,
  PhoneNumberTypes,
} from 'awesome-phonenumber';

export interface APNStatic {
  parsePhoneNumber: (
    input: string,
    options?: PhoneNumberParseOptions,
  ) => ParsedPhoneNumber;
  getAsYouType: (regionCode: string) => AsYouType;
  getExample: (
    regionCode: string,
    type?: PhoneNumberTypes,
  ) => ParsedPhoneNumber;
}
export type AYTType = AsYouType;

let loadError: undefined | Error;
let loadedAPN: undefined | APNStatic;

export function loadAPN(): Promise<APNStatic> {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "apn" */
    'awesome-phonenumber'
  ).then(
    (apn) => {
      loadedAPN = {
        parsePhoneNumber: apn.parsePhoneNumber,
        getAsYouType: apn.getAsYouType,
        getExample: apn.getExample,
      };
      return loadedAPN;
    },
    (error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      loadError = error;
      throw error;
    },
  );
}

export function getAPN(): APNStatic {
  if (loadError) {
    throw loadError;
  }

  if (!loadedAPN) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw loadAPN();
  }

  return loadedAPN;
}
