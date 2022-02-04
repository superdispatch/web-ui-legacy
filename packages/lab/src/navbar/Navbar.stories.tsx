import {
  AccountCircle as ProfileIcon,
  AllInbox,
  Dashboard,
  ExitToApp,
  Notifications,
  People,
  Settings,
} from '@material-ui/icons';
import { Meta } from '@storybook/react';
import { noop } from 'lodash';
import { Navbar, NavbarAvatar, NavbarMenu } from '../..';

export default {
  title: 'Lab/Navbar',
  component: Navbar,
} as Meta;

const bottomItems = [
  {
    value: '/orders',
    label: 'All Orders',
    icon: <AllInbox fontSize="small" />,
  },
  {
    label: 'Customers',
    value: 'Customers',
    icon: <People />,
  },
  {
    value: 'profile',
    label: 'Profile',
    icon: <ProfileIcon />,
  },
];

const menuItems = [
  {
    key: 'profile',
    icon: <ProfileIcon />,
    label: 'Profile',
    onClick: noop,
  },
  {
    key: 'notification-settings',
    icon: <Notifications />,
    label: 'Notification Settings',
    onClick: noop,
  },
  {
    key: 'logout',
    icon: <ExitToApp />,
    label: 'Log Out',
    onClick: noop,
  },
];

export const basic = () => {
  return (
    <Navbar
      items={[
        {
          icon: <People />,
          label: 'Customers',
          groupKey: 1,
          key: 'Customers',
        },
        {
          icon: <Settings />,
          label: 'Settings',
          groupKey: 2,
          key: 'Settings',
        },
        {
          icon: <Dashboard />,
          label: 'Dashboard',
          groupKey: 2,
          key: 'Dashbaord',
        },
      ]}
      bottomItems={bottomItems}
      containerStyle={{ height: '100vh', overflow: 'auto' }}
      header={
        <img
          alt=""
          width="161px"
          src="https://source.unsplash.com/featured/256x256/?avatar"
        />
      }
      footer={
        <NavbarMenu items={menuItems}>
          <NavbarAvatar
            title="John"
            subtitle="Smith"
            src="https://source.unsplash.com/featured/256x256/?avatar"
          >
            JS
          </NavbarAvatar>
        </NavbarMenu>
      }
    >
      Hello
    </Navbar>
  );
};
