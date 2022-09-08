import { Color, ThemeProvider } from '@superdispatch/ui/pkg/dist-types';
import { render } from '@testing-library/react';
import {
  AtRule,
  Comment,
  parse as parseCSS,
  Rule,
  stringify as stringifyCSS,
  Stylesheet,
} from 'css';
import { styleSheetSerializer } from 'jest-styled-components';
import { identity } from 'lodash';
import { format } from 'prettier';
import { ReactElement } from 'react';
import { extractCSS } from '../renderCSS';

const colors = new Map<string, string>(
  Object.entries(Color).flatMap(([k, v]) => [
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
  render(<ThemeProvider />);

  const css = extractGlobalCSS();
  renderedCSS.add(css);

  return css;
}

export function renderCSS(ui: ReactElement, displayNames?: string[]) {
  let firstUnmatchedClass: string | undefined;
  let classNameMaxIndex = 0;

  render(<ThemeProvider>{ui}</ThemeProvider>);

  styleSheetSerializer.setStyleSheetSerializerOptions({
    addStyles: true,
    classNameFormatter(index, className) {
      if (!displayNames) {
        return `c${index + 1}`;
      }

      const formattedClass = displayNames[index];
      classNameMaxIndex = Math.max(classNameMaxIndex, index);

      if (!formattedClass) {
        firstUnmatchedClass ||= className;
        return className;
      }

      return formattedClass;
    },
  });

  let css = styleSheetSerializer.print(
    document.body,
    () => '', // do not print code
    identity,
    {} as any,
    {} as any,
  );

  if (firstUnmatchedClass) {
    const associatedStyles = getStyleByClass(firstUnmatchedClass, css);
    const associatedClasses = Array.from(
      document.getElementsByClassName(firstUnmatchedClass),
      (el) => Array.from(el.classList).join(','),
    ).join('\n');

    throw Error(
      `renderCSS: Unmatched class "${firstUnmatchedClass}" \n\n Associated classes: ${associatedClasses} \n\n Associated styles: \n\n "${associatedStyles}"`,
    );
  }

  if (displayNames && displayNames.length !== classNameMaxIndex + 1) {
    throw RangeError(
      `renderCSS: displayNames out of range. Expected ${
        classNameMaxIndex + 1
      } but got ${displayNames.length}`,
    );
  }

  css = replaceThemeColors(css).trim();
  renderedCSS.add(css);

  return css;
}

export function renderStyles(ui: ReactElement, components: string[]): string {
  render(<ThemeProvider>{ui}</ThemeProvider>);

  return extractCSS(components);
}

function getStyleByClass(className: string, css: string) {
  const targetSheet = parseCSS(css);

  if (!targetSheet.stylesheet) {
    throw new Error('There are no stylesheet.');
  }

  function filterRules(rules: Array<Rule | Comment | AtRule>) {
    return rules.filter((rule) => {
      if ('selectors' in rule) {
        return rule.selectors?.some((selector) => {
          return (
            selector === `.${className}` ||
            new RegExp(`\\.${className}\\W`).test(selector)
          );
        });
      }
      if ('rules' in rule && rule.rules) {
        rule.rules = filterRules(rule.rules);

        if (rule.rules.length > 0) {
          return true;
        }
      }
      return false;
    });
  }

  targetSheet.stylesheet.rules = filterRules(targetSheet.stylesheet.rules);

  return formatAST(targetSheet);
}
