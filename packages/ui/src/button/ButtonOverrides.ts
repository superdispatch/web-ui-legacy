import { CSSProperties } from '@material-ui/styles';
import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

function outlineShadow(
  size = 0,
  color: ColorDynamic = ColorDynamic.Transparent,
): string {
  return `0 0 0 ${size}px ${color}`;
}

function textVariant(
  text: ColorDynamic,
  outline: ColorDynamic,
  background: ColorDynamic,
  progress: ColorDynamic,
): CSSProperties {
  return {
    color: text,
    boxShadow: outlineShadow(),
    backgroundColor: ColorDynamic.Transparent,

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

    '&$disabled': {
      color: outline,
      boxShadow: outlineShadow(),
      backgroundColor: ColorDynamic.Transparent,
    },

    '&$disabled[aria-busy="true"]': {
      color: progress,
    },
  };
}

function outlinedBorder(
  borderColor: ColorDynamic,
  outlineColor: ColorDynamic = ColorDynamic.Transparent,
): string {
  return `inset 0 0 0 1px ${borderColor}, 0 0 0 2px ${outlineColor}`;
}

function outlinedVariant(
  staleText: ColorDynamic,
  staleBorder: ColorDynamic,
  disabledText: ColorDynamic,
  disabledBorder: ColorDynamic,
  activeText: ColorDynamic,
  activeBorder: ColorDynamic,
  activeOutline: ColorDynamic,
  activeBackground: ColorDynamic,
  progress: ColorDynamic,
  backgroundColor: ColorDynamic,
): CSSProperties {
  return {
    backgroundColor,
    color: staleText,
    border: undefined,
    boxShadow: outlinedBorder(staleBorder),

    '&:hover': {
      color: activeText,
      border: undefined,
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

    '&$disabled': {
      backgroundColor,
      color: disabledText,
      boxShadow: outlinedBorder(disabledBorder),
    },

    '&$disabled[aria-busy="true"]': {
      color: progress,
    },
  };
}

function containedVariant(
  text: ColorDynamic,
  backgroundColor: ColorDynamic,
  outline: ColorDynamic,
  active: ColorDynamic,
  disabledText: ColorDynamic,
  disabledBackground: ColorDynamic,
): CSSProperties {
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

    '&$disabled': {
      color: disabledText,
      boxShadow: outlineShadow(),
      backgroundColor: disabledBackground,
    },
  };
}

