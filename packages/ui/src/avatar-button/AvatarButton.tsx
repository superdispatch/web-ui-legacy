import {
  Avatar,
  AvatarTypeMap,
  ButtonBase,
  ButtonBaseProps,
  CircularProgress,
  styled,
} from '@mui/material';
import {
  ButtonHTMLAttributes,
  ComponentType,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  Ref,
  RefAttributes,
} from 'react';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

const Overlay = styled('div')(({ theme }) => {
  const sm = theme.breakpoints.up('sm');
  return {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '50%',
    backgroundColor: Color.Transparent,
    transition: theme.transitions.create('background-color'),

    '& > svg': {
      opacity: 0,
      color: Color.White,
      transition: theme.transitions.create('opacity'),

      fontSize: theme.spacing(3),
      [sm]: { fontSize: theme.spacing(2) },
    },
  };
});

const StyledProgress = styled(CircularProgress)(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    const sm = theme.breakpoints.up('sm');
    return {
      top: 0,
      left: 0,
      position: 'absolute',

      fontSize: theme.spacing(5),
      [sm]: { fontSize: theme.spacing(4) },
    };
  },
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledButton: ComponentType<ButtonBaseProps> = styled(ButtonBase, {
  name: 'SD-AvatarButton',
})(({ theme }) => {
  const sm = theme.breakpoints.up('sm');
  return {
    borderRadius: '50%',

    '&[disabled], &[aria-busy="true"]': {
      [`& > ${Overlay.toString()}`]: {
        backgroundColor: Color.White50,
      },
    },

    '&:not([disabled])[aria-busy="false"]': {
      '&:hover, &:focus': {
        [`&[data-with-icon="true"] > ${Overlay.toString()}`]: {
          backgroundColor: Color.Black50,

          '& > svg': { opacity: 1 },
        },

        [`&:not([data-with-icon="true"]) > ${Overlay.toString()}`]: {
          backgroundColor: Color.Black20,
        },
      },
    },

    '&[data-size-large="true"]': {
      '& > .MuiAvatar-root': {
        ...theme.typography.h2,

        width: theme.spacing(7),
        height: theme.spacing(7),

        [sm]: {
          width: theme.spacing(8),
          height: theme.spacing(8),
        },
      },

      [`& > ${Overlay.toString()}`]: {
        [`& > ${StyledProgress.toString()}`]: {
          fontSize: theme.spacing(7),
          [sm]: { fontSize: theme.spacing(8) },
        },

        '& > svg': {
          fontSize: theme.spacing(4),
          [sm]: { fontSize: theme.spacing(3) },
        },
      },
    },
  };
});

export interface AvatarButtonProps
  extends RefAttributes<HTMLButtonElement>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large';
  icon?: ReactNode;
  isLoading?: boolean;

  avatarRef?: Ref<HTMLDivElement>;

  variant?: AvatarTypeMap['props']['variant'];
  alt?: AvatarTypeMap['props']['alt'];
  src?: AvatarTypeMap['props']['src'];
  sizes?: AvatarTypeMap['props']['sizes'];
  srcSet?: AvatarTypeMap['props']['srcSet'];
  imgProps?: AvatarTypeMap['props']['imgProps'];
}

export const AvatarButton: ForwardRefExoticComponent<AvatarButtonProps> =
  forwardRef(
    (
      {
        size,
        icon,
        isLoading = false,

        disabled = false,
        avatarRef,

        alt,
        imgProps,
        sizes,
        src,
        srcSet,
        variant,
        children,
        ...props
      },
      ref,
    ) => {
      return (
        <StyledButton
          {...props}
          ref={ref}
          aria-busy={isLoading}
          aria-disabled={disabled}
          disabled={disabled || isLoading}
          data-with-icon={!!icon}
          data-size-large={size === 'large'}
        >
          <Avatar
            ref={avatarRef}
            variant={variant}
            alt={alt}
            src={src}
            sizes={sizes}
            srcSet={srcSet}
            imgProps={imgProps}
          >
            {children}
          </Avatar>

          <Overlay>
            {icon}

            {isLoading && (
              <StyledProgress
                size="1em"
                thickness={size === 'large' ? 2.5 : 1.5}
              />
            )}
          </Overlay>
        </StyledButton>
      );
    },
  );
