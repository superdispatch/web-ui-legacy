import { Save as SaveIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { PropsLink } from '@superdispatch/ui-docs';
import { Inline } from '../index';

export default {
  title: 'Inputs/IconButton',
  parameters: {
    v5: true,
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/icon-button/#props" />
    ),
  },
};

export const basic = () => (
  <IconButton>
    <SaveIcon />
  </IconButton>
);

export const disabled = () => (
  <IconButton disabled={true}>
    <SaveIcon />
  </IconButton>
);

export const colors = () => (
  <Inline>
    <IconButton>
      <SaveIcon />
    </IconButton>

    <IconButton color="primary">
      <SaveIcon />
    </IconButton>

    <IconButton color="inherit">
      <SaveIcon />
    </IconButton>
  </Inline>
);

export const sizes = () => (
  <Inline verticalAlign="center">
    <IconButton size="small">
      <SaveIcon fontSize="inherit" />
    </IconButton>

    <IconButton>
      <SaveIcon fontSize="inherit" />
    </IconButton>
  </Inline>
);
