import { CircularProgress } from '@material-ui/core';
import { ColorV2 } from '@superdispatch/ui';
import {
  AriaAttributes,
  FocusEventHandler,
  forwardRef,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import styled, { css } from 'styled-components';

export type ButtonSizeProp = 'small' | 'medium' | 'large';
export type ButtonVariantProp =
  | 'critical'
  | 'default'
  | 'inverted'
  | 'neutral'
  | 'primary'
  | 'text'
  | 'success';

interface ButtonStyleProps {
  disabled: boolean;
  fullWidth: boolean;
  size: ButtonSizeProp;
  variant: ButtonVariantProp;
}

interface ButtonVariables {
  fontSize: number;
  fontSizeMobile: number;
  lineHeight: number;
  lineHeightMobile: number;

  paddingX: number;
  paddingXMobile: number;
  paddingY: number;
  paddingYMobile: number;

  textColor: ColorV2;
  textColorHovered: ColorV2;
  textColorDisabled: ColorV2;

  iconColor: ColorV2;

  outlineColor: ColorV2;

  borderColor: ColorV2;
  borderColorHovered: ColorV2;
  borderColorDisabled: ColorV2;

  backgroundColor: ColorV2;
  backgroundColorActive: ColorV2;
  backgroundColorHovered: ColorV2;
  backgroundColorDisabled: ColorV2;
}

function createButtonVariables(
  size: ButtonSizeProp,
  {
    fontSize = size === 'large' ? 16 : 14,
    lineHeight = size === 'large' ? 24 : 20,
    fontSizeMobile = size === 'large' ? 18 : 16,
    lineHeightMobile = size === 'large' ? 28 : 24,

    paddingX = size === 'large' ? 32 : 16,
    paddingY = size === 'large' ? 8 : size === 'small' ? 2 : 6,
    paddingXMobile = size === 'large' ? 64 : 24,
    paddingYMobile = size === 'large' ? 14 : size === 'small' ? 4 : 10,

    textColor = ColorV2.Transparent,
    textColorHovered = textColor,
    textColorDisabled = textColor,

    iconColor = textColor,

    outlineColor = ColorV2.Transparent,

    borderColor = ColorV2.Transparent,
    borderColorHovered = borderColor,
    borderColorDisabled = borderColor,

    backgroundColor = ColorV2.Transparent,
    backgroundColorHovered = backgroundColor,
    backgroundColorActive = backgroundColorHovered,
    backgroundColorDisabled = backgroundColor,
  }: Partial<ButtonVariables>,
): ButtonVariables {
  return {
    paddingX,
    paddingY,
    fontSize,
    lineHeight,

    paddingXMobile,
    paddingYMobile,
    fontSizeMobile,
    lineHeightMobile,

    textColor,
    borderColor,
    outlineColor,
    backgroundColor,

    textColorHovered,
    borderColorHovered,
    backgroundColorHovered,

    backgroundColorActive,

    textColorDisabled,
    borderColorDisabled,
    backgroundColorDisabled,

    iconColor,
  };
}

function getDefaultVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorV2.White,
    outlineColor: ColorV2.Blue30,
    backgroundColor: ColorV2.Blue300,

    textColorHovered: ColorV2.White,
    backgroundColorHovered: ColorV2.Blue500,

    backgroundColorActive: ColorV2.Blue400,

    backgroundColorDisabled: ColorV2.Blue30,
  });
}

function getPrimaryVariables(size: ButtonSizeProp): ButtonVariables {
  return getDefaultVariables(size);
}

function getNeutralVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorV2.Dark500,
    borderColor: ColorV2.Silver500,
    outlineColor: ColorV2.Blue30,
    backgroundColor: ColorV2.White,

    textColorHovered: ColorV2.Blue500,
    borderColorHovered: ColorV2.Blue500,
    backgroundColorHovered: ColorV2.Blue50,

    backgroundColorActive: ColorV2.Blue75,

    textColorDisabled: ColorV2.Silver500,
    iconColor: ColorV2.Dark100,
  });
}

function getCriticalVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorV2.Red500,
    borderColor: ColorV2.Red500,
    outlineColor: ColorV2.Red30,
    backgroundColor: ColorV2.Red50,

    backgroundColorHovered: ColorV2.Red75,

    backgroundColorActive: ColorV2.Red10,

    textColorDisabled: ColorV2.Red30,
    borderColorDisabled: ColorV2.Red30,
    backgroundColorDisabled: ColorV2.Red50,
  });
}

function getTextVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorV2.Blue500,

    outlineColor: ColorV2.Blue30,

    textColorHovered: ColorV2.Blue500,
    backgroundColorHovered: ColorV2.Blue50,

    backgroundColorActive: ColorV2.Blue75,

    textColorDisabled: ColorV2.Blue30,
  });
}

function getInvertedVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorV2.White,
    outlineColor: ColorV2.White40,
    backgroundColor: ColorV2.White20,

    textColorHovered: ColorV2.White,
    backgroundColorHovered: ColorV2.White40,

    backgroundColorActive: ColorV2.White20,

    textColorDisabled: ColorV2.White50,
    backgroundColorDisabled: ColorV2.White08,
  });
}

function getSuccessVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorV2.White,
    outlineColor: ColorV2.Green30,
    backgroundColor: ColorV2.Green300,

    backgroundColorHovered: ColorV2.Green500,

    backgroundColorActive: ColorV2.Green500,

    textColorDisabled: ColorV2.White,
    backgroundColorDisabled: ColorV2.Green30,
  });
}

const ButtonRoot = styled.button<ButtonStyleProps>(
  ({ size, theme, variant, fullWidth }) => {
    const variables =
      variant === 'primary'
        ? getPrimaryVariables(size)
        : variant === 'neutral'
        ? getNeutralVariables(size)
        : variant === 'critical'
        ? getCriticalVariables(size)
        : variant === 'text'
        ? getTextVariables(size)
        : variant === 'inverted'
        ? getInvertedVariables(size)
        : variant === 'success'
        ? getSuccessVariables(size)
        : getDefaultVariables(size);

    return css`
      /* Reset button styles */
      border: 0;
      margin: 0;
      outline: 0;
      position: relative;
      vertical-align: middle;

      /* Fixes for the anchor element */
      cursor: pointer;
      text-decoration: none;

      &[aria-disabled='true'] {
        cursor: default;
        /* Disable link interactions */
        pointer-events: none;
      }

      /* Firefox fixes */
      -moz-appearance: none;

      &::-moz-focus-inner {
        /* Remove Firefox dotted outline */
        border-style: none;
      }

      /* Webkit fixes */
      -webkit-appearance: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      @media print {
        -webkit-print-color-adjust: exact;
      }

      /* Button styles */

      --button-visibility: visible;
      --button-text-color: ${variables.textColor};
      --button-border-color: ${variables.borderColor};
      --button-outline-color: ${ColorV2.Transparent};
      --button-background-color: ${variables.backgroundColor};
      --button-icon-color: ${variables.iconColor};

      --button-padding-x: ${variables.paddingXMobile}px;
      --button-padding-y: ${variables.paddingYMobile}px;
      --button-font-size: ${variables.fontSizeMobile}px;
      --button-line-height: ${variables.lineHeightMobile}px;

      ${theme.breakpoints.up('sm')} {
        --button-padding-x: ${variables.paddingX}px;
        --button-padding-y: ${variables.paddingY}px;
        --button-font-size: ${variables.fontSize}px;
        --button-line-height: ${variables.lineHeight}px;
      }

      &[aria-disabled='true'] {
        --button-text-color: ${variables.textColorDisabled};
        --button-border-color: ${variables.borderColorDisabled};
        --button-background-color: ${variables.backgroundColorDisabled};
        --button-icon-color: ${variables.textColorDisabled};

        &[aria-busy='true'] {
          --button-visibility: hidden;
        }
      }

      &[aria-disabled='false'] {
        &[aria-expanded='true'] {
          --button-text-color: ${variables.textColorHovered};
          --button-border-color: ${variables.borderColorHovered};
          --button-background-color: ${variables.backgroundColorHovered};
          --button-icon-color: ${variables.textColorHovered};
        }

        &,
        &[aria-expanded='true'] {
          &:focus {
            --button-outline-color: ${variables.outlineColor};
          }

          @media (hover: hover) and (pointer: fine) {
            &:hover {
              --button-text-color: ${variables.textColorHovered};
              --button-border-color: ${variables.borderColorHovered};
              --button-background-color: ${variables.backgroundColorHovered};

              span {
                svg {
                  fill: ${variables.textColorHovered};
                }
              }
            }
          }

          &:active {
            --button-background-color: ${variables.backgroundColorActive};
          }
        }
      }

      display: inline-flex;
      align-items: center;
      justify-content: center;

      min-width: 48px;
      width: ${fullWidth ? '100%' : 'auto'};

      border-radius: 4px;
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeightBold};

      color: var(--button-text-color);
      background-color: var(--button-background-color);
      font-size: var(--button-font-size);
      line-height: var(--button-line-height);
      padding: var(--button-padding-y) var(--button-padding-x);

      box-shadow: inset 0 0 0 1px var(--button-border-color),
        0 0 0 2px var(--button-outline-color);

      transition: ${theme.transitions.create([
        'color',
        'box-shadow',
        'background-color',
      ])};
    `;
  },
);

