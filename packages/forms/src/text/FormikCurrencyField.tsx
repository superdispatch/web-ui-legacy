import { InputAdornment } from '@material-ui/core';
import { NumberField, NumberFieldProps } from '@superdispatch/ui';
import { FieldValidator, useField, useFormikContext } from 'formik';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';

function formatInputError(error: string): ReactNode {
  return error || undefined;
}

export const EMPTY_ERROR_MESSAGE = 'EMPTY_ERROR_MESSAGE';

type NumberValue = number | undefined;

export interface FormikCurrencyFieldProps extends NumberFieldProps {
  name: string;
  validate?: FieldValidator;
  format?: (value: NumberValue) => NumberValue;
  parse?: (value: NumberValue) => NumberValue;
  formatError?: (error: string) => ReactNode;
}

export const FormikCurrencyField: ForwardRefExoticComponent<FormikCurrencyFieldProps> =
  forwardRef(
    (
      {
        name,
        validate,
        parse = (x: NumberValue) => x,
        format = (x: NumberValue) => x,
        error: errorProp,
        formatError = formatInputError,
        onBlur,
        onChange,
        disabled,
        helperText,
        InputProps: {
          startAdornment = <InputAdornment position="start">$</InputAdornment>,
          ...InputProps
        } = {},
        ...rest
      },
      ref,
    ) => {
      const { isSubmitting } = useFormikContext();
      const [field, { error, touched }, { setValue }] = useField<
        number | undefined
      >({
        name,
        validate,
      });
      const hasError = touched && !!error;
      const errorText = touched && error !== EMPTY_ERROR_MESSAGE && error && formatError(error);

      return (
        <NumberField
          {...rest}
          ref={ref}
          name={name}
          value={format(field.value)}
          error={hasError || errorProp}
          disabled={disabled || isSubmitting}
          helperText={errorText || helperText}
          inputProps={{
            ...rest.inputProps,
            decimalScale: rest.inputProps?.decimalScale || 2,
          }}
          InputProps={{ ...InputProps, startAdornment }}
          onBlur={(event) => {
            onBlur?.(event);
            field.onBlur(event);
          }}
          onChange={(event) => {
            onChange?.(event);
            setValue(parse(event.target.value as unknown as NumberValue));
          }}
        />
      );
    },
  );

FormikCurrencyField.displayName = 'FormikCurrencyField';
