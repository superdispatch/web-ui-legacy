import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

function line(color: string): string {
  return `linear-gradient(to right, ${color} 0%, ${color} 100%)`;
}

export function overrideLink(theme: SuperDispatchTheme): void {
  theme.props.MuiLink = { underline: 'always', color: 'textPrimary' };

  theme.overrides.MuiLink = {
    root: {
      backgroundSize: '100% 1px',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '0 100%',
      backgroundColor: ColorDynamic.Transparent,

      '&:focus': { outline: 'none' },

      '&:disabled': {
        color: ColorDynamic.Dark100,
        backgroundImage: line(ColorDynamic.Silver500),

        '&:focus, &:hover, &:active': {
          color: ColorDynamic.Dark100,
          backgroundImage: line(ColorDynamic.Silver500),
        },
      },

      '&.MuiLink-underlineAlways': {
        textDecoration: 'none',
        backgroundImage: line(ColorDynamic.Silver500),
        '&:hover, &:active': { backgroundImage: line('currentColor') },
      },

      '&.MuiLink-underlineHover': {
        backgroundImage: 'none',
        '&:hover, &:active': {
          textDecoration: 'none',
          backgroundImage: line('currentColor'),
        },
      },

      '&.MuiLink-underlineNone': {
        backgroundImage: 'none',
        '&:focus, &:hover, &:active': {
          backgroundImage: 'none',
        },
      },

      '&.MuiTypography-colorPrimary': {
        backgroundImage: 'none',
        '&:hover, &:active': {
          textDecoration: 'none',
          backgroundImage: line('currentColor'),
        },
      },

      '&.MuiTypography-colorTextPrimary, &.MuiTypography-colorTextSecondary': {
        '&:focus, &:hover, &:active': {
          color: ColorDynamic.Blue500,
          backgroundImage: line(ColorDynamic.Blue500),
        },
      },
    },

    button: {
      // Reset button styles.
      backgroundColor: undefined,

      // Override browser defaults.
      fontSize: 'inherit',
      textAlign: 'inherit',
      lineHeight: 'inherit',
      userSelect: 'inherit',
      verticalAlign: 'inherit',
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  };
}
