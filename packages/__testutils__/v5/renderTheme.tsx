import { useTheme } from '@mui/material';
import { v5 } from '@superdispatch/ui';
import { renderHook } from '@testing-library/react-hooks';

export function renderTheme(
  modifier?: v5.ThemeProviderProps['modifier'],
): v5.SuperDispatchTheme {
  const {
    result: { current: theme },
  } = renderHook(() => useTheme<v5.SuperDispatchTheme>(), {
    wrapper: ({ children }) => (
      <v5.ThemeProvider modifier={modifier}>{children}</v5.ThemeProvider>
    ),
  });

  return theme;
}
