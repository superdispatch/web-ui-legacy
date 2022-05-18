import { Accordion, AccordionSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Color, useUID } from '@superdispatch/ui';
import {
  MouseEvent,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { useNavbarContext } from './NavbarContext';
import { NavbarItem } from './NavbarItem';
import { NavbarItemOptions } from './NavbarList';

export const NavbarAccordionLabel = styled.span`
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &[data-expanded='false'] {
    display: none;
  }
`;

const NavbarAccordionRoot = styled(Accordion)<{ gutter: boolean }>(
  ({ gutter }) => css`
    width: 100%;
    color: #c2c4c9;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    background-color: #1b2638;
    margin-top: ${gutter ? '16px' : '0'};

    &[aria-current] {
      background-color: #2f394a;
      color: ${Color.White};
    }

    &.MuiAccordion-root:before {
      background-color: #1b2638;
    }

    &.MuiPaper-elevation0 {
      border: 0px;
    }

    &.MuiAccordion-root.Mui-expanded {
      margin-top: ${gutter ? '16px' : '0'};
    }
  `,
);

const NavbarAccordionSummary = styled(AccordionSummary)`
  border-left: 4px solid transparent;
  padding-left: 20px;

  &.MuiAccordionSummary-root {
    max-height: 40px;
    min-height: 40px;
  }

  &.MuiAccordionSummary-content {
    align-items: center;
  }

  &:hover,
  &[aria-current],
  &[data-active='true'] {
    color: ${Color.White};
    background-color: #2f394a;
    border-left-color: ${Color.Blue300};
  }

  &[data-expanded='false'] {
    .MuiAccordionSummary-expandIcon {
      display: none;
    }
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  margin-right: 8px;

  & svg {
    font-size: 24px;
  }
`;

export interface NavbarAccordionProps {
  label: ReactNode;
  icon?: ReactNode;
  gutter?: boolean;
  items: Array<Omit<NavbarItemOptions, 'icon'>>;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export function NavbarAccordion({
  label,
  icon,
  gutter,
  items,
  onClick,
}: NavbarAccordionProps): ReactElement {
  const uid = useUID();
  const { setDrawerOpen, isNavbarExpanded } = useNavbarContext();

  const [isExpanded, setExpanded] = useState(true);

  // sync accordion state with Desktop menu state
  useEffect(() => {
    setExpanded(isNavbarExpanded);
  }, [isNavbarExpanded]);

  return (
    <NavbarAccordionRoot
      square={true}
      gutter={!!gutter}
      aria-labelledby={uid}
      expanded={isExpanded}
      onClick={(event) => {
        onClick?.(event);

        if (isNavbarExpanded) {
          setExpanded(!isExpanded);
        }
      }}
    >
      <NavbarAccordionSummary
        data-active={!isExpanded && items.some((item) => item.active)}
        data-expanded={isNavbarExpanded}
        expandIcon={<ExpandMore />}
      >
        <IconWrapper>{icon}</IconWrapper>
        <NavbarAccordionLabel id={uid} data-expanded={isNavbarExpanded}>
          {label}
        </NavbarAccordionLabel>
      </NavbarAccordionSummary>

      {items.map((item) => {
        const index = items.indexOf(item);
        const prev = items[index - 1];
        const { ident = 0 } = item;

        return (
          <NavbarItem
            {...item}
            key={item.key}
            ident={ident}
            active={item.active}
            gutter={prev && prev.groupKey !== item.groupKey}
            onClick={(event) => {
              event.stopPropagation();
              item.onClick?.(event);

              if (!event.isDefaultPrevented()) {
                setDrawerOpen(false);
              }
            }}
          />
        );
      })}
    </NavbarAccordionRoot>
  );
}
