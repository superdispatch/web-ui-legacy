import { InputAdornment, MenuItem, TextField } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiInputBase?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiInputLabel?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "shrink": true,
    }
  `);
  expect(components.MuiFormLabel?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiOutlinedInput?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "notched": false,
    }
  `);
  expect(components.MuiSelect?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "IconComponent": React.forwardRef(SelectIcon),
    }
  `);
  expect(components.MuiFormHelperText?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiTextField?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "maxRows": 4,
      "minRows": 4,
      "variant": "outlined",
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <>
        <TextField
          label="Text"
          helperText="Text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <div />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Text"
          helperText="Text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div />
              </InputAdornment>
            ),
          }}
        />

        <TextField label="Textarea" multiline={true} />
        <TextField label="Text" size="small" />
        <TextField label="Text" disabled={true} />
        <TextField label="Text" fullWidth={true} />

        <TextField select={true}>
          <MenuItem />
        </TextField>
      </>,
      [
        'MuiFormControl',
        'MuiFormLabel',
        'MuiInputLabel',
        'MuiInputBase',
        'MuiOutlinedInput',
        'MuiInputAdornment',
        'MuiInputBase-input',
        'MuiInputBase-inputAdornedEnd',
        'MuiOutlinedInput-input',
        'MuiOutlinedInput-notched',
        'MuiOutlinedInput-notchedOutline',
        'NotchedOutlineLegend',
        'MuiFormHelperText',
        'MuiOutlinedInput-root',
        'MuiOutlinedInput-multiline',
        'MuiInputAdornment-positionEnd',
        'MuiInputBase-multiline',
        'MuiOutlinedInput-multiline',
        'MuiInputBase-inputMultiline',
        'MuiOutlinedInput-input,.MuiInputBase-inputMultiline',
        'MuiOutlinedInput-root,.MuiInputBase-formControl',
        'MuiInputBase-inputSizeSmall',
        'MuiOutlinedInput-input,.MuiInputBase-inputSizeSmall',
        'MuiSelect-root,.MuiOutlinedInput-input',
        'MuiFormControl-fullWidth',
        'MuiInputBase-fullWidth',
        'MuiSelect-select,.SelectInput',
        'MuiSelect-nativeInput',
        'MuiSelect-iconOutlined',
        'MuiSelect-icon',
        'MuiSelect-icon,.MuiSelect-iconOutlined',
        'NotchedOutlineLegend',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiSelect-iconOutlined {
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

    .MuiInputAdornment {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 0.01em;
      max-height: 2em;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      white-space: nowrap;
      color: rgba(0,0,0,0.54);
      margin-right: 8px;
    }

    .MuiInputAdornment .MuiSvgIcon-root:not(.MuiSvgIcon-fontSizeSmall) {
      font-size: 24px;
    }

    .MuiInputAdornment .MuiIconButton-root {
      padding: 8px;
    }

    .MuiInputAdornment .MuiIconButton-root {
      margin-left: -4px;
    }

    .MuiInputAdornment-positionEnd {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: 0.01em;
      max-height: 2em;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      white-space: nowrap;
      color: rgba(0,0,0,0.54);
      margin-left: 8px;
    }

    .MuiInputAdornment-positionEnd .MuiSvgIcon-root:not(.MuiSvgIcon-fontSizeSmall) {
      font-size: 24px;
    }

    .MuiInputAdornment-positionEnd .MuiIconButton-root {
      padding: 8px;
    }

    .MuiInputAdornment-positionEnd .MuiIconButton-root {
      margin-right: -4px;
    }

    .MuiInputBase {
      font-size: 14px;
      line-height: 1.4375em;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      color: Color.Dark500;
      box-sizing: border-box;
      position: relative;
      cursor: text;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
    }

    .MuiInputBase.Mui-disabled {
      color: Color.Dark100;
      cursor: default;
    }

    .MuiInputBase.Mui-disabled {
      background-color: Color.Silver100;
    }

    .MuiInputBase-multiline {
      font-size: 14px;
      line-height: 1.4375em;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      color: Color.Dark500;
      box-sizing: border-box;
      position: relative;
      cursor: text;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 4px 0 5px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
    }

    .MuiInputBase-multiline.Mui-disabled {
      color: Color.Dark100;
      cursor: default;
    }

    .MuiInputBase-multiline.Mui-disabled {
      background-color: Color.Silver100;
    }

    .MuiInputBase-fullWidth {
      font-size: 14px;
      line-height: 1.4375em;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      color: Color.Dark500;
      box-sizing: border-box;
      position: relative;
      cursor: text;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
    }

    .MuiInputBase-fullWidth.Mui-disabled {
      color: Color.Dark100;
      cursor: default;
    }

    .MuiInputBase-fullWidth.Mui-disabled {
      background-color: Color.Silver100;
    }

    .MuiInputBase-inputAdornedEnd {
      font: inherit;
      -webkit-letter-spacing: inherit;
      -moz-letter-spacing: inherit;
      -ms-letter-spacing: inherit;
      letter-spacing: inherit;
      color: currentColor;
      padding: 4px 0 5px;
      border: 0;
      box-sizing: content-box;
      background: none;
      height: 1.4375em;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
      display: block;
      min-width: 0;
      width: 100%;
      -webkit-animation-name: mui-auto-fill-cancel;
      animation-name: mui-auto-fill-cancel;
      -webkit-animation-duration: 10ms;
      animation-duration: 10ms;
      text-overflow: ellipsis;
      height: 24px;
    }

    .MuiInputBase-inputAdornedEnd::-webkit-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputAdornedEnd::-moz-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputAdornedEnd:-ms-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputAdornedEnd::-ms-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputAdornedEnd:focus {
      outline: 0;
    }

    .MuiInputBase-inputAdornedEnd:invalid {
      box-shadow: none;
    }

    .MuiInputBase-inputAdornedEnd::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
      opacity: 0.42;
    }

    .MuiInputBase-inputAdornedEnd.Mui-disabled {
      opacity: 1;
      -webkit-text-fill-color: Color.Dark100;
    }

    .MuiInputBase-inputAdornedEnd:-webkit-autofill {
      -webkit-animation-duration: 5000s;
      animation-duration: 5000s;
      -webkit-animation-name: mui-auto-fill;
      animation-name: mui-auto-fill;
    }

    .MuiInputBase-inputMultiline {
      font: inherit;
      -webkit-letter-spacing: inherit;
      -moz-letter-spacing: inherit;
      -ms-letter-spacing: inherit;
      letter-spacing: inherit;
      color: currentColor;
      padding: 0;
      border: 0;
      box-sizing: content-box;
      background: none;
      height: auto;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
      display: block;
      min-width: 0;
      width: 100%;
      -webkit-animation-name: mui-auto-fill-cancel;
      animation-name: mui-auto-fill-cancel;
      -webkit-animation-duration: 10ms;
      animation-duration: 10ms;
      resize: none;
      padding-top: 0;
      text-overflow: ellipsis;
      height: 24px;
      resize: vertical;
    }

    .MuiInputBase-inputMultiline::-webkit-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputMultiline::-moz-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputMultiline:-ms-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputMultiline::-ms-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputMultiline:focus {
      outline: 0;
    }

    .MuiInputBase-inputMultiline:invalid {
      box-shadow: none;
    }

    .MuiInputBase-inputMultiline::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
      opacity: 0.42;
    }

    .MuiInputBase-inputMultiline.Mui-disabled {
      opacity: 1;
      -webkit-text-fill-color: Color.Dark100;
    }

    .MuiInputBase-inputMultiline:-webkit-autofill {
      -webkit-animation-duration: 5000s;
      animation-duration: 5000s;
      -webkit-animation-name: mui-auto-fill;
      animation-name: mui-auto-fill;
    }

    .MuiInputBase-inputSizeSmall {
      font: inherit;
      -webkit-letter-spacing: inherit;
      -moz-letter-spacing: inherit;
      -ms-letter-spacing: inherit;
      letter-spacing: inherit;
      color: currentColor;
      padding: 4px 0 5px;
      border: 0;
      box-sizing: content-box;
      background: none;
      height: 1.4375em;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
      display: block;
      min-width: 0;
      width: 100%;
      -webkit-animation-name: mui-auto-fill-cancel;
      animation-name: mui-auto-fill-cancel;
      -webkit-animation-duration: 10ms;
      animation-duration: 10ms;
      padding-top: 1px;
      text-overflow: ellipsis;
      height: 24px;
    }

    .MuiInputBase-inputSizeSmall::-webkit-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputSizeSmall::-moz-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputSizeSmall:-ms-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputSizeSmall::-ms-input-placeholder {
      color: currentColor;
      opacity: 0.42;
      -webkit-transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiInputBase-inputSizeSmall:focus {
      outline: 0;
    }

    .MuiInputBase-inputSizeSmall:invalid {
      box-shadow: none;
    }

    .MuiInputBase-inputSizeSmall::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
      opacity: 0 !important;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
      opacity: 0.42;
    }

    label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
      opacity: 0.42;
    }

    .MuiInputBase-inputSizeSmall.Mui-disabled {
      opacity: 1;
      -webkit-text-fill-color: Color.Dark100;
    }

    .MuiInputBase-inputSizeSmall:-webkit-autofill {
      -webkit-animation-duration: 5000s;
      animation-duration: 5000s;
      -webkit-animation-name: mui-auto-fill;
      animation-name: mui-auto-fill;
    }

    .MuiFormControl {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      position: relative;
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
      vertical-align: top;
    }

    .MuiFormControl-fullWidth {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      position: relative;
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
      vertical-align: top;
      width: 100%;
    }

    .MuiFormHelperText {
      color: Color.Dark200;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      text-align: left;
      margin-top: 3px;
      margin-right: 14px;
      margin-bottom: 0;
      margin-left: 14px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      margin-top: 4px;
      margin-left: unset;
      margin-right: unset;
    }

    .MuiFormHelperText.Mui-disabled {
      color: Color.Dark100;
    }

    .MuiFormHelperText.Mui-error {
      color: Color.Red300;
    }

    .MuiFormLabel {
      color: Color.Dark200;
      font-size: 14px;
      line-height: 1.4375em;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      padding: 0;
      position: relative;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: Color.Dark400;
    }

    .MuiFormLabel.Mui-focused {
      color: Color.Blue300;
    }

    .MuiFormLabel.Mui-disabled {
      color: Color.Dark100;
    }

    .MuiFormLabel.Mui-error {
      color: Color.Red300;
    }

    .MuiFormLabel.Mui-error {
      color: Color.Dark400;
    }

    .MuiFormLabel.Mui-focused {
      color: Color.Dark400;
    }

    .MuiFormLabel.Mui-disabled {
      color: Color.Dark400;
    }

    .MuiInputLabel {
      display: block;
      -webkit-transform-origin: top left;
      -ms-transform-origin: top left;
      transform-origin: top left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(133% - 24px);
      position: absolute;
      left: 0;
      top: 0;
      -webkit-transform: translate(14px,-9px) scale(0.75);
      -ms-transform: translate(14px,-9px) scale(0.75);
      transform: translate(14px,-9px) scale(0.75);
      -webkit-transition: color 200ms cubic-bezier(0.0,0,0.2,1) 0ms,-webkit-transform 200ms cubic-bezier(0.0,0,0.2,1) 0ms,max-width 200ms cubic-bezier(0.0,0,0.2,1) 0ms;
      -webkit-transition: color 200ms cubic-bezier(0.0,0,0.2,1) 0ms,transform 200ms cubic-bezier(0.0,0,0.2,1) 0ms,max-width 200ms cubic-bezier(0.0,0,0.2,1) 0ms;
      transition: color 200ms cubic-bezier(0.0,0,0.2,1) 0ms,transform 200ms cubic-bezier(0.0,0,0.2,1) 0ms,max-width 200ms cubic-bezier(0.0,0,0.2,1) 0ms;
      z-index: 1;
      pointer-events: none;
      margin-bottom: 4px;
      -webkit-transform-origin: unset;
      -ms-transform-origin: unset;
      transform-origin: unset;
      top: unset;
      left: unset;
      position: unset;
      -webkit-transform: unset;
      -ms-transform: unset;
      transform: unset;
      -webkit-transform: unset;
      -ms-transform: unset;
      transform: unset;
      -webkit-transform-origin: unset;
      -ms-transform-origin: unset;
      transform-origin: unset;
      z-index: unset;
      -webkit-transform: unset;
      -ms-transform: unset;
      transform: unset;
      pointer-events: unset;
    }

    .MuiOutlinedInput-notched {
      text-align: left;
      position: absolute;
      bottom: 0;
      right: 0;
      top: -5px;
      left: 0;
      margin: 0;
      padding: 0 8px;
      pointer-events: none;
      border-radius: inherit;
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      min-width: 0%;
    }

    .NotchedOutlineLegend {
      float: unset;
      display: block;
      width: auto;
      padding: 0;
      height: 11px;
      font-size: 0.75em;
      visibility: hidden;
      max-width: 0.01px;
      -webkit-transition: max-width 50ms cubic-bezier(0.0,0,0.2,1) 0ms;
      transition: max-width 50ms cubic-bezier(0.0,0,0.2,1) 0ms;
      white-space: nowrap;
    }

    .NotchedOutlineLegend > span {
      padding-left: 5px;
      padding-right: 5px;
      display: inline-block;
    }

    .NotchedOutlineLegend {
      float: unset;
      padding: 0;
      line-height: 11px;
      -webkit-transition: width 150ms cubic-bezier(0.0,0,0.2,1) 0ms;
      transition: width 150ms cubic-bezier(0.0,0,0.2,1) 0ms;
    }

    .MuiOutlinedInput {
      position: relative;
      border-radius: 4px;
      padding-left: 14px;
      padding-left: 8px;
    }

    .MuiOutlinedInput:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Dark500;
    }

    .MuiOutlinedInput.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: Color.Blue300;
      border-width: 2px;
    }

    .MuiOutlinedInput.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: Color.Red300;
    }

    .MuiOutlinedInput.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver400;
    }

    .MuiOutlinedInput:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver500;
    }

    .MuiOutlinedInput-root {
      position: relative;
      border-radius: 4px;
      padding-right: 14px;
      padding-right: 8px;
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Dark500;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: Color.Blue300;
      border-width: 2px;
    }

    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: Color.Red300;
    }

    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver400;
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver500;
    }

    .MuiOutlinedInput-multiline {
      position: relative;
      border-radius: 4px;
      padding: 16.5px 14px;
      padding: 6px 8px;
    }

    .MuiOutlinedInput-multiline:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Dark500;
    }

    .MuiOutlinedInput-multiline.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: Color.Blue300;
      border-width: 2px;
    }

    .MuiOutlinedInput-multiline.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: Color.Red300;
    }

    .MuiOutlinedInput-multiline.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver400;
    }

    .MuiOutlinedInput-multiline:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver500;
    }

    .MuiOutlinedInput-root,.MuiInputBase-formControl {
      position: relative;
      border-radius: 4px;
    }

    .MuiOutlinedInput-root,.MuiInputBase-formControl:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Dark500;
    }

    .MuiOutlinedInput-root,.MuiInputBase-formControl.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: Color.Blue300;
      border-width: 2px;
    }

    .MuiOutlinedInput-root,.MuiInputBase-formControl.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: Color.Red300;
    }

    .MuiOutlinedInput-root,.MuiInputBase-formControl.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver400;
    }

    .MuiOutlinedInput-root,.MuiInputBase-formControl:hover .MuiOutlinedInput-notchedOutline {
      border-color: Color.Silver500;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(0,0,0,0.23);
      top: 0;
      border-color: Color.Silver500;
    }

    .MuiOutlinedInput-notchedOutline legend {
      display: none;
    }

    .MuiOutlinedInput-input {
      padding: 16.5px 14px;
      padding-left: 0;
      padding: 10px 12px;
    }

    .MuiOutlinedInput-input:-webkit-autofill {
      border-radius: inherit;
    }

    .MuiOutlinedInput-input.MuiInputBase-inputAdornedStart {
      padding-left: 0;
    }

    .MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd {
      padding-right: 0;
    }

    .MuiOutlinedInput-multiline {
      padding: 16.5px 14px;
      padding-right: 0;
      padding: 10px 12px;
    }

    .MuiOutlinedInput-multiline:-webkit-autofill {
      border-radius: inherit;
    }

    .MuiOutlinedInput-multiline.MuiInputBase-inputAdornedStart {
      padding-left: 0;
    }

    .MuiOutlinedInput-multiline.MuiInputBase-inputAdornedEnd {
      padding-right: 0;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputMultiline {
      padding: 0;
      padding: 10px 12px;
      padding: 0;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputMultiline:-webkit-autofill {
      border-radius: inherit;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputMultiline.MuiInputBase-inputAdornedStart {
      padding-left: 0;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputMultiline.MuiInputBase-inputAdornedEnd {
      padding-right: 0;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputSizeSmall {
      padding: 8.5px 14px;
      padding: 10px 12px;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputSizeSmall:-webkit-autofill {
      border-radius: inherit;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedStart {
      padding-left: 0;
    }

    .MuiOutlinedInput-input,.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd {
      padding-right: 0;
    }

    .MuiSelect-root,.MuiOutlinedInput-input {
      padding: 16.5px 14px;
      padding: 10px 12px;
    }

    .MuiSelect-root,.MuiOutlinedInput-input:-webkit-autofill {
      border-radius: inherit;
    }

    .MuiSelect-root,.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart {
      padding-left: 0;
    }

    .MuiSelect-root,.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd {
      padding-right: 0;
    }

    .MuiSelect-select,.SelectInput {
      -moz-appearance: none;
      -webkit-appearance: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .MuiSelect-select,.SelectInput:focus {
      border-radius: 4px;
    }

    .MuiSelect-select,.SelectInput::-ms-expand {
      display: none;
    }

    .MuiSelect-select,.SelectInput.Mui-disabled {
      cursor: default;
    }

    .MuiSelect-select,.SelectInput[multiple] {
      height: auto;
    }

    .MuiSelect-select,.SelectInput:not([multiple]) option,
    .MuiSelect-select,.SelectInput:not([multiple]) optgroup {
      background-color: Color.White;
    }

    .MuiSelect-select,.SelectInput.MuiSelect-select,.SelectInput.MuiSelect-select,.SelectInput {
      padding-right: 32px;
    }

    .MuiSelect-select,.SelectInput.MuiSelect-select {
      height: auto;
      min-height: 1.4375em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .MuiSelect-select,.SelectInput.MuiSelect-select {
      padding-right: 36px;
    }

    .MuiSelect-select,.SelectInput.MuiSelect-select:focus {
      background-color: unset;
    }

    .MuiSelect-icon,.MuiSelect-iconOutlined {
      position: absolute;
      right: 7px;
      top: calc(50% - .5em);
      pointer-events: none;
      color: rgba(0,0,0,0.54);
      top: calc(50% - 0.5em);
      font-size: 24px;
      right: 12px;
    }

    .MuiSelect-icon,.MuiSelect-iconOutlined.Mui-disabled {
      color: Color.Silver400;
    }

    $disabled .MuiSelect-icon {
      color: Color.Dark100;
    }

    .MuiSelect-nativeInput {
      bottom: 0;
      left: 0;
      position: absolute;
      opacity: 0;
      pointer-events: none;
      width: 100%;
      box-sizing: border-box;
    }

    @media (min-width:600px) {
      .MuiSelect-iconOutlined {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .MuiInputAdornment .MuiSvgIcon-root:not(.MuiSvgIcon-fontSizeSmall) {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiInputAdornment .MuiIconButton-root {
        margin-left: -6px;
      }
    }

    @media (min-width:600px) {
      .MuiInputAdornment-positionEnd .MuiSvgIcon-root:not(.MuiSvgIcon-fontSizeSmall) {
        font-size: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiInputAdornment-positionEnd .MuiIconButton-root {
        margin-right: -6px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiInputBase {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiInputBase {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiInputBase-multiline {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiInputBase-multiline {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiInputBase-fullWidth {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiInputBase-fullWidth {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiInputBase-inputAdornedEnd {
        height: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiInputBase-inputMultiline {
        height: 20px;
      }
    }

    @media (min-width:600px) {
      .MuiInputBase-inputSizeSmall {
        height: 20px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiFormHelperText {
        font-size: 14px;
        line-height: 20px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiFormHelperText {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiFormLabel {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiFormLabel {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {
      .MuiOutlinedInput:hover .MuiOutlinedInput-notchedOutline {
        border-color: rgba(0,0,0,0.23);
      }
    }

    @media (hover:none) {
      .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: rgba(0,0,0,0.23);
      }
    }

    @media (hover:none) {
      .MuiOutlinedInput-multiline:hover .MuiOutlinedInput-notchedOutline {
        border-color: rgba(0,0,0,0.23);
      }
    }

    @media (hover:none) {
      .MuiOutlinedInput-root,.MuiInputBase-formControl:hover .MuiOutlinedInput-notchedOutline {
        border-color: rgba(0,0,0,0.23);
      }
    }

    @media (min-width:600px) {
      .MuiOutlinedInput-input {
        padding: 6px 8px;
      }
    }

    @media (min-width:600px) {
      .MuiOutlinedInput-multiline {
        padding: 6px 8px;
      }
    }

    @media (min-width:600px) {
      .MuiOutlinedInput-input,.MuiInputBase-inputMultiline {
        padding: 6px 8px;
      }
    }

    @media (min-width:600px) {
      .MuiOutlinedInput-input,.MuiInputBase-inputMultiline {
        padding: 0;
      }
    }

    @media (min-width:600px) {
      .MuiOutlinedInput-input,.MuiInputBase-inputSizeSmall {
        padding: 6px 8px;
      }
    }

    @media (min-width:600px) {
      .MuiSelect-root,.MuiOutlinedInput-input {
        padding: 6px 8px;
      }
    }

    @media (min-width:600px) {
      .MuiSelect-select,.SelectInput.MuiSelect-select {
        right: 32px;
      }
    }

    @media (min-width:600px) {
      .MuiSelect-icon,.MuiSelect-iconOutlined {
        font-size: 16px;
      }
    }

    @media (min-width:600px) {
      .MuiSelect-icon,.MuiSelect-iconOutlined {
        right: 8px;
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
