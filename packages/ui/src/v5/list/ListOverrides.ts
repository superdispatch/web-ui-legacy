import { listItemClasses } from '@mui/material';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideList(theme: SuperDispatchTheme): void {
  theme.components.MuiListItem = {
    styleOverrides: {
      root: {
        [`&.${listItemClasses.selected}, &.${listItemClasses.selected}:hover`]:
          {
            backgroundColor: Color.Blue50,
          },
        '& .MuiTouchRipple-root': { color: Color.Blue100 },
      },
    },
  };
}
