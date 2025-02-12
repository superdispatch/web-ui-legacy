import { CircularProgress } from '@material-ui/core';
import { Color, ColorDynamic } from '@superdispatch/ui';
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

  textColor: ColorDynamic | Color;
  textColorHovered: ColorDynamic | Color;
  textColorDisabled: ColorDynamic | Color;

  iconColor: ColorDynamic | Color;

  outlineColor: ColorDynamic;

  borderColor: ColorDynamic;
  borderColorHovered: ColorDynamic;
  borderColorDisabled: ColorDynamic;

  backgroundColor: ColorDynamic;
  backgroundColorActive: ColorDynamic;
  backgroundColorHovered: ColorDynamic;
  backgroundColorDisabled: ColorDynamic;
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

    textColor = ColorDynamic.Transparent,
    textColorHovered = textColor,
    textColorDisabled = textColor,

    iconColor = textColor,

    outlineColor = ColorDynamic.Transparent,

    borderColor = ColorDynamic.Transparent,
    borderColorHovered = borderColor,
    borderColorDisabled = borderColor,

    backgroundColor = ColorDynamic.Transparent,
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
    textColor: Color.White,
    outlineColor: ColorDynamic.Blue30,
    backgroundColor: ColorDynamic.Blue300,

    textColorHovered: Color.White,
    backgroundColorHovered: ColorDynamic.Blue500,

    backgroundColorActive: ColorDynamic.Blue400,

    backgroundColorDisabled: ColorDynamic.Blue30,
  });
}

function getPrimaryVariables(size: ButtonSizeProp): ButtonVariables {
  return getDefaultVariables(size);
}

function getNeutralVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorDynamic.Dark500,
    borderColor: ColorDynamic.Silver500,
    outlineColor: ColorDynamic.Blue30,
    backgroundColor: ColorDynamic.White,

    textColorHovered: ColorDynamic.Blue500,
    borderColorHovered: ColorDynamic.Blue500,
    backgroundColorHovered: ColorDynamic.Blue50,

    backgroundColorActive: ColorDynamic.Blue50,

    textColorDisabled: ColorDynamic.Silver500,
    iconColor: ColorDynamic.Dark100,
  });
}

function getCriticalVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorDynamic.Red500,
    borderColor: ColorDynamic.Red500,
    outlineColor: ColorDynamic.Red30,
    backgroundColor: ColorDynamic.Red50,

    backgroundColorHovered: ColorDynamic.Red300Aplha20,

    backgroundColorActive: ColorDynamic.Red10,

    textColorDisabled: ColorDynamic.Red30,
    borderColorDisabled: ColorDynamic.Red30,
    backgroundColorDisabled: ColorDynamic.Red50,
  });
}

function getTextVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorDynamic.Blue500,

    outlineColor: ColorDynamic.Blue30,

    textColorHovered: ColorDynamic.Blue500,
    backgroundColorHovered: ColorDynamic.Blue50,

    backgroundColorActive: ColorDynamic.Blue50,

    textColorDisabled: ColorDynamic.Blue30,
  });
}

function getInvertedVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: ColorDynamic.White,
    outlineColor: ColorDynamic.White40,
    backgroundColor: ColorDynamic.White20,

    textColorHovered: ColorDynamic.White,
    backgroundColorHovered: ColorDynamic.White40,

    backgroundColorActive: ColorDynamic.White20,

    textColorDisabled: ColorDynamic.White50,
    backgroundColorDisabled: ColorDynamic.White08,
  });
}

function getSuccessVariables(size: ButtonSizeProp): ButtonVariables {
  return createButtonVariables(size, {
    textColor: Color.White,
    outlineColor: ColorDynamic.Green30,
    backgroundColor: ColorDynamic.Green300,

    backgroundColorHovered: ColorDynamic.Green500,

    backgroundColorActive: ColorDynamic.Green500,

    textColorDisabled: Color.White,
    backgroundColorDisabled: ColorDynamic.Green30,
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
      --button-outline-color: ${ColorDynamic.Transparent};
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

  form?: string;
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
  rel?:
    | 'noopener'
    | 'noreferrer'
    | 'nofollow'
    | 'noopener noreferrer'
    | 'noreferrer noopener';
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
