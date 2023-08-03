import {
  RadioCardItemProps,
  RadioFieldCard,
  RadioGroupFieldProps,
  Stack,
} from '@superdispatch/ui';
import { FieldValidator, useField, useFormikContext } from 'formik';
import { forwardRef, ForwardRefExoticComponent } from 'react';
import { FormikRadioGroupField } from '../radio/FormikRadioGroupField';

export interface FormikRadioCardFieldProps
  extends Omit<RadioGroupFieldProps, 'error' | 'value' | 'onClick'> {
  name: string;
  validate?: FieldValidator;
  children: RadioCardItemProps[];
}

export const FormikRadioCardField: ForwardRefExoticComponent<FormikRadioCardFieldProps> =
  forwardRef(
    (
      {
        name,
        validate,
        children,

        disabled,
        ...props
      },
      ref,
    ) => {
      const { isSubmitting } = useFormikContext();
      const [field, _, { setValue }] = useField({
        name,
        validate,
      });

      return (
        <FormikRadioGroupField
          {...props}
          {...field}
          ref={ref}
          disabled={disabled || isSubmitting}
          onChange={(event) => {
            field.onChange(event);
          }}
        >
          <Stack>
            {children.map((radioItem) => {
              return (
                <RadioFieldCard
                  {...radioItem}
                  key={radioItem.value}
                  checked={field.value === radioItem.value}
                  onClick={() => {
                    setValue(radioItem.value);
                  }}
                />
              );
            })}
          </Stack>
        </FormikRadioGroupField>
      );
    },
  );
