import { Link, Tooltip } from '@material-ui/core';
import { Meta } from '@storybook/react';
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
    endAction={{ title: 'View Profile' }}
  >
    <FlagListItem showHelpIcon={true} endAction={{ title: 'Action' }}>
      New Item
    </FlagListItem>
    <FlagListItem
      variant="warning"
      showHelpIcon={true}
      endAction={{ title: 'Action' }}
    >
      Warning
    </FlagListItem>
    <FlagListItem
      variant="danger"
      showHelpIcon={true}
      endAction={{ title: 'Action' }}
    >
      Alert
    </FlagListItem>
  </FlagList>
);

export const headerless = () => (
  <FlagList isStandalone={true}>
    <FlagListItem showHelpIcon={true} endAction={{ title: 'Action' }}>
      New Item
    </FlagListItem>
    <FlagListItem
      variant="warning"
      showHelpIcon={true}
      endAction={{ title: 'Action' }}
    >
      Warning
    </FlagListItem>
    <FlagListItem
      variant="danger"
      showHelpIcon={true}
      endAction={{ title: 'Action' }}
    >
      Alert
    </FlagListItem>
  </FlagList>
);

export const withTooltips = () => (
  <FlagList title="Flight to Mars">
    <Tooltip placement="top-end" title="This is a tooltip for New Item">
      <FlagListItem showHelpIcon={true} endAction={{ title: 'Action' }}>
        New Item
      </FlagListItem>
    </Tooltip>
  </FlagList>
);
