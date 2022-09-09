import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { CircularProgress } from '@mui/material';
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ButtonProps
  extends RefAttributes<HTMLButtonElement>,
    Omit<LoadingButtonProps, 'color' | 'loading' | 'loadingIndicator'> {
  rel?: string;
  target?: string;
  isActive?: boolean;
  isLoading?: boolean;
  color?: 'primary' | 'error' | 'success' | 'white';
}

export const Button: ForwardRefExoticComponent<ButtonProps> = forwardRef(
  (
    { size, children, isActive, isLoading, color = 'primary', ...props },
    ref,
  ) => (
    <LoadingButton
      {...props}
      ref={ref}
      size={size}
      data-color={color}
      loading={isLoading}
      aria-expanded={isActive}
      color={color === 'primary' ? color : 'inherit'}
      loadingIndicator={<CircularProgress size="1em" color="inherit" />}
    >
      {children}
    </LoadingButton>
  ),
);
