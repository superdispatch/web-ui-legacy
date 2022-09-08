import { v5 } from '@superdispatch/ui-testutils';
import { AvatarButton } from '../AvatarButton';

it('checks component css', () => {
  expect(
    v5.renderCSS(<AvatarButton />, [
      'MuiButtonBase-root',
      'SD-AvatarButton',
      'MuiAvatar-root',
      'MuiSvgIcon-root',
      'MuiAvatar-fallback',
      'AvatarButton-overlay',
      'AvatarButton-overlay',
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

    .MuiButtonBase-root {
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

    .MuiButtonBase-root::-moz-focus-inner {
      border-style: none;
    }

    .MuiButtonBase-root.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .MuiAvatar-root {
      position: relative;
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
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      font-family: "Inter",sans-serif;
      font-size: 1.25rem;
      line-height: 1;
      border-radius: 50%;
      overflow: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: Color.White;
      background-color: #bdbdbd;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      text-transform: uppercase;
      width: 40px;
      height: 40px;
      color: Color.Dark300;
      background-color: Color.Silver300;
    }

    .MuiAvatar-fallback {
      width: 75%;
      height: 75%;
    }

    .AvatarButton-overlay {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
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
      border-radius: 50%;
      background-color: Color.Transparent;
      -webkit-transition: background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .AvatarButton-overlay > svg {
      opacity: 0;
      color: Color.White;
      -webkit-transition: opacity 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      font-size: 24px;
    }

    .SD-AvatarButton {
      border-radius: 50%;
    }

    .SD-AvatarButton[disabled] > .AvatarButton-overlay,
    .SD-AvatarButton[aria-busy="true"] > .AvatarButton-overlay {
      background-color: Color.White50;
    }

    .SD-AvatarButton:not([disabled])[aria-busy="false"]:hover[data-with-icon="true"] > .AvatarButton-overlay,
    .SD-AvatarButton:not([disabled])[aria-busy="false"]:focus[data-with-icon="true"] > .AvatarButton-overlay {
      background-color: Color.Black50;
    }

    .SD-AvatarButton:not([disabled])[aria-busy="false"]:hover[data-with-icon="true"] > .AvatarButton-overlay > svg,
    .SD-AvatarButton:not([disabled])[aria-busy="false"]:focus[data-with-icon="true"] > .AvatarButton-overlay > svg {
      opacity: 1;
    }

    .SD-AvatarButton:not([disabled])[aria-busy="false"]:hover:not([data-with-icon="true"]) > .AvatarButton-overlay,
    .SD-AvatarButton:not([disabled])[aria-busy="false"]:focus:not([data-with-icon="true"]) > .AvatarButton-overlay {
      background-color: Color.Black20;
    }

    .SD-AvatarButton[data-size-large="true"] > .MuiAvatar-root {
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      font-family: "Inter",sans-serif;
      width: 56px;
      height: 56px;
    }

    .SD-AvatarButton[data-size-large="true"] > .AvatarButton-overlay > svg {
      font-size: 32px;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:600px) {
      .MuiSvgIcon-root {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media print {
      .MuiButtonBase-root {
        color-adjust: exact;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiAvatar-root {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiAvatar-root {
        width: 32px;
        height: 32px;
      }
    }

    @media (min-width:600px) {
      .AvatarButton-overlay > svg {
        font-size: 16px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .SD-AvatarButton[data-size-large="true"] > .MuiAvatar-root {
        font-size: 22px;
        line-height: 26px;
      }
    }

    @media (min-width:600px) {
      .SD-AvatarButton[data-size-large="true"] > .MuiAvatar-root {
        width: 64px;
        height: 64px;
      }
    }

    @media (min-width:600px) {

    }

    @media (min-width:600px) {
      .SD-AvatarButton[data-size-large="true"] > .AvatarButton-overlay > svg {
        font-size: 24px;
      }
    }
  `);
});
