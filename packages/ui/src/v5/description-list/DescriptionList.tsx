import { styled, SvgIcon, Typography, TypographyProps } from '@mui/material';
import { CSSProperties } from '@mui/styles';
import { forwardRef, ReactNode } from 'react';
import { OverflowText, OverflowTextProps } from '../overflow-text/OverflowText';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';
import { isEmptyReactNode } from '../utils/isEmptyReactNode';
import { useUID } from '../utils/useUID';

const DescriptionListItemRoot = styled('div', {
  name: 'SD-DescriptionListItem',
  slot: 'Root',
})({
  display: 'flex',
  alignItems: 'center',
});

const DescriptionListItemIcon = styled('div')(({ theme }) => {
  return {
    display: 'inline-flex',
    marginRight: theme.spacing(1),

    '& > .MuiSvgIcon-root': {
      color: Color.Dark100,
      fontSize: theme.spacing(3),

      [theme.breakpoints.up('sm')]: {
        fontSize: theme.spacing(2),
      },
    },
  };
});

//
// DescriptionListItem
//

export interface DescriptionListItemProps {
  icon?: ReactNode;
  inset?: boolean;

  label?: ReactNode;
  labelTypographyProps?: Omit<
    TypographyProps,
    'noWrap' | 'variant' | 'component' | 'color'
  >;

  content?: ReactNode;
  contentTypographyProps?: Omit<OverflowTextProps, 'component' | 'color'>;

  fallback?: ReactNode;
}

export const DescriptionListItem = forwardRef<
  HTMLDivElement,
  DescriptionListItemProps
>(
  (
    {
      inset,
      icon = inset ? <SvgIcon /> : null,

      label,
      labelTypographyProps,

      content,
      contentTypographyProps,

      fallback,
    },
    ref,
  ) => {
    const labelID = useUID(labelTypographyProps?.id);

    const shouldRenderFallback = isEmptyReactNode(content);

    return (
      <DescriptionListItemRoot
        ref={ref}
        aria-labelledby={label != null ? labelID : undefined}
      >
        {!!icon && <DescriptionListItemIcon>{icon}</DescriptionListItemIcon>}

        <OverflowText
          {...contentTypographyProps}
          component="span"
          color={
            shouldRenderFallback && label == null
              ? 'textSecondary'
              : 'textPrimary'
          }
          TooltipProps={{
            ...contentTypographyProps?.TooltipProps,
            title:
              contentTypographyProps?.TooltipProps?.title ??
              content ??
              undefined,
          }}
        >
          {label != null && (
            <Typography
              {...labelTypographyProps}
              id={labelID}
              variant="body2"
              component="span"
              color="textSecondary"
            >
              {label}
            </Typography>
          )}

          {label != null && ' '}
          {!shouldRenderFallback ? content : fallback}
        </OverflowText>
      </DescriptionListItemRoot>
    );
  },
);

//
// DescriptionList
//

function sizeVariant(
  theme: SuperDispatchTheme,
  mobileSpacing: number,
  desktopSpacing: number,
): CSSProperties {
  return {
    [`& > ${DescriptionListItemRoot}`]: {
      '&:not(:last-child)': {
        paddingBottom: theme.spacing(mobileSpacing),

        [theme.breakpoints.up('sm')]: {
          paddingBottom: theme.spacing(desktopSpacing),
        },
      },
    },
  };
}

const DescriptionListRoot = styled('div', {
  name: 'SD-DescriptionList',
  slot: 'Root',
})(({ theme }: { theme: SuperDispatchTheme }) => {
  return {
    ...sizeVariant(theme, 2, 1),

    '&[data-size="small"]': sizeVariant(theme, 1, 0.5),
    '&[data-size="large"]': sizeVariant(theme, 3, 2),
  };
});

export interface DescriptionListProps {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const DescriptionList = forwardRef<HTMLDivElement, DescriptionListProps>(
  ({ size, ...props }, ref) => {
    return <DescriptionListRoot {...props} ref={ref} data-size={size} />;
  },
);
