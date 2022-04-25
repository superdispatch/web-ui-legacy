import { Divider } from '@mui/material';
import { forwardRef } from 'react';
import styled from 'styled-components';

const SidebarDividerRoot = styled.div`
  padding: 20px 24px;
`;

export const SidebarDivider = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SidebarDividerRoot ref={ref}>
      <Divider />
    </SidebarDividerRoot>
  );
});
