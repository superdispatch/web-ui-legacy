import { v5 } from '@superdispatch/ui-testutils';
import { AdaptiveToolbar } from '../AdaptiveToolbar';

it('checks component css', () => {
  expect(
    v5.renderCSS(<AdaptiveToolbar items={[]} />, [
      'MuiToolbar-root',
      'MuiGrid-root',
      'MuiGrid-item',
      'SD-AdaptiveToolbar-actions',
    ]),
  ).toMatchInlineSnapshot(`
    .MuiGrid-root {
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

    .MuiGrid-root > .MuiGrid-item {
      padding-top: 8px;
    }

    .MuiGrid-root > .MuiGrid-item {
      padding-left: 8px;
    }

    .MuiGrid-item {
      box-sizing: border-box;
      margin: 0;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .MuiToolbar-root {
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

    .SD-AdaptiveToolbar-actions {
      overflow: hidden;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:600px) {
      .MuiToolbar-root {
        padding-left: 24px;
        padding-right: 24px;
      }
    }

    @media (min-width:0px) and (orientation:landscape) {
      .MuiToolbar-root {
        min-height: 48px;
      }
    }

    @media (min-width:600px) {
      .MuiToolbar-root {
        min-height: 64px;
      }
    }

    @media (min-width:600px) {
      .MuiToolbar-root {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  `);
});
