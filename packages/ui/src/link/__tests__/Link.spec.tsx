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
    .c1 {
      margin: 0;
      color: Color.Dark500;
    }

    .c2 {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-size: 100% 1px;
      background-repeat: repeat-x;
      background-position: 0 100%;
      background-color: Color.Transparent;
    }

    .c2:focus {
      outline: none;
    }

    .c2:hover,
    .c2:active {
      background-image: linear-gradient(to right,currentColor 0%,currentColor 100%);
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }
  `);
});
