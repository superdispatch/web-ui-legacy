import { StandardTextFieldProps, TextField } from '@material-ui/core';
import { useUID } from '@superdispatch/ui';
import { FieldValidator, useField, useFormikContext } from 'formik';
import {
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
} from 'react';
import { EMPTY_ERROR_MESSAGE } from './constants';

function parseInputValue(
  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
): unknown {
  return event.target.value;
}

function formatInputValue(value: unknown): string {
  if (value == null) {
    return '';
  }

  return String(value);
}

function formatInputError(error: string): ReactNode {
  return error || undefined;
}

export interface FormikTextFieldProps extends StandardTextFieldProps {
  name: string;
  validate?: FieldValidator;
  formatError?: (error: string) => ReactNode;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  format?: (value: any) => string;
  parse?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => unknown;
}

export const FormikTextField: ForwardRefExoticComponent<FormikTextFieldProps> =
  forwardRef(
    (
      {
        name,

        validate,

        id,
        onBlur,
        onChange,
        disabled,
        helperText,
        error: errorProp,
        parse = parseInputValue,
        format = formatInputValue,
        formatError = formatInputError,
        ...props
      },
      ref,
    ) => {
      const uid = useUID(id);
      const { isSubmitting } = useFormikContext();
      const [field, { error, touched }, { setValue, setTouched }] =
        useField<unknown>({ name, validate });
      const errorText: ReactNode =
        touched && error && error !== EMPTY_ERROR_MESSAGE && formatError(error);

      return (
        <TextField
          {...props}
          {...field}
          id={uid}
          ref={ref}
          name={name}
          error={!!errorText || errorProp}
          helperText={errorText || helperText}
          disabled={disabled ?? isSubmitting}
          value={format(field.value)}
          onBlur={(event) => {
            onBlur?.(event);

            if (!event.defaultPrevented) {
              setTouched(true);
            }
          }}
          onChange={(event) => {
            onChange?.(event);

            // event.preventDefault is called on handleKeyDown for Textfield select
            // check out SelectInput.js for more details
            //https://github.com/mui/material-ui/blob/v4.x/packages/material-ui/src/Select/SelectInput.js
            if (!event.defaultPrevented || event.type === 'keydown') {
              setValue(parse(event));
            }
          }}
        />
      );
    },
  );
