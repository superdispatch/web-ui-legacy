import { ColorV2 } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideTooltip(theme: SuperDispatchTheme): void {
  theme.props.MuiTooltip = { arrow: true };

  theme.overrides.MuiTooltip = {
    tooltip: {
      ...theme.typography.body2,
      padding: theme.spacing(1, 1.5),
      backgroundColor: ColorV2.Dark500,
    },

    popperArrow: {
      '&[x-placement*="top"] $arrow': {
        '&::before': { borderBottomRightRadius: 2 },
      },
      '&[x-placement*="left"] $arrow': {
        '&::before': { borderTopRightRadius: 2 },
      },
      '&[x-placement*="right"] $arrow': {
        '&::before': { borderBottomLeftRadius: 2 },
      },
      '&[x-placement*="bottom"] $arrow': {
        '&::before': { borderTopLeftRadius: 2 },
      },
    },

    arrow: {
      color: ColorV2.Dark500,
      fontSize: theme.spacing(1),
    },
  };
}
