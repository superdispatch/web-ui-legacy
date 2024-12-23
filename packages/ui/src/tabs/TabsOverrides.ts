import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideTabs(theme: SuperDispatchTheme): void {
  theme.props.MuiTabs = {
    variant: 'scrollable',
    textColor: 'primary',
    indicatorColor: 'primary',
  };

  theme.overrides.MuiTabs = {
    root: { minHeight: theme.spacing(6) },
    scrollButtons: {
      opacity: 1,
      color: ColorDynamic.Dark100,
      width: theme.spacing(4),
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.short,
      }),
    },
    indicator: {
      backgroundColor: ColorDynamic.Blue500,
    },
  };

  theme.overrides.MuiTab = {
    root: {
      ...theme.typography.body2,

      minHeight: theme.spacing(6),

      transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.short,
      }),

      [theme.breakpoints.up('sm')]: {
        minWidth: undefined,
        fontSize: undefined,
        padding: theme.spacing(0.75, 3),
      },
    },

    textColorPrimary: {
      color: ColorDynamic.Dark500,
      '&:hover, &:focus': { color: ColorDynamic.Blue500 },
      '&$selected': {
        color: ColorDynamic.Blue500,
      },
    },
  };
}
