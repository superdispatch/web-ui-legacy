import {
  ButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
  MenuList,
  MenuListProps as MuiMenuListProps,
  Popover,
} from '@material-ui/core';
import * as React from 'react';
import { forwardRef, MouseEvent, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Color, mergeRefs, useUID } from '..';
import { Button, ButtonProps } from '../button/Button';

function CaretDownIcon(): ReactElement {
  return (
    <svg viewBox="0 0 8 4">
      <path
        fill="currentColor"
        d="M0.666687 0.666656L4.00002 3.99999L7.33335 0.666656H0.666687Z"
      />
    </svg>
  );
}

const CaretButton = styled(Button)`
  width: auto;
  ${({ variant }) =>
    variant === 'contained' && `border-left: 1px solid ${Color.Blue500}`};
`;

interface DropdownButtonProps extends Omit<ButtonProps, 'children'> {
  label?: ReactNode;
  children: ReactNode;
  MenuListProps?: Omit<MuiMenuListProps, 'id'>;
  ButtonGroupProps?: MuiButtonGroupProps;
}

export const DropdownButton = forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(
  (
    {
      MenuListProps,
      ButtonGroupProps,

      children,
      isLoading,
      onClick,
      label,
      ...buttonProps
    },
    ref,
  ) => {
    const uid = useUID();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement | null>(null);

    function handleClick(event: MouseEvent<HTMLButtonElement>): void {
      setOpen(false);
      onClick?.(event);
    }

    function handleToggle(): void {
      setOpen((prevOpen) => !prevOpen);
    }

    function handleClose(event: React.MouseEvent<Document>): void {
      if (anchorRef.current?.contains(event.currentTarget)) {
        return;
      }
      setOpen(false);
    }

    return (
      <>
        <ButtonGroup
          {...ButtonGroupProps}
          ref={mergeRefs(ButtonGroupProps?.ref, anchorRef)}
          fullWidth={ButtonGroupProps?.fullWidth || buttonProps.fullWidth}
        >
          <Button
            ref={ref}
            onClick={handleClick}
            disabled={isLoading}
            isLoading={isLoading}
            {...buttonProps}
          >
            {label}
          </Button>

          <CaretButton
            onClick={handleToggle}
            disabled={isLoading}
            color={buttonProps.color}
            variant={buttonProps.variant}
            aria-haspopup="menu"
            aria-controls={open ? uid : undefined}
            aria-expanded={open ? 'true' : undefined}
          >
            <CaretDownIcon />
          </CaretButton>
        </ButtonGroup>

        <Popover
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <div style={{ minWidth: anchorRef.current?.clientWidth }}>
            <MenuList
              {...MenuListProps}
              id={uid}
              onClick={() => {
                setOpen(false);
              }}
            >
              {children}
            </MenuList>
          </div>
        </Popover>
      </>
    );
  },
);

export default DropdownButton;
