import { v5 } from '@superdispatch/ui';
import { render } from '@testing-library/react';
import { parse as parseCSS, stringify as stringifyCSS, Stylesheet } from 'css';
import { styleSheetSerializer } from 'jest-styled-components';
import { identity } from 'lodash';
import { format } from 'prettier';
import { ReactElement } from 'react';

const colors = new Map<string, string>(
  Object.entries(v5.Color).flatMap(([k, v]) => [
    [v, `Color.${k}`],
    [v.replace(/\s/g, ''), `Color.${k}`], // rgba(255, 255, 255, 0.08) -> rgba(255,255,255,0.08)
  ]),
);

const colorRegExp = new RegExp(
  Array.from(colors.keys(), (x) =>
    x.replace('(', '\\(').replace(')', '\\)'),
  ).join('|'),
  'g',
);

function replaceThemeColors(style: string) {
  return style.replace(colorRegExp, (color) => colors.get(color) as string);
}

const renderedCSS = new Set<string>();

function getSCSheet(): Element {
  // eslint-disable-next-line testing-library/no-node-access
  const sheet = document.querySelector('[data-styled]');

  if (!sheet) {
    throw new Error('There are no mounted SC components.');
  }

  return sheet;
}

function parseStyleSheet(): Stylesheet {
  return parseCSS(getSCSheet().textContent || '');
}

function formatAST(sheet: Stylesheet): string {
  return format(replaceThemeColors(stringifyCSS(sheet)), {
    parser: 'css',
    singleQuote: true,
  }).trim();
}

expect.addSnapshotSerializer({
  test: (value) => typeof value === 'string' && renderedCSS.has(value),
  print: (value) => String(value),
});

export function extractGlobalCSS(): string {
  const targetSheet = parseStyleSheet();
  return formatAST(targetSheet);
}

export function renderGlobalCSS() {
  render(<v5.ThemeProvider />);

  const css = extractGlobalCSS();
  renderedCSS.add(css);

  return css;
}

function defaultClassFormatter(index: number) {
  return `Mui-${index}`;
}

export function renderCSS(ui: ReactElement, displayNames: string[]) {
  let firstUnmatchedClass: string | undefined;
  const { container } = render(<v5.ThemeProvider>{ui}</v5.ThemeProvider>);

  styleSheetSerializer.setStyleSheetSerializerOptions({
    addStyles: true,
    classNameFormatter(index) {
      const formattedClass = displayNames[index];

      if (!formattedClass) {
        firstUnmatchedClass ||= defaultClassFormatter(index);
        return defaultClassFormatter(index);
      }

      return formattedClass;
    },
  });

  let css = styleSheetSerializer.print(
    // eslint-disable-next-line testing-library/no-node-access
    container.firstChild,
    () => '', // do not print code
    identity,
    {} as any,
    {} as any,
  );

  if (firstUnmatchedClass) {
    const unmatchedStyle = getStyleByClass(firstUnmatchedClass, css);

    throw Error(
      `renderCSS: Unmatched class for style \n\n "${unmatchedStyle}"`,
    );
  }

  css = replaceThemeColors(css).trim();
  renderedCSS.add(css);

  return css;
}

function getStyleByClass(className: string, css: string) {
  const targetSheet = parseCSS(css);

  if (!targetSheet.stylesheet) {
    throw new Error('There are no stylesheet.');
  }

  targetSheet.stylesheet.rules = targetSheet.stylesheet.rules.filter((rule) => {
    if ('selectors' in rule) {
      return rule.selectors?.some((selector) => selector.includes(className));
    }
    return false;
  });

  return formatAST(targetSheet);
}
