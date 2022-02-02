import { IconButton } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiIconButton?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <IconButton />
        <IconButton color="inherit" />
        <IconButton color="primary" />
        <IconButton color="secondary" />
        <IconButton size="small" />
        <IconButton size="large" />
        <IconButton edge="end" />
        <IconButton edge="start" />
        <IconButton disabled={true} />
        <IconButton disableRipple={true} />
      </div>,
      [
        'MuiButtonBase-root',
        'MuiIconButton-root',
        'MuiTouchRipple',
        'MuiIconButton-colorInherit',
        'MuiIconButton-disabled',
        'MuiIconButton-colorSecondary',
        'MuiIconButton-sizeSmall',
        'MuiIconButton-sizeLarge',
        'MuiIconButton-edgeEnd',
        'MuiIconButton-edgeStart',
        '?',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiTouchRipple {
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

    .MuiIconButton-root {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiIconButton-root:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-root.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-root:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-root:active {
      color: Color.Dark500;
    }

    .MuiIconButton-root:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-root:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-root.Mui-disabled {
      color: Color.Silver500;
    }

    .MuiIconButton-colorInherit {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: inherit;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: inherit;
    }

    .MuiIconButton-colorInherit:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-colorInherit.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-colorInherit:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-colorInherit:active {
      color: Color.Dark500;
    }

    .MuiIconButton-colorInherit:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-colorInherit:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-colorInherit.Mui-disabled {
      color: Color.Silver500;
    }

    .MuiIconButton-disabled {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Blue300;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiIconButton-disabled:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-disabled:hover {
      background-color: rgba(0,117,255,0.04);
    }

    .MuiIconButton-disabled.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-disabled:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-disabled:active {
      color: Color.Dark500;
    }

    .MuiIconButton-disabled:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-disabled:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-disabled.Mui-disabled {
      color: Color.Silver500;
    }

    .MuiIconButton-disabled:active {
      color: Color.Blue500;
    }

    .MuiIconButton-disabled:hover {
      color: Color.Blue300;
    }

    .MuiIconButton-disabled:focus {
      background-color: Color.Blue50;
    }

    .MuiIconButton-colorSecondary {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: #9c27b0;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiIconButton-colorSecondary:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-colorSecondary:hover {
      background-color: rgba(156,39,176,0.04);
    }

    .MuiIconButton-colorSecondary.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-colorSecondary:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-colorSecondary:active {
      color: Color.Dark500;
    }

    .MuiIconButton-colorSecondary:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-colorSecondary:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-colorSecondary.Mui-disabled {
      color: Color.Silver500;
    }

    .MuiIconButton-sizeSmall {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 5px;
      font-size: 1.125rem;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiIconButton-sizeSmall:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-sizeSmall.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-sizeSmall:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-sizeSmall:active {
      color: Color.Dark500;
    }

    .MuiIconButton-sizeSmall:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-sizeSmall:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-sizeSmall.Mui-disabled {
      color: Color.Silver500;
    }

    .MuiIconButton-sizeLarge {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 12px;
      font-size: 1.75rem;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiIconButton-sizeLarge:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-sizeLarge.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-sizeLarge:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-sizeLarge:active {
      color: Color.Dark500;
    }

    .MuiIconButton-sizeLarge:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-sizeLarge:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-sizeLarge.Mui-disabled {
      color: Color.Silver500;
    }

    .MuiIconButton-edgeEnd {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      margin-right: -12px;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      margin-right: -8px;
    }

    .MuiIconButton-edgeEnd:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-edgeEnd.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-edgeEnd:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-edgeEnd:active {
      color: Color.Dark500;
    }

    .MuiIconButton-edgeEnd:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-edgeEnd:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-edgeEnd.Mui-disabled {
      color: Color.Silver500;
    }

    .MuiIconButton-edgeStart {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      margin-left: -12px;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      margin-left: -8px;
    }

    .MuiIconButton-edgeStart:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .MuiIconButton-edgeStart.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .MuiIconButton-edgeStart:hover {
      background-color: Color.Transparent;
    }

    .MuiIconButton-edgeStart:active {
      color: Color.Dark500;
    }

    .MuiIconButton-edgeStart:hover {
      color: Color.Dark300;
    }

    .MuiIconButton-edgeStart:focus {
      background-color: Color.Silver400;
    }

    .MuiIconButton-edgeStart.Mui-disabled {
      color: Color.Silver500;
    }

    .? {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Dark100;
      background-color: Color.Transparent;
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .?.Mui-disabled {
      background-color: transparent;
      color: Color.Silver400;
    }

    .?:hover {
      background-color: Color.Transparent;
    }

    .?:active {
      color: Color.Dark500;
    }

    .?:hover {
      color: Color.Dark300;
    }

    .?:focus {
      background-color: Color.Silver400;
    }

    .?.Mui-disabled {
      color: Color.Silver500;
    }

    @media print {
      .MuiButtonBase-root {
        color-adjust: exact;
      }
    }

    @media (hover:none) {
      .MuiIconButton-root:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-colorInherit:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-disabled:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-disabled:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-colorSecondary:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-colorSecondary:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-sizeSmall:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-sizeLarge:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-edgeEnd:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .MuiIconButton-edgeStart:hover {
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
