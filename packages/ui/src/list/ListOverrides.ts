import { alpha } from '@material-ui/core';
import { Color, ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideList(theme: SuperDispatchTheme): void {
  const color =
    theme.palette.type === 'dark'
      ? alpha(Color.White, 0.08)
      : ColorDynamic.Silver200;

  theme.overrides.MuiListItem = {
    root: {
      '&$selected, &$selected:hover': {
        backgroundColor: ColorDynamic.Blue50,
      },

      '& .MuiTouchRipple-root': {
        color: ColorDynamic.Blue100,
      },
    },
    button: {
      '&:hover': {
        backgroundColor: color,
      },
    },
  };
}
