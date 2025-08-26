import { useIsMounted, useValueObserver } from '@superdispatch/hooks';
import {
  FormikConfig,
  FormikContextType,
  FormikErrors,
  FormikValues,
  useFormik,
} from 'formik';
import { ReactNode } from 'react';
import { useFormsContext } from './FormsProvider';

export interface FormikEnhancedConfig<TValues extends FormikValues, TResponse>
  extends Omit<FormikConfig<TValues>, 'onSubmit'> {
  /**
   * Resets form when input value changes
   */
  key?: unknown;

  /**
   * Override initial status type
   */
  initialStatus?: FormikEnhancedStatus<TResponse>;

  /**
   * Extracts errors from the submission error
   */
  getFormErrors?: (error: Error) => FormikErrors<TValues>;
  onSubmit: (values: TValues) => TResponse | PromiseLike<TResponse>;
  onSubmitSuccess?: (response: TResponse, values: TValues) => void;
  onSubmitFailure?: (error: Error, values: TValues) => void;

  /**
   * Children to render inside the form, required for React 18 compatibility
   */
  children?: ReactNode;
}

export type FormikEnhancedStatus<TResponse> =
  | { type: 'initial'; payload?: undefined }
  | { type: 'submitted'; payload: TResponse }
  | { type: 'rejected'; payload: Error };

// Remove after https://github.com/jaredpalmer/formik/pull/2323 merge
export interface FormikContextTypeEnhanced<
  TValues extends FormikValues,
  TResponse,
> extends FormikContextType<TValues> {
  status: FormikEnhancedStatus<TResponse>;
  setStatus: (status: FormikEnhancedStatus<TResponse>) => void;
  children?: ReactNode;
}

export function useFormikEnhanced<TValues extends FormikValues, TResponse>({
  key,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailure,
  getFormErrors: getFormErrorsOption,

  enableReinitialize = true,
  initialStatus = { type: 'initial' },
  children,
  ...config
}: FormikEnhancedConfig<TValues, TResponse>): FormikContextTypeEnhanced<
  TValues,
  TResponse
> {
  const ctx = useFormsContext();
  const isMounted = useIsMounted();

  const getFormErrors = getFormErrorsOption || ctx.getFormErrors;

  const formik = useFormik<TValues>({
    ...config,
    initialStatus,
    enableReinitialize,
    onSubmit: (values, { setErrors, setStatus }) =>
      Promise.resolve(onSubmit(values))
        .then(
          (response): FormikEnhancedStatus<TResponse> => ({
            type: 'submitted',
            payload: response,
          }),
          (error: Error): FormikEnhancedStatus<TResponse> => ({
            type: 'rejected',
            payload: error,
          }),
        )
        .then((status) => {
          if (isMounted()) {
            setStatus(status);

            if (status.type === 'rejected' && getFormErrors) {
              setErrors(getFormErrors(status.payload));
            }
          }
        }),
  }) as FormikContextTypeEnhanced<TValues, TResponse>;

  // Attach children to the returned context for React 18 compatibility
  formik.children = children;

  useValueObserver(key, () => {
    if (formik.dirty) {
      formik.resetForm();
    }
  });

  useValueObserver(formik.status, () => {
    if (formik.status.type === 'submitted') {
      onSubmitSuccess?.(formik.status.payload, formik.values);
    }

    if (formik.status.type === 'rejected') {
      onSubmitFailure?.(formik.status.payload, formik.values);
    }
  });

  return formik;
}
