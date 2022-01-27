import isLokiRunning from '@loki/is-loki-running';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SaveIcon from '@material-ui/icons/Save';
import { Meta } from '@storybook/react';
import { Inline, Stack } from '../';
import { Button } from './Button';

const isLoading = !isLokiRunning();

export default { title: 'v4/Navigation/Button', component: Button } as Meta;

export const basic = () => (
  <Inline verticalAlign="center" horizontalAlign="center">
    <Stack align="center">
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
    </Stack>

    <Stack align="center">
      <Button variant="text">Text</Button>
      <Button variant="text" isActive={true}>
        Loading
      </Button>
      <Button variant="text" isLoading={isLoading}>
        Loading
      </Button>
      <Button variant="text" disabled={true}>
        Disabled
      </Button>
    </Stack>

    <Stack align="center">
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" isActive={true}>
        Loading
      </Button>
      <Button variant="outlined" isLoading={isLoading}>
        Loading
      </Button>
      <Button variant="outlined" disabled={true}>
        Disabled
      </Button>
    </Stack>

    <Stack align="center">
      <Button variant="contained">Outlined</Button>
      <Button variant="contained" isActive={true}>
        Loading
      </Button>
      <Button variant="contained" isLoading={isLoading}>
        Loading
      </Button>
      <Button variant="contained" disabled={true}>
        Disabled
      </Button>
    </Stack>
  </Inline>
);

export const fullWidth = () => (
  <Stack>
    <Stack>
      <Button fullWidth={true} variant="text">
        Primary
      </Button>
      <Button fullWidth={true} variant="text" isActive={true}>
        Hover
      </Button>
      <Button fullWidth={true} variant="text" isLoading={isLoading}>
        Pending
      </Button>
      <Button fullWidth={true} variant="text" disabled={true}>
        Disabled
      </Button>
    </Stack>

    <Stack>
      <Button fullWidth={true} variant="outlined">
        Default
      </Button>
      <Button fullWidth={true} variant="outlined" isActive={true}>
        Hover
      </Button>
      <Button fullWidth={true} variant="outlined" isLoading={isLoading}>
        Pending
      </Button>
      <Button fullWidth={true} variant="outlined" disabled={true}>
        Disabled
      </Button>
    </Stack>

    <Stack>
      <Button fullWidth={true} variant="contained">
        Neutral
      </Button>
      <Button fullWidth={true} variant="contained" isActive={true}>
        Hover
      </Button>
      <Button fullWidth={true} variant="contained" isLoading={isLoading}>
        Pending
      </Button>
      <Button fullWidth={true} variant="contained" disabled={true}>
        Disabled
      </Button>
    </Stack>
  </Stack>
);

export const sizes = () => (
  <Stack space="medium" align="center">
    <Stack space="small" align="center">
      <Inline>
        <Button variant="text" size="small">
          <MoreHorizIcon />
        </Button>

        <Button variant="text" size="small">
          Submit
        </Button>

        <Button variant="text" size="small" startIcon={<CloudUploadIcon />}>
          Import
        </Button>

        <Button variant="text" size="small" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="text" size="small" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>

      <Inline>
        <Button variant="text" size="medium">
          <MoreHorizIcon />
        </Button>

        <Button variant="text" size="medium">
          Submit
        </Button>

        <Button variant="text" size="medium" startIcon={<CloudUploadIcon />}>
          Import
        </Button>

        <Button variant="text" size="medium" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="text" size="medium" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>

      <Inline>
        <Button variant="text" size="large">
          <MoreHorizIcon />
        </Button>

        <Button variant="text" size="large">
          Submit
        </Button>

        <Button variant="text" size="large" startIcon={<CloudUploadIcon />}>
          Import
        </Button>

        <Button variant="text" size="large" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="text" size="large" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>
    </Stack>

    <Stack space="small" align="center">
      <Inline>
        <Button variant="outlined" size="small">
          <MoreHorizIcon />
        </Button>

        <Button variant="outlined" size="small">
          Submit
        </Button>

        <Button variant="outlined" size="small" startIcon={<CloudUploadIcon />}>
          Import
        </Button>

        <Button variant="outlined" size="small" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="outlined" size="small" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>

      <Inline>
        <Button variant="outlined" size="medium">
          <MoreHorizIcon />
        </Button>

        <Button variant="outlined" size="medium">
          Submit
        </Button>

        <Button
          variant="outlined"
          size="medium"
          startIcon={<CloudUploadIcon />}
        >
          Import
        </Button>

        <Button variant="outlined" size="medium" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="outlined" size="medium" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>

      <Inline>
        <Button variant="outlined" size="large">
          <MoreHorizIcon />
        </Button>

        <Button variant="outlined" size="large">
          Submit
        </Button>

        <Button variant="outlined" size="large" startIcon={<CloudUploadIcon />}>
          Import
        </Button>

        <Button variant="outlined" size="large" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="outlined" size="large" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>
    </Stack>

    <Stack space="small" align="center">
      <Inline>
        <Button variant="contained" size="small">
          <MoreHorizIcon />
        </Button>

        <Button variant="contained" size="small">
          Submit
        </Button>

        <Button
          variant="contained"
          size="small"
          startIcon={<CloudUploadIcon />}
        >
          Import
        </Button>

        <Button variant="contained" size="small" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="contained" size="small" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>

      <Inline>
        <Button variant="contained" size="medium">
          <MoreHorizIcon />
        </Button>

        <Button variant="contained" size="medium">
          Submit
        </Button>

        <Button
          variant="contained"
          size="medium"
          startIcon={<CloudUploadIcon />}
        >
          Import
        </Button>

        <Button variant="contained" size="medium" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="contained" size="medium" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>

      <Inline>
        <Button variant="contained" size="large">
          <MoreHorizIcon />
        </Button>

        <Button variant="contained" size="large">
          Submit
        </Button>

        <Button
          variant="contained"
          size="large"
          startIcon={<CloudUploadIcon />}
        >
          Import
        </Button>

        <Button variant="contained" size="large" endIcon={<SaveIcon />}>
          Save
        </Button>

        <Button variant="contained" size="large" isLoading={isLoading}>
          Pending
        </Button>
      </Inline>
    </Stack>
  </Stack>
);
