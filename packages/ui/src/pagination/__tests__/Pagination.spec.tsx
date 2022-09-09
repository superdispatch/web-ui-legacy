import { Pagination } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiPagination?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiPaginationItem?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(renderCSS(<Pagination />)).toMatchInlineSnapshot(`
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
      font-size: 1.5rem;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
    }

    .c7 {
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

    .c3 {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      border-radius: 16px;
      text-align: center;
      box-sizing: border-box;
      min-width: 32px;
      height: 32px;
      padding: 0 6px;
      margin: 0 3px;
      color: Color.Dark500;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Dark400;
    }

    .c3.Mui-focusVisible {
      background-color: rgba(0,0,0,0.12);
    }

    .c3.Mui-disabled {
      opacity: 0.38;
    }

    .c3:hover {
      background-color: Color.Silver100;
    }

    .c3.Mui-selected {
      background-color: Color.Silver300;
    }

    .c3.Mui-selected:hover {
      background-color: rgba(232,236,240,0.12);
    }

    .c3.Mui-selected.Mui-focusVisible {
      background-color: rgba(232,236,240,0.2);
    }

    .c3.Mui-selected.Mui-disabled {
      opacity: 1;
      color: Color.Silver400;
      background-color: Color.Silver300;
    }

    .c3.Mui-selected.Mui-disabled {
      color: Color.Silver400;
    }

    .c6 {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      border-radius: 16px;
      text-align: center;
      box-sizing: border-box;
      min-width: 32px;
      height: 32px;
      padding: 0 6px;
      margin: 0 3px;
      color: Color.Dark500;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Dark400;
    }

    .c6.Mui-focusVisible {
      background-color: rgba(0,0,0,0.12);
    }

    .c6.Mui-disabled {
      opacity: 0.38;
    }

    .c6:hover {
      background-color: Color.Silver100;
    }

    .c6.Mui-selected {
      background-color: Color.Silver300;
    }

    .c6.Mui-selected:hover {
      background-color: rgba(232,236,240,0.12);
    }

    .c6.Mui-selected.Mui-focusVisible {
      background-color: rgba(232,236,240,0.2);
    }

    .c6.Mui-selected.Mui-disabled {
      opacity: 1;
      color: Color.Silver400;
      background-color: Color.Silver300;
    }

    .c6.Mui-selected.Mui-disabled {
      color: Color.Silver400;
    }

    .c6:hover {
      background-color: Color.Silver200;
    }

    .c6.Mui-focusVisible {
      border-radius: 4px;
      background-color: Color.White;
      border: 1px solid Color.Blue100;
    }

    .c6.Mui-selected {
      background-color: Color.Silver400;
    }

    .c6.Mui-selected:hover,
    .c6.Mui-selected.Mui-focusVisible {
      background-color: Color.Silver400;
    }

    .c6.Mui-selected.Mui-disabled {
      color: Color.Dark100;
      background-color: Color.Silver400;
    }

    .c6.Mui-disabled {
      opacity: 1;
      color: Color.Dark100;
    }

    .c5 {
      font-size: 1.25rem;
      margin: 0 -8px;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    @media (min-width:600px) {
      .c4 {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media print {
      .c2 {
        color-adjust: exact;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c3 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .c3:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .c3.Mui-selected:hover {
        background-color: Color.Silver300;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c6 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .c6:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .c6.Mui-selected:hover {
        background-color: Color.Silver300;
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