const ButtonLabel = styled.span`
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  visibility: var(--button-visibility);
  --mui-svg-icon-size: var(--button-line-height);
`;

const ButtonStartIcon = styled.span`
  margin-right: 4px;
  color: var(--button-icon-color);
`;

const ButtonEndIcon = styled.span`
  margin-left: 4px;
  color: var(--button-icon-color);
`;

const ButtonPendingIndicator = styled.span`
  left: 50%;
  display: flex;
  position: absolute;
  visibility: visible;
  transform: translate(-50%);
`;

interface BaseButtonProps<T extends HTMLElement>
  extends Pick<
    AriaAttributes,
    'aria-label' | 'aria-controls' | 'aria-haspopup' | 'aria-labelledby'
  > {
  active?: boolean;
  pending?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;

  fullWidth?: boolean;
  size?: ButtonSizeProp;
  variant?: ButtonVariantProp;

  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  id?: string;
  tabIndex?: number;

  onClick?: MouseEventHandler<T>;
  onFocus?: FocusEventHandler<T>;
  onBlur?: FocusEventHandler<T>;
}

function useButtonProps<T extends HTMLElement>({
  children,

  endIcon,
  startIcon,

  tabIndex: tabIndexProp = 0,

  active = false,
  pending = false,
  disabled: disabledProp = false,

  size = 'medium',
  fullWidth = false,
  variant = 'default',
  ...props
}: BaseButtonProps<T>): ButtonStyleProps & HTMLAttributes<T> {
  const disabled = pending || disabledProp;
  const tabIndex = disabled ? -1 : tabIndexProp;

  return {
    ...props,
    size,
    variant,
    fullWidth,
    tabIndex,
    disabled,
    'aria-busy': pending,
    'aria-expanded': active,
    'aria-disabled': disabled,
    children: (
      <ButtonLabel>
        {!!startIcon && <ButtonStartIcon>{startIcon}</ButtonStartIcon>}
        {children}
        {!!endIcon && <ButtonEndIcon>{endIcon}</ButtonEndIcon>}
        {pending && (
          <ButtonPendingIndicator>
            <CircularProgress size="1em" color="inherit" />
          </ButtonPendingIndicator>
        )}
      </ButtonLabel>
    ),
  };
}

export interface ButtonProps extends BaseButtonProps<HTMLButtonElement> {
  type?: 'button' | 'submit';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', ...props }, ref) => {
    const buttonProps = useButtonProps(props);

    return <ButtonRoot {...buttonProps} ref={ref} type={type} />;
  },
);

export interface AnchorButtonProps extends BaseButtonProps<HTMLAnchorElement> {
  href: string;
  target?: '_self' | '_blank';
}

export const AnchorButton = forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  ({ href, target, ...props }, ref) => {
    const buttonProps = useButtonProps(props);
    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
      <ButtonRoot
        {...buttonProps}
        as="a"
        ref={ref}
        rel={rel}
        href={href}
        target={target}
      />
    );
  },
);
