import { FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { PropsLink } from '@superdispatch/ui-docs';
import { CheckboxField, RadioField, RadioGroupField } from '../index';

export default {
  title: 'Inputs/Switch',
  parameters: {
    v5: true,
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/switch/#props" />
    ),
  },
};

export const basic = () => <Switch />;

export const labelled = () => (
  <FormGroup row={true}>
    <FormControlLabel label="Right Label" control={<Switch />} />

    <FormControlLabel
      label="Left Label"
      labelPlacement="start"
      control={<Switch />}
    />
  </FormGroup>
);

export const disabled = () => (
  <FormGroup row={true}>
    <FormControlLabel
      label="On"
      checked={true}
      disabled={true}
      control={<Switch />}
    />

    <FormControlLabel
      label="Off"
      checked={false}
      disabled={true}
      control={<Switch />}
    />
  </FormGroup>
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
