import { renderCSS } from '@superdispatch/ui-testutils';

it('checks component css', () => {
  expect(renderCSS(<div />, ['MuiCssBaseline'])).toMatchInlineSnapshot(`
    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    strong,
    b {
      font-weight: 600;
    }

    body {
      color: Color.Dark500;
      margin: 0;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 20px;
      background-color: #fafafa;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      body {
        font-size: 16px;
        line-height: 24px;
      }
    }

    body.MuiTypography-colorError {
      color: Color.Red500;
    }

    body.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    @media print {
      body {
        background-color: Color.White;
      }
    }

    body::backdrop {
      background-color: #fafafa;
    }
  `);
});
