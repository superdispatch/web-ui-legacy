import { UseState } from '@superdispatch/ui-docs';
import { NumberField } from '..';

export default { title: 'Inputs/NumberField', component: NumberField };

export const basic = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <NumberField
        value={value}
        label="Label"
        helperText="helperText"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    )}
  </UseState>
);

export const decimalSeparator = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <NumberField
        value={value}
        label="Separator :"
        helperText="helperText"
        inputProps={{
          decimalSeparator: ':',
        }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    )}
  </UseState>
);

export const decimalScale = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <NumberField
        value={value}
        label="Decimal scale 2"
        helperText="helperText"
        inputProps={{
          decimalScale: 2,
        }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    )}
  </UseState>
);

export const prefix = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <NumberField
        value={value}
        label="Prefix $"
        helperText="helperText"
        inputProps={{
          prefix: '$',
        }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    )}
  </UseState>
);

export const withoutSeparator = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <NumberField
        value={value}
        label="Label"
        helperText="helperText"
        inputProps={{
          thousandSeparator: false,
        }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    )}
  </UseState>
);

export const error = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <NumberField
        value={value}
        label="Label"
        helperText="Error Text"
        error={true}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    )}
  </UseState>
);

export const text = () => (
  <UseState initialState={0}>
    {(value, setValue) => (
      <NumberField
        value={value}
        isText={true}
        label="Label"
        helperText="helperText"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    )}
  </UseState>
);
