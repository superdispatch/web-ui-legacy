import {
  FormControl,
  FormControlProps,
  FormGroup,
  FormGroupProps,
  FormHelperText as FormHelperTextMui,
  FormHelperTextProps,
  FormLabel as FormLabelMui,
  FormLabelProps,
} from '@material-ui/core';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorDynamic } from '../theme/Color';

const FormLabel = styled(FormLabelMui)`
  margin-bottom: 8px;
  color: ${ColorDynamic.Dark300};
  font-weight: 600;
`;

const FormHelperText = styled(FormHelperTextMui)`
  margin-top: 8px;
  color: ${ColorDynamic.Dark300};
  &.Mui-error {
    color: ${ColorDynamic.Red500};
  }
`;

export interface CheckboxGroupFieldProps
  extends Omit<FormControlProps, 'hiddenLabel' | 'onChange'> {
  FormGroupProps?: Omit<FormGroupProps, 'children'>;

  label?: ReactNode;
  FormLabelProps?: Omit<FormLabelProps, 'children'>;

  helperText?: ReactNode;
  FormHelperTextProps?: Omit<FormHelperTextProps, 'children'>;
}

export const CheckboxGroupField: ForwardRefExoticComponent<CheckboxGroupFieldProps> =
  forwardRef(
    (
      {
        FormGroupProps: formGroupProps,

        label,
        FormLabelProps: formLabelProps,

        helperText,
        FormHelperTextProps: formHelperTextProps,

        children,
        ...formControlProps
      },
      ref,
    ) => (
      <FormControl {...formControlProps} hiddenLabel={!label}>
        {!!label && <FormLabel {...formLabelProps}>{label}</FormLabel>}

        <FormGroup ref={ref} {...formGroupProps}>
          {children}
        </FormGroup>

        {!!helperText && (
          <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>
        )}
      </FormControl>
    ),
  );
