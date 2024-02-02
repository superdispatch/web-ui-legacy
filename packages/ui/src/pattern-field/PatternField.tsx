import { StandardTextFieldProps, TextField } from '@material-ui/core';
import { forwardRef, ForwardRefExoticComponent } from 'react';
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
      keyof SafePatternFormatProps | 'defaultValue' | 'type' | 'inputRef'
    >,
    SafePatternFormatProps {}

export const PatternField: ForwardRefExoticComponent<PatternFieldProps> =
  forwardRef(
    (
      {
        id,
        value,
        inputMode = 'decimal',
        valueIsNumericString = true,
        ...props
      },
      ref,
    ) => {
      const uid = useUID(id);
      return (
        <PatternFormat
          {...props}
          id={uid}
          value={value ?? ''}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          inputMode={inputMode}
          getInputRef={ref}
          valueIsNumericString={valueIsNumericString}
          customInput={TextField}
        />
      );
    },
  );

PatternField.displayName = 'PatternField';
