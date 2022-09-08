import { Radio } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiRadio?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "checkedIcon": <ForwardRef(SvgIcon)>
        <circle
          cx="12"
          cy="12"
          fill="currentColor"
          r="8.5"
          stroke="currentColor"
        />
        <circle
          cx="12"
          cy="12"
          fill="#fff"
          r="4"
        />
      </ForwardRef(SvgIcon)>,
      "color": "primary",
      "icon": <ForwardRef(SvgIcon)>
        <circle
          cx="12"
          cy="12"
          fill="#fff"
          r="8.5"
          stroke="currentColor"
        />
      </ForwardRef(SvgIcon)>,
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(<Radio />, [
      'MuiRadio',
      'SwitchBase-root',
      'MuiRadio-root',
      'SwitchBase-input',
      'MuiSvgIcon-root',
      'MuiTouchRipple-root',
    ]),
  ).toMatchInlineSnapshot(`
    .MuiSvgIcon-root {
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

    .MuiTouchRipple-root {
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

    .MuiRadio {
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

    .MuiRadio::-moz-focus-inner {
      border-style: none;
    }

    .MuiRadio.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .SwitchBase-root {
      padding: 9px;
      border-radius: 50%;
    }

    .SwitchBase-input {
      cursor: inherit;
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 1;
    }

    .MuiRadio-root {
      color: Color.Dark200;
      color: Color.Dark100;
      margin-top: -5px;
      margin-bottom: -5px;
    }

    .MuiRadio-root:hover {
      background-color: rgba(0,117,255,0.04);
    }

    .MuiRadio-root.Mui-checked {
      color: Color.Blue300;
    }

    .MuiRadio-root.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiRadio-root.Mui-disabled.Mui-checked {
      color: Color.Silver500;
    }

    .MuiRadio-root:hover:not(.Mui-checked) {
      color: Color.Dark100;
    }

    @media (min-width:600px) {
      .MuiSvgIcon-root {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media print {
      .MuiRadio {
        color-adjust: exact;
      }
    }

    @media (hover:none) {
      .MuiRadio-root:hover {
        background-color: transparent;
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
