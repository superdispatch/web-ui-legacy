import { Skeleton as MuiSkeleton, SkeletonProps } from '@material-ui/lab';
import styled from 'styled-components';

const StyledSkeleton = styled(MuiSkeleton)`
  &.MuiSkeleton-text {
    transform: scale(1, 1);
    border-radius: 3px;
  }
`;

export function Skeleton({ ...props }: SkeletonProps): JSX.Element {
  return <StyledSkeleton {...props} />;
}
