import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideAvatar(theme: SuperDispatchTheme): void {
  theme.overrides.MuiAvatar = {
    root: {
      ...theme.typography.h5,
      textTransform: 'uppercase',

      width: theme.spacing(5),
      height: theme.spacing(5),

      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
    },

    colorDefault: {
      color: ColorDynamic.Dark300,
      backgroundColor: ColorDynamic.Silver400,
    },
  };
}
