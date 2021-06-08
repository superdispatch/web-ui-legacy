import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideLinearProgress(theme: SuperDispatchTheme): void {
  theme.overrides.MuiLinearProgress = {
    colorPrimary: {
      backgroundColor: Color.Silver100,
    },
  };
}
