import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import { AccountBoxOutlined, Error, VerifiedUser } from '@material-ui/icons';
import { UseState } from '@superdispatch/ui-docs';
import {
  CheckboxField,
  Column,
  Columns,
  Inline,
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
  <Stack space="medium">
    <RadioField label="Label" helperText="Error Text" error={true} />
    <UseState initialState="">
      {(value, setValue) => (
        <RadioGroupField
          label="Assign responsibility"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          error={true}
          helperText={
            <Inline verticalAlign="center">
              <Error fontSize="small" />
              Be careful while assigning
            </Inline>
          }
        >
          <RadioField
            label="Kristin Watson"
            value="kristin"
            helperText="Loves playing foosball"
          />
          <RadioField
            label="Jane Cooper"
            value="jane"
            helperText="Love singing"
          />
          <RadioField
            label="Jerome Bell"
            value="jerome"
            helperText="Asked to be assigned to something"
          />
        </RadioGroupField>
      )}
    </UseState>
  </Stack>
);

export const group = () => (
  <UseState initialState="">
    {(value, setValue) => (
      <RadioGroupField
        label="Assign responsibility"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        helperText="Be careful while assigning"
      >
        <RadioField
          label="Kristin Watson"
          value="kristin"
          helperText="Loves playing foosball"
        />
        <RadioField
          label="Jane Cooper"
          value="jane"
          helperText="Love singing"
        />
        <RadioField
          label="Jerome Bell"
          value="jerome"
          helperText="Asked to be assigned to something"
        />
      </RadioGroupField>
    )}
  </UseState>
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
