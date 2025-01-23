import {
  Checkbox,
  CheckboxProps,
  FormControl as FormControlMui,
  FormControlLabel,
  FormControlLabelProps,
  FormControlProps,
  FormHelperText as FormHelperTextMui,
} from '@material-ui/core';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorDynamic } from '../theme/Color';

const FormControl = styled(FormControlMui)`
  justify-content: center;
`;

const FormHelperText = styled(FormHelperTextMui)`
  color: ${ColorDynamic.Dark300};
  margin-left: 30px;
  margin-top: 0;
  margin-bottom: 4px;

  &.Mui-error {
    color: ${ColorDynamic.Red500};
  }
`;

export interface CheckboxFieldProps
  extends CheckboxProps,
    Pick<FormControlLabelProps, 'label'> {
  error?: boolean;
  helperText?: ReactNode;
  FormControlProps?: Omit<FormControlProps, 'error'>;
  FormControlLabelProps?: Omit<
    FormControlLabelProps,
    'label' | 'checked' | 'onBlur' | 'onChange' | 'control'
  >;
}

export const CheckboxField: ForwardRefExoticComponent<CheckboxFieldProps> =
  forwardRef(
    (
      {
        label,
        error,
        checked,
        onBlur,
        onChange,
        helperText,
        FormControlProps: formControlProps,
        FormControlLabelProps: formControlLabelProps,
        ...props
      },
      ref,
    ) => (
      <FormControl error={error} {...formControlProps}>
        <FormControlLabel
          {...formControlLabelProps}
          label={label}
          checked={checked}
          onBlur={onBlur as FormControlLabelProps['onBlur']}
          onChange={onChange as FormControlLabelProps['onChange']}
          control={<Checkbox ref={ref} color="primary" {...props} />}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    ),
  );
