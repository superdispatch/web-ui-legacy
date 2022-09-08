import { Menu, MenuItem } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiMenu?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "anchorOrigin": Object {
        "horizontal": "left",
        "vertical": "bottom",
      },
      "transformOrigin": Object {
        "horizontal": "left",
        "vertical": "top",
      },
    }
  `);
  expect(components.MuiMenuItem?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(
    renderCSS(
      <Menu open={true} anchorEl={document.body}>
        <MenuItem />
      </Menu>,
      [
        'MuiPaper-root,.MuiPopover-paper',
        'MuiBackdrop-root',
        'MuiModal-backdrop',
        'MuiPaper-root,.MuiPopover-paper',
        'MuiMenu-paper',
        'MuiPaper-root,.MuiPopover-paper',
        'MuiPaper-root,.MuiPopover-paper',
        'MuiList-root',
        'MuiMenu-list',
        'MuiMenuItem-root,.MuiButtonBase-root',
        'MuiMenuItem-root,.MuiButtonBase-root',
        'MuiTouchRipple-root-',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiPaper-root,.MuiPopover-paper {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border-radius: 4px;
      box-shadow: 0px 5px 5px -3px Color.Black20,0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
    }

    .MuiPaper-root,.MuiPopover-paper {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border-radius: 4px;
      box-shadow: none;
      border: 1px solid Color.Silver400;
    }

    .MuiTouchRipple-root- {
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

    .MuiMenuItem-root,.MuiButtonBase-root {
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

    .MuiMenuItem-root,.MuiButtonBase-root::-moz-focus-inner {
      border-style: none;
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .MuiBackdrop-root {
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
      background-color: transparent;
      -webkit-tap-highlight-color: transparent;
    }

    .MuiPaper-root,.MuiPopover-paper {
      position: fixed;
      z-index: 1300;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
    }

    .MuiModal-backdrop {
      z-index: -1;
    }

    .MuiList-root {
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .MuiPaper-root,.MuiPopover-paper {
      position: absolute;
      overflow-y: auto;
      overflow-x: hidden;
      min-width: 16px;
      min-height: 16px;
      max-width: calc(100% - 32px);
      max-height: calc(100% - 32px);
      outline: 0;
    }

    .MuiMenu-paper {
      max-height: calc(100% - 96px);
      -webkit-overflow-scrolling: touch;
    }

    .MuiMenu-list {
      outline: 0;
    }

    .MuiMenuItem-root,.MuiButtonBase-root {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      min-height: 48px;
      padding-top: 6px;
      padding-bottom: 6px;
      box-sizing: border-box;
      white-space: nowrap;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .MuiMenuItem-root,.MuiButtonBase-root:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: Color.Silver100;
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected {
      background-color: rgba(0,117,255,0.08);
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected.Mui-focusVisible {
      background-color: rgba(0,117,255,0.2);
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected:hover {
      background-color: rgba(0,117,255,0.12);
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-focusVisible {
      background-color: rgba(0,0,0,0.12);
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-disabled {
      opacity: 0.38;
    }

    .MuiMenuItem-root,.MuiButtonBase-root + .MuiDivider-root {
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .MuiMenuItem-root,.MuiButtonBase-root + .MuiDivider-inset {
      margin-left: 52px;
    }

    .MuiMenuItem-root,.MuiButtonBase-root .MuiListItemText-root {
      margin-top: 0;
      margin-bottom: 0;
    }

    .MuiMenuItem-root,.MuiButtonBase-root .MuiListItemText-inset {
      padding-left: 36px;
    }

    .MuiMenuItem-root,.MuiButtonBase-root .MuiListItemIcon-root {
      min-width: 36px;
    }

    .MuiMenuItem-root,.MuiButtonBase-root .MuiTouchRipple-root {
      color: Color.Blue100;
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected,
    .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected:hover {
      background-color: Color.Blue50;
    }

    .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected.Mui-focusVisible,
    .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected:hover.Mui-focusVisible {
      background-color: Color.Blue50;
    }

    @media print {
      .MuiMenuItem-root,.MuiButtonBase-root {
        color-adjust: exact;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiMenuItem-root,.MuiButtonBase-root {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiMenuItem-root,.MuiButtonBase-root:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiMenuItem-root,.MuiButtonBase-root.Mui-selected:hover {
        background-color: rgba(0,117,255,0.08);
      }
    }

    @media (min-width:600px) {
      .MuiMenuItem-root,.MuiButtonBase-root {
        min-height: auto;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiMenuItem-root,.MuiButtonBase-root {
        font-size: 16px;
        line-height: 24px;
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
