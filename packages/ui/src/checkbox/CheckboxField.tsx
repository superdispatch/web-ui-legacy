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
import { Color } from '../theme/Color';

const FormControl = styled(FormControlMui)`
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const FormHelperText = styled(FormHelperTextMui)`
  color: ${Color.Dark300};
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin-left: 30px;
  margin-top: 2px;
  &.Mui-error {
    color: ${Color.Red500};
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
          control={
            <Checkbox
              ref={ref}
              color="primary"
              disableRipple={true}
              {...props}
            />
          }
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    ),
  );
