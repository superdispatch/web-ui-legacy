import { Typography } from '@material-ui/core';
import { Color, Column, Columns } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

export const DottedLine = styled.div`
  border-bottom: 1px dotted ${Color.Silver400};
  margin: 0px 8px;
  height: 7px;
`;

interface DescriptionDottedLineItemProps {
  title: string;
  children: ReactNode;
}

export const DescriptionDottedLineItem = forwardRef<
  HTMLDivElement,
  DescriptionDottedLineItemProps
>(({ title, children }, ref) => (
  <Columns ref={ref} align="center">
    <Column width="content">
      <Typography color="textSecondary" gutterBottom={true}>
        {title}
      </Typography>
    </Column>
    <Column width="fluid">
      <DottedLine />
    </Column>
    <Column width="content">{children}</Column>
  </Columns>
));
