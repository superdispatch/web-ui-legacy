import { SuperDispatchTheme } from './SuperDispatchTheme';

export function overrideCssBaseline(theme: SuperDispatchTheme): void {
  theme.components.MuiCssBaseline = {
    styleOverrides: {
      body: {
        ...theme.typography.body2,
      },
    },
  };
}
