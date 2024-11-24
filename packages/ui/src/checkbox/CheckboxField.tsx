import {
  Checkbox,
  CheckboxProps,
  FormControl as FormControlMui,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText as FormHelperTextMui,
} from '@material-ui/core';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorV2 } from '../theme/Color';

const FormControl = styled(FormControlMui)`
  justify-content: center;
`;

const FormHelperText = styled(FormHelperTextMui)`
  color: ${ColorV2.Dark300};
  margin-left: 30px;
  margin-top: 0;
  margin-bottom: 4px;

  &.Mui-error {
    color: ${ColorV2.Red500};
  }
`;

export interface CheckboxFieldProps
  extends CheckboxProps,
    Pick<FormControlLabelProps, 'label'> {
  error?: boolean;
  helperText?: ReactNode;
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
        FormControlLabelProps: formControlLabelProps,
        ...props
      },
      ref,
    ) => (
      <FormControl error={error}>
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
