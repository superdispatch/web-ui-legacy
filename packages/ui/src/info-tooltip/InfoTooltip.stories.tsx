import { Typography } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Button } from '@superdispatch/ui-lab';
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
    title={
      <>
        <Typography variant="h3">Title</Typography>
        <Typography>Content</Typography>
        <Button variant="neutral">Button</Button>
      </>
    }
  />
);

export const withLabel = () => (
  <InfoTooltip
    interactive={true}
    iconButtonProps={{
      'aria-label': 'aria label info',
    }}
    title={
      <>
        <Typography variant="h3">Title</Typography>
        <Typography>Content</Typography>
        <Button variant="neutral">Button</Button>
      </>
    }
  >
    <Typography>Label</Typography>
  </InfoTooltip>
);

export const medium = () => (
  <InfoTooltip
    interactive={false}
    fontSize="medium"
    iconButtonProps={{
      'aria-label': 'aria label info',
    }}
    title={
      <>
        <Typography variant="h3">Title</Typography>
        <Typography>Non-Interactive Content</Typography>
        <Button variant="neutral">Button</Button>
      </>
    }
  />
);

export const large = () => (
  <InfoTooltip
    interactive={false}
    fontSize="large"
    iconButtonProps={{
      'aria-label': 'aria label info',
    }}
    title={
      <>
        <Typography variant="h3">Title</Typography>
        <Typography>Non-Interactive Content</Typography>
        <Button variant="neutral">Button</Button>
      </>
    }
  />
);
