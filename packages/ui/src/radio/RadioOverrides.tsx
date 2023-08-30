import { SvgIcon } from '@material-ui/core';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideRadio(theme: SuperDispatchTheme): void {
  theme.props.MuiRadio = {
    color: 'primary',
    icon: (
      <SvgIcon>
        <circle
          cx="12"
          cy="12"
          r="9"
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
          r="9"
          fill="currentColor"
          stroke="currentColor"
        />

        <circle cx="12" cy="12" r="4" fill={Color.White} />
      </SvgIcon>
    ),
  };

  theme.overrides.MuiRadio = {
    root: {
      color: Color.Dark100,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      padding: 0,
      width: theme.spacing(3),
      height: theme.spacing(3),
    },

    colorPrimary: {
      '&$checked$disabled': {
        color: Color.Silver500,
      },

      '&:hover:not($checked)': {
        color: Color.Dark100,
      },
    },
  };
}
