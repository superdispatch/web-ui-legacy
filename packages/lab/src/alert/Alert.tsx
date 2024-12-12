import { CheckCircle, Error, Info, Warning } from '@material-ui/icons';
import {
  Alert as MaterialAlert,
  AlertProps as MaterialAlertProps,
} from '@material-ui/lab';
import { ColorDynamic } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';

function colorMixin(
  textColor: ColorDynamic,
  iconColor: ColorDynamic,
  backgroundColor: ColorDynamic,
  buttonHoverColor: ColorDynamic,
): readonly SimpleInterpolation[] {
  return css`
    color: ${textColor};
    border-color: ${textColor};
    background-color: ${backgroundColor};

    & .MuiAlert-icon {
      color: ${iconColor};
    }

    & .MuiAlert-action {
      color: ${iconColor};

      & .MuiIconButton-root {
        &:hover,
        &:active {
          color: ${buttonHoverColor};
        }
      }
    }
  `;
}

const StyledAlert = styled(MaterialAlert)`
  &.MuiAlert-outlinedSuccess {
    ${colorMixin(
      ColorDynamic.Green500,
      ColorDynamic.Green300,
      ColorDynamic.Green50,
      ColorDynamic.Green400,
    )};
  }

  &.MuiAlert-outlinedInfo {
    ${colorMixin(
      ColorDynamic.Blue500,
      ColorDynamic.Blue300,
      ColorDynamic.Blue50,
      ColorDynamic.Blue400,
    )};
  }

  &.MuiAlert-outlinedWarning {
    ${colorMixin(
      ColorDynamic.Yellow500,
      ColorDynamic.Yellow300,
      ColorDynamic.Yellow50,
      ColorDynamic.Yellow400,
    )};
  }

  &.MuiAlert-outlinedError {
    ${colorMixin(
      ColorDynamic.Red500,
      ColorDynamic.Red300,
      ColorDynamic.Red50,
      ColorDynamic.Red400,
    )};
  }

  & .MuiAlert-icon {
    opacity: 1;
    padding: 8px 0;
    font-size: 24px;
  }

  & .MuiAlert-action {
    display: block;
    padding-top: 5px;
    margin-right: -3px;

    & .MuiIconButton-root {
      & .MuiSvgIcon-root {
        font-size: 24px;
      }
    }
  }
`;

export type AlertSeverityProp = 'positive' | 'info' | 'caution' | 'critical';

export interface AlertProps {
  onClose?: () => void;
  children?: ReactNode;
  icon?: ReactNode;
  severity?: AlertSeverityProp;
}

function toMaterialSeverity(
  severity: AlertSeverityProp,
): MaterialAlertProps['severity'] {
  return severity === 'info'
    ? 'info'
    : severity === 'caution'
    ? 'warning'
    : severity === 'critical'
    ? 'error'
    : 'success';
}

const iconMapping: MaterialAlertProps['iconMapping'] = {
  success: <CheckCircle />,
  info: <Info />,
  error: <Error />,
  warning: <Warning />,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, onClose, severity = 'positive', icon }, ref) => (
    <StyledAlert
      ref={ref}
      variant="outlined"
      icon={icon}
      iconMapping={iconMapping}
      severity={toMaterialSeverity(severity)}
      onClose={onClose}
    >
      {children}
    </StyledAlert>
  ),
);
