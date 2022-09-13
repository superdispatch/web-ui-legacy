import { loadingButtonClasses } from '@mui/lab';
import { buttonClasses } from '@mui/material';
import { CSSInterpolation } from '@mui/system';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

function outlineShadow(size = 0, color: Color = Color.Transparent): string {
  return `0 0 0 ${size}px ${color}`;
}

function textVariant(
  text: Color,
  outline: Color,
  background: Color,
  progress: Color,
): CSSInterpolation {
  return {
    '&': {
      color: text,
      boxShadow: outlineShadow(),
      backgroundColor: Color.Transparent,
    },

    '&:hover': {
      backgroundColor: background,
    },

    '&[aria-expanded="true"]': {
      backgroundColor: background,
    },

    '&:focus': {
      backgroundColor: background,
      boxShadow: outlineShadow(2, outline),
    },

    [`&.${buttonClasses.disabled}`]: {
      color: outline,
      boxShadow: outlineShadow(),
      backgroundColor: Color.Transparent,

      [`& .${loadingButtonClasses.loadingIndicator}`]: {
        color: progress,
      },
    },
  };
}

function outlinedBorder(
  borderColor: Color,
  outlineColor: Color = Color.Transparent,
): string {
  return `inset 0 0 0 1px ${borderColor}, 0 0 0 2px ${outlineColor}`;
}

function outlinedVariant(
  staleText: Color,
  staleBorder: Color,
  disabledText: Color,
  disabledBorder: Color,
  activeText: Color,
  activeBorder: Color,
  activeOutline: Color,
  activeBackground: Color,
  progress: Color,
  backgroundColor: Color,
): CSSInterpolation {
  return {
    backgroundColor,
    color: staleText,
    border: 0,
    boxShadow: outlinedBorder(staleBorder),

    '&:hover': {
      color: activeText,
      border: 0,
      backgroundColor: activeBackground,
      boxShadow: outlinedBorder(activeBorder),
    },

    '&[aria-expanded="true"]': {
      color: activeText,
      backgroundColor: activeBackground,
      boxShadow: outlinedBorder(activeBorder),
    },

    '&:focus': {
      boxShadow: outlinedBorder(activeBorder, activeOutline),
    },

    [`&.${buttonClasses.disabled}`]: {
      backgroundColor,
      color: disabledText,
      boxShadow: outlinedBorder(disabledBorder),

      [`& .${loadingButtonClasses.loadingIndicator}`]: {
        color: progress,
      },
    },
  };
}

function containedVariant(
  text: Color,
  backgroundColor: Color,
  outline: Color,
  active: Color,
  disabledText: Color,
  disabledBackground: Color,
): CSSInterpolation {
  return {
    color: text,
    backgroundColor,
    boxShadow: outlineShadow(),

    '&:hover': {
      backgroundColor: active,
    },

    '&[aria-expanded="true"]': {
      backgroundColor: active,
    },

    '&:focus': {
      boxShadow: outlineShadow(3, outline),
    },

    [`&.${buttonClasses.disabled}`]: {
      color: disabledText,
      boxShadow: outlineShadow(),
      backgroundColor: disabledBackground,

      [`& .${loadingButtonClasses.loadingIndicator}`]: {
        color: disabledText,
      },
    },
  };
}

function sizeSmall(theme: SuperDispatchTheme): CSSInterpolation {
  const sm = theme.breakpoints.up('sm');
  return {
    ...theme.typography.button,

    padding: theme.spacing(0.5, 3),
    [sm]: { padding: theme.spacing(0.25, 2) },
  } as CSSInterpolation;
}

function sizeLarge(theme: SuperDispatchTheme): CSSInterpolation {
  const sm = theme.breakpoints.up('sm');
  return {
    ...theme.typography.button,

    fontSize: '18px',
    lineHeight: '28px',
    padding: theme.spacing(1.75, 8),

    [sm]: {
      fontSize: '16px',
      lineHeight: '24px',
      padding: theme.spacing(1, 4),
    },
  } as CSSInterpolation;
}

