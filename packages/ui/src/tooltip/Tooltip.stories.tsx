import isLokiRunning from '@loki/is-loki-running';
import { Button, Tooltip } from '@material-ui/core';
import { PropsLink } from '@superdispatch/ui-docs';
import { Box } from '@superdispatch/ui-lab';
import { Inline } from '../inline/Inline';

export default {
  title: 'v4/Data Display/Tooltip',
  parameters: {
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/tooltip/#props" />
    ),
  },
};

export const basic = () => {
  const open = isLokiRunning() || undefined;
  return (
    <Box margin="xxlarge" padding="small">
      <Inline space="xlarge">
        <Tooltip open={open} title="Default">
          <Button>Default</Button>
        </Tooltip>

        <Tooltip open={open} title="Left" placement="left">
          <Button>Left</Button>
        </Tooltip>

        <Tooltip open={open} title="Top" placement="top">
          <Button>Top</Button>
        </Tooltip>

        <Tooltip open={open} title="Right" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </Inline>
    </Box>
  );
};
