import { Color, ColorDark } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideTooltip(theme: SuperDispatchTheme): void {
  const mode = theme.palette.type;
  const color = mode === 'dark' ? ColorDark.Silver400 : Color.Dark500;
  theme.props.MuiTooltip = { arrow: true };

  theme.overrides.MuiTooltip = {
    tooltip: {
      ...theme.typography.body2,
      padding: theme.spacing(1, 1.5),
      backgroundColor: color,
      color: Color.White,
      '--sd-dark-300': Color.Silver500, //tooltip secondary color(Dark300) is invisible in light mode
      ' --sd-white': Color.White, //tooltip text color should always be white
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
      color,
      fontSize: theme.spacing(1),
    },
  };
}
