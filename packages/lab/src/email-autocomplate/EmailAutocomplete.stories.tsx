import { Meta } from '@storybook/react';
import { UseState } from '@superdispatch/ui-docs';
import { Box } from '@superdispatch/ui-lab';
import { EmailAutocomplete } from './EmailAutocomplete';

export default {
  title: 'Inputs/EmailAutocomplete',
  component: EmailAutocomplete,
  decorators: [
    (Story) => (
      <Box maxWidth="400px">
        <Story />
      </Box>
    ),
  ],
} as Meta;

const options = [
  'test@example.com',
  'user@example.com',
  'admin@example.com',
  'test@mail.com,test2@mail.com',
];

export const basic = () => (
  <UseState initialState={[]}>
    {(state, setState) => (
      <EmailAutocomplete options={options} value={state} onChange={setState} />
    )}
  </UseState>
);

export const textarea = () => (
  <UseState initialState={[]}>
    {(state, setState) => (
      <EmailAutocomplete
        options={options}
        value={state}
        onChange={setState}
        TextFieldProps={{
          multiline: true,
          placeholder: 'Enter email addresses',
        }}
      />
    )}
  </UseState>
);
