import { UseState } from '@superdispatch/ui-docs';
import { PatternField } from './PatternField';

export default { title: 'Inputs/PatternField', component: PatternField };

export const phone = () => (
  <UseState initialState={null}>
    {(value, setValue) => (
      <PatternField
        value={value}
        label="Phone format"
        format="+1 (###) #### ###"
        mask="_"
        allowEmptyFormatting={true}
        helperText="helperText"
        onValueChange={({ value: newValue }) => {
          setValue(newValue);
        }}
      />
    )}
  </UseState>
);

export const card = () => (
  <UseState initialState={1234}>
    {(value, setValue) => (
      <PatternField
        value={value}
        label="Card format"
        format="#### #### #### ####"
        mask="X"
        helperText="helperText"
        placeholder="XXXX XXXX XXXX XXXX"
        onValueChange={({ value: newValue }) => {
          setValue(newValue);
        }}
      />
    )}
  </UseState>
);

export const valueCheck = () => (
  <UseState initialState={null}>
    {(value, setValue) => (
      <PatternField
        value={value}
        label="Less than 1000"
        format="###"
        helperText="helperText"
        isAllowed={(values) => {
          const { floatValue = 0 } = values;
          return floatValue < 1000;
        }}
        onValueChange={({ value: newValue }) => {
          setValue(newValue);
        }}
      />
    )}
  </UseState>
);

export const error = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <PatternField
        value={value}
        label="Error"
        format="### ###"
        helperText="Error Text"
        error={true}
        onValueChange={({ value: newValue }) => {
          setValue(newValue);
        }}
      />
    )}
  </UseState>
);
