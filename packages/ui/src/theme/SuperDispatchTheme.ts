import { Theme } from '@material-ui/core';
import { SkeletonClassKey } from '@material-ui/lab';

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiSkeleton: SkeletonClassKey;
  }
}

export type SuperDispatchTheme = Readonly<Required<Theme>>;
