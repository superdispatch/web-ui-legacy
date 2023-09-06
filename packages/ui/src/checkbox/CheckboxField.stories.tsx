import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import { Column, Columns, RadioField } from '..';
import { CheckboxField } from './CheckboxField';
import { CheckboxGroupField } from './CheckboxGroudField';

export default { title: 'Inputs/CheckboxField', component: CheckboxField };

export const basic = () => (
  <CheckboxField label="Label" helperText="Helper Text" />
);

export const error = () => (
  <CheckboxField label="Label" helperText="Error Text" error={true} />
);

export const indeterminate = () => (
  <CheckboxField indeterminate={true} label="Label" />
);

export const disabled = () => (
  <CheckboxGroupField label="Disabled">
    <CheckboxField label="Checked" checked={true} disabled={true} />
    <CheckboxField label="Unchecked" checked={false} disabled={true} />
    <CheckboxField
      checked={true}
      disabled={true}
      indeterminate={true}
      label="Checked and Indeterminate"
    />

    <CheckboxField
      checked={false}
      disabled={true}
      indeterminate={true}
      label="Unchecked and Indeterminate"
    />
  </CheckboxGroupField>
);

export const labelPlacement = () => (
  <CheckboxField
    label="Label"
    FormControlLabelProps={{ labelPlacement: 'start' }}
  />
);

export const inlineForm = () => (
  <CheckboxGroupField FormGroupProps={{ row: true }}>
    <FormGroup row={true}>
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
    </FormGroup>
  </CheckboxGroupField>
);
