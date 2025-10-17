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
  width: 100%;
  gap: 8px;
`;

const HelpIcon = styled.div`
  margin-left: auto;

  & > svg {
    font-size: 16px;
    color: ${ColorDynamic.Dark500};
  }
`;

const EndActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    margin-left: 0;
    width: 100%;
  }
`;

const BannerListItemStandalone = css`
  background: ${ColorDynamic.Silver200};
`;

const BannerListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

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
    background: ${ColorDynamic.Silver200};

    & ${IconContainer} {
      background: ${ColorDynamic.White};
    }
  }

  [data-variant='standalone'] &:not(:hover) {
    ${BannerListItemStandalone}
  }

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
      <BannerListContainer {...rest} ref={ref}>
        <Content>
          <IconContainer>
            {variant === 'danger' ? (
              <Error htmlColor={ColorDynamic.Red300} />
            ) : variant === 'warning' ? (
              <Warning htmlColor={ColorDynamic.Yellow300} />
            ) : (
              <Flag />
            )}
          </IconContainer>

          {children}

          <HelpIcon>{showHelpIcon && <Help />}</HelpIcon>
        </Content>

        {endAction && <EndActions>{endAction}</EndActions>}
      </BannerListContainer>
    );
  },
);
