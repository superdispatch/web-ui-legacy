import { v5 } from '@superdispatch/ui';
import { render } from '@testing-library/react';
import {
  parse as parseCSS,
  Rule,
  stringify as stringifyCSS,
  Stylesheet,
} from 'css';
import { get } from 'lodash';
import { format } from 'prettier';
import * as sc from 'styled-components';

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
  return formatAST(targetSheet);
}

export function renderGlobalCSS() {
  render(<v5.ThemeProvider />);

  const css = extractGlobalCSS();
  renderedCSS.add(css);

  return css;
}

function stripClassName(className: string): string {
  return className.replace(/\./, '');
}

function getClassNames() {
  let hashes = new Set();
  const sheet = parseStyleSheet();

  for (const rule of sheet.stylesheet?.rules || []) {
    // todo handle media?
    if ('selectors' in rule && rule.selectors) {
      hashes = new Set([...rule.selectors, ...hashes]);
    }
  }

  return hashes;
}

function getHashes() {
  const sheet = get(sc, ['__PRIVATE__', 'masterSheet']);

  if (!sheet) {
    throw new Error('Could neither find styled-components secret internals');
  }

  const hashes = new Set();

  for (const [mainHash, childHashSet] of sheet.names) {
    hashes.add(mainHash);

    for (const childHash of childHashSet) hashes.add(childHash);
  }

  return hashes;
}

export function renderCSS(ui: React.ReactElement, component: string) {
  render(<v5.ThemeProvider>{ui}</v5.ThemeProvider>);

  const sheet = parseStyleSheet();

  if (!sheet.stylesheet) {
    throw new Error('Cannot parse style sheet.');
  }

  const componentClassNames: string[][] = [];
  const elements = Array.from(
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelectorAll(`[class*="${component}"]`),
  );

  for (const element of elements) {
    componentClassNames.push(Array.from(element.classList));
  }

  const rules = [];
  const hashes = getHashes();
  const globalClassNames = getClassNames();
  const componentHashes: Map<string, string[]> = new Map();
  const allClassNames = componentClassNames.flat();

  for (const classNames of componentClassNames) {
    for (const className of classNames) {
      if (globalClassNames.has(generateClassSelector(className))) {
        componentHashes.set(className, classNames);
      }
    }
  }

  function filterRule(rule: Rule): boolean {
    const { selectors = [] } = rule;

    return (
      !!rule.declarations?.length &&
      selectors.some((className) => {
        return allClassNames.includes(stripClassName(className));
      })
    );
  }

  for (const rule of sheet.stylesheet.rules) {
    if ('media' in rule && 'rules' in rule) {
      const atRules = rule.rules?.filter(filterRule);

      if (atRules?.length) {
        rule.rules = atRules;
        rules.push(rule);
      }
    }

    if ('selectors' in rule && filterRule(rule)) {
      rules.push(rule);
    }
  }

  sheet.stylesheet.rules = rules;

  let css = formatAST(sheet);

  for (const [hash, classNames] of componentHashes.entries()) {
    const formattedClassName = classNames.filter((className) => {
      return !hashes.has(className);
    });

    css = css.replaceAll(
      generateClassSelector(hash),
      generateClassSelector(...formattedClassName),
    );
  }

  return css;
}

function generateClassSelector(...classNames: string[]) {
  return '.' + classNames.join('.');
}
