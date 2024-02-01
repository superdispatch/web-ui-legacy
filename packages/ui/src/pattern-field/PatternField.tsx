import { StandardTextFieldProps, TextField } from '@material-ui/core';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import { useUID } from '../utils/useUID';

type SafePatternFormatProps = Pick<
  PatternFormatProps,
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'onValueChange'
  | 'format'
  | 'mask'
  | 'patternChar'
  | 'valueIsNumericString'
  | 'isAllowed'
  | 'inputMode'
  | 'renderText'
  | 'allowEmptyFormatting'
>;

export interface PatternFieldProps
  extends Omit<
      StandardTextFieldProps,
      keyof SafePatternFormatProps | 'ref' | 'defaultValue' | 'type'
    >,
    SafePatternFormatProps {}

export function PatternField({
  value,
  inputRef,
  inputMode = 'decimal',
  valueIsNumericString = true,
  ...props
}: PatternFieldProps): JSX.Element {
  const uid = useUID();
  return (
    <PatternFormat
      {...props}
      id={uid}
      value={value ?? ''}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      inputMode={inputMode}
      getInputRef={inputRef}
      valueIsNumericString={valueIsNumericString}
      customInput={TextField}
    />
  );
}