export function overrideButton(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.props.MuiButton = {
    color: 'primary',
    variant: 'outlined',
    disableFocusRipple: true,
  };

  theme.overrides.MuiButton = {
    root: {
      color: undefined,
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
        backgroundColor: undefined,
        '&$disabled': { backgroundColor: undefined },
        '@media (hover: none)': { backgroundColor: undefined },
      },

      '&$disabled': { color: undefined },

      '&[aria-busy="true"]': {
        '& $label': {
          visibility: 'hidden',

          '& > [role="progressbar"]': {
            position: 'absolute',
            visibility: 'visible',
            top: 'calc(50% - 0.5em)',
            left: 'calc(50% - 0.5em)',

            fontSize: theme.spacing(2),
            '$sizeLarge &': { fontSize: theme.spacing(3) },
          },
        },
      },
    },

    label: {
      '& > .MuiSvgIcon-root': {
        fontSize: '24px',
        [sm]: { fontSize: '20px' },

        '$sizeLarge &': {
          fontSize: '28px',
          [sm]: { fontSize: '24px' },
        },
      },
    },

    sizeSmall: {
      padding: theme.spacing(0.5, 3),
      [sm]: { padding: theme.spacing(0.25, 2) },
    },

    sizeLarge: {
      fontSize: '18px',
      lineHeight: '28px',
      padding: theme.spacing(1.75, 8),

      [sm]: {
        fontSize: '16px',
        lineHeight: '24px',
        padding: theme.spacing(1, 4),
      },
    },

    text: {
      padding: undefined,

      '&[data-color="error"]': textVariant(
        ColorDynamic.Red300,
        ColorDynamic.Red100,
        ColorDynamic.Red50,
        ColorDynamic.Red200,
      ),

      '&[data-color="success"]': textVariant(
        ColorDynamic.Green300,
        ColorDynamic.Green100,
        ColorDynamic.Green50,
        ColorDynamic.Green200,
      ),

      '&[data-color="white"]': textVariant(
        ColorDynamic.White,
        ColorDynamic.White50,
        ColorDynamic.White10,
        ColorDynamic.White50,
      ),
    },

    textPrimary: textVariant(
      ColorDynamic.Blue300,
      ColorDynamic.Blue100,
      ColorDynamic.Blue50,
      ColorDynamic.Blue200,
    ),

    textSizeSmall: { padding: undefined, fontSize: undefined },
    textSizeLarge: { padding: undefined, fontSize: undefined },

    outlined: {
      border: undefined,
      padding: undefined,
      '&$disabled': { border: undefined },

      '&[data-color="error"]': outlinedVariant(
        ColorDynamic.Red300,
        ColorDynamic.Red300,
        ColorDynamic.Red100,
        ColorDynamic.Red100,
        ColorDynamic.Red300,
        ColorDynamic.Red300,
        ColorDynamic.Red100,
        ColorDynamic.Red50,
        ColorDynamic.Red300,
        ColorDynamic.White,
      ),

      '&[data-color="success"]': outlinedVariant(
        ColorDynamic.Green300,
        ColorDynamic.Green300,
        ColorDynamic.Green100,
        ColorDynamic.Green100,
        ColorDynamic.Green300,
        ColorDynamic.Green300,
        ColorDynamic.Green100,
        ColorDynamic.Green50,
        ColorDynamic.Green300,
        ColorDynamic.White,
      ),

      '&[data-color="white"]': outlinedVariant(
        ColorDynamic.White,
        ColorDynamic.White50,
        ColorDynamic.White50,
        ColorDynamic.White40,
        ColorDynamic.White,
        ColorDynamic.White50,
        ColorDynamic.White40,
        ColorDynamic.White10,
        ColorDynamic.White50,
        ColorDynamic.Transparent,
      ),
    },

    outlinedPrimary: outlinedVariant(
      ColorDynamic.Dark500,
      ColorDynamic.Silver500,
      ColorDynamic.Silver500,
      ColorDynamic.Silver400,
      ColorDynamic.Blue300,
      ColorDynamic.Blue300,
      ColorDynamic.Blue100,
      ColorDynamic.Blue50,
      ColorDynamic.Dark200,
      ColorDynamic.White,
    ),

    outlinedSizeSmall: { padding: undefined, fontSize: undefined },
    outlinedSizeLarge: { padding: undefined, fontSize: undefined },

    contained: {
      boxShadow: undefined,
      backgroundColor: undefined,

      '&:hover': {
        boxShadow: undefined,
        backgroundColor: undefined,
        '&$disabled': { backgroundColor: undefined },
        '@media (hover: none)': {
          boxShadow: undefined,
          backgroundColor: undefined,
        },
      },

      '&:active': {
        boxShadow: undefined,
      },

      '&$focusVisible': {
        boxShadow: undefined,
      },

      '&$disabled': {
        color: undefined,
        boxShadow: undefined,
        backgroundColor: undefined,
      },

      '&[data-color="error"]': containedVariant(
        ColorDynamic.White,
        ColorDynamic.Red300,
        ColorDynamic.Red100,
        ColorDynamic.Red500,
        ColorDynamic.White,
        ColorDynamic.Red100,
      ),

      '&[data-color="success"]': containedVariant(
        ColorDynamic.White,
        ColorDynamic.Green300,
        ColorDynamic.Green100,
        ColorDynamic.Green500,
        ColorDynamic.White,
        ColorDynamic.Green100,
      ),

      '&[data-color="white"]': containedVariant(
        ColorDynamic.White,
        ColorDynamic.White20,
        ColorDynamic.White40,
        ColorDynamic.White40,
        ColorDynamic.White50,
        ColorDynamic.White08,
      ),
    },

    containedPrimary: containedVariant(
      ColorDynamic.White,
      ColorDynamic.Blue300,
      ColorDynamic.Blue100,
      ColorDynamic.Blue500,
      ColorDynamic.White,
      ColorDynamic.Blue100,
    ),

    containedSizeSmall: { padding: undefined, fontSize: undefined },
    containedSizeLarge: { padding: undefined, fontSize: undefined },
  };
}
