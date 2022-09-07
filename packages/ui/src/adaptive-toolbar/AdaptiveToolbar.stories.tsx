import { Meta } from '@storybook/react';
import { AdaptiveToolbar } from './AdaptiveToolbar';

export default {
  title: 'v4/Surfaces/AdaptiveToolbar',
  component: AdaptiveToolbar,
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

export const group = () => (
  <AdaptiveToolbar
    items={[
      { key: 'edit', label: 'Edit' },
      { key: 'delete', label: 'Delete' },
      { key: 'cancel_order', label: 'Cancel Order' },
      { key: 'cancel_offer', label: 'Cancel Offer' },
      { key: 'send_offer', label: 'Send Offer', groupKey: '1' },
      {
        key: 'post_to_slb',
        label: 'Post to SLB',
        groupKey: '2',
        ButtonProps: { color: 'primary' },
        dropdown: [
          {
            key: 'post_to_all',
            label: 'Post to SLB & CD',
          },
          {
            key: 'post_to_cd',
            label: 'Post to CD',
          },
        ],
      },
    ]}
  />
);
