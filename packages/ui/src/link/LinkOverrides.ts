import { ColorV2 } from '../theme/Color';
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
      backgroundColor: ColorV2.Transparent,

      '&:focus': { outline: 'none' },

      '&:disabled': {
        color: ColorV2.Dark100,
        backgroundImage: line(ColorV2.Silver500),

        '&:focus, &:hover, &:active': {
          color: ColorV2.Dark100,
          backgroundImage: line(ColorV2.Silver500),
        },
      },

      '&.MuiLink-underlineAlways': {
        textDecoration: 'none',
        backgroundImage: line(ColorV2.Silver500),
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
          color: ColorV2.Blue500,
          backgroundImage: line(ColorV2.Blue500),
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
