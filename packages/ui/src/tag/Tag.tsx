import { Theme, Typography, TypographyProps } from '@material-ui/core';
import { ClassNameMap, makeStyles } from '@material-ui/styles';
import cx from 'clsx';
import {
  ElementType,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { ColorV2 } from '../theme/Color';

export type TagClassKey =
  | 'root'
  | 'colorGrey'
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
        color: ColorV2.Dark300,
        backgroundColor: ColorV2.Silver200,
      },
      '&$colorBlue': {
        color: ColorV2.Blue500,
        backgroundColor: ColorV2.Blue50,
      },
      '&$colorGreen': {
        color: ColorV2.Green500,
        backgroundColor: ColorV2.Green50,
      },
      '&$colorPurple': {
        color: ColorV2.Purple500,
        backgroundColor: ColorV2.Purple50,
      },
      '&$colorRed': { color: ColorV2.Red500, backgroundColor: ColorV2.Red50 },
      '&$colorTeal': {
        color: ColorV2.Teal500,
        backgroundColor: ColorV2.Teal50,
      },
      '&$colorYellow': {
        color: ColorV2.Yellow500,
        backgroundColor: ColorV2.Yellow50,
      },
    },

    variantBold: {
      color: ColorV2.White,

      '&$colorGrey': { backgroundColor: ColorV2.Dark300 },
      '&$colorBlue': { backgroundColor: ColorV2.Blue300 },
      '&$colorGreen': { backgroundColor: ColorV2.Green300 },
      '&$colorPurple': { backgroundColor: ColorV2.Purple300 },
      '&$colorRed': { backgroundColor: ColorV2.Red300 },
      '&$colorTeal': { backgroundColor: ColorV2.Teal300 },
      '&$colorYellow': { backgroundColor: ColorV2.Yellow300 },
    },

    colorGrey: {},
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

  color: 'grey' | 'blue' | 'green' | 'purple' | 'red' | 'teal' | 'yellow';
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
        className={cx(
          styles.root,
          color === 'grey' && styles.colorGrey,
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
