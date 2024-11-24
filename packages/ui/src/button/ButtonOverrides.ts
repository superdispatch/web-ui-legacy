import { CSSProperties } from '@material-ui/styles';
import { ColorV2 } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

function outlineShadow(size = 0, color: ColorV2 = ColorV2.Transparent): string {
  return `0 0 0 ${size}px ${color}`;
}

function textVariant(
  text: ColorV2,
  outline: ColorV2,
  background: ColorV2,
  progress: ColorV2,
): CSSProperties {
  return {
    color: text,
    boxShadow: outlineShadow(),
    backgroundColor: ColorV2.Transparent,

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
      backgroundColor: ColorV2.Transparent,
    },

    '&$disabled[aria-busy="true"]': {
      color: progress,
    },
  };
}

function outlinedBorder(
  borderColor: ColorV2,
  outlineColor: ColorV2 = ColorV2.Transparent,
): string {
  return `inset 0 0 0 1px ${borderColor}, 0 0 0 2px ${outlineColor}`;
}

function outlinedVariant(
  staleText: ColorV2,
  staleBorder: ColorV2,
  disabledText: ColorV2,
  disabledBorder: ColorV2,
  activeText: ColorV2,
  activeBorder: ColorV2,
  activeOutline: ColorV2,
  activeBackground: ColorV2,
  progress: ColorV2,
  backgroundColor: ColorV2,
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
  text: ColorV2,
  backgroundColor: ColorV2,
  outline: ColorV2,
  active: ColorV2,
  disabledText: ColorV2,
  disabledBackground: ColorV2,
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
        ColorV2.Red300,
        ColorV2.Red100,
        ColorV2.Red50,
        ColorV2.Red200,
      ),

      '&[data-color="success"]': textVariant(
        ColorV2.Green300,
        ColorV2.Green100,
        ColorV2.Green50,
        ColorV2.Green200,
      ),

      '&[data-color="white"]': textVariant(
        ColorV2.White,
        ColorV2.White50,
        ColorV2.White10,
        ColorV2.White50,
      ),
    },

    textPrimary: textVariant(
      ColorV2.Blue300,
      ColorV2.Blue100,
      ColorV2.Blue50,
      ColorV2.Blue200,
    ),

    textSizeSmall: { padding: undefined, fontSize: undefined },
    textSizeLarge: { padding: undefined, fontSize: undefined },

    outlined: {
      border: undefined,
      padding: undefined,
      '&$disabled': { border: undefined },

      '&[data-color="error"]': outlinedVariant(
        ColorV2.Red300,
        ColorV2.Red300,
        ColorV2.Red100,
        ColorV2.Red100,
        ColorV2.Red300,
        ColorV2.Red300,
        ColorV2.Red100,
        ColorV2.Red50,
        ColorV2.Red300,
        ColorV2.White,
      ),

      '&[data-color="success"]': outlinedVariant(
        ColorV2.Green300,
        ColorV2.Green300,
        ColorV2.Green100,
        ColorV2.Green100,
        ColorV2.Green300,
        ColorV2.Green300,
        ColorV2.Green100,
        ColorV2.Green50,
        ColorV2.Green300,
        ColorV2.White,
      ),

      '&[data-color="white"]': outlinedVariant(
        ColorV2.White,
        ColorV2.White50,
        ColorV2.White50,
        ColorV2.White40,
        ColorV2.White,
        ColorV2.White50,
        ColorV2.White40,
        ColorV2.White10,
        ColorV2.White50,
        ColorV2.Transparent,
      ),
    },

    outlinedPrimary: outlinedVariant(
      ColorV2.Dark500,
      ColorV2.Silver500,
      ColorV2.Silver500,
      ColorV2.Silver400,
      ColorV2.Blue300,
      ColorV2.Blue300,
      ColorV2.Blue100,
      ColorV2.Blue50,
      ColorV2.Dark200,
      ColorV2.White,
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
        ColorV2.White,
        ColorV2.Red300,
        ColorV2.Red100,
        ColorV2.Red500,
        ColorV2.White,
        ColorV2.Red100,
      ),

      '&[data-color="success"]': containedVariant(
        ColorV2.White,
        ColorV2.Green300,
        ColorV2.Green100,
        ColorV2.Green500,
        ColorV2.White,
        ColorV2.Green100,
      ),

      '&[data-color="white"]': containedVariant(
        ColorV2.White,
        ColorV2.White20,
        ColorV2.White40,
        ColorV2.White40,
        ColorV2.White50,
        ColorV2.White08,
      ),
    },

    containedPrimary: containedVariant(
      ColorV2.White,
      ColorV2.Blue300,
      ColorV2.Blue100,
      ColorV2.Blue500,
      ColorV2.White,
      ColorV2.Blue100,
    ),

    containedSizeSmall: { padding: undefined, fontSize: undefined },
    containedSizeLarge: { padding: undefined, fontSize: undefined },
  };
}
