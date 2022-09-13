import { menuItemClasses } from '@mui/material';
import { CSSObject } from '@mui/styled-engine';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideMenu(theme: SuperDispatchTheme): void {
  theme.components.MuiMenu = {
    defaultProps: {
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      transformOrigin: { vertical: 'top', horizontal: 'left' },
    },
  };

  theme.components.MuiMenuItem = {
    styleOverrides: {
      root: {
        ...theme.typography.body2,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),

        '& .MuiTouchRipple-root': { color: Color.Blue100 },

        [`&.${menuItemClasses.selected}, &.${menuItemClasses.selected}:hover`]:
          {
            backgroundColor: Color.Blue50,

            [`&.${menuItemClasses.focusVisible}`]: {
              backgroundColor: Color.Blue50,
            },
          },
      } as CSSObject,
    },
  };
}
