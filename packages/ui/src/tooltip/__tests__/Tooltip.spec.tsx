import { Tooltip } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiTooltip?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "arrow": true,
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <Tooltip open={true} title="text">
          <div />
        </Tooltip>

        <Tooltip open={true} title="text" disableInteractive={true}>
          <div />
        </Tooltip>

        <Tooltip open={true} title="text" arrow={false}>
          <div />
        </Tooltip>
      </div>,
      [
        'MuiTooltip-popper',
        'MuiTooltip-arrow',
        'MuiTooltip-tooltipArrow',
        'MuiTooltip-arrow',
        'MuiTooltip-popperArrow',
        'MuiTooltip-popperInteractive',
        'MuiTooltip-tooltip',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiTooltip-popperArrow {
      z-index: 1500;
      pointer-events: none;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="bottom"] .MuiTooltip-arrow {
      top: 0;
      margin-top: -0.71em;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="bottom"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      transform-origin: 0 100%;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="top"] .MuiTooltip-arrow {
      bottom: 0;
      margin-bottom: -0.71em;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="top"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 100% 0;
      -ms-transform-origin: 100% 0;
      transform-origin: 100% 0;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="right"] .MuiTooltip-arrow {
      left: 0;
      margin-left: -0.71em;
      height: 1em;
      width: 0.71em;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="right"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="left"] .MuiTooltip-arrow {
      right: 0;
      margin-right: -0.71em;
      height: 1em;
      width: 0.71em;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="left"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="top"] .MuiTooltip-arrow::before {
      border-bottom-right-radius: 2px;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="left"] .MuiTooltip-arrow::before {
      border-top-right-radius: 2px;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="right"] .MuiTooltip-arrow::before {
      border-bottom-left-radius: 2px;
    }

    .MuiTooltip-popperArrow[data-popper-placement*="bottom"] .MuiTooltip-arrow::before {
      border-top-left-radius: 2px;
    }

    .MuiTooltip-popper {
      z-index: 1500;
      pointer-events: auto;
    }

    .MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-arrow {
      top: 0;
      margin-top: -0.71em;
    }

    .MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      transform-origin: 0 100%;
    }

    .MuiTooltip-popper[data-popper-placement*="top"] .MuiTooltip-arrow {
      bottom: 0;
      margin-bottom: -0.71em;
    }

    .MuiTooltip-popper[data-popper-placement*="top"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 100% 0;
      -ms-transform-origin: 100% 0;
      transform-origin: 100% 0;
    }

    .MuiTooltip-popper[data-popper-placement*="right"] .MuiTooltip-arrow {
      left: 0;
      margin-left: -0.71em;
      height: 1em;
      width: 0.71em;
    }

    .MuiTooltip-popper[data-popper-placement*="right"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }

    .MuiTooltip-popper[data-popper-placement*="left"] .MuiTooltip-arrow {
      right: 0;
      margin-right: -0.71em;
      height: 1em;
      width: 0.71em;
    }

    .MuiTooltip-popper[data-popper-placement*="left"] .MuiTooltip-arrow::before {
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
    }

    .MuiTooltip-popper[data-popper-placement*="top"] .MuiTooltip-arrow::before {
      border-bottom-right-radius: 2px;
    }

    .MuiTooltip-popper[data-popper-placement*="left"] .MuiTooltip-arrow::before {
      border-top-right-radius: 2px;
    }

    .MuiTooltip-popper[data-popper-placement*="right"] .MuiTooltip-arrow::before {
      border-bottom-left-radius: 2px;
    }

    .MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-arrow::before {
      border-top-left-radius: 2px;
    }

    .MuiTooltip-popperInteractive {
      z-index: 1500;
      pointer-events: auto;
    }

    .MuiTooltip-tooltipArrow {
      background-color: rgba(97,97,97,0.92);
      border-radius: 4px;
      color: Color.White;
      font-family: "Inter",sans-serif;
      padding: 4px 8px;
      font-size: 0.6875rem;
      max-width: 300px;
      margin: 0;
      word-wrap: break-word;
      font-weight: 500;
      position: relative;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      padding: 8px 12px;
      background-color: Color.Dark400;
    }

    .MuiTooltip-popper[data-popper-placement*="left"] .MuiTooltip-arrow {
      -webkit-transform-origin: right center;
      -ms-transform-origin: right center;
      transform-origin: right center;
      margin-right: 14px;
    }

    .MuiTooltip-popper[data-popper-placement*="right"] .MuiTooltip-arrow {
      -webkit-transform-origin: left center;
      -ms-transform-origin: left center;
      transform-origin: left center;
      margin-left: 14px;
    }

    .MuiTooltip-popper[data-popper-placement*="top"] .MuiTooltip-arrow {
      -webkit-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      transform-origin: center bottom;
      margin-bottom: 14px;
    }

    .MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-arrow {
      -webkit-transform-origin: center top;
      -ms-transform-origin: center top;
      transform-origin: center top;
      margin-top: 14px;
    }

    .MuiTooltip-tooltip {
      background-color: rgba(97,97,97,0.92);
      border-radius: 4px;
      color: Color.White;
      font-family: "Inter",sans-serif;
      padding: 4px 8px;
      font-size: 0.6875rem;
      max-width: 300px;
      margin: 2px;
      word-wrap: break-word;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      padding: 8px 12px;
      background-color: Color.Dark400;
    }

    .MuiTooltip-popper[data-popper-placement*="left"] .MuiTooltip-arrow {
      -webkit-transform-origin: right center;
      -ms-transform-origin: right center;
      transform-origin: right center;
      margin-right: 14px;
    }

    .MuiTooltip-popper[data-popper-placement*="right"] .MuiTooltip-arrow {
      -webkit-transform-origin: left center;
      -ms-transform-origin: left center;
      transform-origin: left center;
      margin-left: 14px;
    }

    .MuiTooltip-popper[data-popper-placement*="top"] .MuiTooltip-arrow {
      -webkit-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      transform-origin: center bottom;
      margin-bottom: 14px;
    }

    .MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-arrow {
      -webkit-transform-origin: center top;
      -ms-transform-origin: center top;
      transform-origin: center top;
      margin-top: 14px;
    }

    .MuiTooltip-arrow {
      overflow: hidden;
      position: absolute;
      width: 1em;
      height: 0.71em;
      box-sizing: border-box;
      color: rgba(97,97,97,0.9);
      color: Color.Dark400;
      font-size: 8px;
    }

    .MuiTooltip-arrow::before {
      content: "";
      margin: auto;
      display: block;
      width: 100%;
      height: 100%;
      background-color: currentColor;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTooltip-tooltipArrow {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTooltip-tooltip {
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
  // console.log(document.documentElement.outerHTML);
});
