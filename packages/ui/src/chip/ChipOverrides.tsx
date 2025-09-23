import { SvgIcon } from '@material-ui/core';
import { Color, ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideChip(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.props.MuiChip = {
    size: 'small',
    deleteIcon: (
      <div>
        <SvgIcon>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.239 12L17 8.239 15.761 7 12 10.761 8.239 7 7 8.239 10.761 12 7 15.761 8.239 17 12 13.239 15.761 17 17 15.761 13.239 12z"
            fill="currentColor"
          />
        </SvgIcon>
      </div>
    ),
  };
  theme.overrides.MuiChip = {
    root: {
      ...theme.typography.body2,
      color: undefined,
      height: undefined,
      borderRadius: 4,
      backgroundColor: ColorDynamic.Silver200,
      '&$disabled': {
        opacity: undefined,
        color: ColorDynamic.Dark100,
      },
    },

    sizeSmall: {
      height: undefined,
    },

    labelSmall: {
      paddingLeft: 6,
      paddingRight: 6,
      [sm]: { paddingLeft: 4, paddingRight: 4 },
    },

    clickable: {
      '&:hover, &:focus': {
        backgroundColor: undefined,
      },
      '&:active': {
        boxShadow: undefined,
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${ColorDynamic.Dark30}`,
      },
      '&:active, &:hover': {
        backgroundColor: ColorDynamic.Silver400,
      },
    },

    deletable: {
      '&:focus': {
        backgroundColor: undefined,
        boxShadow: `0 0 0 2px ${ColorDynamic.Silver400}`,
      },
    },

    colorPrimary: {
      '& $deleteIcon svg': {
        color: Color.White,
      },
    },

    colorSecondary: {
      '& $deleteIcon svg': {
        color: Color.White,
      },
    },

    deleteIcon: {
      width: undefined,
      height: undefined,
      display: 'flex',
      transition: theme.transitions.create('background-color'),

      '&:active, &:hover, &:focus': {
        '& > svg': {
          backgroundColor: ColorDynamic.Silver400,
        },
      },

      '& > svg': {
        borderRadius: '50%',
        color: ColorDynamic.Dark100,
        fontSize: '1em',
      },
    },

    deleteIconSmall: {
      width: undefined,
      height: undefined,

      padding: theme.spacing(0.5),
      marginLeft: theme.spacing(-0.5),
      marginRight: theme.spacing(0.25),
      [sm]: { marginRight: 0 },
    },

    icon: {
      color: ColorDynamic.Dark100,
      fontSize: '1em',
      marginRight: undefined,
    },

    iconSmall: {
      width: undefined,
      height: undefined,
      marginLeft: 8,
      marginRight: undefined,
      [sm]: { marginLeft: 4 },
    },
  };
}
