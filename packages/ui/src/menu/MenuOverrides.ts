import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideMenu(theme: SuperDispatchTheme): void {
  theme.props.MuiMenu = {
    getContentAnchorEl: null,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    transformOrigin: { vertical: 'top', horizontal: 'left' },
  };

  theme.overrides.MuiMenu = {
    paper: {
      border: `1px solid ${ColorDynamic.Silver400}`,
    },
  };

  theme.overrides.MuiMenuItem = {
    root: {
      ...theme.typography.body2,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  };
}
