import { Drawer } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';
import { DrawerActions } from '../DrawerActions';
import { DrawerContent } from '../DrawerContent';
import { DrawerList } from '../DrawerList';
import { DrawerTitle } from '../DrawerTitle';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiDrawer?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "anchor": "right",
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <Drawer open={true}>
        <DrawerTitle title="Title" />
        <DrawerContent />
        <DrawerList />
        <DrawerActions />
      </Drawer>,
    ),
  ).toMatchInlineSnapshot(`
    .c5 {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      box-shadow: 0px 8px 10px -5px Color.Black20,0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
    }

    .c7 {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      box-shadow: none;
      border: 1px solid Color.Silver400;
    }

    .c14 {
      margin: 0;
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      font-family: "Inter",sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .c8 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: -webkit-sticky;
      position: sticky;
      z-index: 1100;
      top: 0;
      left: auto;
      right: 0;
      color: inherit;
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

    .c2 {
      z-index: 1200;
    }

    .c6 {
      overflow-y: auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 100%;
      -webkit-flex: 1 0 auto;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
      z-index: 1200;
      -webkit-overflow-scrolling: touch;
      position: fixed;
      top: 0;
      outline: 0;
      right: 0;
      max-width: 100%;
      min-width: 100%;
    }

    .c12 {
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
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c13 {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }

    .c16 {
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .c10 {
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

    .c18 {
      bottom: 0;
      top: auto;
      border-left: none;
      border-right: none;
      border-bottom: none;
      -webkit-transition: border-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: border-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c18:not([data-sticky="true"]) {
      border-top-color: Color.Transparent;
    }

    .c19.MuiToolbar-gutters {
      padding-left: 24px;
      padding-right: 24px;
    }

    .c15 {
      max-width: 100%;
      padding: 16px 24px;
    }

    .c17 {
      max-width: 100%;
    }

    .c17 .MuiListItem-gutters {
      padding-left: 24px;
      padding-right: 24px;
    }

    .c17 .MuiListItem-gutters.MuiListItem-secondaryAction {
      padding-right: 48px;
    }

    .c17 .MuiListItem-gutters .MuiListItemSecondaryAction-root {
      right: 24px;
    }

    .c17 .MuiListItem-gutters .MuiListItemSecondaryAction-root .MuiIconButton-edgeEnd {
      margin-right: -12px;
    }

    .c9 {
      border-top: none;
      border-left: none;
      border-right: none;
      -webkit-transition: border-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: border-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c9:not([data-sticky="true"]) {
      border-bottom-color: Color.Transparent;
    }

    .c11.MuiToolbar-gutters {
      padding-left: 24px;
      padding-right: 24px;
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c14 {
        font-size: 20px;
        line-height: 26px;
      }
    }

    @media (min-width:600px) {
      .c6 {
        min-width: 432px;
        max-width: 600px;
      }
    }

    @media (min-width:600px) {
      .c10 {
        padding-left: 24px;
        padding-right: 24px;
      }
    }

    @media (min-width:0px) and (orientation:landscape) {
      .c10 {
        min-height: 48px;
      }
    }

    @media (min-width:600px) {
      .c10 {
        min-height: 64px;
      }
    }

    @media (min-width:600px) {
      .c10 {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    @media (min-width:900px) {
      .c19.MuiToolbar-gutters {
        padding-left: 32px;
        padding-right: 32px;
      }
    }

    @media (min-width:900px) {
      .c15 {
        padding: 16px 32px;
      }
    }

    @media (min-width:900px) {
      .c17 .MuiListItem-gutters {
        padding-left: 32px;
        padding-right: 32px;
      }

      .c17 .MuiListItem-gutters.MuiListItem-secondaryAction {
        padding-right: 64px;
      }

      .c17 .MuiListItem-gutters .MuiListItemSecondaryAction-root {
        right: 32px;
      }

      .c17 .MuiListItem-gutters .MuiListItemSecondaryAction-root .MuiIconButton-edgeEnd {
        margin-right: -16px;
      }
    }

    @media (min-width:900px) {
      .c11.MuiToolbar-gutters {
        padding-left: 32px;
        padding-right: 32px;
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
