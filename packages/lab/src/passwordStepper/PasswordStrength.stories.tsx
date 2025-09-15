import { TextField } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Stack } from '@superdispatch/ui';
import { UseState } from '@superdispatch/ui-docs';
import { Box } from '../box/Box';
import { PasswordStrength } from './PasswordStrength';

export default {
  title: 'Lab/PasswordStrength',
  component: PasswordStrength,
  decorators: [
    (Story) => (
      <Box maxWidth="400px">
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const basic = () => (
  <Box>
    <PasswordStrength value="" />
  </Box>
);

export const weakPassword = () => (
  <Box>
    <PasswordStrength value="abc" />
  </Box>
);

export const averagePassword = () => (
  <Box>
    <PasswordStrength value="password123" />
  </Box>
);

export const goodPassword = () => (
  <Box>
    <PasswordStrength value="Password123" />
  </Box>
);

export const strongPassword = () => (
  <Box>
    <PasswordStrength value="Password123!!" />
  </Box>
);

export const Interactive = () => (
  <UseState initialState="">
    {(password, setPassword) => (
      <Box>
        <Stack space="medium">
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Type a password to see strength validation"
            fullWidth={true}
          />
          <PasswordStrength value={password} />
        </Stack>
      </Box>
    )}
  </UseState>
);

export const ProgressiveExample = () => {
  const examples = [
    { label: 'Empty', value: '' },
    { label: 'Too short', value: 'abc' },
    { label: 'Weak (only lowercase)', value: 'password' },
    { label: 'Average (lowercase + number)', value: 'password123' },
    { label: 'Strong (all requirements)', value: 'Password123!!' },
  ];

  return (
    <Box>
      <Stack space="large">
        {examples.map((example) => (
          <div key={example.label}>
            <h4>
              {example.label}: &quot;{example.value}&quot;
            </h4>
            <PasswordStrength value={example.value} />
          </div>
        ))}
      </Stack>
    </Box>
  );
};
