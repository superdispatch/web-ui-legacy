import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overridePreloader(theme: SuperDispatchTheme): void {
  theme.overrides.MuiSkeleton = {
    text: {
      borderRadius: '3px',
    },
  };
}
