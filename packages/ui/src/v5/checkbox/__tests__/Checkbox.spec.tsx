import { Checkbox } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiCheckbox?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "checkedIcon": <ForwardRef(SvgIcon)>
        <rect
          fill="currentColor"
          height="18"
          rx="2"
          width="18"
          x="3"
          y="3"
        />
        <path
          d="M15.73 8l-.63.63c-1.43 1.43-2.94 3.05-4.37 4.5l-1.9-1.57-.7-.57L7 12.38l.7.57 2.53 2.09.63.52.58-.58c1.6-1.62 3.35-3.5 4.93-5.08l.63-.63L15.73 8z"
          fill="#fff"
        />
      </ForwardRef(SvgIcon)>,
      "color": "primary",
      "icon": <ForwardRef(SvgIcon)>
        <rect
          fill="#fff"
          height="17"
          rx="1.5"
          stroke="currentColor"
          width="17"
          x="3.5"
          y="3.5"
        />
      </ForwardRef(SvgIcon)>,
      "indeterminateIcon": <ForwardRef(SvgIcon)>
        <rect
          fill="currentIcon"
          height="18"
          rx="2"
          width="18"
          x="3"
          y="3"
        />
        <path
          d="M7 11h10v2H7v-2z"
          fill="#fff"
        />
      </ForwardRef(SvgIcon)>,
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(<Checkbox />, [
      'MuiCheckbox',
      'SwitchBase-root',
      'MuiCheckbox-colorPrimary',
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

    .MuiCheckbox {
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

    .MuiCheckbox::-moz-focus-inner {
      border-style: none;
    }

    .MuiCheckbox.Mui-disabled {
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

    .MuiCheckbox-colorPrimary {
      color: Color.Dark200;
      color: Color.Dark100;
      margin-top: -5px;
      margin-bottom: -5px;
    }

    .MuiCheckbox-colorPrimary:hover {
      background-color: rgba(0,117,255,0.04);
    }

    .MuiCheckbox-colorPrimary.Mui-checked,
    .MuiCheckbox-colorPrimary.MuiCheckbox-indeterminate {
      color: Color.Blue300;
    }

    .MuiCheckbox-colorPrimary.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiCheckbox-colorPrimary.Mui-checked.Mui-disabled {
      color: Color.Silver500;
    }

    @media (min-width:600px) {
      .MuiSvgIcon-root {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media print {
      .MuiCheckbox {
        color-adjust: exact;
      }
    }

    @media (hover:none) {
      .MuiCheckbox-colorPrimary:hover {
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
