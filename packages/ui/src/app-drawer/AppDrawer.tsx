import { Drawer as MuiDrawer, IconButton } from '@material-ui/core';
import { ArrowBack as BackIcon, Close as CloseIcon } from '@material-ui/icons';
import styled from 'styled-components';
import { Button } from '../button/Button';
import { DrawerActions } from '../drawer/DrawerActions';
import { DrawerContent } from '../drawer/DrawerContent';
import { DrawerTitle } from '../drawer/DrawerTitle';
import { DRAWER_SIZE_VALUES } from './constants';

export type AppDrawerSize = typeof DRAWER_SIZE_VALUES[number];

export interface DrawerActionDef {
  label: string;
  form?: string;
  onClick: () => void;
}

export interface AppDrawerProps {
  title: string;
  subtitle?: string;

  children: React.ReactNode;

  primaryAction?: DrawerActionDef;
  secondaryAction?: DrawerActionDef;

  size?: AppDrawerSize;

  /**
   * By default renders the children with content
   * padding wrapper as it's the most common use case.
   */
  disableContentPadding?: boolean;

  /**
   * By default renders the close button in the header.
   * Set to true to hide it.
   */
  disableCloseButton?: boolean;

  /**
   * Renders a back button in the header
   */
  onBack?: () => void;

  open: boolean;
  onClose: () => void;
}

const StyledActionsLayout = styled.div`
  display: flex;
  gap: 16px;
`;

const sizeToMaxWidthMap: Record<AppDrawerSize, string> = {
  md: '432px',
  lg: '600px',
  xl: '746px',
  xxl: '900px',
};

export function AppDrawer({
  title,
  subtitle,
  children,
  open,
  onClose,
  onBack,
  primaryAction,
  secondaryAction,
  disableContentPadding = false,
  disableCloseButton = false,
  size = 'md',
}: AppDrawerProps): JSX.Element {
  return (
    <MuiDrawer
      open={open}
      onClose={onClose}
      anchor="right"
      PaperProps={{
        style: {
          width: '100%',
          maxWidth: sizeToMaxWidthMap[size],
        },
      }}
    >
      <DrawerTitle
        title={title}
        subtitle={subtitle}
        startAction={
          onBack && (
            <IconButton onClick={onBack} edge="start">
              <BackIcon color="action" />
            </IconButton>
          )
        }
        endAction={
          !disableCloseButton && (
            <IconButton onClick={onClose}>
              <CloseIcon color="action" />
            </IconButton>
          )
        }
      />

      {disableContentPadding ? (
        children
      ) : (
        <DrawerContent>{children}</DrawerContent>
      )}

      {(primaryAction || secondaryAction) && (
        <DrawerActions>
          <StyledActionsLayout>
            {primaryAction && (
              <Button
                type="button"
                onClick={primaryAction.onClick}
                variant="contained"
              >
                {primaryAction.label}
              </Button>
            )}

            {secondaryAction && (
              <Button
                type="button"
                onClick={secondaryAction.onClick}
                variant="outlined"
              >
                {secondaryAction.label}
              </Button>
            )}
          </StyledActionsLayout>
        </DrawerActions>
      )}
    </MuiDrawer>
  );
}
