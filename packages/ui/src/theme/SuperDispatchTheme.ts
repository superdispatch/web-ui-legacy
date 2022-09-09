import type { LabComponents } from '@mui/lab/themeAugmentation';
import { Theme } from '@mui/material';

export type SuperDispatchTheme = Readonly<
  Required<Theme & { components?: LabComponents }>
>;

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends SuperDispatchTheme {}
}
