import {
  RadioCardItemProps,
  RadioFieldCard,
  RadioGroupField,
  RadioGroupFieldProps,
  Stack,
} from '@superdispatch/ui';
import { FieldValidator, useField, useFormikContext } from 'formik';
import { forwardRef, ForwardRefExoticComponent } from 'react';

export interface FormikRadioCardFieldProps
  extends Omit<RadioGroupFieldProps, 'error' | 'value'> {
  name: string;
  validate?: FieldValidator;
  radioItems: RadioCardItemProps[];
}

export const FormikRadioCardField: ForwardRefExoticComponent<FormikRadioCardFieldProps> =
  forwardRef(
    (
      {
        name,
        validate,
        radioItems,

        onBlur,
        onChange,
        disabled,
        helperText,
        ...props
      },
      ref,
    ) => {
      const { isSubmitting } = useFormikContext();
      const [field] = useField({
        name,
        validate,
      });

      return (
        <RadioGroupField
          {...props}
          {...field}
          ref={ref}
          disabled={disabled || isSubmitting}
          onChange={(event) => {
            field.onChange(event);
          }}
        >
          <Stack>
            {radioItems.map((radioItem) => {
              return (
                <RadioFieldCard
                  {...radioItem}
                  value={field.value as string}
                  key={radioItem.value}
                  onClick={() => {
                    field.onChange(radioItem.value);
                  }}
                />
              );
            })}
          </Stack>
        </RadioGroupField>
      );
    },
  );
