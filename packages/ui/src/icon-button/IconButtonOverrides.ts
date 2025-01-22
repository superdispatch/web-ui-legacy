import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideIconButton(theme: SuperDispatchTheme): void {
  theme.overrides.MuiIconButton = {
    root: {
      color: ColorDynamic.Dark100,

      backgroundColor: ColorDynamic.Transparent,

      transition: theme.transitions.create(['color', 'background-color'], {
        duration: theme.transitions.duration.short,
      }),

      '&:hover': { backgroundColor: ColorDynamic.Transparent },
      '&:active': { color: ColorDynamic.Dark500 },
      '&:hover ': { color: ColorDynamic.Dark300 },
      '&:focus': { backgroundColor: ColorDynamic.Silver400 },

      '&$disabled': { color: ColorDynamic.Silver500 },
    },
    colorPrimary: {
      '&:active': { color: ColorDynamic.Blue500 },
      '&:hover ': { color: ColorDynamic.Blue300 },
      '&:focus': { backgroundColor: ColorDynamic.Blue50 },
      color: ColorDynamic.Blue500,
    },

    edgeEnd: { marginRight: theme.spacing(-1) },

    edgeStart: { marginLeft: theme.spacing(-1) },
  };
}
