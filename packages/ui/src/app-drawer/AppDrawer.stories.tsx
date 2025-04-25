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
import { DrawerList } from '../drawer/DrawerList';
import { AppDrawer, AppDrawerSize } from './AppDrawer';
import { DRAWER_SIZE_VALUES } from './constants';

export default {
  title: 'Navigation/AppDrawer',
  component: AppDrawer,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: DRAWER_SIZE_VALUES,
      },
    },
    primaryAction: {
      control: {
        type: 'text',
      },
    },
    secondaryAction: {
      control: {
        type: 'text',
      },
    },
    showBackButton: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const basic = (args: {
  size?: AppDrawerSize;
  primaryAction?: string;
  secondaryAction?: string;
  showBackButton?: boolean;
}) => (
  <UseState initialState={true}>
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

        <AppDrawer
          title="Title"
          subtitle="Subtitle"
          open={state}
          size={args.size}
          onBack={
            args.showBackButton
              ? () => {
                  setState(false);
                }
              : undefined
          }
          onClose={() => {
            setState(false);
          }}
          primaryAction={
            args.primaryAction
              ? {
                  label: args.primaryAction,
                  onClick: () => {
                    /* noop */
                  },
                }
              : undefined
          }
          secondaryAction={
            args.secondaryAction
              ? {
                  label: args.secondaryAction,
                  onClick: () => {
                    /* noop */
                  },
                }
              : undefined
          }
        >
          <Stack>
            <TextField fullWidth={true} label="Field 1" />
            <TextField fullWidth={true} label="Field 2" />
            <TextField fullWidth={true} label="Field 3" />
            <TextField fullWidth={true} label="Field 4" />
          </Stack>
        </AppDrawer>
      </>
    )}
  </UseState>
);

export const drawerWithBackButton = () => (
  <UseState initialState={true}>
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

        <AppDrawer
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
        </AppDrawer>
      </>
    )}
  </UseState>
);

export const drawerList = () => (
  <UseState initialState={true}>
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

        <AppDrawer
          title="Title"
          open={state}
          disableContentPadding={true}
          disableCloseButton={true}
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
        </AppDrawer>
      </>
    )}
  </UseState>
);
