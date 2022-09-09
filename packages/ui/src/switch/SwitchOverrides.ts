import { switchClasses } from '@mui/material';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideSwitch(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.components.MuiSwitch = {
    defaultProps: {
      color: 'primary',
      disableRipple: true,
      disableFocusRipple: true,
    },

    styleOverrides: {
      root: {
        width: theme.spacing(9.5),
        height: theme.spacing(5.5),
        padding: theme.spacing(0.75, 1.5),
        [sm]: {
          width: theme.spacing(8),
          height: theme.spacing(4),
          padding: theme.spacing(0.5, 1.5),
        },
      },

      track: {
        opacity: 1,
        boxShadow: `0 0 0 0 ${Color.Transparent}`,

        transition: theme.transitions.create(
          ['box-shadow', 'background-color'],
          {
            duration: theme.transitions.duration.shortest,
          },
        ),

        borderRadius: theme.spacing(2),
        [sm]: { borderRadius: theme.spacing(1.625) },
      },

      thumb: {
        color: Color.White,
        boxShadow: 'none',
        width: theme.spacing(3),
        height: theme.spacing(3),
        [sm]: { width: theme.spacing(2), height: theme.spacing(2) },
      },

      switchBase: {
        left: theme.spacing(1),
        padding: theme.spacing(1.25, 1),
        [sm]: { padding: theme.spacing(1) },

        [`&.${switchClasses.checked}`]: {
          transform: `translateX(${theme.spacing(2.5)})`,
          [sm]: { transform: `translateX(${theme.spacing(2)})` },
        },

        [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
          opacity: 1,
        },

        [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
          opacity: 1,
        },
      },

      colorPrimary: {
        [`&.${switchClasses.checked}`]: {
          '&:hover': {
            [`& + .${switchClasses.track}`]: { backgroundColor: Color.Blue400 },
          },
        },

        [`& + .${switchClasses.track}`]: { backgroundColor: Color.Silver500 },

        [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
          backgroundColor: Color.Silver300,
        },

        [`&.${switchClasses.checked}.${switchClasses.disabled} + .${switchClasses.track}`]:
          { backgroundColor: Color.Blue100 },

        [`&:hover + .${switchClasses.track}`]: {
          backgroundColor: Color.Dark100,
        },

        [`&.Mui-focusVisible + .${switchClasses.track}`]: {
          boxShadow: `0 0 0 3px ${Color.Blue100}`,
        },
      },
    },
  };
}
