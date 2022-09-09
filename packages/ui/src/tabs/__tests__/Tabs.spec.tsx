import { Tab, Tabs } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiTabs?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "indicatorColor": "primary",
      "textColor": "primary",
      "variant": "scrollable",
    }
  `);
  expect(components.MuiTab?.defaultProps).toMatchInlineSnapshot(`undefined`);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <Tabs value="tab" scrollButtons={true} allowScrollButtonsMobile={true}>
        <Tab value="tab" label="Text" />
      </Tabs>,
    ),
  ).toMatchInlineSnapshot(`
    .c4 {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -webkit-transition: fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      font-size: 1.25rem;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
      font-size: var(--mui-svg-icon-size,24px);
    }

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

    .c2 {
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

    .c2::-moz-focus-inner {
      border-style: none;
    }

    .c2.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .c9 {
      font-size: 14px;
      line-height: 1.25;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      max-width: 360px;
      min-width: 90px;
      position: relative;
      min-height: 48px;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      padding: 12px 16px;
      overflow: hidden;
      white-space: normal;
      text-align: center;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      color: Color.Dark200;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      min-height: 48px;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Dark500;
    }

    .c9.Mui-selected {
      color: Color.Blue300;
    }

    .c9.Mui-disabled {
      color: Color.Dark100;
    }

    .c9:hover,
    .c9:focus {
      color: Color.Blue300;
    }

    .c3 {
      width: 40px;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      opacity: 0.8;
    }

    .c3.Mui-disabled {
      opacity: 0;
    }

    .c1 {
      overflow: hidden;
      min-height: 48px;
      -webkit-overflow-scrolling: touch;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      min-height: 48px;
    }

    .c1 .MuiTabs-scrollButtons {
      opacity: 1;
      color: Color.Dark100;
      width: 32px;
      -webkit-transition: opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c7 {
      position: relative;
      display: inline-block;
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      white-space: nowrap;
      -webkit-scrollbar-width: none;
      -moz-scrollbar-width: none;
      -ms-scrollbar-width: none;
      scrollbar-width: none;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .c7::-webkit-scrollbar {
      display: none;
    }

    .c8 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c10 {
      position: absolute;
      height: 2px;
      bottom: 0;
      width: 100%;
      -webkit-transition: all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      background-color: Color.Blue300;
    }

    .c6 {
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-scrollbar-width: none;
      -moz-scrollbar-width: none;
      -ms-scrollbar-width: none;
      scrollbar-width: none;
    }

    .c6::-webkit-scrollbar {
      display: none;
    }

    @media (min-width:600px) {
      .c4 {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .c4 {
        font-size: var(--mui-svg-icon-size,16px);
      }
    }

    @media print {
      .c2 {
        color-adjust: exact;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c9 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c9 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .c9 {
        min-width: unset;
        font-size: unset;
        padding: 6px 24px;
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
