import { Link, Tooltip } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Button } from '../button/Button';
import { FlagList } from './FlagList';
import { FlagListItem } from './FlagListItem';

export default {
  title: 'Lab/FlagList',
  component: FlagList,
  subcomponents: { FlagListItem },
} as Meta;

export const basic = () => (
  <FlagList
    title={<Link href="#">Alexandrino Cappuccino</Link>}
    endAction={<Button variant="neutral">View Profile</Button>}
  >
    <FlagListItem
      showHelpIcon={true}
      endAction={<Button variant="neutral">Action</Button>}
    >
      New Item
    </FlagListItem>
    <FlagListItem
      variant="warning"
      showHelpIcon={true}
      endAction={<Button variant="neutral">Action</Button>}
    >
      Warning
    </FlagListItem>
    <FlagListItem
      variant="danger"
      showHelpIcon={true}
      endAction={<Button variant="neutral">Action</Button>}
    >
      Alert
    </FlagListItem>
  </FlagList>
);

export const headerless = () => (
  <FlagList isStandalone={true}>
    <FlagListItem
      showHelpIcon={true}
      endAction={<Button variant="neutral">Action</Button>}
    >
      New Item
    </FlagListItem>
    <FlagListItem
      variant="warning"
      showHelpIcon={true}
      endAction={<Button variant="neutral">Action</Button>}
    >
      Warning
    </FlagListItem>
    <FlagListItem
      variant="danger"
      showHelpIcon={true}
      endAction={<Button variant="neutral">Action</Button>}
    >
      Alert
    </FlagListItem>
  </FlagList>
);

export const withTooltips = () => (
  <FlagList title="Flight to Mars">
    <Tooltip placement="top-end" title="This is a tooltip for New Item">
      <FlagListItem
        showHelpIcon={true}
        endAction={<Button variant="neutral">Action</Button>}
      >
        New Item
      </FlagListItem>
    </Tooltip>
  </FlagList>
);
