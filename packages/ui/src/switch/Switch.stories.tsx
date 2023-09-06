import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import { PropsLink } from '@superdispatch/ui-docs';
import {
  CheckboxField,
  Column,
  Columns,
  RadioField,
  RadioGroupField,
} from '..';

export default {
  title: 'Inputs/Switch',
  parameters: {
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
    <Columns align="center" space="small">
      <Column width="content">
        <RadioField label="Radio" />
      </Column>
      <Column width="content">
        <CheckboxField label="Checkbox" />
      </Column>
      <Column width="content">
        <FormControlLabel label="Switch" control={<Switch />} />
      </Column>
      <Column width="content">
        <TextField placeholder="Text Field" />
      </Column>
    </Columns>
  </RadioGroupField>
);
