import { Column, Columns } from '@superdispatch/ui';
import { TextBox } from '@superdispatch/ui-lab';
import { useFormikContext } from 'formik';
import { forwardRef, ForwardRefExoticComponent } from 'react';
import { FormikTextField, FormikTextFieldProps } from './FormikTextField';

interface Props extends FormikTextFieldProps {
  maxLength?: number;
}

export const FormikMaxLengthTextField: ForwardRefExoticComponent<Props> =
  forwardRef(({ name, label, maxLength, inputProps, ...props }, ref) => {
    const { values } = useFormikContext<Record<string, string>>();

    return (
      <FormikTextField
        {...props}
        ref={ref}
        name={name}
        inputProps={{ maxLength, ...inputProps }}
        label={
          <Columns>
            <Column>{label}</Column>

            {maxLength != null && (
              <Column width="content">
                <TextBox color="secondary">
                  {values[name]?.length || 0} of {maxLength}
                </TextBox>
              </Column>
            )}
          </Columns>
        }
      />
    );
  });
