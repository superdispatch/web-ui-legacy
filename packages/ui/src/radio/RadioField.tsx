import {
  FormControl as FormControlMui,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText as FormHelperTextMui,
  Radio,
  RadioProps,
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

export interface RadioFieldProps
  extends Omit<RadioProps, 'onBlur' | 'onChange'>,
    Pick<FormControlLabelProps, 'label' | 'onBlur' | 'onChange'> {
  error?: boolean;
  helperText?: ReactNode;
  FormControlLabelProps?: Omit<
    FormControlLabelProps,
    | 'label'
    | 'error'
    | 'checked'
    | 'onBlur'
    | 'onChange'
    | 'helperText'
    | 'control'
  >;
}

export const RadioField: ForwardRefExoticComponent<RadioFieldProps> =
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
          onBlur={onBlur}
          onChange={onChange}
          control={<Radio ref={ref} color="primary" {...props} />}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    ),
  );
