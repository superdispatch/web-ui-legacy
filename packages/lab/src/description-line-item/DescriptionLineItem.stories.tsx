import { Meta } from '@storybook/react';
import { TextBox } from '../text-box/TextBox';
import { DescriptionLineItem } from './DescriptionLineItem';

export default {
  title: 'Lab/DescriptionLineItem',
  component: DescriptionLineItem,
} as Meta;

export const description = () => (
  <>
    <DescriptionLineItem title={<TextBox color="secondary">Payment</TextBox>}>
      <TextBox align="right" color="primary" variant="heading-4">
        $1,200
      </TextBox>
    </DescriptionLineItem>
    <DescriptionLineItem title={<TextBox color="secondary">Method</TextBox>}>
      <TextBox align="right" color="primary" variant="body">
        Comcheck
      </TextBox>
    </DescriptionLineItem>
  </>
);
