import { ButtonBase, ButtonBaseProps, Typography } from '@material-ui/core';
import { ColorDynamic, Stack } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonRoot = styled(ButtonBase)`
  padding: 12px 32px;

  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${ColorDynamic.Silver500};

  color: ${ColorDynamic.Dark100};
  background-color: ${ColorDynamic.White};

  & svg {
    color: inherit;
    font-size: 24px;
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &[data-disabled='true'] {
    color: ${ColorDynamic.Silver500};
    border-color: ${ColorDynamic.Silver400};
  }

  &[data-variant='success'] {
    &:hover {
      color: ${ColorDynamic.Green300};
      box-shadow: 0 0 0 2px ${ColorDynamic.Green100};
      border-color: ${ColorDynamic.Green300};
    }

    &[data-active='true'] {
      color: ${ColorDynamic.Green300};
      border-color: ${ColorDynamic.Green300};
      background-color: ${ColorDynamic.Green50};
    }
  }

  &[data-variant='danger'] {
    &:hover {
      color: ${ColorDynamic.Red300};
      box-shadow: 0 0 0 2px ${ColorDynamic.Red100};
      border-color: ${ColorDynamic.Red300};
    }

    &[data-active='true'] {
      color: ${ColorDynamic.Red300};
      border-color: ${ColorDynamic.Red300};
      background-color: ${ColorDynamic.Red50};
    }
  }
`;

type ButtonAreaVariant = 'danger' | 'success';

export interface ButtonAreaProps extends ButtonBaseProps {
  icon: ReactNode;
  active?: boolean;
  fullWidth?: boolean;
  variant?: ButtonAreaVariant;
  children?: ReactNode;
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
