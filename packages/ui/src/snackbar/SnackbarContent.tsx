import {
  Grid,
  IconButton,
  SnackbarContent as MuiSnackbarContent,
  SnackbarContentClassKey as MuiSnackbarContentClassKey,
  SnackbarContentProps as MuiSnackbarContentProps,
  Theme,
} from '@material-ui/core';
import { CheckCircle, Close, Error, Warning } from '@material-ui/icons';
import { ClassNameMap, makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';
import { Color } from '../theme/Color';

type SnackbarContentClassKey =
  | MuiSnackbarContentClassKey
  | 'icon'
  | 'closeButton'
  | 'variantError'
  | 'variantSuccess'
  | 'variantErrorOutline';

const useStyles = makeStyles<
  Theme,
  { classes?: Partial<ClassNameMap<SnackbarContentClassKey>> },
  SnackbarContentClassKey
>(
  (theme) => ({
    root: {
      color: Color.White,
      backgroundColor: Color.Dark500,
      '&$variantError': {
        color: Color.White,
        backgroundColor: Color.Red500,
      },
    },

    action: {
      paddingLeft: theme.spacing(1),
    },

    message: {
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(2),
      },
    },

    icon: {
      marginRight: theme.spacing(1),
      fontSize: theme.spacing(3),
    },

    closeButton: {
      color: Color.White40,
      '&:hover, &:focus': {
        backgroundColor: Color.White08,
        color: Color.White40,
      },
    },

    variantError: {},
    variantSuccess: {},
    variantErrorOutline: {
      color: Color.Red500,
      borderRadius: '4px',
      border: '1px solid var(--R-500, #C31909)',
      background: 'var(--R-50, #FFEDEB)',
      boxShadow:
        '0px 4px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 14px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.14)',
    },
  }),
  { name: 'SD-SnackbarContent' },
);
export type SnackbarVariant = 'default' | 'error' | 'success' | 'error-outline';

export interface SnackbarContentProps
  extends RefAttributes<unknown>,
    Omit<MuiSnackbarContentProps, 'classes' | 'message' | 'variant'> {
  children?: ReactNode;
  onClose?: () => void;
  variant?: SnackbarVariant;
  classes?: Partial<ClassNameMap<SnackbarContentClassKey>>;
}

export const SnackbarContent: ForwardRefExoticComponent<SnackbarContentProps> =
  forwardRef(
    (
      {
        action,
        children,
        onClose,
        className,
        classes,
        variant = 'default',
        ...props
      },
      ref,
    ) => {
      const {
        icon,
        closeButton,
        variantError,
        variantSuccess,
        variantErrorOutline,
        ...styles
      } = useStyles({ classes });
      const Icon =
        variant === 'error'
          ? Warning
          : variant === 'success'
          ? CheckCircle
          : variant === 'error-outline'
          ? Error
          : undefined;

      return (
        <MuiSnackbarContent
          {...props}
          ref={ref}
          classes={styles}
          className={clsx(className, {
            [variantError]: variant === 'error',
            [variantSuccess]: variant === 'success',
            [variantErrorOutline]: variant === 'error-outline',
          })}
          message={
            <>
              {Icon && <Icon className={icon} />}
              {children}
            </>
          }
          action={
            !action && !onClose ? null : (
              <Grid
                container={true}
                spacing={1}
                alignItems="center"
                wrap="nowrap"
              >
                {!!action && <Grid item={true}>{action}</Grid>}

                {onClose && (
                  <Grid item={true}>
                    <IconButton
                      aria-label="close"
                      onClick={onClose}
                      className={closeButton}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            )
          }
        />
      );
    },
  );
