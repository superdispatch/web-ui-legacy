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
