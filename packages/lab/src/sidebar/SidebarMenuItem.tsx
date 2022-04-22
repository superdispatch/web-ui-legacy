import { ButtonBase } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';
import { Color, Column, Columns, Inline, mergeRefs } from '@superdispatch/ui';
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
  ({ hasAvatar }) => {
    const height = hasAvatar ? 48 : 40;

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
          background-color: ${Color.Silver200};
          box-shadow: inset 4px 0 0 ${Color.Blue300};
        }
      }
    `;
  },
);

const SidebarMenuItemBadge = styled.div`
  font-size: 12px;
  line-height: 16px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 100px;

  color: ${Color.Dark500};
  background-color: ${Color.Silver300};

  .MuiButtonBase-root[aria-current='true'] & {
    color: ${Color.White};
    background-color: ${Color.Dark450};
  }
`;

const SidebarMenuItemSecondaryAction = styled.div`
  top: 50%;
  right: 24px;
  position: absolute;
  transform: translate3d(0, -50%, 0);
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
    const actionsRef = useRef<HTMLDivElement>(null);
    const actionsPlaceholderRef = useRef<HTMLDivElement>(null);
    const { openSidebarContent } = useSidebarContext();
    const { matches: isHoverSupported } = matchMedia('(hover: hover)');

    useLayoutEffect(() => {
      if (actionsRef.current && actionsPlaceholderRef.current) {
        actionsPlaceholderRef.current.style.width = `${Math.max(
          0,
          actionsRef.current.offsetWidth - 8,
        )}px`;
      }
    });

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

            {!!badge && (
              <Column width="content">
                <SidebarMenuItemBadge>{badge}</SidebarMenuItemBadge>
              </Column>
            )}

            {(!!action || !!secondaryActions) && (
              <Column width="content">
                <div ref={actionsPlaceholderRef} />
              </Column>
            )}
          </Columns>
        </ButtonBase>

        {(!!action || !!secondaryActions) && (
          <SidebarMenuItemSecondaryAction ref={actionsRef}>
            <Inline>
              {hovered && secondaryActions}
              {action}
            </Inline>
          </SidebarMenuItemSecondaryAction>
        )}
      </SidebarMenuItemRoot>
    );
  },
);
