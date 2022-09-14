import { Card, CardContent } from '@mui/material';
import { Meta } from '@storybook/react';
import { AdaptiveVerticalToolbar } from './AdaptiveVerticalToolbar';

export default {
  title: 'Surfaces/AdaptiveVerticalToolbar',
  component: AdaptiveVerticalToolbar,
} as Meta;

export const basic = () => (
  <Card>
    <CardContent style={{ resize: 'both', overflow: 'hidden' }}>
      <AdaptiveVerticalToolbar
        items={[
          'Send Offer',
          'Post to SLB',
          'Change Date Ranges',
          'Increase Price By',
          'Mark as Accepted',
          'Send Customer Invoice',
          'Archive',
          'Delete',
        ].map((label) => ({ label, key: label }))}
        renderItem={(item) => <li>{item.label}</li>}
      />
    </CardContent>
  </Card>
);

export const customMore = () => (
  <Card>
    <CardContent style={{ resize: 'both', overflow: 'hidden' }}>
      <AdaptiveVerticalToolbar
        items={[
          'Send Offer',
          'Post to SLB',
          'Change Date Ranges',
          'Increase Price By',
          'Mark as Accepted',
          'Send Customer Invoice',
          'Archive',
          'Delete',
        ].map((label) => ({ label, key: label }))}
        renderItem={(item) => <li>{item.label}</li>}
        moreElement={<li>··· More</li>}
      />
    </CardContent>
  </Card>
);
