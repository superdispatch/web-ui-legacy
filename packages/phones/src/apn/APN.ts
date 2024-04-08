import type AwesomePhoneNumber from 'awesome-phonenumber';
import PhoneNumber from 'awesome-phonenumber';

export type APNStatic = typeof AwesomePhoneNumber;
export type AYTType = PhoneNumber.AsYouType;

let loadError: undefined | Error;
let loadedAPN: undefined | APNStatic;

export function loadAPN(): Promise<APNStatic> {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "apn" */
    'awesome-phonenumber'
  ).then(
    (apn) => {
      loadedAPN = apn.default || apn;
      return loadedAPN;
    },
    (error) => {
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
    throw loadAPN();
  }

  return loadedAPN;
}
