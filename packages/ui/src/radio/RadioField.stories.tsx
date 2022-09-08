import { FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { Meta } from '@storybook/react';
import { CheckboxField, RadioField, RadioGroupField } from '../index';

export default {
  title: 'Inputs/RadioField',
  component: RadioField,
} as Meta;

export const basic = () => (
  <RadioField label="Label" helperText="Helper Text" />
);

export const error = () => (
  <RadioField label="Label" helperText="Error Text" error={true} />
);

export const disabled = () => (
  <RadioGroupField label="Disabled">
    <RadioField label="Checked" checked={true} disabled={true} />
    <RadioField label="Unchecked" checked={false} disabled={true} />
  </RadioGroupField>
);

export const labelPlacement = () => (
  <RadioField
    label="Label"
    FormControlLabelProps={{ labelPlacement: 'start' }}
  />
);

export const inlineForm = () => (
  <RadioGroupField RadioGroupProps={{ row: true }}>
    <FormGroup row={true}>
      <RadioField label="Radio" />
      <CheckboxField label="Checkbox" />
      <FormControlLabel label="Switch" control={<Switch />} />
      <TextField placeholder="Text Field" />
    </FormGroup>
  </RadioGroupField>
);
