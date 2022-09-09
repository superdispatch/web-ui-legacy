import { Link } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

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
