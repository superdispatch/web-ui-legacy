import { MenuItem } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { ButtonGroupDropdown } from './ButtonGroupDropdown';

export default {
  title: 'Navigation/ButtonGroupDropdown',
  component: ButtonGroupDropdown,
} as Meta;

export const basic = () => (
  <ButtonGroupDropdown label="Post to SLB">
    <MenuItem>Post to SLB & CD</MenuItem>
    <MenuItem>Post to CD</MenuItem>
  </ButtonGroupDropdown>
);
