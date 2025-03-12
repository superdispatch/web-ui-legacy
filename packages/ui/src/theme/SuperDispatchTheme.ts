import { Theme } from '@material-ui/core';
import { SkeletonClassKey } from '@material-ui/lab';
import { Theme as MaterialV5Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  export type DefaultTheme = MaterialV5Theme;
}
declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiSkeleton: SkeletonClassKey;
  }
}

export type DefaultTheme = MaterialV5Theme;
export type SuperDispatchTheme = Readonly<Required<Theme>>;
