import {
  InputProps as StandardInputProps,
  StandardTextFieldProps,
  TextField,
} from '@material-ui/core';
import {
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
} from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { useUID } from '../utils/useUID';

type SafeNumberFormatProps = Pick<
  NumericFormatProps,
  | 'value'
  | 'onChange'
  | 'getInputRef'
  | 'decimalScale'
  | 'onValueChange'
  | 'valueIsNumericString'
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
  valueIsNumericString = true,
  thousandSeparator = true,
  disableValueParsing,
  ...props
}: NumberFormatCustomProps): JSX.Element {
  return (
    <NumericFormat
      {...props}
      value={value ?? ''}
      inputMode="decimal"
      getInputRef={inputRef}
      valueIsNumericString={valueIsNumericString}
      thousandSeparator={thousandSeparator}
      allowedDecimalSeparators={['.', ',']}
      onValueChange={(values, sourceInfo) => {
        const { event } = sourceInfo;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        onChange?.({
          ...event,
          target: {
            ...event?.target,
            value: disableValueParsing ? values.value : values.floatValue,
          },
        } as ChangeEvent<HTMLInputElement>);
      }}
    />
  );
}

export const NumberField: ForwardRefExoticComponent<NumberFieldProps> =
  forwardRef(({ id, InputProps, ...props }, ref) => {
    const uid = useUID(id);

    return (
      <TextField
        {...props}
        ref={ref}
        id={uid}
        InputProps={{
          ...InputProps,
          inputComponent: NumberInputComponent,
        }}
      />
    );
  });

NumberField.displayName = 'NumberField';
