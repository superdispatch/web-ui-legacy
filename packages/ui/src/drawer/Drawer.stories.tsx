import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { Meta } from '@storybook/react';
import { UseState } from '@superdispatch/ui-docs';
import { Button } from '@superdispatch/ui-lab';
import { Stack } from '..';
import { DRAWER_SIZE_VALUES } from './constants';
import Drawer, { DrawerSize } from './Drawer';
import { DrawerList } from './DrawerList';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
  subcomponents: { DrawerList },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: DRAWER_SIZE_VALUES,
      },
    },
  },
} as Meta;

export const basic = (args: { size: DrawerSize }) => (
  <UseState initialState={false}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(true);
          }}
          variant="neutral"
        >
          Open Drawer
        </Button>

        <Drawer
          title="Title"
          subtitle="Subtitle"
          open={state}
          size={args.size}
          onClose={() => {
            setState(false);
          }}
          primaryAction={{
            label: 'Primary',
            onClick: () => {
              /* noop */
            },
          }}
          secondaryAction={{
            label: 'Secondary',
            onClick: () => {
              /* noop */
            },
          }}
        >
          <Stack>
            <TextField fullWidth={true} label="Field 1" />
            <TextField fullWidth={true} label="Field 2" />
            <TextField fullWidth={true} label="Field 3" />
            <TextField fullWidth={true} label="Field 4" />
          </Stack>
        </Drawer>
      </>
    )}
  </UseState>
);

export const drawerWithBackButton = () => (
  <UseState initialState={false}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(true);
          }}
          variant="neutral"
        >
          Open Drawer
        </Button>

        <Drawer
          title="Title"
          open={state}
          onClose={() => {
            setState(false);
          }}
          onBack={() => {
            setState(false);
          }}
        >
          This drawer has a back button
        </Drawer>
      </>
    )}
  </UseState>
);

export const drawerList = () => (
  <UseState initialState={false}>
    {(state, setState) => (
      <>
        <Button
          onClick={() => {
            setState(true);
          }}
          variant="neutral"
        >
          Open Drawer
        </Button>

        <Drawer
          title="Title"
          open={state}
          disableContentPadding={true}
          onClose={() => {
            setState(false);
          }}
          primaryAction={{
            label: 'Primary',
            onClick: () => {
              /* noop */
            },
          }}
          secondaryAction={{
            label: 'Secondary',
            onClick: () => {
              /* noop */
            },
          }}
        >
          <DrawerList>
            {Array.from({ length: 30 }, (_, idx) => (
              <ListItem key={idx} button={true} ContainerComponent="div">
                <ListItemText
                  primary={`Primary text #${idx + 1}`}
                  secondary={`Secondary text #${idx + 1}`}
                />

                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </DrawerList>
        </Drawer>
      </>
    )}
  </UseState>
);
