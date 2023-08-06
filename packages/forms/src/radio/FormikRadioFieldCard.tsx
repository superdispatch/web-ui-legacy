import { ButtonBaseProps } from '@material-ui/core';
import { RadioFieldCard } from '@superdispatch/ui';
import { useField } from 'formik';
import { forwardRef, ForwardRefExoticComponent } from 'react';

export interface FormikRadioCardFieldProps
  extends Omit<ButtonBaseProps, 'error' | 'value' | 'onClick'> {
  name: string;
  value: string;
  label: string;
  caption?: string;
  icon?: React.ReactNode;
}

export const FormikRadioCardField: ForwardRefExoticComponent<FormikRadioCardFieldProps> =
  forwardRef(({ name, value, label, caption, icon }, ref) => {
    const [field, _, { setValue }] = useField({
      name,
    });

    return (
      <RadioFieldCard
        ref={ref}
        value={value}
        label={label}
        caption={caption}
        icon={icon}
        key={value}
        checked={field.value === value}
        onClick={() => {
          setValue(value);
        }}
      />
    );
  });
