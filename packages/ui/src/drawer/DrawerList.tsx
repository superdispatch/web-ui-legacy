import { List, styled } from '@mui/material';
import { CSSObject } from '@mui/styled-engine';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

function listItemMixins(theme: SuperDispatchTheme, space: number): CSSObject {
  return {
    '& .MuiListItem-gutters': {
      paddingLeft: theme.spacing(space),
      paddingRight: theme.spacing(space),

      '&.MuiListItem-secondaryAction': {
        paddingRight: theme.spacing(space * 2),
      },

      '& .MuiListItemSecondaryAction-root': {
        right: theme.spacing(space),

        '& .MuiIconButton-edgeEnd': {
          marginRight: theme.spacing(-(space / 2)),
        },
      },
    },
  };
}

export const DrawerList = styled(List)(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    return {
      maxWidth: '100%',
      ...listItemMixins(theme, 3),

      [theme.breakpoints.up('md')]: {
        ...listItemMixins(theme, 4),
      },
    };
  },
);
