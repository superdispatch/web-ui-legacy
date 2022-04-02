import { paginationItemClasses } from '@mui/material';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overridePagination(theme: SuperDispatchTheme): void {
  theme.components.MuiPaginationItem = {
    styleOverrides: {
      root: {
        color: Color.Dark400,
      },
      page: {
        '&:hover': {
          backgroundColor: Color.Silver200,
        },
        [`&.${paginationItemClasses.focusVisible}`]: {
          borderRadius: 4,
          backgroundColor: Color.White,
          border: `1px solid ${Color.Blue100}`,
        },
        [`&.${paginationItemClasses.selected}`]: {
          backgroundColor: Color.Silver400,
          [`&:hover, &.${paginationItemClasses.focusVisible}`]: {
            backgroundColor: Color.Silver400,
          },
          [`&.${paginationItemClasses.disabled}`]: {
            color: Color.Dark100,
            backgroundColor: Color.Silver400,
          },
        },

        [`&.${paginationItemClasses.disabled}`]: {
          opacity: 1,
          color: Color.Dark100,
        },
      },
    },
  };
}
