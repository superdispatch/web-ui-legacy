import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import React, { forwardRef, ForwardRefExoticComponent, useState } from 'react';

interface InfoTooltipProps extends Omit<TooltipProps, 'title' | 'children'> {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal;
  iconButtonProps?: IconButtonProps;
}
export const InfoTooltip: ForwardRefExoticComponent<InfoTooltipProps> =
  forwardRef(({ children, iconButtonProps, ...props }, ref) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    return (
      <Tooltip
        open={isTooltipOpen}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        title={children}
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
          <Info color="action" fontSize="small" />
        </IconButton>
      </Tooltip>
    );
  });
