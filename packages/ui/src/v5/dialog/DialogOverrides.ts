import { dialogClasses } from '@mui/material';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideDialog(theme: SuperDispatchTheme): void {
  theme.components.MuiDialog = {
    styleOverrides: {
      paper: {
        margin: theme.spacing(3),
      },

      paperWidthXs: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 360),

        [`&.${dialogClasses.paperScrollBody}`]: {
          [theme.breakpoints.down(
            Math.max(theme.breakpoints.values.xs, 360) + 32 * 2,
          )]: {
            maxWidth: 'calc(100% - 64px)',
          },
        },
      },
    },
  };

  theme.components.MuiDialogTitle = {
    defaultProps: {
      // @ts-expect-error DialogTitleProps has missing type def
      variant: 'h3',
    },
  };

  theme.components.MuiDialogContent = {
    styleOverrides: {
      root: { padding: theme.spacing(0, 3) },
    },
  };

  theme.components.MuiDialogActions = {
    styleOverrides: {
      root: { padding: theme.spacing(3) },

      spacing: {
        '& > :not(:first-child)': { marginLeft: theme.spacing(2) },
      },
    },
  };
}
