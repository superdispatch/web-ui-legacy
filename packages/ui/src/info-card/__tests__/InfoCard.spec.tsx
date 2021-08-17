import { renderCSS } from '@superdispatch/ui-testutils';
import { InfoCard } from '../..';

it('checks component css', () => {
  expect(renderCSS(<InfoCard />, ['SD-InfoCard'])).toMatchInlineSnapshot(`
    .SD-InfoCard-root.SD-InfoCard-fullWidth {
      border-radius: 0;
      border-left-width: 0;
      border-right-width: 0;
    }
    
    .SD-InfoCard-content {
      padding: 16px;
    }

    @media (min-width: 600px) {
      .SD-InfoCard-sizeLarge > .SD-InfoCard-content {
        padding: 24px;
      }
    }
  `);
});
