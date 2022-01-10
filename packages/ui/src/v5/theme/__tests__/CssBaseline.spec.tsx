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
      font-weight: 600;
    }

    body {
      margin: 0;
      color: Color.Dark500;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      background-color: Color.White;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      body {
        font-size: 16px;
        line-height: 24px;
      }
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
