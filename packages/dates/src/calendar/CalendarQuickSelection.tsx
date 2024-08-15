import { List, ListItem, Typography } from '@material-ui/core';
import { forwardRef, ReactNode } from 'react';

export interface CalendarQuickSelectionItemProps {
  children?: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export const CalendarQuickSelectionItem = forwardRef<
  HTMLDivElement,
  CalendarQuickSelectionItemProps
>(({ onClick, selected, children }, ref) => (
  <ListItem ref={ref} button={true} selected={selected} onClick={onClick}>
    {children}
  </ListItem>
));

export interface CalendarQuickSelectionProps {
  title?: ReactNode;
  children?: ReactNode;
}

export const CalendarQuickSelection = forwardRef<
  HTMLUListElement,
  CalendarQuickSelectionProps
>(({ title = 'Quick Selection', children }, ref) => (
  <List ref={ref}>
    <ListItem>
      <Typography variant="h4">{title}</Typography>
    </ListItem>

    {children}
  </List>
));
