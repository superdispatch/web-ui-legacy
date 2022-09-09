import {
  formLabelClasses,
  inputBaseClasses,
  outlinedInputClasses,
  SvgIcon,
  SvgIconProps,
} from '@mui/material';
import { forwardRef } from 'react';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

const SelectIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon ref={ref} {...props}>
    <path d="M12 16.5L6 9h12l-6 7.5z" fill="currentColor" />
  </SvgIcon>
));

export function overrideTextField(theme: SuperDispatchTheme): void {
  const sm = theme.breakpoints.up('sm');

  theme.components.MuiTextField = {
    defaultProps: { minRows: 4, maxRows: 4, variant: 'outlined' },
  };

  theme.components.MuiFormLabel = {
    styleOverrides: {
      root: {
        ...theme.typography.body2,

        color: Color.Dark400,

        [`&.${formLabelClasses.error}`]: { color: Color.Dark400 },
        [`&.${formLabelClasses.focused}`]: { color: Color.Dark400 },
        [`&.${formLabelClasses.disabled}`]: { color: Color.Dark400 },
      },
    },
  };

  theme.components.MuiInputBase = {
    styleOverrides: {
      root: {
        ...theme.typography.body2,
        [`&.${inputBaseClasses.disabled}`]: {
          backgroundColor: Color.Silver100,
        },
      },
      input: {
        textOverflow: 'ellipsis',
        height: theme.spacing(3),
        [sm]: { height: theme.spacing(2.5) },
      },
      inputMultiline: {
        resize: 'vertical',
      },
    },
  };

  theme.components.MuiInputLabel = {
    defaultProps: { shrink: true },

    styleOverrides: {
      root: { marginBottom: theme.spacing(0.5), transformOrigin: 'unset' },
      formControl: {
        top: 'unset',
        left: 'unset',
        position: 'unset',
        transform: 'unset',
      },
      shrink: { transform: 'unset', transformOrigin: 'unset' },
      outlined: {
        zIndex: 'unset',
        transform: 'unset',
        pointerEvents: 'unset',
      },
    },
  };

  theme.components.MuiOutlinedInput = {
    defaultProps: {
      notched: false,
    },

    styleOverrides: {
      root: {
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: Color.Silver500,
        },
      },

      input: {
        padding: theme.spacing(1.25, 1.5),
        [sm]: { padding: theme.spacing(0.75, 1) },

        '&.MuiInputBase-inputAdornedStart': {
          paddingLeft: 0,
        },
        '&.MuiInputBase-inputAdornedEnd': {
          paddingRight: 0,
        },
      },

      inputMultiline: {
        padding: 0,
        [sm]: { padding: 0 },
      },

      multiline: { padding: theme.spacing(0.75, 1) },
      adornedStart: { paddingLeft: theme.spacing(1) },
      adornedEnd: { paddingRight: theme.spacing(1) },

      notchedOutline: {
        top: 0,
        borderColor: Color.Silver500,
        '& legend': { display: 'none' },
      },
    },
  };

  theme.components.MuiSelect = {
    defaultProps: { IconComponent: SelectIcon },

    styleOverrides: {
      icon: {
        top: 'calc(50% - 0.5em)',
        '$disabled &': { color: Color.Dark100 },

        fontSize: theme.spacing(3),
        [sm]: { fontSize: theme.spacing(2) },
      },

      iconOutlined: {
        right: theme.spacing(1.5),
        [sm]: { right: theme.spacing(1) },
      },

      select: {
        paddingRight: theme.spacing(4.5),
        [sm]: { right: theme.spacing(4) },

        '&:focus': {
          backgroundColor: 'unset',
        },
      },
    },
  };

  theme.components.MuiInputAdornment = {
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root:not(.MuiSvgIcon-fontSizeSmall)': {
          fontSize: theme.spacing(3),
          [sm]: { fontSize: theme.spacing(2.5) },
        },

        '& .MuiIconButton-root': { padding: theme.spacing(1) },
      },

      positionStart: {
        '& .MuiIconButton-root': {
          marginLeft: theme.spacing(-0.5),
          [sm]: { marginLeft: theme.spacing(-0.75) },
        },
      },

      positionEnd: {
        '& .MuiIconButton-root': {
          marginRight: theme.spacing(-0.5),
          [sm]: { marginRight: theme.spacing(-0.75) },
        },
      },
    },
  };

  theme.components.MuiFormHelperText = {
    styleOverrides: {
      root: {
        ...theme.typography.body2,
        marginTop: theme.spacing(0.5),
      },

      contained: { marginLeft: 'unset', marginRight: 'unset' },
    },
  };
}
