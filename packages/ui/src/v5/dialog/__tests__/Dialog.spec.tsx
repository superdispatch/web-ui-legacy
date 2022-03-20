import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiDialog?.defaultProps).toMatchInlineSnapshot(`undefined`);
  expect(components.MuiDialogTitle?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiDialogContent?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiDialogActions?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(
    renderCSS(
      <Dialog open={true}>
        <DialogTitle>Text</DialogTitle>
        <DialogContent />
        <DialogActions />
      </Dialog>,
    ),
  ).toMatchInlineSnapshot(`
    .c6 {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border-radius: 4px;
      box-shadow: 0px 11px 15px -7px Color.Black20,0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
    }

    .c8 {
      margin: 0;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      -webkit-letter-spacing: 0.1em;
      -moz-letter-spacing: 0.1em;
      -ms-letter-spacing: 0.1em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: "Inter",sans-serif;
    }

    .c3 {
      position: fixed;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      background-color: Color.Black50;
      -webkit-tap-highlight-color: transparent;
    }

    .c1 {
      position: fixed;
      z-index: 1300;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
    }

    .c4 {
      z-index: -1;
    }

    .c5 {
      height: 100%;
      outline: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c7 {
      margin: 32px;
      position: relative;
      overflow-y: auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      max-height: calc(100% - 64px);
      max-width: 600px;
      margin: 24px;
    }

    .c12 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 8px;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding: 24px;
    }

    .c12 > :not(:first-of-type) {
      margin-left: 8px;
    }

    .c12 > :not(:first-child) {
      margin-left: 16px;
    }

    .c11 {
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      -webkit-overflow-scrolling: touch;
      overflow-y: auto;
      padding: 20px 24px;
      padding: 0px 24px;
    }

    .MuiDialogTitle-root + .c10 {
      padding-top: 0;
    }

    .c9 {
      padding: 16px 24px;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c8 {
        font-size: 14px;
        line-height: 20px;
      }
    }

    @media print {
      .c2 {
        position: absolute !important;
      }
    }

    @media print {
      .c5 {
        height: auto;
      }
    }

    @media print {
      .c7 {
        overflow-y: visible;
        box-shadow: none;
      }
    }

    @media (max-width:663.95px) {
      .c7.MuiDialog-paperScrollBody {
        max-width: calc(100% - 64px);
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
