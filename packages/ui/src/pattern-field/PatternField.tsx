import { StandardTextFieldProps, TextField } from '@material-ui/core';
import { ChangeEvent, forwardRef, ForwardRefExoticComponent } from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import { useUID } from '../utils/useUID';

type SafePatternFormatProps = Pick<
  PatternFormatProps,
  | 'value'
  | 'defaultValue'
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
      | keyof SafePatternFormatProps
      | 'defaultValue'
      | 'type'
      | 'inputRef'
      | 'inputProps'
    >,
    SafePatternFormatProps {
  inputProps?: Omit<
    React.HTMLAttributes<HTMLInputElement>,
    keyof SafePatternFormatProps
  >;
}

export const PatternField: ForwardRefExoticComponent<PatternFieldProps> =
  forwardRef(
    (
      {
        id,
        value,
        onChange,
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
          onValueChange={(values) => {
            const event = {
              target: {
                name: props.name,
                value: values.value,
              },
            } as ChangeEvent<HTMLInputElement>;

            onChange?.(event);
          }}
        />
      );
    },
  );

PatternField.displayName = 'PatternField';
