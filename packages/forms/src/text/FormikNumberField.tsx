import { NumberField, NumberFieldProps } from '@superdispatch/ui';
import { FieldValidator, useField, useFormikContext } from 'formik';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';

function formatInputError(error: string): ReactNode {
  return error || undefined;
}

export interface FormikNumberFieldProps extends NumberFieldProps {
  name: string;
  validate?: FieldValidator;
  formatError?: (error: string) => ReactNode;
}

export const FormikNumberField: ForwardRefExoticComponent<FormikNumberFieldProps> =
  forwardRef(
    ({
      id,
      name,
      validate,
      formatError = formatInputError,
      disabled,
      helperText,
      onBlur,
      onChange,
      ...props
    }) => {
      const { isSubmitting } = useFormikContext();
      const [field, { error, touched }, { setValue, setTouched }] = useField({
        name,
        validate,
      });
      const errorText = touched && error && formatError(error);

      return (
        <NumberField
          {...field}
          {...props}
          id={id}
          disabled={disabled || isSubmitting}
          error={!!errorText}
          helperText={helperText || errorText}
          onBlur={(event) => {
            onBlur?.(event);
            setTouched(true);
          }}
          onChange={(event) => {
            onChange?.(event);
            setValue(event.target.value);
          }}
        />
      );
    },
  );

FormikNumberField.displayName = 'FormikNumberField';
