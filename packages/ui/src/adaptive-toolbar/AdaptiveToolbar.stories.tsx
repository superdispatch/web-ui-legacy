import { Meta } from '@storybook/react';
import { AdaptiveToolbar } from './AdaptiveToolbar';

export default {
  title: 'Surfaces/AdaptiveToolbar',
  component: AdaptiveToolbar,
} as Meta;

export const basic = () => (
  <AdaptiveToolbar
    items={[
      'Mark as Accepted',
      'Send Customer Invoice',
      'Archive',
      'Delete',
    ].map((label) => ({ label, key: label }))}
  />
);
