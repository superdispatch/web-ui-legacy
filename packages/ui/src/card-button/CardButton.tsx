import { ButtonBase, ButtonBaseProps, styled, Typography } from '@mui/material';
import {
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

const StyledButton = styled(ButtonBase)(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    return {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: Color.White,

      border: '1px dashed',
      borderRadius: theme.spacing(0.5),

      padding: theme.spacing(1.5),
      minHeight: theme.spacing(13),

      transition: theme.transitions.create([
        'color',
        'box-shadow',
        'border-color',
        'background-color',
      ]),

      '&[data-disabled="true"]': {
        color: Color.Dark200,
        borderColor: Color.Silver500,
        backgroundColor: Color.Silver100,
      },

      '&[data-primary="true"]': {
        color: Color.Blue300,
        borderColor: Color.Silver500,
        '&:focus': { backgroundColor: Color.Blue50 },
        '&:hover, &:active': {
          borderColor: Color.Blue300,
          backgroundColor: Color.Blue50,
        },
      },

      '&[data-error="true"]': {
        color: Color.Red300,
        borderColor: Color.Red300,
        backgroundColor: Color.Red50,
        '&:focus': { backgroundColor: Color.Red75 },
      },

      '&[data-size="small"]': {
        minHeight: theme.spacing(6),
      },

      '&[data-size="large"]': {
        minHeight: theme.spacing(17.5),
      },
    };
  },
);

const Label = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
});

const Hint = styled(Typography)(({ theme }: { theme: SuperDispatchTheme }) => ({
  marginTop: theme.spacing(0.5),
}));

const Icon = styled('span')(({ theme }) => ({
  display: 'flex',
  '& svg': {
    fontSize: theme.spacing(3),
    [theme.breakpoints.up('sm')]: { fontSize: theme.spacing(2.5) },
  },

  '&[data-placement="start"]': {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-0.5),
  },

  '&[data-placement="end"]': {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(-0.5),
  },
}));

export interface CardButtonProps
  extends RefAttributes<HTMLButtonElement>,
    ButtonBaseProps {
  error?: ReactNode;
  children?: ReactNode;
  hint?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  size?: 'small' | 'medium' | 'large';

  className?: string;
}

export const CardButton: ForwardRefExoticComponent<CardButtonProps> =
  forwardRef(
    (
      {
        hint,
        size,
        error,
        classes,
        className,
        children,
        endIcon,
        startIcon,
        disabled,
        ...props
      },
      ref,
    ) => {
      return (
        <StyledButton
          {...props}
          ref={ref}
          disabled={disabled}
          data-size={size}
          data-disabled={!!disabled}
          data-error={!disabled && !!error}
          data-primary={!disabled && !error}
        >
          {error ? (
            <Label variant="h4" color="inherit">
              {error}
            </Label>
          ) : (
            <>
              <Label variant="h4" color="inherit">
                {!!startIcon && <Icon data-placement="start">{startIcon}</Icon>}

                {children}

                {!!endIcon && <Icon data-placement="end">{endIcon}</Icon>}
              </Label>

              {!!hint && <Hint color="textSecondary">{hint}</Hint>}
            </>
          )}
        </StyledButton>
      );
    },
  );
