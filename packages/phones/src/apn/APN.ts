import { AsYouType, parsePhoneNumber } from 'awesome-phonenumber';

export type APNStatic = typeof parsePhoneNumber;
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
      loadedAPN = apn.parsePhoneNumber;
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
