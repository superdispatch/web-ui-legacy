import { renderCSS } from '@superdispatch/ui-testutils';
import { AdaptiveToolbar } from '../AdaptiveToolbar';

it('checks component css', () => {
  expect(renderCSS(<AdaptiveToolbar items={[]} />)).toMatchInlineSnapshot(`
    .c2 {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      width: 100%;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      margin-top: -8px;
      width: calc(100% + 8px);
      margin-left: -8px;
    }

    .c2 > .MuiGrid-item {
      padding-top: 8px;
    }

    .c2 > .MuiGrid-item {
      padding-left: 8px;
    }

    .c3 {
      box-sizing: border-box;
      margin: 0;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .c5 {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      width: 100%;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      margin-top: -8px;
      width: calc(100% + 8px);
      margin-left: -8px;
    }

    .c5 > .MuiGrid-item {
      padding-top: 8px;
    }

    .c5 > .MuiGrid-item {
      padding-left: 8px;
    }

    .c1 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      min-height: 56px;
      min-height: 64px;
    }

    .c4 {
      overflow: hidden;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:600px) {
      .c1 {
        padding-left: 24px;
        padding-right: 24px;
      }
    }

    @media (min-width:0px) and (orientation:landscape) {
      .c1 {
        min-height: 48px;
      }
    }

    @media (min-width:600px) {
      .c1 {
        min-height: 64px;
      }
    }

    @media (min-width:600px) {
      .c1 {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  `);
});
