import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import { forwardRef, ForwardRefExoticComponent, ReactNode } from 'react';
import styled from 'styled-components';

interface InfoTooltipProps extends Omit<TooltipProps, 'title' | 'children'> {
  title: NonNullable<ReactNode>;
  children?: ReactNode;
  iconButtonProps?: IconButtonProps;
  fontSize?: 'inherit' | 'default' | 'small' | 'medium' | 'large' | undefined;
  TextProps?: TypographyProps;
  isOpen?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

const Root = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoTooltip: ForwardRefExoticComponent<InfoTooltipProps> =
  forwardRef(
    (
      {
        children,
        iconButtonProps,
        fontSize = 'small',
        TextProps,
        title,
        isOpen,
        onClick,
        onClose,
        ...props
      },
      ref,
    ) => {
      const tooltip = (
        <Tooltip
          open={isOpen}
          title={title}
          placement="top"
          onClose={onClose}
          disableFocusListener={true}
          disableTouchListener={true}
          onClick={onClick}
          ref={ref}
          {...props}
        >
          <IconButton {...iconButtonProps} size="small" onMouseOver={onClick}>
            <Info color="action" fontSize={fontSize} />
          </IconButton>
        </Tooltip>
      );

      if (!children) return tooltip;

      return (
        <Root>
          <Typography {...TextProps}>{children}</Typography>
          {tooltip}
        </Root>
      );
    },
  );
