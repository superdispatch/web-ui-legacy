import { Tooltip } from '@material-ui/core';
import { PropsLink } from '@superdispatch/ui-docs';
import { Button } from '@superdispatch/ui-lab';
import { Inline } from '../inline/Inline';

export default {
  title: 'Data Display/Tooltip',
  parameters: {
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/tooltip/#props" />
    ),
  },
};

export const basic = () => (
  <Inline>
    <Tooltip title="Default">
      <Button variant="neutral">Default</Button>
    </Tooltip>

    <Tooltip title="Left" placement="left">
      <Button variant="neutral">Left</Button>
    </Tooltip>

    <Tooltip title="Top" placement="top">
      <Button variant="neutral">Top</Button>
    </Tooltip>

    <Tooltip title="Right" placement="right">
      <Button variant="neutral">Right</Button>
    </Tooltip>
  </Inline>
);
