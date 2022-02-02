import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideAppBar(theme: SuperDispatchTheme): void {
  theme.components.MuiAppBar = {
    defaultProps: {
      elevation: 0,
      color: 'inherit',
      position: 'static',
    },
  };
}
