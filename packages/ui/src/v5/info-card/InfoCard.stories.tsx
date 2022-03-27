import { Typography } from '@mui/material';
import { Meta } from '@storybook/react';
import { Button } from '../button/Button';
import { Stack } from '../stack/Stack';
import { InfoCard } from './InfoCard';

export default {
  title: 'Surfaces/InfoCard',
  component: InfoCard,
  parameters: {
    v5: true,
  },
} as Meta;

export const basic = () => (
  <InfoCard>
    <Stack space="small">
      <Typography variant="h3">Title</Typography>
      <Typography>Content</Typography>

      <Button>Button</Button>
    </Stack>
  </InfoCard>
);

export const large = () => (
  <InfoCard size="large">
    <Stack space="small">
      <Typography variant="h3">Title</Typography>
      <Typography>Content</Typography>

      <Button>Button</Button>
    </Stack>
  </InfoCard>
);
