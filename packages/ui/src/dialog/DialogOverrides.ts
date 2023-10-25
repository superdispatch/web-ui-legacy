import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideDialog(theme: SuperDispatchTheme): void {
  theme.props.MuiDialogTitle = { disableTypography: true };

  theme.overrides.MuiDialog = {
    paper: {
      margin: theme.spacing(3),
    },

    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360),

      '&$paperScrollBody': {
        [theme.breakpoints.down(
          Math.max(theme.breakpoints.values.xs, 360) + 32 * 2,
        )]: {
          maxWidth: 'calc(100% - 64px)',
        },
      },
    },
  };

  theme.overrides.MuiDialogTitle = {
    root: { ...theme.typography.h3 },
  };

  theme.overrides.MuiDialogContent = {
    root: { padding: theme.spacing(0, 3) },
  };

  theme.overrides.MuiDialogActions = {
    root: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },

    spacing: {
      '& > :not(:first-child)': { marginLeft: theme.spacing(2) },
    },
  };
}
