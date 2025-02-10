import { useTheme } from '@material-ui/core';
import { renderChildren } from '@superdispatch/ui';
import { ReactElement, ReactNode } from 'react';

interface LightDarkProps {
  light: ReactNode;
  dark: ReactNode;
}

export function LightDark({
  light,
  dark,
}: LightDarkProps): ReactElement<ReactNode> | null {
  const theme = useTheme();
  const isDarkMode = theme.palette.type === 'dark';
  const mode: ReactNode = isDarkMode ? dark : light;
  return renderChildren(mode);
}
