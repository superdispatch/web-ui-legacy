import { v5 } from '@superdispatch/ui-testutils';
import { PhoneFieldMenuItem } from './PhoneFieldMenuItem';

const { renderStyles } = v5;

test('css', () => {
  expect(
    renderStyles(<PhoneFieldMenuItem country="US" />, [
      'SD-PhoneFieldMenuItem',
    ]),
  ).toMatchInlineSnapshot(`
    .SD-PhoneFieldMenuItem-flag {
      margin-right: 8px;
    }
  `);
});
