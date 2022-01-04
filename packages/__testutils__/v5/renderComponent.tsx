import { v5 } from '@superdispatch/ui';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement, Suspense } from 'react';

function Wrapper({ children }: v5.ThemeProviderProps): ReactElement {
  return (
    <Suspense fallback="Suspended…">
      <v5.ThemeProvider>{children}</v5.ThemeProvider>
    </Suspense>
  );
}

export function renderComponent(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries' | 'wrapper'>,
): RenderResult {
  return render(ui, { ...options, wrapper: Wrapper });
}
