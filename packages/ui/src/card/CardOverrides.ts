import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideCard(theme: SuperDispatchTheme): void {
  theme.components.MuiCard = {
    defaultProps: { variant: 'outlined' },
  };

  theme.components.MuiCardContent = {
    styleOverrides: {
      root: { '&:last-child': { paddingBottom: '16px' } },
    },
  };
}
