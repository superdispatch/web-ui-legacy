import { v5 } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import { TextBox } from '../text-box/TextBox';

const { Column, Columns } = v5;

const SidebarSubheaderRoot = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  max-height: 40px;
  padding-left: 24px;
  padding-right: 24px;
`;

export interface SidebarSubheaderProps {
  id?: string;
  action?: ReactNode;
  children?: ReactNode;
}

export const SidebarSubheader = forwardRef<
  HTMLDivElement,
  SidebarSubheaderProps
>(({ id, action, children }, ref) => {
  return (
    <SidebarSubheaderRoot ref={ref}>
      <Columns space="xsmall" align="center">
        <Column>
          <TextBox id={id} variant="heading-6" color="secondary" noWrap={true}>
            {children}
          </TextBox>
        </Column>
        {!!action && <Column width="content">{action}</Column>}
      </Columns>
    </SidebarSubheaderRoot>
  );
});
