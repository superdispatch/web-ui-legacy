import { Avatar, AvatarProps, Typography } from '@material-ui/core';
import { ColorDynamic, Column, Columns, Stack } from '@superdispatch/ui';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { useNavbarContext } from './NavbarContext';

const StyledTypography = styled(Typography)`
  color: ${ColorDynamic.Silver500};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    color: ${ColorDynamic.White};
  }
`;

interface NavbarAvatarProps extends Omit<AvatarProps, 'title'> {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
}

export function NavbarAvatar({
  title,
  subtitle,
  children,
  ...props
}: NavbarAvatarProps): ReactElement {
  const { isNavbarExpanded } = useNavbarContext();

  if (!isNavbarExpanded) {
    return <Avatar {...props}>{children}</Avatar>;
  }

  return (
    <Columns space="xsmall" align="center">
      <Column width="content">
        <Avatar {...props}>{children}</Avatar>
      </Column>

      <Column>
        <Stack space="none">
          <StyledTypography variant="caption">{title}</StyledTypography>

          <StyledTypography variant="caption">{subtitle}</StyledTypography>
        </Stack>
      </Column>
    </Columns>
  );
}