export function overrideButton(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.components.MuiLoadingButton = {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      loadingIndicator: {
        color: 'inherit',

        fontSize: theme.spacing(2),
        [`.${buttonClasses.sizeLarge} &`]: { fontSize: theme.spacing(3) },
      },
    },
  };
  theme.components.MuiButton = {
    defaultProps: {
      color: 'primary',
      variant: 'outlined',
      disableFocusRipple: true,
    },
    styleOverrides: {
      root: {
        minWidth: theme.spacing(6),

        transition: theme.transitions.create([
          'color',
          'border',
          'box-shadow',
          'background-color',
        ]),

        padding: theme.spacing(1.25, 3),

        [sm]: { padding: theme.spacing(0.75, 2) },

        '&:hover': {
          backgroundColor: 'initial',
          [`&.${buttonClasses.disabled}`]: { backgroundColor: 'initial' },
          '@media (hover: none)': { backgroundColor: 'initial' },
        },

        [`&.${buttonClasses.disabled}`]: { color: 'initial' },

        '& > .MuiSvgIcon-root': {
          fontSize: '24px',
          [sm]: { fontSize: '20px' },

          [`.${buttonClasses.sizeLarge}&`]: {
            fontSize: '28px',
            [sm]: { fontSize: '24px' },
          },
        },
      },

      sizeSmall: sizeSmall(theme),
      sizeLarge: sizeLarge(theme),

      text: {
        padding: 'initial',

        '&[data-color="error"]': textVariant(
          Color.Red300,
          Color.Red100,
          Color.Red50,
          Color.Red200,
        ),

        '&[data-color="success"]': textVariant(
          Color.Green300,
          Color.Green100,
          Color.Green50,
          Color.Green200,
        ),

        '&[data-color="white"]': textVariant(
          Color.White,
          Color.White50,
          Color.White10,
          Color.White50,
        ),
      },

      textPrimary: textVariant(
        Color.Blue300,
        Color.Blue100,
        Color.Blue50,
        Color.Blue200,
      ),

      textSizeSmall: sizeSmall(theme),
      textSizeLarge: sizeLarge(theme),

      outlined: {
        border: 'none',
        padding: 'initial',
        [`&.${buttonClasses.disabled}`]: { border: 'none' },

        '&[data-color="error"]': outlinedVariant(
          Color.Red300,
          Color.Red300,
          Color.Red100,
          Color.Red100,
          Color.Red300,
          Color.Red300,
          Color.Red100,
          Color.Red50,
          Color.Red300,
          Color.White,
        ),

        '&[data-color="success"]': outlinedVariant(
          Color.Green300,
          Color.Green300,
          Color.Green100,
          Color.Green100,
          Color.Green300,
          Color.Green300,
          Color.Green100,
          Color.Green50,
          Color.Green300,
          Color.White,
        ),

        '&[data-color="white"]': outlinedVariant(
          Color.White,
          Color.White50,
          Color.White50,
          Color.White40,
          Color.White,
          Color.White50,
          Color.White40,
          Color.White10,
          Color.White50,
          Color.Transparent,
        ),
      },

      outlinedPrimary: outlinedVariant(
        Color.Dark500,
        Color.Silver500,
        Color.Silver500,
        Color.Silver400,
        Color.Blue300,
        Color.Blue300,
        Color.Blue100,
        Color.Blue50,
        Color.Dark200,
        Color.White,
      ),

      outlinedSizeSmall: sizeSmall(theme),
      outlinedSizeLarge: sizeLarge(theme),

      contained: {
        boxShadow: 'none',
        backgroundColor: 'initial',

        '&:hover': {
          boxShadow: 'none',
          backgroundColor: 'initial',
          [`&.${buttonClasses.disabled}`]: { backgroundColor: 'none' },
          '@media (hover: none)': {
            boxShadow: 'none',
            backgroundColor: 'none',
          },
        },

        '&:active': {
          boxShadow: 'none',
        },

        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: 'none',
        },

        [`&.${buttonClasses.disabled}`]: {
          color: 'initial',
          boxShadow: 'none',
          backgroundColor: 'initial',
        },

        '&[data-color="error"]': containedVariant(
          Color.White,
          Color.Red300,
          Color.Red100,
          Color.Red500,
          Color.White,
          Color.Red100,
        ),

        '&[data-color="success"]': containedVariant(
          Color.White,
          Color.Green300,
          Color.Green100,
          Color.Green500,
          Color.White,
          Color.Green100,
        ),

        '&[data-color="white"]': containedVariant(
          Color.White,
          Color.White20,
          Color.White40,
          Color.White40,
          Color.White50,
          Color.White08,
        ),
      },

      containedPrimary: containedVariant(
        Color.White,
        Color.Blue300,
        Color.Blue100,
        Color.Blue500,
        Color.White,
        Color.Blue100,
      ),

      containedSizeSmall: sizeSmall(theme),
      containedSizeLarge: sizeLarge(theme),
    },
  };
}
