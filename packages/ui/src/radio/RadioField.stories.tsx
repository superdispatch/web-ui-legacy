import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import { AccountBoxOutlined, VerifiedUser } from '@material-ui/icons';
import { UseState } from '@superdispatch/ui-docs';
import {
  CheckboxField,
  Column,
  Columns,
  RadioField,
  RadioFieldCard,
  RadioGroupField,
  Stack,
} from '..';

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
  </RadioGroupField>
);

export const radioCard = () => {
  const item = {
    value: 'dispatcher',
    name: 'dispatcher',
    label: 'I Only Dispatch',
    caption: 'I use Carrier TMS and do not use Driver App.',
    icon: <AccountBoxOutlined />,
  };

  return (
    <UseState initialState="">
      {(value, setValue) => (
        <RadioGroupField fullWidth={true}>
          <RadioFieldCard
            {...item}
            value={value}
            checked={value === item.value}
            onClick={() => {
              setValue(item.value);
            }}
          />
        </RadioGroupField>
      )}
    </UseState>
  );
};

export const radioCardDisabled = () => {
  const item = {
    value: 'dispatcher',
    name: 'dispatcher',
    label: 'I Only Dispatch',
    caption: 'I use Carrier TMS and do not use Driver App.',
    icon: <AccountBoxOutlined />,
  };

  return (
    <UseState initialState="">
      {(value, setValue) => (
        <RadioGroupField fullWidth={true}>
          <RadioFieldCard
            {...item}
            value={value}
            disabled={true}
            onClick={() => {
              setValue(item.value);
            }}
          />
        </RadioGroupField>
      )}
    </UseState>
  );
};

export const radioGroupCard = () => {
  const values = [
    {
      value: 'dispatcher',
      name: 'dispatcher',
      label: 'I Only Dispatch',
      caption: 'I use Carrier TMS and do not use Driver App.',
      icon: <AccountBoxOutlined />,
    },
    {
      value: 'driver_dispatcher',
      name: 'driver_dispatcher',
      label: 'I Drive And Dispatch',
      caption: 'I use both Carrier TMS and Driver App.',
      icon: <VerifiedUser />,
    },
  ];

  return (
    <UseState initialState="">
      {(value, setValue) => (
        <RadioGroupField fullWidth={true}>
          <Stack space="small">
            {values.map((item, index) => (
              <RadioFieldCard
                {...item}
                key={index}
                value={value}
                checked={value === item.value}
                onClick={() => {
                  setValue(item.value);
                }}
              />
            ))}
          </Stack>
        </RadioGroupField>
      )}
    </UseState>
  );
};
