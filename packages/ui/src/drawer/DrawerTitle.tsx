import {
  AppBar,
  Grid,
  styled,
  Toolbar,
  Typography,
  TypographyProps,
} from '@mui/material';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Color } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';
import { VisibilityObserver } from '../utils/VisibilityObserver';

const StyledAppBar = styled(AppBar)(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    return {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      transition: theme.transitions.create(['border-color']),

      '&[data-sticky="false"]': {
        borderBottomColor: Color.Transparent,
      },
    };
  },
);

const StyledToolbar = styled(Toolbar)(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    return {
      '&.MuiToolbar-gutters': {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),

        [theme.breakpoints.up('md')]: {
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
      },
    };
  },
);

const StartAction = styled(Grid)(({ theme }: { theme: SuperDispatchTheme }) => {
  return {
    marginRight: theme.spacing(0.5),

    '& .MuiIconButton-edgeStart': {
      marginLeft: theme.spacing(-2),
    },
  };
});

const EndAction = styled(Grid)(({ theme }: { theme: SuperDispatchTheme }) => {
  return {
    marginLeft: theme.spacing(0.5),

    '& .MuiIconButton-edgeEnd': {
      marginRight: theme.spacing(-2),
    },
  };
});

export interface DrawerTitleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'title'> {
  children?: ReactNode;

  title: ReactNode;
  titleTypographyProps?: Omit<TypographyProps, 'children'>;
  subtitle?: ReactNode;
  subtitleTypographyProps?: Omit<TypographyProps, 'children'>;

  startAction?: ReactNode;
  endAction?: ReactNode;
}

export const DrawerTitle = forwardRef<HTMLDivElement, DrawerTitleProps>(
  (
    {
      title,
      titleTypographyProps,
      subtitle,
      subtitleTypographyProps,
      startAction,
      endAction,
      ...props
    },
    appBarRef,
  ) => {
    return (
      <VisibilityObserver
        render={({ ref, visibility }) => (
          <>
            <div ref={ref} />

            <StyledAppBar
              {...props}
              ref={appBarRef}
              position="sticky"
              data-sticky={visibility === 'invisible'}
            >
              <StyledToolbar>
                <Grid container={true} alignItems="center">
                  {!!startAction && (
                    <StartAction item={true}>{startAction}</StartAction>
                  )}

                  <Grid item={true} xs={true} zeroMinWidth={true}>
                    <Typography
                      variant="h3"
                      noWrap={true}
                      {...titleTypographyProps}
                    >
                      {title}
                    </Typography>

                    {!!subtitle && (
                      <Typography
                        variant="body2"
                        noWrap={true}
                        {...subtitleTypographyProps}
                      >
                        {subtitle}
                      </Typography>
                    )}
                  </Grid>

                  {!!endAction && (
                    <EndAction item={true}>{endAction}</EndAction>
                  )}
                </Grid>
              </StyledToolbar>
            </StyledAppBar>
          </>
        )}
      />
    );
  },
);
