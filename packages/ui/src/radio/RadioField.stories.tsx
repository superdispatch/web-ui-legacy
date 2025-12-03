import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@material-ui/core';
import { AccountBoxOutlined, Error } from '@material-ui/icons';
import { UseState } from '@superdispatch/ui-docs';
import {
  CheckboxField,
  Column,
  Columns,
  Image,
  Inline,
  RadioField,
  RadioFieldCard,
  RadioGroupField,
  Stack,
  Tag,
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

const cards = [
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
    icon: <Image src="https://dummyimage.com/72x72/7a7a7a/fff" />,
  },
  {
    value: 'truck',
    name: 'truck',
    label: 'Im truck',
    caption: 'Im truck',
    icon: <Image src="https://dummyimage.com/144x72/7a7a7a/fff" />,
  },
  {
    value: 'tag',
    name: 'tag',
    label: 'Im tag',
    caption: 'Im tag',
    icon: (
      <Tag variant="subtle" color="grey">
        Verified
      </Tag>
    ),
  },
];

export const radioGroupCard = () => {
  return (
    <UseState initialState="driver_dispatcher">
      {(value, setValue) => (
        <RadioGroupField fullWidth={true}>
          <Stack space="small">
            {cards.map((item, index) => (
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

export const radioDisabledGroupCard = () => {
  return (
    <UseState initialState="truck">
      {(value, setValue) => (
        <RadioGroupField disabled={true} fullWidth={true}>
          <Stack space="small">
            {cards.map((item, index) => (
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
