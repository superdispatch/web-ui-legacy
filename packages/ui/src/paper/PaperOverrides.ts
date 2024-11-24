import { ColorV2 } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overridePaper(theme: SuperDispatchTheme): void {
  theme.props.MuiPaper = { elevation: 0 };

  theme.overrides.MuiPaper = {
    elevation0: { border: `1px solid ${ColorV2.Silver400}` },
  };
}
