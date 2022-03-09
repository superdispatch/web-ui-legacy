import { radioClasses, SvgIcon } from '@mui/material';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideRadio(theme: SuperDispatchTheme): void {
  theme.components.MuiRadio = {
    defaultProps: {
      color: 'primary',
      icon: (
        <SvgIcon>
          <circle
            cx="12"
            cy="12"
            r="8.5"
            fill={Color.White}
            stroke="currentColor"
          />
        </SvgIcon>
      ),
      checkedIcon: (
        <SvgIcon>
          <circle
            cx="12"
            cy="12"
            r="8.5"
            fill="currentColor"
            stroke="currentColor"
          />

          <circle cx="12" cy="12" r="4" fill={Color.White} />
        </SvgIcon>
      ),
    },
    styleOverrides: {
      root: {
        color: Color.Dark100,
        marginTop: theme.spacing(-0.625),
        marginBottom: theme.spacing(-0.625),
      },

      colorPrimary: {
        [`&.${radioClasses.disabled}.${radioClasses.checked}`]: {
          color: Color.Silver500,
        },

        [`&:hover:not(.${radioClasses.checked})`]: {
          color: Color.Dark100,
        },
      },
    },
  };
}
