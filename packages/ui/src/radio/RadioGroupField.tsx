import {
  FormControl,
  FormControlProps,
  FormHelperText as FormHelperTextMui,
  FormHelperTextProps,
  FormLabel as FormLabelMui,
  FormLabelProps,
  RadioGroup,
  RadioGroupProps,
} from '@material-ui/core';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { Color } from '../theme/Color';

const FormLabel = styled(FormLabelMui)`
  margin-bottom: 8px;
  color: ${Color.Dark300};
  font-weight: 600;
`;

const FormHelperText = styled(FormHelperTextMui)`
  margin-top: 8px;
  color: ${Color.Dark300};

  &.Mui-error {
    color: ${Color.Red500};
  }
`;

export interface RadioGroupFieldProps
  extends Omit<FormControlProps, 'hiddenLabel' | 'onChange'>,
    Pick<RadioGroupProps, 'name' | 'value' | 'onChange'> {
  RadioGroupProps?: Omit<RadioGroupProps, 'value' | 'onChange' | 'children'>;

  label?: ReactNode;
  FormLabelProps?: Omit<FormLabelProps, 'children'>;

  helperText?: ReactNode;
  FormHelperTextProps?: Omit<FormHelperTextProps, 'children'>;
}

export const RadioGroupField: ForwardRefExoticComponent<RadioGroupFieldProps> =
  forwardRef(
    (
      {
        name,
        value = '',
        onChange,
        RadioGroupProps: radioGroupProps,

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

        <RadioGroup
          ref={ref}
          {...radioGroupProps}
          name={name}
          value={value as unknown}
          onChange={onChange}
        >
          {children}
        </RadioGroup>

        {!!helperText && (
          <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>
        )}
      </FormControl>
    ),
  );
