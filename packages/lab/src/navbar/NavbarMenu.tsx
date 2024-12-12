import { Menu, MenuItem, Typography } from '@material-ui/core';
import { ColorDynamic, Inline } from '@superdispatch/ui';
import { Key, MouseEvent, ReactElement, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { useNavbarContext } from './NavbarContext';

const Divider = styled.div`
  border-bottom: 1px solid ${ColorDynamic.Silver400};
  margin: 8px -16px;
`;

const StyledMenuItem = styled(MenuItem)`
  & svg {
    font-size: 24px;
    color: ${ColorDynamic.Dark100};
  }
`;

const Wrapper = styled.div<{ active?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  background: ${ColorDynamic.Dark400};

  border-left: 4px solid
    ${({ active }) => (active ? ColorDynamic.Blue300 : 'transparent')};

  &:hover {
    border-left-color: ${ColorDynamic.Blue300};
    background: ${ColorDynamic.Dark400};
  }
`;

export interface NavbarMenuItemOption {
  key: Key;
  icon: ReactNode;
  label: ReactNode;
  visible?: boolean;
  onClick: () => void;
}

interface NavbarMenuProps {
  children: ReactNode;
  items: NavbarMenuItemOption[];
}

export function NavbarMenu({ items, children }: NavbarMenuProps): ReactElement {
  const { setDrawerOpen } = useNavbarContext();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  function showProfileMenu(event: MouseEvent<HTMLElement>): void {
    setAnchor(event.currentTarget);
  }

  function hideProfileMenu(): void {
    setAnchor(null);
    setDrawerOpen(false);
  }

  return (
    <>
      <Wrapper onClick={showProfileMenu} active={!!anchor}>
        {children}
      </Wrapper>

      <Menu
        open={!!anchor}
        anchorEl={anchor}
        onClose={hideProfileMenu}
        onClick={hideProfileMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {items
          .filter((item) => item.visible !== false)
          .flatMap((item, index, arr) => {
            return [
              <StyledMenuItem key={item.key} onClick={item.onClick}>
                <Inline space="small" verticalAlign="center">
                  {item.icon}

                  <Typography style={{ color: ColorDynamic.Dark500 }}>
                    {item.label}
                  </Typography>
                </Inline>
              </StyledMenuItem>,

              index !== arr.length - 1 && (
                <Divider key={`${item.key}-divider`} />
              ),
            ];
          })}
      </Menu>
    </>
  );
}
