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
import { Color, mergeRefs } from '..';
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

const DropDownButton = styled(Button)`
  width: auto;
  ${({ variant }) =>
    variant === 'contained' && `border-left: 1px solid ${Color.Blue500}`};
`;

interface ButtonGroupDropdownProps extends Omit<ButtonProps, 'children'> {
  label?: ReactNode;
  children: ReactNode;
  MenuListProps?: MuiMenuListProps;
  ButtonGroupProps?: MuiButtonGroupProps;
}

export const ButtonGroupDropdown = forwardRef<
  HTMLDivElement,
  ButtonGroupDropdownProps
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
          ref={mergeRefs(ref, anchorRef)}
          fullWidth={buttonProps.fullWidth}
          {...ButtonGroupProps}
        >
          <Button
            onClick={handleClick}
            disabled={isLoading}
            isLoading={isLoading}
            {...buttonProps}
          >
            {label}
          </Button>

          <DropDownButton
            onClick={handleToggle}
            disabled={isLoading}
            color={buttonProps.color}
            variant={buttonProps.variant}
          >
            <CaretDownIcon />
          </DropDownButton>
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

export default ButtonGroupDropdown;
