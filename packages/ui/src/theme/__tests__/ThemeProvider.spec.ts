import { renderTheme } from '@superdispatch/ui-testutils';
import { Color, ColorV2 } from '../Color';

const colors = new Map<string, string>();

Object.entries(Color).forEach(([k, v]) => {
  colors.set(v, `Color.${k}`);
});

Object.entries(ColorV2).forEach(([k, v]) => {
  colors.set(v, `ColorV2.${k}`);
});

const colorRegExp = new RegExp(
  Array.from(colors.keys(), (x) =>
    x.replace('(', '\\(').replace(')', '\\)'),
  ).join('|'),
  'g',
);

expect.addSnapshotSerializer({
  test: (value) =>
    !!value && typeof value === 'string' && colorRegExp.test(value),
  print: (value) =>
    JSON.stringify(
      String(value).replace(
        colorRegExp,
        (color) => colors.get(color) as string,
      ),
    ),
});

it('exposes overridden theme', () => {
  const { props, overrides, typography, ...theme } = renderTheme();

  Object.entries(theme).forEach(([key, value]) => {
    expect(value).toMatchSnapshot(key);
  });
});

it('allows to modify overridden theme', () => {
  const modifier = jest.fn((x) => x);
  const view = renderTheme(modifier);

  expect(modifier).toHaveBeenCalledTimes(1);
  expect(modifier).toHaveBeenCalledWith(view);
});
