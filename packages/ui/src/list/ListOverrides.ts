import { ColorV2 } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideList(theme: SuperDispatchTheme): void {
  theme.overrides.MuiListItem = {
    root: {
      '&$selected, &$selected:hover': { backgroundColor: ColorV2.Blue50 },
      '& .MuiTouchRipple-root': { color: ColorV2.Blue100 },
    },
  };
}
