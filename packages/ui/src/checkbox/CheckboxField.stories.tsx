import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import { Error } from '@material-ui/icons';
import { UseState } from '@superdispatch/ui-docs';
import { Column, Columns, Inline, RadioField } from '..';
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

export const group = () => (
  <UseState initialState="">
    {() => (
      <CheckboxGroupField
        error={true}
        helperText={
          <Inline verticalAlign="center">
            <Error fontSize="small" />
            Select at least one option
          </Inline>
        }
        label="Assign responsibility"
      >
        <CheckboxField
          label="Kristin Watson"
          value="kristin"
          helperText="Loves playing foosball"
        />
        <CheckboxField
          label="Jane Cooper"
          value="jane"
          helperText="Love singing"
        />
        <CheckboxField
          label="Jerome Bell"
          value="bell"
          helperText="Asked to be assigned to something"
          indeterminate={true}
        />
      </CheckboxGroupField>
    )}
  </UseState>
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
      <Columns space="small" align="center">
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
