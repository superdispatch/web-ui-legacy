import { Meta } from '@storybook/react';
import { TextBox } from '../text-box/TextBox';
import { DescriptionDottedLineItem } from './DescriptionDottedLineItem';

export default {
  title: 'Lab/DescriptionDottedLineItem',
  component: DescriptionDottedLineItem,
} as Meta;

export const descriptionRaw = () => (
  <>
    <DescriptionDottedLineItem title="Payment">
      <TextBox align="right" color="primary" variant="heading-4">
        $1,200
      </TextBox>
    </DescriptionDottedLineItem>
    <DescriptionDottedLineItem title="Method">
      <TextBox align="right" color="primary" variant="body">
        Comcheck
      </TextBox>
    </DescriptionDottedLineItem>
  </>
);
