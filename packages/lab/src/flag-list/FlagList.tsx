import { ColorDynamic } from '@superdispatch/ui';
import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

const FlagListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 16px;
  padding: 12px 16px;

  background: ${ColorDynamic.Silver200};
  border: 1px solid ${ColorDynamic.Silver400};
  border-bottom: none;
  border-radius: 4px 4px 0 0;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FlagListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface BannerListProps {
  isStandalone?: boolean;
  title?: ReactNode;
  endAction?: ReactNode;
  children: ReactNode;
}

export const FlagList = forwardRef<HTMLDivElement, BannerListProps>(
  ({ isStandalone = false, title, endAction, children }, ref) => {
    return (
      <FlagListContainer
        data-variant={isStandalone ? 'standalone' : 'with-header'}
        ref={ref}
      >
        {(title || endAction) && (
          <FlagListHeader>
            {title}
            {endAction}
          </FlagListHeader>
        )}
        {children}
      </FlagListContainer>
    );
  },
);
