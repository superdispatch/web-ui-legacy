import { tooltipClasses } from '@mui/material';
import { CSSObject } from '@mui/styled-engine';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideTooltip(theme: SuperDispatchTheme): void {
  theme.components.MuiTooltip = {
    defaultProps: {
      arrow: true,
    },

    styleOverrides: {
      tooltip: {
        ...theme.typography.body2,
        padding: theme.spacing(1, 1.5),
        backgroundColor: Color.Dark400,
      } as CSSObject,

      popperArrow: {
        [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
          '&::before': { borderBottomRightRadius: 2 },
        },
        [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
          '&::before': { borderTopRightRadius: 2 },
        },
        [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
          '&::before': { borderBottomLeftRadius: 2 },
        },
        [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
          '&::before': { borderTopLeftRadius: 2 },
        },
      },

      arrow: {
        color: Color.Dark400,
        fontSize: theme.spacing(1),
      },
    },
  };
}
