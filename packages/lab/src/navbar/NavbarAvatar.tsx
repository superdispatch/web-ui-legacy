import { Avatar, AvatarProps, Typography } from '@material-ui/core';
import { Color, Column, Columns, Stack } from '@superdispatch/ui';
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { useNavbarContext } from './NavbarContext';

const StyledTypography = styled(Typography)`
  color: ${Color.Silver500};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    color: ${Color.White};
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
  const { isExpanded, isDrawerOpen } = useNavbarContext();

  if (isExpanded || isDrawerOpen) {
    return (
      <Columns space="xsmall" align="center">
        <Column width="content">
          <Avatar {...props}>{children}</Avatar>
        </Column>

        <Column>
          <Stack space="none">
            <StyledTypography>{title}</StyledTypography>

            <StyledTypography>{subtitle}</StyledTypography>
          </Stack>
        </Column>
      </Columns>
    );
  }

  return <Avatar {...props}>{children}</Avatar>;
}
