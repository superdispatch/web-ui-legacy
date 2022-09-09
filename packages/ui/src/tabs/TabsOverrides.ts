import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideTabs(theme: SuperDispatchTheme): void {
  theme.components.MuiTabs = {
    defaultProps: {
      variant: 'scrollable',
      textColor: 'primary',
      indicatorColor: 'primary',
    },

    styleOverrides: {
      root: { minHeight: theme.spacing(6) },
      scrollButtons: {
        opacity: 1,
        color: Color.Dark100,
        width: theme.spacing(4),
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.short,
        }),
      },
    },
  };

  theme.components.MuiTab = {
    styleOverrides: {
      root: {
        ...theme.typography.body2,

        minHeight: theme.spacing(6),

        transition: theme.transitions.create(['color'], {
          duration: theme.transitions.duration.short,
        }),

        [theme.breakpoints.up('sm')]: {
          minWidth: 'unset',
          fontSize: 'unset',
          padding: theme.spacing(0.75, 3),
        },
      },

      textColorPrimary: {
        color: Color.Dark500,
        '&:hover, &:focus': { color: Color.Blue300 },
      },
    },
  };
}
