import { ColorV2 } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideIconButton(theme: SuperDispatchTheme): void {
  theme.overrides.MuiIconButton = {
    root: {
      color: ColorV2.Dark100,

      backgroundColor: ColorV2.Transparent,

      transition: theme.transitions.create(['color', 'background-color'], {
        duration: theme.transitions.duration.short,
      }),

      '&:hover': { backgroundColor: ColorV2.Transparent },
      '&:active': { color: ColorV2.Dark500 },
      '&:hover ': { color: ColorV2.Dark300 },
      '&:focus': { backgroundColor: ColorV2.Silver400 },

      '&$disabled': { color: ColorV2.Silver500 },
    },
    colorPrimary: {
      '&:active': { color: ColorV2.Blue500 },
      '&:hover ': { color: ColorV2.Blue300 },
      '&:focus': { backgroundColor: ColorV2.Blue50 },
    },

    edgeEnd: { marginRight: theme.spacing(-1) },

    edgeStart: { marginLeft: theme.spacing(-1) },
  };
}
