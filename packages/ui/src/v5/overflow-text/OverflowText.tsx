import {
  styled,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import {
  ElementType,
  forwardRef,
  ForwardRefExoticComponent,
  useState,
} from 'react';
import { Color } from '../theme/Color';
import { VisibilityObserver } from '../utils/VisibilityObserver';

const Root = styled(Typography, {
  name: 'SD-OverflowText',
  shouldForwardProp: (prop, defaultFn) =>
    prop !== 'truncated' && defaultFn(prop),
})<TypographyProps & { truncated?: boolean }>(({ truncated, theme }) => ({
  marginBottom: -1,
  borderBottom: '1px dashed transparent',
  transition: theme.transitions.create('border'),

  ...(truncated && {
    cursor: 'pointer',
    borderBottomColor: Color.Silver500,
  }),
}));

const Sential = styled('span', {
  name: 'SD-OverflowText',
  slot: 'Sential',
})({
  width: 1,
  height: '100%',
  display: 'inline-block',
});

export interface OverflowTextProps extends Omit<TypographyProps, 'noWrap'> {
  component?: ElementType;
  disableUnderline?: boolean;
  TooltipProps?: Omit<Partial<TooltipProps>, 'open' | 'children'>;
}

export const OverflowText: ForwardRefExoticComponent<OverflowTextProps> =
  forwardRef(
    (
      {
        onClick,
        children,
        disableUnderline,
        TooltipProps: {
          title = children,
          enterDelay = 1000,
          ...tooltipProps
        } = {} as const,
        ...props
      },
      rootRef,
    ) => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <VisibilityObserver
          render={({ ref, visibility }) => {
            const isTooltipEnabled = !!children && visibility === 'invisible';

            return (
              <Tooltip
                {...tooltipProps}
                enterDelay={1000}
                title={title || ''}
                disableFocusListener={true}
                open={isOpen && isTooltipEnabled}
                onOpen={() => {
                  setIsOpen(true);
                }}
                onClose={() => {
                  setIsOpen(false);
                }}
              >
                <Root
                  {...props}
                  ref={rootRef}
                  noWrap={true}
                  truncated={!disableUnderline && visibility === 'invisible'}
                  onClick={(event) => {
                    setIsOpen(true);
                    onClick?.(event);
                  }}
                >
                  {children}

                  {!!children && <Sential ref={ref} />}
                </Root>
              </Tooltip>
            );
          }}
        />
      );
    },
  );
