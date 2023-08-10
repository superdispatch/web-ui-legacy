import { Column, Columns } from '@superdispatch/ui';
import { TextBox } from '@superdispatch/ui-lab';
import { getIn, useFormikContext } from 'formik';
import { forwardRef, ForwardRefExoticComponent, useMemo } from 'react';
import { FormikTextField, FormikTextFieldProps } from './FormikTextField';

interface Props extends FormikTextFieldProps {
  maxLength?: number;
}

export const FormikMaxLengthTextField: ForwardRefExoticComponent<Props> =
  forwardRef(({ name, label, maxLength, inputProps, ...props }, ref) => {
    const { values } = useFormikContext<unknown>();
    const text = useMemo(() => {
      const value = getIn(values, name) as unknown;

      if (!value || typeof value !== 'string') {
        return '';
      }

      return value;
    }, [values, name]);

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
                  {text.length} of {maxLength}
                </TextBox>
              </Column>
            )}
          </Columns>
        }
      />
    );
  });
