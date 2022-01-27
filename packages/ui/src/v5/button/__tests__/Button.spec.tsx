import { v5 } from '@superdispatch/ui-testutils';
import { Button } from '../..';

it('checks default props', () => {
  const {
    components: { MuiButton },
  } = v5.renderTheme();

  expect(MuiButton?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "color": "primary",
      "disableFocusRipple": true,
      "variant": "outlined",
    }
  `);
});

it('checks component css', () => {
  expect(
    v5.renderCSS(
      <div>
        <Button />

        <Button color="white" />
        <Button color="success" />
        <Button color="error" />
        <Button color="primary" />

        <Button variant="outlined" size="small" />
        <Button variant="outlined" size="medium" />
        <Button variant="outlined" size="large" />
        <Button variant="text" size="small" />
        <Button variant="text" size="medium" />
        <Button variant="text" size="large" />
        <Button variant="contained" size="small" />
        <Button variant="contained" size="medium" />
        <Button variant="contained" size="large" />

        <Button disableElevation={true} />

        <Button fullWidth={true} />

        <Button startIcon={<span />} />
        <Button startIcon={<span />} size="small" />
        <Button endIcon={<span />} />
        <Button endIcon={<span />} size="small" />
      </div>,
      [
        'MuiButtonBase',
        'MuiButton-root.MuiButton-sizeLarge',
        'MuiButton-text.MuiButton-textPrimary',
        'MuiLoadingButton',
        'MuiTouchRipple',
        'MuiButton-text',
        'Mui-outlined.MuiButton-sizeSmall',
        'Mui-outlined',
        'Mui-outlined.MuiButton-sizeLarge',
        'MuiButton-text.MuiButton-sizeSmall',
        'MuiButton-text.MuiButton-sizeLarge',
        'MuiButton-contained.MuiButton-sizeSmall',
        'MuiButton-contained.MuiButton-sizeLarge',
        'MuiButton-contained',
        'MuiButton-text',
        'MuiButton-text.MuiButton-textPrimary',
        'MuiButton-StartIcon',
        'MuiButton-StartIcon.MuiButton-sizeSmall',
        'MuiButton-EndIcon',
        'MuiButton-EndIcon.MuiButton-sizeSmall',
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

    .MuiButtonBase {
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

    .MuiButtonBase::-moz-focus-inner {
      border-style: none;
    }

    .MuiButtonBase.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .MuiButton-text.MuiButton-textPrimary {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 6px 8px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Blue300;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      padding: initial;
    }

    .MuiButton-text.MuiButton-textPrimary:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiButton-text.MuiButton-textPrimary:hover {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-textPrimary:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled {
      color: initial;
    }

    .MuiButton-text.MuiButton-textPrimary > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"] {
      color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"]:hover {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"]:focus {
      background-color: Color.Red50;
      box-shadow: 0 0 0 2px Color.Red100;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"].Mui-disabled {
      color: Color.Red100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red200;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"] {
      color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"]:hover {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"]:focus {
      background-color: Color.Green50;
      box-shadow: 0 0 0 2px Color.Green100;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"].Mui-disabled {
      color: Color.Green100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green200;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"] {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"]:hover {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"][aria-expanded="true"] {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"]:focus {
      background-color: Color.White10;
      box-shadow: 0 0 0 2px Color.White50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-text.MuiButton-textPrimary {
      color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary:hover {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-textPrimary[aria-expanded="true"] {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-textPrimary:focus {
      background-color: Color.Blue50;
      box-shadow: 0 0 0 2px Color.Blue100;
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled {
      color: Color.Blue100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Blue200;
    }

    .MuiButton-text {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 6px 8px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: inherit;
      border-color: currentColor;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      padding: initial;
    }

    .MuiButton-text:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(25,35,52,0.04);
    }

    .MuiButton-text.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiButton-text:hover {
      background-color: initial;
    }

    .MuiButton-text:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-text.Mui-disabled {
      color: initial;
    }

    .MuiButton-text > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-text[data-color="error"] {
      color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="error"]:hover {
      background-color: Color.Red50;
    }

    .MuiButton-text[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red50;
    }

    .MuiButton-text[data-color="error"]:focus {
      background-color: Color.Red50;
      box-shadow: 0 0 0 2px Color.Red100;
    }

    .MuiButton-text[data-color="error"].Mui-disabled {
      color: Color.Red100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red200;
    }

    .MuiButton-text[data-color="success"] {
      color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="success"]:hover {
      background-color: Color.Green50;
    }

    .MuiButton-text[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green50;
    }

    .MuiButton-text[data-color="success"]:focus {
      background-color: Color.Green50;
      box-shadow: 0 0 0 2px Color.Green100;
    }

    .MuiButton-text[data-color="success"].Mui-disabled {
      color: Color.Green100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green200;
    }

    .MuiButton-text[data-color="white"] {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="white"]:hover {
      background-color: Color.White10;
    }

    .MuiButton-text[data-color="white"][aria-expanded="true"] {
      background-color: Color.White10;
    }

    .MuiButton-text[data-color="white"]:focus {
      background-color: Color.White10;
      box-shadow: 0 0 0 2px Color.White50;
    }

    .MuiButton-text[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .Mui-outlined.MuiButton-sizeSmall {
      font-size: 0.8125rem;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 3px 9px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border: 1px solid rgba(0,117,255,0.5);
      color: Color.Blue300;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      border: none;
      padding: initial;
      background-color: Color.White;
      color: Color.Dark500;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Silver500,0 0 0 2px Color.Transparent;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 4px 24px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 4px 24px;
    }

    .Mui-outlined.MuiButton-sizeSmall:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
      border: 1px solid Color.Blue300;
    }

    .Mui-outlined.MuiButton-sizeSmall.Mui-disabled {
      color: Color.Silver400;
      border: 1px solid rgba(0,0,0,0.12);
    }

    .Mui-outlined.MuiButton-sizeSmall:hover {
      background-color: initial;
    }

    .Mui-outlined.MuiButton-sizeSmall:hover.Mui-disabled {
      background-color: initial;
    }

    .Mui-outlined.MuiButton-sizeSmall.Mui-disabled {
      color: initial;
    }

    .Mui-outlined.MuiButton-sizeSmall > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .Mui-outlined.MuiButton-sizeSmall.Mui-disabled {
      border: none;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="error"] {
      background-color: Color.White;
      color: Color.Red300;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="error"]:hover {
      color: Color.Red300;
      border: 0;
      background-color: Color.Red50;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="error"][aria-expanded="true"] {
      color: Color.Red300;
      background-color: Color.Red50;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="error"]:focus {
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Red100;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="error"].Mui-disabled {
      background-color: Color.White;
      color: Color.Red100;
      box-shadow: inset 0 0 0 1px Color.Red100,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red300;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="success"] {
      background-color: Color.White;
      color: Color.Green300;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="success"]:hover {
      color: Color.Green300;
      border: 0;
      background-color: Color.Green50;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="success"][aria-expanded="true"] {
      color: Color.Green300;
      background-color: Color.Green50;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="success"]:focus {
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Green100;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="success"].Mui-disabled {
      background-color: Color.White;
      color: Color.Green100;
      box-shadow: inset 0 0 0 1px Color.Green100,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green300;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="white"] {
      background-color: Color.Transparent;
      color: Color.White;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="white"]:hover {
      color: Color.White;
      border: 0;
      background-color: Color.White10;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="white"][aria-expanded="true"] {
      color: Color.White;
      background-color: Color.White10;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="white"]:focus {
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.White40;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="white"].Mui-disabled {
      background-color: Color.Transparent;
      color: Color.White50;
      box-shadow: inset 0 0 0 1px Color.White40,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .Mui-outlined.MuiButton-sizeSmall:hover {
      color: Color.Blue300;
      border: 0;
      background-color: Color.Blue50;
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall[aria-expanded="true"] {
      color: Color.Blue300;
      background-color: Color.Blue50;
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall:focus {
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Blue100;
    }

    .Mui-outlined.MuiButton-sizeSmall.Mui-disabled {
      background-color: Color.White;
      color: Color.Silver500;
      box-shadow: inset 0 0 0 1px Color.Silver400,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeSmall.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Dark200;
    }

    .Mui-outlined {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 5px 15px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border: 1px solid rgba(0,117,255,0.5);
      color: Color.Blue300;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      border: none;
      padding: initial;
      background-color: Color.White;
      color: Color.Dark500;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Silver500,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
      border: 1px solid Color.Blue300;
    }

    .Mui-outlined.Mui-disabled {
      color: Color.Silver400;
      border: 1px solid rgba(0,0,0,0.12);
    }

    .Mui-outlined:hover {
      background-color: initial;
    }

    .Mui-outlined:hover.Mui-disabled {
      background-color: initial;
    }

    .Mui-outlined.Mui-disabled {
      color: initial;
    }

    .Mui-outlined > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .Mui-outlined.Mui-disabled {
      border: none;
    }

    .Mui-outlined[data-color="error"] {
      background-color: Color.White;
      color: Color.Red300;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="error"]:hover {
      color: Color.Red300;
      border: 0;
      background-color: Color.Red50;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="error"][aria-expanded="true"] {
      color: Color.Red300;
      background-color: Color.Red50;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="error"]:focus {
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Red100;
    }

    .Mui-outlined[data-color="error"].Mui-disabled {
      background-color: Color.White;
      color: Color.Red100;
      box-shadow: inset 0 0 0 1px Color.Red100,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red300;
    }

    .Mui-outlined[data-color="success"] {
      background-color: Color.White;
      color: Color.Green300;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="success"]:hover {
      color: Color.Green300;
      border: 0;
      background-color: Color.Green50;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="success"][aria-expanded="true"] {
      color: Color.Green300;
      background-color: Color.Green50;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="success"]:focus {
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Green100;
    }

    .Mui-outlined[data-color="success"].Mui-disabled {
      background-color: Color.White;
      color: Color.Green100;
      box-shadow: inset 0 0 0 1px Color.Green100,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green300;
    }

    .Mui-outlined[data-color="white"] {
      background-color: Color.Transparent;
      color: Color.White;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="white"]:hover {
      color: Color.White;
      border: 0;
      background-color: Color.White10;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="white"][aria-expanded="true"] {
      color: Color.White;
      background-color: Color.White10;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="white"]:focus {
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.White40;
    }

    .Mui-outlined[data-color="white"].Mui-disabled {
      background-color: Color.Transparent;
      color: Color.White50;
      box-shadow: inset 0 0 0 1px Color.White40,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .Mui-outlined:hover {
      color: Color.Blue300;
      border: 0;
      background-color: Color.Blue50;
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined[aria-expanded="true"] {
      color: Color.Blue300;
      background-color: Color.Blue50;
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined:focus {
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Blue100;
    }

    .Mui-outlined.Mui-disabled {
      background-color: Color.White;
      color: Color.Silver500;
      box-shadow: inset 0 0 0 1px Color.Silver400,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Dark200;
    }

    .Mui-outlined.MuiButton-sizeLarge {
      font-size: 0.9375rem;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 7px 21px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border: 1px solid rgba(0,117,255,0.5);
      color: Color.Blue300;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      border: none;
      padding: initial;
      background-color: Color.White;
      color: Color.Dark500;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Silver500,0 0 0 2px Color.Transparent;
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 14px 64px;
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 14px 64px;
    }

    .Mui-outlined.MuiButton-sizeLarge:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
      border: 1px solid Color.Blue300;
    }

    .Mui-outlined.MuiButton-sizeLarge.Mui-disabled {
      color: Color.Silver400;
      border: 1px solid rgba(0,0,0,0.12);
    }

    .Mui-outlined.MuiButton-sizeLarge:hover {
      background-color: initial;
    }

    .Mui-outlined.MuiButton-sizeLarge:hover.Mui-disabled {
      background-color: initial;
    }

    .Mui-outlined.MuiButton-sizeLarge.Mui-disabled {
      color: initial;
    }

    .Mui-outlined.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .Mui-outlined.MuiButton-sizeLarge.Mui-disabled {
      border: none;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="error"] {
      background-color: Color.White;
      color: Color.Red300;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="error"]:hover {
      color: Color.Red300;
      border: 0;
      background-color: Color.Red50;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="error"][aria-expanded="true"] {
      color: Color.Red300;
      background-color: Color.Red50;
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="error"]:focus {
      box-shadow: inset 0 0 0 1px Color.Red300,0 0 0 2px Color.Red100;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="error"].Mui-disabled {
      background-color: Color.White;
      color: Color.Red100;
      box-shadow: inset 0 0 0 1px Color.Red100,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red300;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="success"] {
      background-color: Color.White;
      color: Color.Green300;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="success"]:hover {
      color: Color.Green300;
      border: 0;
      background-color: Color.Green50;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="success"][aria-expanded="true"] {
      color: Color.Green300;
      background-color: Color.Green50;
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="success"]:focus {
      box-shadow: inset 0 0 0 1px Color.Green300,0 0 0 2px Color.Green100;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="success"].Mui-disabled {
      background-color: Color.White;
      color: Color.Green100;
      box-shadow: inset 0 0 0 1px Color.Green100,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green300;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="white"] {
      background-color: Color.Transparent;
      color: Color.White;
      border: 0;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="white"]:hover {
      color: Color.White;
      border: 0;
      background-color: Color.White10;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="white"][aria-expanded="true"] {
      color: Color.White;
      background-color: Color.White10;
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="white"]:focus {
      box-shadow: inset 0 0 0 1px Color.White50,0 0 0 2px Color.White40;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="white"].Mui-disabled {
      background-color: Color.Transparent;
      color: Color.White50;
      box-shadow: inset 0 0 0 1px Color.White40,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .Mui-outlined.MuiButton-sizeLarge:hover {
      color: Color.Blue300;
      border: 0;
      background-color: Color.Blue50;
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge[aria-expanded="true"] {
      color: Color.Blue300;
      background-color: Color.Blue50;
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge:focus {
      box-shadow: inset 0 0 0 1px Color.Blue300,0 0 0 2px Color.Blue100;
    }

    .Mui-outlined.MuiButton-sizeLarge.Mui-disabled {
      background-color: Color.White;
      color: Color.Silver500;
      box-shadow: inset 0 0 0 1px Color.Silver400,0 0 0 2px Color.Transparent;
    }

    .Mui-outlined.MuiButton-sizeLarge.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Dark200;
    }

    .MuiButton-text.MuiButton-sizeSmall {
      font-size: 0.8125rem;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 4px 5px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Blue300;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      padding: initial;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 4px 24px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 4px 24px;
    }

    .MuiButton-text.MuiButton-sizeSmall:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
    }

    .MuiButton-text.MuiButton-sizeSmall.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiButton-text.MuiButton-sizeSmall:hover {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-sizeSmall:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-sizeSmall.Mui-disabled {
      color: initial;
    }

    .MuiButton-text.MuiButton-sizeSmall > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="error"] {
      color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="error"]:hover {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="error"]:focus {
      background-color: Color.Red50;
      box-shadow: 0 0 0 2px Color.Red100;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="error"].Mui-disabled {
      color: Color.Red100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red200;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="success"] {
      color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="success"]:hover {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="success"]:focus {
      background-color: Color.Green50;
      box-shadow: 0 0 0 2px Color.Green100;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="success"].Mui-disabled {
      color: Color.Green100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green200;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="white"] {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="white"]:hover {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="white"][aria-expanded="true"] {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="white"]:focus {
      background-color: Color.White10;
      box-shadow: 0 0 0 2px Color.White50;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-text.MuiButton-sizeSmall {
      color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall:hover {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-sizeSmall[aria-expanded="true"] {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-sizeSmall:focus {
      background-color: Color.Blue50;
      box-shadow: 0 0 0 2px Color.Blue100;
    }

    .MuiButton-text.MuiButton-sizeSmall.Mui-disabled {
      color: Color.Blue100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeSmall.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Blue200;
    }

    .MuiButton-text.MuiButton-sizeLarge {
      font-size: 0.9375rem;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 8px 11px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Blue300;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      padding: initial;
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 14px 64px;
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 14px 64px;
    }

    .MuiButton-text.MuiButton-sizeLarge:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
    }

    .MuiButton-text.MuiButton-sizeLarge.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiButton-text.MuiButton-sizeLarge:hover {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-sizeLarge:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-sizeLarge.Mui-disabled {
      color: initial;
    }

    .MuiButton-text.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="error"] {
      color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="error"]:hover {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="error"]:focus {
      background-color: Color.Red50;
      box-shadow: 0 0 0 2px Color.Red100;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="error"].Mui-disabled {
      color: Color.Red100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red200;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="success"] {
      color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="success"]:hover {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="success"]:focus {
      background-color: Color.Green50;
      box-shadow: 0 0 0 2px Color.Green100;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="success"].Mui-disabled {
      color: Color.Green100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green200;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="white"] {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="white"]:hover {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="white"][aria-expanded="true"] {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="white"]:focus {
      background-color: Color.White10;
      box-shadow: 0 0 0 2px Color.White50;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-text.MuiButton-sizeLarge {
      color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge:hover {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-sizeLarge[aria-expanded="true"] {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-sizeLarge:focus {
      background-color: Color.Blue50;
      box-shadow: 0 0 0 2px Color.Blue100;
    }

    .MuiButton-text.MuiButton-sizeLarge.Mui-disabled {
      color: Color.Blue100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-sizeLarge.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Blue200;
    }

    .MuiButton-contained.MuiButton-sizeSmall {
      font-size: 0.8125rem;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 4px 10px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.White;
      background-color: Color.Blue300;
      box-shadow: 0px 3px 1px -2px Color.Black20,0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      box-shadow: none;
      background-color: initial;
      color: Color.White;
      background-color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 4px 24px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 4px 24px;
    }

    .MuiButton-contained.MuiButton-sizeSmall:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgb(0,81,178);
      box-shadow: 0px 2px 4px -1px Color.Black20,0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeSmall:active {
      box-shadow: 0px 5px 5px -3px Color.Black20,0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeSmall.Mui-focusVisible {
      box-shadow: 0px 3px 5px -1px Color.Black20,0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeSmall.Mui-disabled {
      color: Color.Silver400;
      box-shadow: none;
      background-color: rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeSmall:hover {
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeSmall:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeSmall.Mui-disabled {
      color: initial;
    }

    .MuiButton-contained.MuiButton-sizeSmall > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-contained.MuiButton-sizeSmall:hover {
      box-shadow: none;
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeSmall:hover.Mui-disabled {
      background-color: none;
    }

    .MuiButton-contained.MuiButton-sizeSmall:active {
      box-shadow: none;
    }

    .MuiButton-contained.MuiButton-sizeSmall.Mui-focusVisible {
      box-shadow: none;
    }

    .MuiButton-contained.MuiButton-sizeSmall.Mui-disabled {
      color: initial;
      box-shadow: none;
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="error"] {
      color: Color.White;
      background-color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="error"]:hover {
      background-color: Color.Red500;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red500;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="error"]:focus {
      box-shadow: 0 0 0 3px Color.Red100;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="error"].Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Red100;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="success"] {
      color: Color.White;
      background-color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="success"]:hover {
      background-color: Color.Green500;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green500;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="success"]:focus {
      box-shadow: 0 0 0 3px Color.Green100;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="success"].Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Green100;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="white"] {
      color: Color.White;
      background-color: Color.White20;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="white"]:hover {
      background-color: Color.White40;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="white"][aria-expanded="true"] {
      background-color: Color.White40;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="white"]:focus {
      box-shadow: 0 0 0 3px Color.White40;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.White08;
    }

    .MuiButton-contained.MuiButton-sizeSmall[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-contained.MuiButton-sizeSmall:hover {
      background-color: Color.Blue500;
    }

    .MuiButton-contained.MuiButton-sizeSmall[aria-expanded="true"] {
      background-color: Color.Blue500;
    }

    .MuiButton-contained.MuiButton-sizeSmall:focus {
      box-shadow: 0 0 0 3px Color.Blue100;
    }

    .MuiButton-contained.MuiButton-sizeSmall.Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Blue100;
    }

    .MuiButton-contained.MuiButton-sizeSmall.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained.MuiButton-sizeLarge {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 6px 16px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.White;
      background-color: Color.Blue300;
      box-shadow: 0px 3px 1px -2px Color.Black20,0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      box-shadow: none;
      background-color: initial;
      color: Color.White;
      background-color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained.MuiButton-sizeLarge:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgb(0,81,178);
      box-shadow: 0px 2px 4px -1px Color.Black20,0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeLarge:active {
      box-shadow: 0px 5px 5px -3px Color.Black20,0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeLarge.Mui-focusVisible {
      box-shadow: 0px 3px 5px -1px Color.Black20,0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeLarge.Mui-disabled {
      color: Color.Silver400;
      box-shadow: none;
      background-color: rgba(0,0,0,0.12);
    }

    .MuiButton-contained.MuiButton-sizeLarge:hover {
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeLarge:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeLarge.Mui-disabled {
      color: initial;
    }

    .MuiButton-contained.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-contained.MuiButton-sizeLarge:hover {
      box-shadow: none;
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeLarge:hover.Mui-disabled {
      background-color: none;
    }

    .MuiButton-contained.MuiButton-sizeLarge:active {
      box-shadow: none;
    }

    .MuiButton-contained.MuiButton-sizeLarge.Mui-focusVisible {
      box-shadow: none;
    }

    .MuiButton-contained.MuiButton-sizeLarge.Mui-disabled {
      color: initial;
      box-shadow: none;
      background-color: initial;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="error"] {
      color: Color.White;
      background-color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="error"]:hover {
      background-color: Color.Red500;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red500;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="error"]:focus {
      box-shadow: 0 0 0 3px Color.Red100;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="error"].Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Red100;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="success"] {
      color: Color.White;
      background-color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="success"]:hover {
      background-color: Color.Green500;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green500;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="success"]:focus {
      box-shadow: 0 0 0 3px Color.Green100;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="success"].Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Green100;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="white"] {
      color: Color.White;
      background-color: Color.White20;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="white"]:hover {
      background-color: Color.White40;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="white"][aria-expanded="true"] {
      background-color: Color.White40;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="white"]:focus {
      box-shadow: 0 0 0 3px Color.White40;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.White08;
    }

    .MuiButton-contained.MuiButton-sizeLarge[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-contained.MuiButton-sizeLarge:hover {
      background-color: Color.Blue500;
    }

    .MuiButton-contained.MuiButton-sizeLarge[aria-expanded="true"] {
      background-color: Color.Blue500;
    }

    .MuiButton-contained.MuiButton-sizeLarge:focus {
      box-shadow: 0 0 0 3px Color.Blue100;
    }

    .MuiButton-contained.MuiButton-sizeLarge.Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Blue100;
    }

    .MuiButton-contained.MuiButton-sizeLarge.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained {
      font-size: 0.9375rem;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 8px 22px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.White;
      background-color: Color.Blue300;
      box-shadow: 0px 3px 1px -2px Color.Black20,0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      box-shadow: none;
      background-color: initial;
      color: Color.White;
      background-color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 14px 64px;
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 14px 64px;
    }

    .MuiButton-contained:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgb(0,81,178);
      box-shadow: 0px 2px 4px -1px Color.Black20,0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    }

    .MuiButton-contained:active {
      box-shadow: 0px 5px 5px -3px Color.Black20,0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.Mui-focusVisible {
      box-shadow: 0px 3px 5px -1px Color.Black20,0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
    }

    .MuiButton-contained.Mui-disabled {
      color: Color.Silver400;
      box-shadow: none;
      background-color: rgba(0,0,0,0.12);
    }

    .MuiButton-contained:hover {
      background-color: initial;
    }

    .MuiButton-contained:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-contained.Mui-disabled {
      color: initial;
    }

    .MuiButton-contained > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-contained:hover {
      box-shadow: none;
      background-color: initial;
    }

    .MuiButton-contained:hover.Mui-disabled {
      background-color: none;
    }

    .MuiButton-contained:active {
      box-shadow: none;
    }

    .MuiButton-contained.Mui-focusVisible {
      box-shadow: none;
    }

    .MuiButton-contained.Mui-disabled {
      color: initial;
      box-shadow: none;
      background-color: initial;
    }

    .MuiButton-contained[data-color="error"] {
      color: Color.White;
      background-color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained[data-color="error"]:hover {
      background-color: Color.Red500;
    }

    .MuiButton-contained[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red500;
    }

    .MuiButton-contained[data-color="error"]:focus {
      box-shadow: 0 0 0 3px Color.Red100;
    }

    .MuiButton-contained[data-color="error"].Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Red100;
    }

    .MuiButton-contained[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained[data-color="success"] {
      color: Color.White;
      background-color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained[data-color="success"]:hover {
      background-color: Color.Green500;
    }

    .MuiButton-contained[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green500;
    }

    .MuiButton-contained[data-color="success"]:focus {
      box-shadow: 0 0 0 3px Color.Green100;
    }

    .MuiButton-contained[data-color="success"].Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Green100;
    }

    .MuiButton-contained[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-contained[data-color="white"] {
      color: Color.White;
      background-color: Color.White20;
      box-shadow: 0 0 0 0px Color.Transparent;
    }

    .MuiButton-contained[data-color="white"]:hover {
      background-color: Color.White40;
    }

    .MuiButton-contained[data-color="white"][aria-expanded="true"] {
      background-color: Color.White40;
    }

    .MuiButton-contained[data-color="white"]:focus {
      box-shadow: 0 0 0 3px Color.White40;
    }

    .MuiButton-contained[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.White08;
    }

    .MuiButton-contained[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-contained:hover {
      background-color: Color.Blue500;
    }

    .MuiButton-contained[aria-expanded="true"] {
      background-color: Color.Blue500;
    }

    .MuiButton-contained:focus {
      box-shadow: 0 0 0 3px Color.Blue100;
    }

    .MuiButton-contained.Mui-disabled {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Blue100;
    }

    .MuiButton-contained.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White;
    }

    .MuiButton-text {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 6px 8px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Blue300;
      box-shadow: none;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      padding: initial;
    }

    .MuiButton-text:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
    }

    .MuiButton-text.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiButton-text:hover {
      box-shadow: none;
    }

    .MuiButton-text.Mui-focusVisible {
      box-shadow: none;
    }

    .MuiButton-text:active {
      box-shadow: none;
    }

    .MuiButton-text.Mui-disabled {
      box-shadow: none;
    }

    .MuiButton-text:hover {
      background-color: initial;
    }

    .MuiButton-text:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-text.Mui-disabled {
      color: initial;
    }

    .MuiButton-text > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-text[data-color="error"] {
      color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="error"]:hover {
      background-color: Color.Red50;
    }

    .MuiButton-text[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red50;
    }

    .MuiButton-text[data-color="error"]:focus {
      background-color: Color.Red50;
      box-shadow: 0 0 0 2px Color.Red100;
    }

    .MuiButton-text[data-color="error"].Mui-disabled {
      color: Color.Red100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red200;
    }

    .MuiButton-text[data-color="success"] {
      color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="success"]:hover {
      background-color: Color.Green50;
    }

    .MuiButton-text[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green50;
    }

    .MuiButton-text[data-color="success"]:focus {
      background-color: Color.Green50;
      box-shadow: 0 0 0 2px Color.Green100;
    }

    .MuiButton-text[data-color="success"].Mui-disabled {
      color: Color.Green100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green200;
    }

    .MuiButton-text[data-color="white"] {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="white"]:hover {
      background-color: Color.White10;
    }

    .MuiButton-text[data-color="white"][aria-expanded="true"] {
      background-color: Color.White10;
    }

    .MuiButton-text[data-color="white"]:focus {
      background-color: Color.White10;
      box-shadow: 0 0 0 2px Color.White50;
    }

    .MuiButton-text[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-text {
      color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text:hover {
      background-color: Color.Blue50;
    }

    .MuiButton-text[aria-expanded="true"] {
      background-color: Color.Blue50;
    }

    .MuiButton-text:focus {
      background-color: Color.Blue50;
      box-shadow: 0 0 0 2px Color.Blue100;
    }

    .MuiButton-text.Mui-disabled {
      color: Color.Blue100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Blue200;
    }

    .MuiButton-text.MuiButton-textPrimary {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      min-width: 64px;
      padding: 6px 8px;
      border-radius: 4px;
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      color: Color.Blue300;
      width: 100%;
      min-width: 48px;
      -webkit-transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,border 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 10px 24px;
      padding: initial;
    }

    .MuiButton-text.MuiButton-textPrimary:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: rgba(0,117,255,0.04);
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiButton-text.MuiButton-textPrimary:hover {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-textPrimary:hover.Mui-disabled {
      background-color: initial;
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled {
      color: initial;
    }

    .MuiButton-text.MuiButton-textPrimary > .MuiSvgIcon-root {
      font-size: 24px;
    }

    .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
      font-size: 28px;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"] {
      color: Color.Red300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"]:hover {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"][aria-expanded="true"] {
      background-color: Color.Red50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"]:focus {
      background-color: Color.Red50;
      box-shadow: 0 0 0 2px Color.Red100;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"].Mui-disabled {
      color: Color.Red100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="error"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Red200;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"] {
      color: Color.Green300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"]:hover {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"][aria-expanded="true"] {
      background-color: Color.Green50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"]:focus {
      background-color: Color.Green50;
      box-shadow: 0 0 0 2px Color.Green100;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"].Mui-disabled {
      color: Color.Green100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="success"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Green200;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"] {
      color: Color.White;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"]:hover {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"][aria-expanded="true"] {
      background-color: Color.White10;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"]:focus {
      background-color: Color.White10;
      box-shadow: 0 0 0 2px Color.White50;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"].Mui-disabled {
      color: Color.White50;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary[data-color="white"].Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.White50;
    }

    .MuiButton-text.MuiButton-textPrimary {
      color: Color.Blue300;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary:hover {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-textPrimary[aria-expanded="true"] {
      background-color: Color.Blue50;
    }

    .MuiButton-text.MuiButton-textPrimary:focus {
      background-color: Color.Blue50;
      box-shadow: 0 0 0 2px Color.Blue100;
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled {
      color: Color.Blue100;
      box-shadow: 0 0 0 0px Color.Transparent;
      background-color: Color.Transparent;
    }

    .MuiButton-text.MuiButton-textPrimary.Mui-disabled .MuiLoadingButton-loadingIndicator {
      color: Color.Blue200;
    }

    .MuiButton-StartIcon {
      display: inherit;
      margin-right: 8px;
      margin-left: -4px;
    }

    .MuiButton-StartIcon > *:nth-of-type(1) {
      font-size: 20px;
    }

    .MuiButton-StartIcon.MuiButton-sizeSmall {
      display: inherit;
      margin-right: 8px;
      margin-left: -2px;
    }

    .MuiButton-StartIcon.MuiButton-sizeSmall > *:nth-of-type(1) {
      font-size: 18px;
    }

    .MuiButton-EndIcon {
      display: inherit;
      margin-right: -4px;
      margin-left: 8px;
    }

    .MuiButton-EndIcon > *:nth-of-type(1) {
      font-size: 20px;
    }

    .MuiButton-EndIcon.MuiButton-sizeSmall {
      display: inherit;
      margin-right: -2px;
      margin-left: 8px;
    }

    .MuiButton-EndIcon.MuiButton-sizeSmall > *:nth-of-type(1) {
      font-size: 18px;
    }

    .MuiLoadingButton {
      -webkit-transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiLoadingButton .MuiLoadingButton-startIconLoadingStart,
    .MuiLoadingButton .MuiLoadingButton-endIconLoadingEnd {
      -webkit-transition: opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      opacity: 0;
    }

    .MuiLoadingButton.MuiLoadingButton-loading {
      color: transparent;
    }

    @media print {
      .MuiButtonBase {
        color-adjust: exact;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-textPrimary {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-textPrimary:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-textPrimary {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-textPrimary:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-textPrimary > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-text:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-text:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .Mui-outlined.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .Mui-outlined.MuiButton-sizeSmall:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeSmall {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .Mui-outlined.MuiButton-sizeSmall:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeSmall > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .Mui-outlined.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeSmall {
        padding: 2px 16px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .Mui-outlined.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeSmall {
        padding: 2px 16px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .Mui-outlined {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .Mui-outlined:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .Mui-outlined:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .Mui-outlined.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .Mui-outlined.MuiButton-sizeLarge:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeLarge {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .Mui-outlined.MuiButton-sizeLarge:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .Mui-outlined.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
        padding: 8px 32px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .Mui-outlined.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .Mui-outlined.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
        padding: 8px 32px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-sizeSmall:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeSmall {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-sizeSmall:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeSmall > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeSmall {
        padding: 2px 16px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeSmall {
        padding: 2px 16px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-sizeLarge:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeLarge {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-sizeLarge:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
        padding: 8px 32px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
        padding: 8px 32px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-contained.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained.MuiButton-sizeSmall:hover {
        background-color: Color.Blue300;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained.MuiButton-sizeSmall {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained.MuiButton-sizeSmall:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained.MuiButton-sizeSmall > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained.MuiButton-sizeSmall:hover {
        box-shadow: none;
        background-color: none;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-contained.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained.MuiButton-sizeSmall {
        padding: 2px 16px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-contained.MuiButton-sizeSmall {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained.MuiButton-sizeSmall {
        padding: 2px 16px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-contained.MuiButton-sizeLarge {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained.MuiButton-sizeLarge:hover {
        background-color: Color.Blue300;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained.MuiButton-sizeLarge {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained.MuiButton-sizeLarge:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained.MuiButton-sizeLarge:hover {
        box-shadow: none;
        background-color: none;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-contained {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained:hover {
        background-color: Color.Blue300;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-contained:hover {
        box-shadow: none;
        background-color: none;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-contained {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained {
        font-size: 16px;
        line-height: 24px;
        padding: 8px 32px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-contained {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-contained {
        font-size: 16px;
        line-height: 24px;
        padding: 8px 32px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-text:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-text:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiButton-text.MuiButton-textPrimary {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-textPrimary:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-textPrimary {
        padding: 6px 16px;
      }
    }

    @media (hover:none) {
      .MuiButton-text.MuiButton-textPrimary:hover {
        background-color: initial;
      }
    }

    @media (min-width:600px) {
      .MuiButton-text.MuiButton-textPrimary > .MuiSvgIcon-root {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiButton-sizeLarge.MuiButton-root.MuiButton-sizeLarge > .MuiSvgIcon-root {
        font-size: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }
  `);
});
