import { PatternField, PatternFieldProps } from '@superdispatch/ui';
import { FieldValidator, useField, useFormikContext } from 'formik';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';

function formatInputError(error: string): ReactNode {
  return error || undefined;
}

export interface FormikPatternFieldProps extends PatternFieldProps {
  name: string;
  validate?: FieldValidator;
  formatError?: (error: string) => ReactNode;
}

export const FormikPatternField: ForwardRefExoticComponent<FormikPatternFieldProps> =
  forwardRef(
    (
      {
        id,
        name,
        validate,
        formatError = formatInputError,
        disabled,
        helperText,
        onBlur,
        onChange,
        ...props
      },
      ref,
    ) => {
      const { isSubmitting } = useFormikContext();
      const [field, { error, touched }, { setValue, setTouched }] = useField({
        name,
        validate,
      });
      const errorText = touched && error && formatError(error);

      return (
        <PatternField
          {...field}
          {...props}
          ref={ref}
          id={id}
          disabled={disabled || isSubmitting}
          error={!!errorText}
          helperText={errorText || helperText}
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

FormikPatternField.displayName = 'FormikPatternField';
