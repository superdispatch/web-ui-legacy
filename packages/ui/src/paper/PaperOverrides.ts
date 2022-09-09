import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overridePaper(theme: SuperDispatchTheme): void {
  theme.components.MuiPaper = {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      elevation0: { border: `1px solid ${Color.Silver400}` },
    },
  };
}
