import { LinearProgress } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Column } from '../columns/Column';
import { Columns } from '../columns/Columns';
import { Stack } from '../stack/Stack';
import { Skeleton } from './Preloader';

export default {
  title: 'Layout/Preloader',
} as Meta;

export const basic = () => (
  <Columns space="large">
    <Column width="1/3">
      <Stack space="xsmall">
        <Skeleton height={20} width={240} />
        <Skeleton height={20} width={175} />
        <Skeleton height={20} />
      </Stack>
    </Column>

    <Column width="1/3">
      <Stack space="xsmall">
        <Skeleton height={20} width={270} />
        <Skeleton height={20} width={205} />
        <Skeleton height={20} />
      </Stack>
    </Column>

    <Column width="1/3">
      <Stack space="xsmall">
        <Skeleton height={20} width={170} />
        <Skeleton height={20} width={105} />
        <Skeleton height={20} />
      </Stack>
    </Column>
  </Columns>
);

export const linear = () => (
  <Stack>
    <LinearProgress />
    <LinearProgress color="secondary" />
  </Stack>
);
