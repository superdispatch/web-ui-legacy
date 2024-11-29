import { ColorV2, Column, Columns } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

export const DottedLine = styled.div`
  border-bottom: 1px dotted ${ColorV2.Silver400};
  margin: 0px 8px;
  height: 7px;
`;

interface DescriptionLineItemProps {
  title: ReactNode;
  children: ReactNode;
}

export const DescriptionLineItem = forwardRef<
  HTMLDivElement,
  DescriptionLineItemProps
>(({ title, children }, ref) => (
  <Columns ref={ref} align="center">
    <Column width="content">{title}</Column>
    <Column width="fluid">
      <DottedLine />
    </Column>
    <Column width="content">{children}</Column>
  </Columns>
));

DescriptionLineItem.displayName = 'DescriptionLineItem';
