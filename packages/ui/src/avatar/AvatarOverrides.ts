import { CSSObject } from '@mui/styled-engine';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideAvatar(theme: SuperDispatchTheme): void {
  theme.components.MuiAvatar = {
    styleOverrides: {
      root: {
        ...theme.typography.h5,
        textTransform: 'uppercase',

        width: theme.spacing(5),
        height: theme.spacing(5),

        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
      } as CSSObject,

      colorDefault: {
        color: Color.Dark300,
        backgroundColor: Color.Silver300,
      },
    },
  };
}
