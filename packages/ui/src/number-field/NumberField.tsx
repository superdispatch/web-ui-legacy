import {
  InputProps as StandardInputProps,
  StandardTextFieldProps,
  TextField,
} from '@mui/material';
import {
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
} from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { useUID } from '../utils/useUID';

type SafeNumberFormatProps = Pick<
  NumberFormatProps,
  | 'value'
  | 'onChange'
  | 'getInputRef'
  | 'decimalScale'
  | 'onValueChange'
  | 'isNumericString'
  | 'decimalSeparator'
  | 'thousandSeparator'
  | 'fixedDecimalScale'
  | 'thousandsGroupStyle'
>;

interface NumberFormatCustomProps
  extends Omit<SafeNumberFormatProps, 'getInputRef' | 'onValueChange'>,
    Omit<
      StandardTextFieldProps,
      'ref' | keyof InputHTMLAttributes<HTMLInputElement>
    > {
  disableValueParsing?: boolean;
  format?: NumberFormatProps['format'];
}

export interface NumberFieldProps
  extends Omit<StandardTextFieldProps, 'InputProps' | 'inputProps'>,
    Omit<SafeNumberFormatProps, keyof StandardTextFieldProps> {
  InputProps?: Partial<Omit<StandardInputProps, 'inputComponent'>>;
  inputProps?: NumberFormatCustomProps & StandardTextFieldProps['inputProps'];
}

function NumberInputComponent({
  value,
  inputRef,
  onChange,
  isNumericString = true,
  thousandSeparator = true,
  disableValueParsing,
  ...props
}: NumberFormatCustomProps): JSX.Element {
  return (
    <NumberFormat
      {...props}
      value={value ?? ''}
      inputMode="decimal"
      getInputRef={inputRef}
      isNumericString={isNumericString}
      thousandSeparator={thousandSeparator}
      allowedDecimalSeparators={['.', ',']}
      onValueChange={(values) => {
        const floatValue = !Number.isNaN(Number(values.floatValue))
          ? values.floatValue
          : null;

        const event = {
          target: {
            value: disableValueParsing ? values.value : floatValue,
          },
        } as ChangeEvent<HTMLInputElement>;

        onChange?.(event);
      }}
    />
  );
}

export const NumberField: ForwardRefExoticComponent<NumberFieldProps> =
  forwardRef(({ id, InputProps, ...props }) => {
    const uid = useUID(id);

    return (
      <TextField
        {...props}
        id={uid}
        InputProps={{
          ...InputProps,
          inputComponent: NumberInputComponent,
        }}
      />
    );
  });

NumberField.displayName = 'NumberField';
