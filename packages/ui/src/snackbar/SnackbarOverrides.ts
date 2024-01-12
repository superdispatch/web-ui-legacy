import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideSnackbar(theme: SuperDispatchTheme): void {
  theme.overrides.MuiSnackbar = {
    anchorOriginBottomCenter: {
      padding: theme.spacing(0),
      background: 'transparent',
    },
  };

  theme.overrides.MuiSnackbarContent = {
    root: {
      minHeight: theme.spacing(7.5),

      '&.SD-SnackbarContent-root': {
        width: '100%',
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,

        [theme.breakpoints.up('sm')]: {
          borderRadius: theme.spacing(0.5),
        },
      },
    },

    message: { flex: 1, display: 'flex' },
  };
}
