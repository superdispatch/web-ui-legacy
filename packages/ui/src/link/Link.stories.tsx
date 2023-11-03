import { Link, Typography } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Box } from '@superdispatch/ui-lab';
import { Stack } from '../stack/Stack';

export default { title: 'Navigation/Link' } as Meta;

export const basic = () => (
  <Typography>
    This is a{' '}
    <Link href="#" target="_blank">
      link
    </Link>{' '}
    in text with a <Link component="button">button link</Link>.
  </Typography>
);

export const multiline = () => (
  <Box maxWidth="64px">
    <Link href="#" target="_blank">
      This is multi-line link
    </Link>
  </Box>
);

export const multilineButton = () => (
  <Box maxWidth="64px">
    <Link component="button">This is multi-line button link</Link>
  </Box>
);

export const colors = () => (
  <Stack>
    <Link href="#" target="_blank" color="primary">
      Primary
    </Link>
    <Link href="#" target="_blank" color="textPrimary">
      Text Primary
    </Link>
    <Link href="#" target="_blank" color="textSecondary">
      Text Secondary
    </Link>
    <Link href="#" target="_blank" color="error">
      Critical
    </Link>
    <Link
      href="#"
      target="_blank"
      component="button"
      disabled={true}
      color="textSecondary"
    >
      Disabled
    </Link>
    <Box color="Red500">
      <Link href="#" target="_blank" color="inherit">
        Inherited
      </Link>
    </Box>
    <Link
      href="#"
      target="_blank"
      variant="h5"
      color="textPrimary"
      underline="always"
    >
      Always Underlined
    </Link>
    <Link href="#" target="_blank" color="textPrimary" underline="none">
      Never Underlined
    </Link>
  </Stack>
);
