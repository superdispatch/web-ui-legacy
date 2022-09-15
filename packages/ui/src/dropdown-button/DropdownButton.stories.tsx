import { MenuItem } from '@mui/material';
import { Meta } from '@storybook/react';
import { DropdownButton } from './DropdownButton';

export default {
  title: 'Navigation/DropdownButton',
  component: DropdownButton,
} as Meta;

export const basic = () => (
  <DropdownButton label="Post to SLB">
    <MenuItem>Post to SLB & CD</MenuItem>
    <MenuItem>Post to CD</MenuItem>
  </DropdownButton>
);
