import { DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from '@superdispatch/ui';
import 'fontsource-inter/400.css';
import 'fontsource-inter/500.css';
import 'fontsource-inter/600.css';
import 'fontsource-inter/700.css';
import { merge } from 'lodash';
import React, { Suspense } from 'react';
import { withPlayroom } from 'storybook-addon-playroom';

injectDisplayNames(require('@material-ui/lab'));
injectDisplayNames(require('@material-ui/core'));
injectDisplayNames(require('@material-ui/icons'), { suffix: 'Icon' });

injectDisplayNames(require('@mui/lab'));
injectDisplayNames(require('@mui/material'));
injectDisplayNames(require('@mui/icons-material'), { suffix: 'Icon' });

function injectDisplayNames(module, { suffix = '' } = {}) {
  for (const [key, value] of Object.entries(module)) {
    if (
      key[0] === key[0].toUpperCase() &&
      (typeof value == 'object' || typeof value == 'function')
    ) {
      value.displayName = key + suffix;
    }
  }
}

function ThemeProviderContainer({ children }) {
  return (
    <ThemeProvider
      injectFirst={false}
      modifier={(theme) => {
        merge(theme.components.MuiCssBaseline, {
          styleOverrides: {
            body: {
              background: '#fafafa', // use same color with mui4 to detect visual difference
            },
          },
        });

        return theme;
      }}
    >
      {children}
    </ThemeProvider>
  );
}

addDecorator(withPlayroom);
addDecorator((story, { id }) => {
  return (
    <Suspense fallback="Loading story…">
      <div data-story={id}>
        <ThemeProviderContainer injectFirst={false}>
          {story()}
        </ThemeProviderContainer>
      </div>
    </Suspense>
  );
});

function SuperDispatchDocsContainer(props) {
  return (
    <ThemeProvider injectFirst={false}>
      <ThemeProvider injectFirst={false}>
        <DocsContainer {...props} />
      </ThemeProvider>
    </ThemeProvider>
  );
}

addParameters({
  docs: { container: SuperDispatchDocsContainer },

  playroom: {
    // Because Playroom is built inside Storybook on this example's deploy,
    // we must define the absolute path to it when NODE_ENV is production,
    // otherwise set undefined to use the default Playroom URL (localhost)
    url: process.env.NODE_ENV === 'production' ? '/playroom/' : undefined,
    reactElementToJSXStringOptions: { showFunctions: true },
  },
});
