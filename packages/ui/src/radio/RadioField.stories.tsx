import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import { AccountBoxOutlined, VerifiedUser } from '@material-ui/icons';
import { UseState } from '@superdispatch/ui-docs';
import { CheckboxField, RadioField, RadioGroupField } from '..';
import { RadioCard } from './RadioGroupCard';

export default { title: 'Inputs/RadioField', component: RadioField };

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

export const radioCard = () => {
  const ROLES = [
    {
      value: 'dispatcher',
      label: 'I Only Dispatch',
      caption: 'I use Carrier TMS and do not use Driver App.',
      icon: <AccountBoxOutlined />,
    },
    {
      value: 'driver_dispatcher',
      label: 'I Drive And Dispatch',
      caption: 'I use both Carrier TMS and Driver App.',
      icon: <VerifiedUser />,
    },
  ];

  return (
    <UseState initialState="">
      {(type, setType) => (
        <RadioGroupField fullWidth={true}>
          <RadioCard roles={ROLES} type={type} setType={setType} />
        </RadioGroupField>
      )}
    </UseState>
  );
};
