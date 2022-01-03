import { v5 } from '@superdispatch/ui-testutils';

it('checks component css', () => {
  expect(v5.renderGlobalCSS()).toMatchInlineSnapshot(`
    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    strong,
    b {
      font-weight: 700;
    }

    body {
      margin: 0;
      color: Color.Dark500;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      -webkit-letter-spacing: 0.00938em;
      -moz-letter-spacing: 0.00938em;
      -ms-letter-spacing: 0.00938em;
      letter-spacing: 0.00938em;
      background-color: Color.White;
    }

    @media print {
      body {
        background-color: Color.White;
      }
    }

    body::backdrop {
      background-color: Color.White;
    }
  `);
});
