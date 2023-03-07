import { Typography } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Button } from '../button/Button';
import { InfoTooltip } from './InfoTooltip';

export default {
  title: 'Surfaces/InfoTooltip',
  component: InfoTooltip,
} as Meta;

export const basic = () => (
  <InfoTooltip
    interactive={true}
    iconButtonProps={{
      'aria-label': 'aria label info',
    }}
  >
    <Typography variant="h3">Title</Typography>
    <Typography>Content</Typography>
    <Button>Button</Button>
  </InfoTooltip>
);

export const noninteractive = () => (
  <InfoTooltip
    interactive={false}
    iconButtonProps={{
      'aria-label': 'aria label info',
    }}
  >
    <Typography variant="h3">Title</Typography>
    <Typography>Non-Interactive Content</Typography>
    <Button>Button</Button>
  </InfoTooltip>
);
