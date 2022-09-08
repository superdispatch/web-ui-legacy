import { Pagination } from '@material-ui/lab';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiPagination?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiPaginationItem?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(renderCSS(<Pagination />)).toMatchInlineSnapshot(`
    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }
  `);
});
