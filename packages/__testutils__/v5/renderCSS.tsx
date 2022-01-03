import { v5 } from '@superdispatch/ui';
import { render } from '@testing-library/react';
import { parse as parseCSS, stringify as stringifyCSS, Stylesheet } from 'css';
import { format } from 'prettier';

const colors = new Map<string, string>(
  Object.entries(v5.Color).map(([k, v]) => [v, `Color.${k}`]),
);

const colorRegExp = new RegExp(
  Array.from(colors.keys(), (x) =>
    x.replace('(', '\\(').replace(')', '\\)'),
  ).join('|'),
  'g',
);

const renderedCSS = new Set<string>();

function getAllSheets(): Element[] {
  return Array.from(document.querySelectorAll('[data-styled]'));
}

function getSheets(): Element[] {
  const sheets = getAllSheets();

  if (sheets.length === 0) {
    throw new Error('There are no mounted JSS components.');
  }

  return sheets;
}

function parseStyleSheet(): Stylesheet {
  return parseCSS(
    getSheets()
      .map((node) => node.textContent)
      .join('\n'),
  );
}

function formatAST(sheet: Stylesheet): string {
  return format(
    stringifyCSS(sheet).replace(
      colorRegExp,
      (color) => colors.get(color) as string,
    ),
    { parser: 'css', singleQuote: true },
  ).trim();
}

expect.addSnapshotSerializer({
  test: (value) => typeof value === 'string' && renderedCSS.has(value),
  print: (value) => String(value),
});

export function extractGlobalCSS(): string {
  const targetSheet = parseStyleSheet();
  const formatted = formatAST(targetSheet);

  renderedCSS.add(formatted);

  return formatted;
}

export function renderGlobalCSS() {
  render(<v5.ThemeProvider />);

  return extractGlobalCSS();
}
