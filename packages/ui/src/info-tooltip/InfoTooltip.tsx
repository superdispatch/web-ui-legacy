import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import {
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  useState,
} from 'react';
import styled from 'styled-components';

interface InfoTooltipProps extends Omit<TooltipProps, 'title' | 'children'> {
  title: NonNullable<ReactNode>;
  children?: ReactNode;
  iconButtonProps?: IconButtonProps;
  fontSize?: 'inherit' | 'default' | 'small' | 'medium' | 'large' | undefined;
  TextProps?: TypographyProps;
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
        ...props
      },
      ref,
    ) => {
      const [isTooltipOpen, setIsTooltipOpen] = useState(false);

      const tooltip = (
        <Tooltip
          open={isTooltipOpen}
          title={title}
          placement="top"
          onClose={() => {
            setIsTooltipOpen(false);
          }}
          disableFocusListener={true}
          disableTouchListener={true}
          onClick={() => {
            setIsTooltipOpen(true);
          }}
          ref={ref}
          {...props}
        >
          <IconButton
            {...iconButtonProps}
            size="small"
            onMouseOver={() => {
              setIsTooltipOpen(true);
            }}
          >
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
