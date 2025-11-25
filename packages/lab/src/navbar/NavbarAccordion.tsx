import { Accordion, AccordionSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Color, ColorDark, ColorDynamic, useUID } from '@superdispatch/ui';
import {
  MouseEvent,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
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

const NavbarAccordionRoot = styled(Accordion)`
  width: 100%;
  color: #c2c4c9;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) =>
    theme.palette.type === 'dark' ? ColorDark.White : Color.Dark500};

  &[aria-current] {
    background-color: ${Color.White10};
    color: ${ColorDynamic.White};
  }

  &.MuiAccordion-root:before {
    background-color: #1b2638;
  }

  &.MuiPaper-elevation0 {
    border: 0px;
  }

  &[data-gutter] {
    margin-top: 16px;
  }

  &[data-gutter].MuiAccordion-root.Mui-expanded {
    margin-top: 16px;
  }
`;

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
    background-color: ${Color.White10};
    border-left-color: ${ColorDynamic.Blue300};
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
  isExpanded?: boolean;
  onExpandedChange?: (isExpanded: boolean) => void;
}

export function NavbarAccordion({
  label,
  icon,
  gutter,
  items,
  onClick,
  isExpanded: controlledIsExpanded,
  onExpandedChange,
}: NavbarAccordionProps): ReactElement {
  const uid = useUID();
  const { setDrawerOpen, isNavbarExpanded } = useNavbarContext();

  const [internalIsExpanded, setInternalExpanded] = useState(true);

  useEffect(() => {
    if (controlledIsExpanded === undefined) {
      setInternalExpanded(isNavbarExpanded);
    }
  }, [isNavbarExpanded, controlledIsExpanded]);

  const isExpanded =
    controlledIsExpanded !== undefined
      ? controlledIsExpanded
      : internalIsExpanded;

  function setExpanded(value: boolean): void {
    if (controlledIsExpanded === undefined) {
      setInternalExpanded(value);
    }
    onExpandedChange?.(value);
  }

  const filteredItems: Array<Omit<NavbarItemOptions, 'icon'>> = useMemo(
    () => items.filter((item) => !item.hide),
    [items],
  );

  return (
    <NavbarAccordionRoot
      square={true}
      data-gutter={!gutter}
      aria-labelledby={uid}
      expanded={isExpanded}
      onClick={(event) => {
        onClick?.(event);

        if (controlledIsExpanded !== undefined || isNavbarExpanded) {
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

      {filteredItems.map((item) => {
        const index = filteredItems.indexOf(item);
        const prev = filteredItems[index - 1];
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
