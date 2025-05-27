import { Error, Flag, Help, Warning } from '@material-ui/icons';
import { ColorDynamic } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Variant = 'primary' | 'warning' | 'danger';

const IconContainer = styled.div`
  padding: 4px;
  border-radius: 50%;
  background: ${ColorDynamic.Silver200};
  color: ${ColorDynamic.Blue300};
  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'])};

  & .MuiSvgIcon-root {
    font-size: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EndActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;

  & > svg {
    font-size: 16px;
    color: ${ColorDynamic.Dark500};
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    margin-left: 0;
    width: 100%;
  }
`;

const BannerListItemDanger = css`
  & ${IconContainer} {
    background: ${ColorDynamic.Red50};
    color: ${ColorDynamic.Red300};
  }

  &:hover {
    background: ${ColorDynamic.Red50};
  }
`;

const BannerListItemStandalone = css`
  background: ${ColorDynamic.Silver200};
`;

const BannerListContainer = styled.div<{ $variant: Variant }>`
  display: inline-flex;
  align-items: center;

  padding: 8px 16px 8px 12px;
  border: 1px solid ${ColorDynamic.Silver400};
  background: ${ColorDynamic.White};
  cursor: default;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'background-color'])};

  & + & {
    border-top: none;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;
  }

  &:hover {
    background: ${ColorDynamic.Blue50};

    & ${IconContainer} {
      background: ${ColorDynamic.White};
    }

    & ${EndActions} > svg {
      color: ${({ $variant }) =>
        $variant === 'danger' ? ColorDynamic.Red300 : ColorDynamic.Blue300};
    }
  }

  [data-variant='standalone'] &:not(:hover) {
    ${BannerListItemStandalone}
  }

  ${({ $variant }) => ($variant === 'danger' ? BannerListItemDanger : null)}

  ${({ theme }) => theme.breakpoints.down('xs')} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

interface BannerItemProps {
  variant?: Variant;
  showHelpIcon?: boolean;
  endAction?: ReactNode;
  children?: ReactNode;
}

export const FlagListItem = forwardRef<HTMLDivElement, BannerItemProps>(
  (
    { variant = 'primary', showHelpIcon, endAction, children, ...rest },
    ref,
  ) => {
    return (
      <BannerListContainer {...rest} ref={ref} $variant={variant}>
        <Content>
          <IconContainer>
            {variant === 'danger' ? (
              <Error />
            ) : variant === 'warning' ? (
              <Warning />
            ) : (
              <Flag />
            )}
          </IconContainer>

          {children}
        </Content>

        <EndActions>
          {endAction}
          {showHelpIcon && <Help />}
        </EndActions>
      </BannerListContainer>
    );
  },
);
