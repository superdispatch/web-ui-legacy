import { ButtonBase, ButtonBaseProps, Typography } from '@material-ui/core';
import { ColorV2, Stack } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonRoot = styled(ButtonBase)`
  padding: 12px 32px;

  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${ColorV2.Silver500};

  color: ${ColorV2.Dark100};
  background-color: ${ColorV2.White};

  & svg {
    color: inherit;
    font-size: 24px;
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &[data-disabled='true'] {
    color: ${ColorV2.Silver500};
    border-color: ${ColorV2.Silver400};
  }

  &[data-variant='success'] {
    &:hover {
      color: ${ColorV2.Green300};
      box-shadow: 0 0 0 2px ${ColorV2.Green100};
      border-color: ${ColorV2.Green300};
    }

    &[data-active='true'] {
      color: ${ColorV2.Green300};
      border-color: ${ColorV2.Green300};
      background-color: ${ColorV2.Green50};
    }
  }

  &[data-variant='danger'] {
    &:hover {
      color: ${ColorV2.Red300};
      box-shadow: 0 0 0 2px ${ColorV2.Red100};
      border-color: ${ColorV2.Red300};
    }

    &[data-active='true'] {
      color: ${ColorV2.Red300};
      border-color: ${ColorV2.Red300};
      background-color: ${ColorV2.Red50};
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
