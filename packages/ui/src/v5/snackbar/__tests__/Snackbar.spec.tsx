import { v5 } from '@superdispatch/ui-testutils';
import { Snackbar } from '../../index';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiSnackbar?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "anchorOrigin": Object {
        "horizontal": "center",
        "vertical": "bottom",
      },
    }
  `);
  expect(components.MuiSnackbarContent?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(renderCSS(<Snackbar open={true} />)).toMatchInlineSnapshot(`
    .c2 {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      box-shadow: 0px 3px 5px -1px Color.Black20,0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
    }

    .c3 {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: Color.White;
      background-color: rgb(50,50,50);
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      padding: 6px 16px;
      border-radius: 4px;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      width: 100%;
      border-radius: 0;
      min-height: 60px;
    }

    .c4 {
      padding: 8px 0;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c1 {
      z-index: 1400;
      position: fixed;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      left: 8px;
      right: 8px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      bottom: 8px;
      left: 0;
      right: 0;
      bottom: 0;
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c3 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .c3 {
        -webkit-box-flex: initial;
        -webkit-flex-grow: initial;
        -ms-flex-positive: initial;
        flex-grow: initial;
        min-width: 288px;
      }
    }

    @media (min-width:600px) {
      .c3 {
        width: 432px;
        max-width: 432px;
        border-radius: 4px;
      }
    }

    @media (min-width:600px) {
      .c1 {
        bottom: 24px;
        left: 50%;
        right: auto;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }
  `);
});
