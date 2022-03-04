import { autocompleteClasses, SvgIcon } from '@mui/material';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideAutocomplete(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.components.MuiAutocomplete = {
    defaultProps: {
      popupIcon: (
        <SvgIcon>
          <path d="M12 16.5L6 9h12l-6 7.5z" fill="currentColor" />
        </SvgIcon>
      ),
    },

    styleOverrides: {
      paper: { ...theme.typography.body2 },
      tag: {
        margin: '4px',
        [sm]: { margin: '2px' },
      },
      endAdornment: {
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
      },
      popupIndicator: {
        '& .MuiSvgIcon-root': {
          fontSize: '24px',
          [sm]: { fontSize: '16px' },
        },
      },
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          padding: '6px 8px',

          [`& .${autocompleteClasses.input}`]: {
            width: '144px',
            padding: '4px',
          },

          [`& .${autocompleteClasses.input}:first-child`]: {
            paddingLeft: 'unset',
          },
          [`& .${autocompleteClasses.endAdornment}`]: { right: '12px' },

          [sm]: {
            padding: theme.spacing(0.5, 0.75),
            [`& .${autocompleteClasses.input}`]: { padding: '2px' },
            [`& .${autocompleteClasses.endAdornment}`]: { right: '8px' },
          },
        },
      },
    },
  };
}
