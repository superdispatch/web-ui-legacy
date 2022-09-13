import { chipClasses, SvgIcon } from '@mui/material';
import { CSSObject } from '@mui/styled-engine';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

export function overrideChip(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.components.MuiChip = {
    defaultProps: {
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
    },

    styleOverrides: {
      root: {
        ...theme.typography.body2,
        color: 'unset',
        height: 'unset',
        borderRadius: 4,
        backgroundColor: Color.Silver200,
        [`&.${chipClasses.disabled}`]: {
          opacity: 1,
          color: Color.Dark100,
        },
      } as CSSObject,

      sizeSmall: {
        height: 'unset',
      },

      labelSmall: {
        paddingLeft: 6,
        paddingRight: 6,
        [sm]: { paddingLeft: 4, paddingRight: 4 },
      },

      clickable: {
        '&:hover, &:focus': {
          backgroundColor: Color.Silver200,
        },
        '&:active': {
          boxShadow: 'unset',
        },
        '&:focus': {
          boxShadow: `0 0 0 2px ${Color.Silver300}`,
        },
        '&:active, &:hover': {
          backgroundColor: Color.Silver300,
        },
      },

      deletable: {
        '&:focus': {
          backgroundColor: Color.Silver200,
          boxShadow: `0 0 0 2px ${Color.Silver300}`,
        },
      },

      deleteIcon: {
        width: 'unset',
        height: 'unset',
        display: 'flex',
        fontSize: 14,
        transition: theme.transitions.create('background-color'),

        '&:active, &:hover, &:focus': {
          '& > svg': {
            backgroundColor: Color.Silver400,
          },
        },

        '& > svg': {
          borderRadius: '50%',
          color: Color.Dark200,
          fontSize: '1em',
        },
      },

      deleteIconSmall: {
        width: 'unset',
        height: 'unset',

        padding: theme.spacing(0.5),
        marginLeft: theme.spacing(-0.5),
        marginRight: theme.spacing(0.25),
        [sm]: { marginRight: 0 },
      },

      icon: {
        color: Color.Dark100,
        fontSize: '1em',
        marginRight: 'unset',
      },

      iconSmall: {
        width: 'unset',
        height: 'unset',
        marginLeft: 8,
        marginRight: 'unset',
        [sm]: { marginLeft: 4 },
      },
    },
  };
}
