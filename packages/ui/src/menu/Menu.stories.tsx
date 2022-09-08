import isLokiRunning from '@loki/is-loki-running';
import { Button, Menu, MenuItem } from '@mui/material';
import { Meta } from '@storybook/react';
import { UseState } from '@superdispatch/ui-docs';
import { Box } from '@superdispatch/ui-lab';

export default {
  title: 'Navigation/Menu',
  parameters: {
    v5: true,
  },
} as Meta;

const initialState = isLokiRunning();

export const basic = () => (
  <Box height="200px">
    <UseState initialState={initialState}>
      {(open, setOpen) => (
        <UseState initialState={null}>
          {(anchor, setAnchor) => (
            <>
              <Button
                color="primary"
                variant="contained"
                ref={(node) => {
                  setAnchor(node);
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Menu
              </Button>

              <Menu
                open={open}
                anchorEl={anchor}
                onClose={() => {
                  setOpen(false);
                }}
              >
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
              </Menu>
            </>
          )}
        </UseState>
      )}
    </UseState>
  </Box>
);
