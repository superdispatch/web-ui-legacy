import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

interface InfoTooltipProps extends Omit<TooltipProps, 'title' | 'children'> {
  title: NonNullable<ReactNode>;
  children?: ReactNode;
  iconButtonProps?: IconButtonProps;
  fontSize?: 'inherit' | 'default' | 'small' | 'medium' | 'large' | undefined;
  TextProps?: TypographyProps;
}

interface InfoTooltipRefProps {
  onClose?: () => void;
  onClick?: () => void;
}

const Root = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoTooltip = forwardRef<InfoTooltipRefProps, InfoTooltipProps>(
  (
    {
      children,
      iconButtonProps,
      fontSize = 'small',
      TextProps,
      title,
      ...props
    },
    ref,
  ) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    function openTooltip(): void {
      setIsTooltipOpen(true);
    }
    function closeTooltip(): void {
      setIsTooltipOpen(false);
    }

    useImperativeHandle(ref, () => ({
      onClick: () => {
        openTooltip();
      },
      onClose: () => {
        closeTooltip();
      },
    }));

    const tooltip = (
      <Tooltip
        open={isTooltipOpen}
        title={title}
        placement="top"
        onClose={closeTooltip}
        disableFocusListener={true}
        disableTouchListener={true}
        onClick={openTooltip}
        ref={ref}
        {...props}
      >
        <IconButton {...iconButtonProps} size="small" onMouseOver={openTooltip}>
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
