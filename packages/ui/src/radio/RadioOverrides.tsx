import { SvgIcon } from '@material-ui/core';
import { ColorV2 } from '../theme/Color';
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
          fill={ColorV2.White}
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

        <circle cx="12" cy="12" r="4" fill={ColorV2.White} />
      </SvgIcon>
    ),
  };

  theme.overrides.MuiRadio = {
    root: {
      color: ColorV2.Dark100,
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      padding: 0,
    },

    colorPrimary: {
      '&$checked$disabled': {
        color: ColorV2.Silver500,
      },

      '&:hover:not($checked)': {
        color: ColorV2.Dark100,
      },
    },
  };
}
