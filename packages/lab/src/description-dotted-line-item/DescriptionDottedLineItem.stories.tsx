import { Meta } from '@storybook/react';
import { TextBox } from '../text-box/TextBox';
import { DescriptionDottedLineItem } from './DescriptionDottedLineItem';
export default {
  title: 'Lab/DescriptionDottedLineItem',
  component: DescriptionDottedLineItem,
} as Meta;

export const description = () => (
  <>
    <DescriptionDottedLineItem
      title={<TextBox color="secondary">Payment</TextBox>}
    >
      <TextBox align="right" color="primary" variant="heading-4">
        $1,200
      </TextBox>
    </DescriptionDottedLineItem>
    <DescriptionDottedLineItem
      title={<TextBox color="secondary">Method</TextBox>}
    >
      <TextBox align="right" color="primary" variant="body">
        Comcheck
      </TextBox>
    </DescriptionDottedLineItem>
  </>
);
