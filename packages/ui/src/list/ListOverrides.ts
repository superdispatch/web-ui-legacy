import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideList(theme: SuperDispatchTheme): void {
  theme.overrides.MuiListItem = {
    root: {
      '&$selected, &$selected:hover': { backgroundColor: ColorDynamic.Blue50 },
      '& .MuiTouchRipple-root': { color: ColorDynamic.Blue100 },
    },
  };
}
