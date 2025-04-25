import { Drawer as MuiDrawer, IconButton } from '@material-ui/core';
import { ArrowBack as BackIcon, Close as CloseIcon } from '@mui/icons-material';
import styled from 'styled-components';
import { Button } from '../button/Button';
import { DrawerActions } from './DrawerActions';
import { DrawerContent } from './DrawerContent';
import { DrawerTitle } from './DrawerTitle';

export type DrawerAnchor = 'left' | 'right';

export const DRAWER_SIZE_VALUES = ['md', 'lg', 'xl', '2xl'] as const;
export type DrawerSize = typeof DRAWER_SIZE_VALUES[number];

export interface DrawerActionDef {
  label: string;
  form?: string;
  onClick: () => void;
}

export interface DrawerProps {
  title: string;
  subtitle?: string;

  children: React.ReactNode;

  primaryAction?: DrawerActionDef;
  secondaryAction?: DrawerActionDef;

  size?: DrawerSize;
  anchor?: DrawerAnchor;

  /**
   * By default renders the children with content
   * padding wrapper as it's the most common use case.
   */
  disableContentPadding?: boolean;

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

const sizeToMaxWidthMap: Record<DrawerSize, string> = {
  md: '432px',
  lg: '600px',
  xl: '746px',
  '2xl': '900px',
};

export default function Drawer({
  title,
  subtitle,
  children,
  open,
  onClose,
  onBack,
  primaryAction,
  secondaryAction,
  disableContentPadding = false,
  anchor = 'right',
  size = 'md',
}: DrawerProps): JSX.Element {
  return (
    <MuiDrawer
      open={open}
      onClose={onClose}
      anchor={anchor}
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
          <IconButton onClick={onClose}>
            <CloseIcon color="action" />
          </IconButton>
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
