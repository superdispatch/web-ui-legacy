import { Menu, MenuItem } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { UseState } from '@superdispatch/ui-docs';
import { Button } from '@superdispatch/ui-lab';

export default { title: 'Navigation/Menu' } as Meta;

export const basic = () => (
  <UseState initialState={null}>
    {(state, setState) => (
      <>
        <Button
          variant="primary"
          onClick={(event) => {
            setState(event.currentTarget);
          }}
        >
          Menu
        </Button>

        <Menu
          open={!!state}
          anchorEl={state}
          onClose={() => {
            setState(false);
          }}
        >
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>
      </>
    )}
  </UseState>
);
