import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';
import { Button } from '../..';

it('checks default props', () => {
  const { props } = renderTheme();

  expect(props.MuiButton).toMatchInlineSnapshot(`
    Object {
      "color": "primary",
      "disableFocusRipple": true,
      "variant": "outlined",
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <Button variant="text" color="primary">
        Text
      </Button>,
      ['MuiButton'],
    ),
  ).toMatchInlineSnapshot(`
    .MuiButton-root {
      padding: 10px 24px;
      font-size: 14px;
      min-width: 48px;
      box-sizing: border-box;
      transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      line-height: 20px;
      border-radius: 4px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiButton-root {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .MuiButton-root:hover {
      text-decoration: none;
    }

    @media (min-width: 600px) {
      .MuiButton-root {
        padding: 6px 16px;
      }
    }

    .MuiButton-root[aria-busy='true'] .MuiButton-label {
      visibility: hidden;
    }

    .MuiButton-root[aria-busy='true'] .MuiButton-label > [role='progressbar'] {
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
      position: absolute;
      font-size: 16px;
      visibility: visible;
    }

    .MuiButton-sizeLarge
      .MuiButton-root[aria-busy='true']
      .MuiButton-label
      > [role='progressbar'] {
      font-size: 24px;
    }

    .MuiButton-label {
      width: 100%;
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
    }

    .MuiButton-label > .MuiSvgIcon-root {
      font-size: 24px;
    }

    @media (min-width: 600px) {
      .MuiButton-label > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    .MuiButton-sizeLarge .MuiButton-label > .MuiSvgIcon-root {
      font-size: 28px;
    }

    @media (min-width: 600px) {
      .MuiButton-sizeLarge .MuiButton-label > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    .MuiButton-text[data-color='error'] {
      color: ColorDynamic.Red300;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-text[data-color='success'] {
      color: ColorDynamic.Green300;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-text[data-color='white'] {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-text[data-color='white']:hover {
      background-color: ColorDynamic.White10;
    }

    .MuiButton-text[data-color='white'][aria-expanded='true'] {
      background-color: ColorDynamic.White10;
    }

    .MuiButton-text[data-color='white']:focus {
      box-shadow: 0 0 0 2px ColorDynamic.White50;
      background-color: ColorDynamic.White10;
    }

    .MuiButton-text[data-color='white'].Mui-disabled {
      color: ColorDynamic.White50;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-text[data-color='white'].Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.White50;
    }

    .MuiButton-text[data-color='success']:hover {
      background-color: ColorDynamic.Green50;
    }

    .MuiButton-text[data-color='success'][aria-expanded='true'] {
      background-color: ColorDynamic.Green50;
    }

    .MuiButton-text[data-color='success']:focus {
      box-shadow: 0 0 0 2px ColorDynamic.Green100;
      background-color: ColorDynamic.Green50;
    }

    .MuiButton-text[data-color='success'].Mui-disabled {
      color: ColorDynamic.Green100;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-text[data-color='success'].Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.Green200;
    }

    .MuiButton-text[data-color='error']:hover {
      background-color: ColorDynamic.Red50;
    }

    .MuiButton-text[data-color='error'][aria-expanded='true'] {
      background-color: ColorDynamic.Red50;
    }

    .MuiButton-text[data-color='error']:focus {
      box-shadow: 0 0 0 2px ColorDynamic.Red100;
      background-color: ColorDynamic.Red50;
    }

    .MuiButton-text[data-color='error'].Mui-disabled {
      color: ColorDynamic.Red100;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-text[data-color='error'].Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.Red200;
    }

    .MuiButton-textPrimary {
      color: ColorDynamic.Blue300;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-textPrimary:hover {
      background-color: ColorDynamic.Blue50;
    }

    .MuiButton-textPrimary[aria-expanded='true'] {
      background-color: ColorDynamic.Blue50;
    }

    .MuiButton-textPrimary:focus {
      box-shadow: 0 0 0 2px ColorDynamic.Blue100;
      background-color: ColorDynamic.Blue50;
    }

    .MuiButton-textPrimary.Mui-disabled {
      color: ColorDynamic.Blue100;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-textPrimary.Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.Blue200;
    }

    @media (hover: none) {
      .MuiButton-textPrimary:hover {
        background-color: transparent;
      }
    }

    .MuiButton-textSecondary {
      color: #f50057;
    }

    .MuiButton-textSecondary:hover {
      background-color: rgba(245, 0, 87, 0.04);
    }

    @media (hover: none) {
      .MuiButton-textSecondary:hover {
        background-color: transparent;
      }
    }

    .MuiButton-outlined[data-color='error'] {
      color: ColorDynamic.Red300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Red300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White;
    }

    .MuiButton-outlined[data-color='success'] {
      color: ColorDynamic.Green300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Green300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White;
    }

    .MuiButton-outlined[data-color='white'] {
      color: ColorDynamic.White;
      box-shadow: inset 0 0 0 1px ColorDynamic.White50,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-outlined[data-color='white']:hover {
      color: ColorDynamic.White;
      box-shadow: inset 0 0 0 1px ColorDynamic.White50,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White10;
    }

    .MuiButton-outlined[data-color='white'][aria-expanded='true'] {
      color: ColorDynamic.White;
      box-shadow: inset 0 0 0 1px ColorDynamic.White50,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White10;
    }

    .MuiButton-outlined[data-color='white']:focus {
      box-shadow: inset 0 0 0 1px ColorDynamic.White50,
        0 0 0 2px ColorDynamic.White40;
    }

    .MuiButton-outlined[data-color='white'].Mui-disabled {
      color: ColorDynamic.White50;
      box-shadow: inset 0 0 0 1px ColorDynamic.White40,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Transparent;
    }

    .MuiButton-outlined[data-color='white'].Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.White50;
    }

    .MuiButton-outlined[data-color='success']:hover {
      color: ColorDynamic.Green300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Green300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Green50;
    }

    .MuiButton-outlined[data-color='success'][aria-expanded='true'] {
      color: ColorDynamic.Green300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Green300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Green50;
    }

    .MuiButton-outlined[data-color='success']:focus {
      box-shadow: inset 0 0 0 1px ColorDynamic.Green300,
        0 0 0 2px ColorDynamic.Green100;
    }

    .MuiButton-outlined[data-color='success'].Mui-disabled {
      color: ColorDynamic.Green100;
      box-shadow: inset 0 0 0 1px ColorDynamic.Green100,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White;
    }

    .MuiButton-outlined[data-color='success'].Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.Green300;
    }

    .MuiButton-outlined[data-color='error']:hover {
      color: ColorDynamic.Red300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Red300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Red50;
    }

    .MuiButton-outlined[data-color='error'][aria-expanded='true'] {
      color: ColorDynamic.Red300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Red300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Red50;
    }

    .MuiButton-outlined[data-color='error']:focus {
      box-shadow: inset 0 0 0 1px ColorDynamic.Red300, 0 0 0 2px ColorDynamic.Red100;
    }

    .MuiButton-outlined[data-color='error'].Mui-disabled {
      color: ColorDynamic.Red100;
      box-shadow: inset 0 0 0 1px ColorDynamic.Red100,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White;
    }

    .MuiButton-outlined[data-color='error'].Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.Red300;
    }

    .MuiButton-outlinedPrimary {
      color: ColorDynamic.Dark500;
      box-shadow: inset 0 0 0 1px ColorDynamic.Silver500,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White;
    }

    .MuiButton-outlinedPrimary:hover {
      color: ColorDynamic.Blue300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Blue300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Blue50;
    }

    .MuiButton-outlinedPrimary[aria-expanded='true'] {
      color: ColorDynamic.Blue300;
      box-shadow: inset 0 0 0 1px ColorDynamic.Blue300,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.Blue50;
    }

    .MuiButton-outlinedPrimary:focus {
      box-shadow: inset 0 0 0 1px ColorDynamic.Blue300,
        0 0 0 2px ColorDynamic.Blue100;
    }

    .MuiButton-outlinedPrimary.Mui-disabled {
      color: ColorDynamic.Silver500;
      box-shadow: inset 0 0 0 1px ColorDynamic.Silver400,
        0 0 0 2px ColorDynamic.Transparent;
      background-color: ColorDynamic.White;
    }

    .MuiButton-outlinedPrimary.Mui-disabled[aria-busy='true'] {
      color: ColorDynamic.Dark200;
    }

    @media (hover: none) {
      .MuiButton-outlinedPrimary:hover {
        background-color: transparent;
      }
    }

    .MuiButton-outlinedSecondary {
      color: #f50057;
      border: 1px solid rgba(245, 0, 87, 0.5);
    }

    .MuiButton-outlinedSecondary:hover {
      border: 1px solid #f50057;
      background-color: rgba(245, 0, 87, 0.04);
    }

    .MuiButton-outlinedSecondary.Mui-disabled {
      border: 1px solid Color.Silver400;
    }

    @media (hover: none) {
      .MuiButton-outlinedSecondary:hover {
        background-color: transparent;
      }
    }

    .MuiButton-contained {
      color: rgba(0, 0, 0, 0.87);
    }

    .MuiButton-contained[data-color='error'] {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Red300;
    }

    .MuiButton-contained[data-color='success'] {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Green300;
    }

    .MuiButton-contained[data-color='white'] {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.White20;
    }

    .MuiButton-contained[data-color='white']:hover {
      background-color: ColorDynamic.White40;
    }

    .MuiButton-contained[data-color='white'][aria-expanded='true'] {
      background-color: ColorDynamic.White40;
    }

    .MuiButton-contained[data-color='white']:focus {
      box-shadow: 0 0 0 3px ColorDynamic.White40;
    }

    .MuiButton-contained[data-color='white'].Mui-disabled {
      color: ColorDynamic.White50;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.White08;
    }

    .MuiButton-contained[data-color='success']:hover {
      background-color: ColorDynamic.Green500;
    }

    .MuiButton-contained[data-color='success'][aria-expanded='true'] {
      background-color: ColorDynamic.Green500;
    }

    .MuiButton-contained[data-color='success']:focus {
      box-shadow: 0 0 0 3px ColorDynamic.Green100;
    }

    .MuiButton-contained[data-color='success'].Mui-disabled {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Green100;
    }

    .MuiButton-contained[data-color='error']:hover {
      background-color: ColorDynamic.Red500;
    }

    .MuiButton-contained[data-color='error'][aria-expanded='true'] {
      background-color: ColorDynamic.Red500;
    }

    .MuiButton-contained[data-color='error']:focus {
      box-shadow: 0 0 0 3px ColorDynamic.Red100;
    }

    .MuiButton-contained[data-color='error'].Mui-disabled {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Red100;
    }

    .MuiButton-containedPrimary {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Blue300;
    }

    .MuiButton-containedPrimary:hover {
      background-color: ColorDynamic.Blue500;
    }

    .MuiButton-containedPrimary[aria-expanded='true'] {
      background-color: ColorDynamic.Blue500;
    }

    .MuiButton-containedPrimary:focus {
      box-shadow: 0 0 0 3px ColorDynamic.Blue100;
    }

    .MuiButton-containedPrimary.Mui-disabled {
      color: ColorDynamic.White;
      box-shadow: 0 0 0 0px ColorDynamic.Transparent;
      background-color: ColorDynamic.Blue100;
    }

    @media (hover: none) {
      .MuiButton-containedPrimary:hover {
        background-color: Color.Blue300;
      }
    }

    .MuiButton-containedSecondary {
      color: Color.White;
      background-color: #f50057;
    }

    .MuiButton-containedSecondary:hover {
      background-color: #c51162;
    }

    @media (hover: none) {
      .MuiButton-containedSecondary:hover {
        background-color: #f50057;
      }
    }

    .MuiButton-disableElevation {
      box-shadow: none;
    }

    .MuiButton-disableElevation:hover {
      box-shadow: none;
    }

    .MuiButton-disableElevation.Mui-focusVisible {
      box-shadow: none;
    }

    .MuiButton-disableElevation:active {
      box-shadow: none;
    }

    .MuiButton-disableElevation.Mui-disabled {
      box-shadow: none;
    }

    .MuiButton-colorInherit {
      color: inherit;
      border-color: currentColor;
    }

    .MuiButton-sizeSmall {
      padding: 4px 24px;
    }

    @media (min-width: 600px) {
      .MuiButton-sizeSmall {
        padding: 2px 16px;
      }
    }

    .MuiButton-sizeLarge {
      padding: 14px 64px;
      font-size: 18px;
      line-height: 28px;
    }

    @media (min-width: 600px) {
      .MuiButton-sizeLarge {
        padding: 8px 32px;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .MuiButton-fullWidth {
      width: 100%;
    }

    .MuiButton-startIcon {
      display: inherit;
      margin-left: -4px;
      margin-right: 8px;
    }

    .MuiButton-startIcon.MuiButton-iconSizeSmall {
      margin-left: -2px;
    }

    .MuiButton-endIcon {
      display: inherit;
      margin-left: 8px;
      margin-right: -4px;
    }

    .MuiButton-endIcon.MuiButton-iconSizeSmall {
      margin-right: -2px;
    }

    .MuiButton-iconSizeSmall > *:first-child {
      font-size: 18px;
    }

    .MuiButton-iconSizeMedium > *:first-child {
      font-size: 20px;
    }

    .MuiButton-iconSizeLarge > *:first-child {
      font-size: 22px;
    }
  `);
});
