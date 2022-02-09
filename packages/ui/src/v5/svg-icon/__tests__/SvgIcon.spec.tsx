import { SvgIcon } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiSvgIcon?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <SvgIcon />

        <SvgIcon color="inherit" />
        <SvgIcon color="primary" />
        <SvgIcon color="secondary" />
        <SvgIcon color="error" />
        <SvgIcon color="action" />
        <SvgIcon color="disabled" />

        <SvgIcon fontSize="inherit" />
        <SvgIcon fontSize="small" />
        <SvgIcon fontSize="medium" />
        <SvgIcon fontSize="large" />
      </div>,
      [
        'MuiSvgIcon-root',
        'MuiSvgIcon-colorPrimary',
        'MuiSvgIcon-colorSecondary',
        'MuiSvgIcon-colorError',
        'MuiSvgIcon-colorAction',
        'MuiSvgIcon-colorDisabled',
        'MuiSvgIcon-fontSizeInherit',
        'MuiSvgIcon-fontSizeSmall',
        'MuiSvgIcon-fontSizeLarge',
      ],
    ),
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

    .MuiSvgIcon-colorPrimary {
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
      color: Color.Blue300;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
    }

    .MuiSvgIcon-colorSecondary {
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
      color: #9c27b0;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
    }

    .MuiSvgIcon-colorError {
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
      color: Color.Red300;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
    }

    .MuiSvgIcon-colorAction {
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
      color: rgba(0,0,0,0.54);
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
      color: Color.Dark100;
    }

    .MuiSvgIcon-colorDisabled {
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
      color: Color.Silver400;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
    }

    .MuiSvgIcon-fontSizeInherit {
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
      font-size: inherit;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
    }

    .MuiSvgIcon-fontSizeSmall {
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

    .MuiSvgIcon-fontSizeLarge {
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
      font-size: 2.1875rem;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
      font-size: var(--mui-svg-icon-size,32px);
    }

    @media (min-width:600px) {
      .MuiSvgIcon-root {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-colorPrimary {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-colorSecondary {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-colorError {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-colorAction {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-colorDisabled {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-fontSizeInherit {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-fontSizeSmall {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-fontSizeSmall {
        font-size: var(--mui-svg-icon-size,16px);
      }
    }

    @media (min-width:600px) {
      .MuiSvgIcon-fontSizeLarge {
        font-size: var(--mui-svg-icon-size,24px);
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
