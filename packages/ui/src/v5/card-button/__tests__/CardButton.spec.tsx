import { v5 } from '@superdispatch/ui-testutils';
import { CardButton } from '../..';

it('checks component css', () => {
  expect(v5.renderCSS(<CardButton />)).toMatchInlineSnapshot(`
    .c5 {
      overflow: hidden;
      pointer-events: none;
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
    }

    .c1 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      outline: 0;
      border: 0;
      margin: 0;
      border-radius: 0;
      padding: 0;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      vertical-align: middle;
      -moz-appearance: none;
      -webkit-appearance: none;
      -webkit-text-decoration: none;
      text-decoration: none;
      color: inherit;
    }

    .c1::-moz-focus-inner {
      border-style: none;
    }

    .c1.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .c3 {
      margin: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      font-family: "Inter",sans-serif;
      color: inherit;
    }

    .c2 {
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      background-color: Color.White;
      border: 1px dashed;
      border-radius: 4px;
      padding: 12px;
      min-height: 104px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c2[data-disabled="true"] {
      color: Color.Dark200;
      border-color: Color.Silver500;
      background-color: Color.Silver100;
    }

    .c2[data-primary="true"] {
      color: Color.Blue300;
      border-color: Color.Silver500;
    }

    .c2[data-primary="true"]:focus {
      background-color: Color.Blue50;
    }

    .c2[data-primary="true"]:hover,
    .c2[data-primary="true"]:active {
      border-color: Color.Blue300;
      background-color: Color.Blue50;
    }

    .c2[data-error="true"] {
      color: Color.Red300;
      border-color: Color.Red300;
      background-color: Color.Red50;
    }

    .c2[data-error="true"]:focus {
      background-color: Color.Red75;
    }

    .c2[data-size="small"] {
      min-height: 48px;
    }

    .c2[data-size="large"] {
      min-height: 140px;
    }

    .c4 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {
      .c1 {
        color-adjust: exact;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c3 {
        font-size: 17px;
        line-height: 26px;
      }
    }
  `);
});
