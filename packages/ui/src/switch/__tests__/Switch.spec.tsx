import { Switch } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiSwitch?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "color": "primary",
      "disableFocusRipple": true,
      "disableRipple": true,
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(<Switch />, [
      'MuiSwitch',
      'MuiSwitch-switchBase',
      'SwitchBaseRoot',
      'SwitchSwitchBase',
      'SwitchBaseInput',
      'MuiSwitch-track',
      'MuiSwitch-track',
    ]),
  ).toMatchInlineSnapshot(`
    .MuiSwitch-switchBase {
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

    .MuiSwitch-switchBase::-moz-focus-inner {
      border-style: none;
    }

    .MuiSwitch-switchBase.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .SwitchBaseRoot {
      padding: 9px;
      border-radius: 50%;
    }

    .SwitchBaseInput {
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

    .MuiSwitch {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      width: 58px;
      height: 38px;
      overflow: hidden;
      padding: 12px;
      box-sizing: border-box;
      position: relative;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      z-index: 0;
      vertical-align: middle;
      width: 76px;
      height: 44px;
      padding: 6px 12px;
    }

    .SwitchSwitchBase {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      color: Color.White;
      -webkit-transition: left 150ms cubic-bezier(0.4,0,0.2,1) 0ms,-webkit-transform 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      -webkit-transition: left 150ms cubic-bezier(0.4,0,0.2,1) 0ms,transform 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: left 150ms cubic-bezier(0.4,0,0.2,1) 0ms,transform 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      left: 8px;
      padding: 10px 8px;
    }

    .SwitchSwitchBase.Mui-checked {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }

    .SwitchSwitchBase.Mui-disabled {
      color: #f5f5f5;
    }

    .SwitchSwitchBase.Mui-checked + .MuiSwitch-track {
      opacity: 0.5;
    }

    .SwitchSwitchBase.Mui-disabled + .MuiSwitch-track {
      opacity: 0.12;
    }

    .SwitchSwitchBase .MuiSwitch-input {
      left: -100%;
      width: 300%;
    }

    .SwitchSwitchBase:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .SwitchSwitchBase.Mui-checked {
      color: Color.Blue300;
    }

    .SwitchSwitchBase.Mui-checked:hover {
      background-color: rgba(0,117,255,0.04);
    }

    .SwitchSwitchBase.Mui-checked.Mui-disabled {
      color: rgb(158,202,255);
    }

    .SwitchSwitchBase.Mui-checked + .MuiSwitch-track {
      background-color: Color.Blue300;
    }

    .SwitchSwitchBase.Mui-checked {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }

    .SwitchSwitchBase.Mui-checked + .MuiSwitch-track {
      opacity: 1;
    }

    .SwitchSwitchBase.Mui-disabled + .MuiSwitch-track {
      opacity: 1;
    }

    .SwitchSwitchBase.Mui-checked:hover + .MuiSwitch-track {
      background-color: Color.Blue400;
    }

    .SwitchSwitchBase + .MuiSwitch-track {
      background-color: Color.Silver500;
    }

    .SwitchSwitchBase.Mui-disabled + .MuiSwitch-track {
      background-color: Color.Silver300;
    }

    .SwitchSwitchBase.Mui-checked.Mui-disabled + .MuiSwitch-track {
      background-color: Color.Blue100;
    }

    .SwitchSwitchBase:hover + .MuiSwitch-track {
      background-color: Color.Dark100;
    }

    .SwitchSwitchBase.Mui-focusVisible + .MuiSwitch-track {
      box-shadow: 0 0 0 3px Color.Blue100;
    }

    .MuiSwitch-track {
      height: 100%;
      width: 100%;
      border-radius: 7px;
      z-index: -1;
      -webkit-transition: opacity 150ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 150ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      background-color: Color.Black;
      opacity: 0.38;
      opacity: 1;
      box-shadow: 0 0 0 0 Color.Transparent;
      -webkit-transition: box-shadow 150ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 150ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border-radius: 16px;
    }

    .MuiSwitch-track {
      box-shadow: 0px 2px 1px -1px Color.Black20,0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
      background-color: currentColor;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: Color.White;
      box-shadow: none;
      width: 24px;
      height: 24px;
    }

    @media print {
      .MuiSwitch-switchBase {
        color-adjust: exact;
      }
    }

    @media print {
      .MuiSwitch {
        color-adjust: exact;
      }
    }

    @media (min-width:600px) {
      .MuiSwitch {
        width: 64px;
        height: 32px;
        padding: 4px 12px;
      }
    }

    @media (hover:none) {
      .SwitchSwitchBase:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .SwitchSwitchBase.Mui-checked:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .SwitchSwitchBase {
        padding: 8px;
      }
    }

    @media (min-width:600px) {
      .SwitchSwitchBase.Mui-checked {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
      }
    }

    @media (min-width:600px) {
      .MuiSwitch-track {
        border-radius: 13px;
      }
    }

    @media (min-width:600px) {
      .MuiSwitch-track {
        width: 16px;
        height: 16px;
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
