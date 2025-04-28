import { Theme, Typography, TypographyProps } from '@material-ui/core';
import { ClassNameMap, makeStyles } from '@material-ui/styles';
import { clsx } from 'clsx';
import {
  ElementType,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { Color, ColorDynamic } from '../theme/Color';

export type TagClassKey =
  | 'root'
  | 'colorGrey'
  | 'colorDark'
  | 'colorBlue'
  | 'colorGreen'
  | 'colorPurple'
  | 'colorRed'
  | 'colorTeal'
  | 'colorYellow'
  | 'variantSubtle'
  | 'variantBold';

const useStyles = makeStyles<
  Theme,
  { classes?: Partial<ClassNameMap<TagClassKey>> },
  TagClassKey
>(
  (theme) => ({
    root: {
      maxWidth: '100%',
      alignItems: 'center',
      display: 'inline-flex',
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(0, 0.5),
    },

    variantSubtle: {
      '&$colorGrey': {
        color: ColorDynamic.Dark300,
        backgroundColor: ColorDynamic.Silver200,
      },
      '&$colorDark': {
        color: ColorDynamic.Dark500,
        backgroundColor: ColorDynamic.Silver400,
      },
      '&$colorBlue': {
        color: ColorDynamic.Blue500,
        backgroundColor: ColorDynamic.Blue50,
      },
      '&$colorGreen': {
        color: ColorDynamic.Green500,
        backgroundColor: ColorDynamic.Green50,
      },
      '&$colorPurple': {
        color: ColorDynamic.Purple500,
        backgroundColor: ColorDynamic.Purple50,
      },
      '&$colorRed': {
        color: ColorDynamic.Red500,
        backgroundColor: ColorDynamic.Red50,
      },
      '&$colorTeal': {
        color: ColorDynamic.Teal500,
        backgroundColor: ColorDynamic.Teal50,
      },
      '&$colorYellow': {
        color: ColorDynamic.Yellow500,
        backgroundColor: ColorDynamic.Yellow50,
      },
    },

    variantBold: {
      color: Color.White,

      '&$colorGrey': {
        backgroundColor: ColorDynamic.Dark300,
        color: ColorDynamic.White,
      },
      '&$colorDark': {
        backgroundColor: ColorDynamic.Dark500,
        color: ColorDynamic.White,
      },
      '&$colorBlue': { backgroundColor: ColorDynamic.Blue300 },
      '&$colorGreen': { backgroundColor: ColorDynamic.Green300 },
      '&$colorPurple': { backgroundColor: ColorDynamic.Purple300 },
      '&$colorRed': { backgroundColor: ColorDynamic.Red300 },
      '&$colorTeal': { backgroundColor: ColorDynamic.Teal300 },
      '&$colorYellow': { backgroundColor: ColorDynamic.Yellow300 },
    },

    colorGrey: {},
    colorDark: {},
    colorBlue: {},
    colorGreen: {},
    colorPurple: {},
    colorRed: {},
    colorTeal: {},
    colorYellow: {},
  }),
  { name: 'SD-Tag' },
);

export interface TagProps
  extends RefAttributes<unknown>,
    Omit<TypographyProps, 'ref' | 'classes' | 'color' | 'variant'> {
  classes?: Partial<ClassNameMap<TagClassKey>>;
  component?: ElementType;

  color:
    | 'grey'
    | 'dark'
    | 'blue'
    | 'green'
    | 'purple'
    | 'red'
    | 'teal'
    | 'yellow';
  variant: 'subtle' | 'bold';
  fontWeight?: 'regular' | 'bold';
}

export const Tag: ForwardRefExoticComponent<TagProps> = forwardRef(
  (
    {
      color,
      variant,
      children,
      classes,
      className,
      noWrap = true,
      fontWeight = 'bold',
      component = 'div' as const,
      ...props
    },
    ref,
  ) => {
    const styles = useStyles({ classes });

    return (
      <Typography
        {...props}
        ref={ref}
        noWrap={noWrap}
        component={component}
        variant={fontWeight === 'bold' ? 'body1' : 'body2'}
        className={clsx(
          styles.root,
          color === 'grey' && styles.colorGrey,
          color === 'dark' && styles.colorDark,
          color === 'blue' && styles.colorBlue,
          color === 'green' && styles.colorGreen,
          color === 'purple' && styles.colorPurple,
          color === 'red' && styles.colorRed,
          color === 'teal' && styles.colorTeal,
          color === 'yellow' && styles.colorYellow,
          variant === 'subtle' && styles.variantSubtle,
          variant === 'bold' && styles.variantBold,
          className,
        )}
      >
        {children}
      </Typography>
    );
  },
);
