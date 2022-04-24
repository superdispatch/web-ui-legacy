import { ButtonBase, ButtonBaseProps, Typography } from '@mui/material';
import { v5 } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

const { Color, Stack } = v5;

const ButtonRoot = styled(ButtonBase)`
  padding: 12px 32px;

  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${Color.Silver500};

  color: ${Color.Dark100};
  background-color: ${Color.White};

  & svg {
    color: inherit;
    font-size: 24px;
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &[data-disabled='true'] {
    color: ${Color.Silver500};
    border-color: ${Color.Silver400};
  }

  &[data-variant='success'] {
    &:hover {
      color: ${Color.Green300};
      box-shadow: 0 0 0 2px ${Color.Green100};
      border-color: ${Color.Green300};
    }

    &[data-active='true'] {
      color: ${Color.Green300};
      border-color: ${Color.Green300};
      background-color: ${Color.Green50};
    }
  }

  &[data-variant='danger'] {
    &:hover {
      color: ${Color.Red300};
      box-shadow: 0 0 0 2px ${Color.Red100};
      border-color: ${Color.Red300};
    }

    &[data-active='true'] {
      color: ${Color.Red300};
      border-color: ${Color.Red300};
      background-color: ${Color.Red50};
    }
  }
`;

type ButtonAreaVariant = 'danger' | 'success';

export interface ButtonAreaProps extends ButtonBaseProps {
  icon: ReactNode;
  active?: boolean;
  fullWidth?: boolean;
  variant?: ButtonAreaVariant;
}

export const ButtonArea = forwardRef<HTMLButtonElement, ButtonAreaProps>(
  ({ icon, children, variant, active, disabled, fullWidth, ...props }, ref) => (
    <ButtonRoot
      ref={ref}
      disabled={disabled}
      data-active={active}
      data-disabled={disabled}
      data-variant={variant}
      data-full-width={fullWidth}
      {...props}
    >
      <Stack align="center" space="xxsmall">
        {icon}
        <Typography variant="h4" color={disabled ? 'inherit' : 'textPrimary'}>
          {children}
        </Typography>
      </Stack>
    </ButtonRoot>
  ),
);
