import { LinearProgress } from '@material-ui/core';
import { PropsLink } from '@superdispatch/ui-docs';
import React from 'react';
import { Stack } from '../stack/Stack';

export default {
  title: 'Feedback/LinearProgress',
  parameters: {
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/linear-progress/#props" />
    ),
  },
};

export const basic = () => (
  <Stack space="large">
    {/* <LinearProgress />
    <LinearProgress color="secondary" /> */}

    <LinearProgress variant="buffer" valueBuffer={70} value={40} />
    <LinearProgress variant="determinate" color="secondary" value={80} />
  </Stack>
);
