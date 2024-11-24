import { CheckCircle, Error, Info, Warning } from '@material-ui/icons';
import {
  Alert as MaterialAlert,
  AlertProps as MaterialAlertProps,
} from '@material-ui/lab';
import { ColorV2 } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';

function colorMixin(
  textColor: ColorV2,
  iconColor: ColorV2,
  backgroundColor: ColorV2,
  buttonHoverColor: ColorV2,
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
      ColorV2.Green500,
      ColorV2.Green300,
      ColorV2.Green50,
      ColorV2.Green400,
    )};
  }

  &.MuiAlert-outlinedInfo {
    ${colorMixin(
      ColorV2.Blue500,
      ColorV2.Blue300,
      ColorV2.Blue50,
      ColorV2.Blue400,
    )};
  }

  &.MuiAlert-outlinedWarning {
    ${colorMixin(
      ColorV2.Yellow500,
      ColorV2.Yellow300,
      ColorV2.Yellow50,
      ColorV2.Yellow400,
    )};
  }

  &.MuiAlert-outlinedError {
    ${colorMixin(
      ColorV2.Red500,
      ColorV2.Red300,
      ColorV2.Red50,
      ColorV2.Red400,
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
