import { Link } from '@material-ui/core';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiLink?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "color": "textPrimary",
      "underline": "none",
    }
  `);
});

it('checks component css', () => {
  expect(renderCSS(<Link>Text</Link>)).toMatchInlineSnapshot(`
    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }
  `);
});
