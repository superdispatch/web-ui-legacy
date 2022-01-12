import { Button, ThemeProvider } from '@superdispatch/ui';
import { render } from 'react-dom';

render(
  <ThemeProvider>
    <Button />
  </ThemeProvider>,
  document.getElementById('root'),
);
