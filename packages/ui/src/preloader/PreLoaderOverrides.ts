import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overridePreloader(theme: SuperDispatchTheme): void {
  theme.overrides.MuiSkeleton = {
    text: {
      transform: 'scale(1, 1)',
      borderRadius: '3px',
    },
  };
}
