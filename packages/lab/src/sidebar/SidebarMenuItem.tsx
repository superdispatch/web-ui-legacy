import { alpha, ButtonBase } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';
import {
  Color,
  ColorDynamic,
  Column,
  Columns,
  Inline,
  mergeRefs,
} from '@superdispatch/ui';
import {
  forwardRef,
  MouseEvent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { TextBox } from '../text-box/TextBox';
import { useSidebarContext } from './SidebarContainer';
import { SidebarMenuItemContextProvider } from './SidebarMenuItemContext';

interface SidebarMenuItemRootProps {
  hasAvatar: boolean;
}

const SidebarMenuItemRoot = styled.div<SidebarMenuItemRootProps>(
  ({ hasAvatar, theme }) => {
    const height = hasAvatar ? 48 : 40;
    const mode = theme.palette.type;
    const color =
      mode === 'dark' ? alpha(Color.White, 0.08) : ColorDynamic.Silver200;
    return css`
      position: relative;

      & > .MuiButtonBase-root {
        width: 100%;
        display: flex;
        justify-content: flex-start;

        padding-left: 24px;
        padding-right: 24px;
        height: ${height}px;
        max-height: ${height}px;

        &[aria-current='true'] {
          background-color: ${color};
          box-shadow: inset 4px 0 0 ${ColorDynamic.Blue300};
        }

        &:hover {
          background-color: ${color};
        }
      }
    `;
  },
);

const SidebarMenuItemBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 100px;

  color: ${ColorDynamic.Dark500};
  background-color: ${ColorDynamic.Silver400};
`;

export interface SidebarMenuItemProps {
  selected?: boolean;
  external?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  badge?: null | number;
  action?: ReactNode;
  avatar?: ReactNode;
  children?: ReactNode;
  openContentOnClick?: boolean;
  secondaryActions?: ReactNode;
}

export const SidebarMenuItem = forwardRef<HTMLDivElement, SidebarMenuItemProps>(
  (
    {
      action,
      avatar,
      onClick,
      external,
      children,
      disabled,
      selected,
      secondaryActions,
      badge: badgeProp,
      openContentOnClick,
    },
    ref,
  ) => {
    const [hovered, setHovered] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const { openSidebarContent } = useSidebarContext();
    const { matches: isHoverSupported } = matchMedia('(hover: hover)');

    useLayoutEffect(() => {
      const rootNode = rootRef.current;

      if (rootNode) {
        if (isHoverSupported) {
          rootNode.addEventListener('mouseenter', () => {
            setHovered(true);
          });

          rootNode.addEventListener('mouseleave', () => {
            setHovered(false);
          });
        } else {
          setHovered(true);
        }
      }
    }, [isHoverSupported]);

    const badge =
      !badgeProp || !Number.isFinite(badgeProp)
        ? null
        : badgeProp > 999
        ? '999+'
        : badgeProp;

    return (
      <SidebarMenuItemRoot ref={mergeRefs(ref, rootRef)} hasAvatar={!!avatar}>
        <ButtonBase
          disabled={disabled}
          aria-current={selected}
          onClick={(event) => {
            onClick?.(event);
            if (!event.isDefaultPrevented() && openContentOnClick) {
              openSidebarContent();
            }
          }}
        >
          <Columns align="center" space="xsmall">
            <Column>
              <Columns align="center" space="xsmall">
                <Column width="fluid">
                  <Columns align="center" space="xsmall">
                    {!!avatar && (
                      <SidebarMenuItemContextProvider
                        hovered={hovered}
                        disabled={disabled}
                      >
                        <Column width="content">{avatar}</Column>
                      </SidebarMenuItemContextProvider>
                    )}

                    <Column width="adaptive">
                      <TextBox
                        variant={selected ? 'body-semibold' : 'body'}
                        noWrap={true}
                      >
                        {children}
                      </TextBox>
                    </Column>

                    {external && (
                      <Column width="content">
                        <OpenInNew color="action" fontSize="small" />
                      </Column>
                    )}
                  </Columns>
                </Column>
              </Columns>
            </Column>

            {(!!action || !!secondaryActions) && (
              <Column width="content">
                <Inline>
                  {(selected || hovered) && secondaryActions}
                  {action}
                </Inline>
              </Column>
            )}

            {!!badge && (
              <Column width="content">
                <SidebarMenuItemBadge>{badge}</SidebarMenuItemBadge>
              </Column>
            )}
          </Columns>
        </ButtonBase>
      </SidebarMenuItemRoot>
    );
  },
);
