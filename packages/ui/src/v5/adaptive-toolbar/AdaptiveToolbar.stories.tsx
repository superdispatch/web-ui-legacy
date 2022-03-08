import { Meta } from '@storybook/react';
import { AdaptiveToolbar } from './AdaptiveToolbar';

export default {
  title: 'Surfaces/AdaptiveToolbar',
  component: AdaptiveToolbar,
  parameters: {
    v5: true,
  },
} as Meta;

export const basic = () => (
  <AdaptiveToolbar
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
  />
);
