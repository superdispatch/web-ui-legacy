import {
  ButtonBase,
  ButtonBaseProps,
  Theme,
  Typography,
} from '@material-ui/core';
import { ClassNameMap, makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';
import { ColorV2 } from '../theme/Color';

export type CardButtonClassKey =
  | 'root'
  | 'label'
  | 'hint'
  | 'error'
  | 'primary'
  | 'disabled'
  | 'sizeSmall'
  | 'sizeLarge'
  | 'icon'
  | 'startIcon'
  | 'endIcon';

const useStyles = makeStyles<
  Theme,
  { classes?: Partial<ClassNameMap<CardButtonClassKey>> },
  CardButtonClassKey
>(
  (theme) => ({
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: ColorV2.White,

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
    },

    disabled: {
      color: ColorV2.Dark200,
      borderColor: ColorV2.Silver500,
      backgroundColor: ColorV2.Silver100,
    },

    error: {
      color: ColorV2.Red500,
      borderColor: ColorV2.Red500,
      backgroundColor: ColorV2.Red50,
      '&:focus': { backgroundColor: ColorV2.Red75 },
    },

    primary: {
      color: ColorV2.Blue500,
      borderColor: ColorV2.Silver500,
      '&:focus': { backgroundColor: ColorV2.Blue50 },
      '&:hover, &:active': {
        borderColor: ColorV2.Blue300,
        backgroundColor: ColorV2.Blue50,
      },
    },

    sizeSmall: {
      minHeight: theme.spacing(6),
    },

    sizeLarge: {
      minHeight: theme.spacing(17.5),
    },

    label: {
      display: 'flex',
      alignItems: 'center',
    },

    icon: {
      display: 'flex',
      '& svg': {
        fontSize: theme.spacing(3),
        [theme.breakpoints.up('sm')]: { fontSize: theme.spacing(2.5) },
      },
    },

    startIcon: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(-0.5),
    },

    endIcon: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(-0.5),
    },

    hint: {
      marginTop: theme.spacing(0.5),
    },
  }),
  { name: 'SD-CardButton' },
);

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
  classes?: Partial<ClassNameMap<CardButtonClassKey>>;
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
      const styles = useStyles({ classes });

      return (
        <ButtonBase
          {...props}
          ref={ref}
          disabled={disabled}
          className={clsx(
            styles.root,
            {
              [styles.disabled]: disabled,
              [styles.error]: !disabled && error,
              [styles.primary]: !disabled && !error,
              [styles.sizeSmall]: size === 'small',
              [styles.sizeLarge]: size === 'large',
            },
            className,
          )}
        >
          {error ? (
            <Typography variant="h4" color="inherit" className={styles.label}>
              {!!startIcon && (
                <span className={clsx(styles.icon, styles.startIcon)}>
                  {startIcon}
                </span>
              )}
              {error}
            </Typography>
          ) : (
            <>
              <Typography variant="h4" color="inherit" className={styles.label}>
                {!!startIcon && (
                  <span className={clsx(styles.icon, styles.startIcon)}>
                    {startIcon}
                  </span>
                )}

                {children}

                {!!endIcon && (
                  <span className={clsx(styles.icon, styles.endIcon)}>
                    {endIcon}
                  </span>
                )}
              </Typography>

              {!!hint && (
                <Typography
                  color="textSecondary"
                  variant="caption"
                  className={styles.hint}
                >
                  {hint}
                </Typography>
              )}
            </>
          )}
        </ButtonBase>
      );
    },
  );
