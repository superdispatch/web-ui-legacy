import { Autocomplete } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiAutocomplete?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "popupIcon": <ForwardRef(SvgIcon)>
        <path
          d="M12 16.5L6 9h12l-6 7.5z"
          fill="currentColor"
        />
      </ForwardRef(SvgIcon)>,
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <Autocomplete
          options={[]}
          renderInput={({ inputProps }) => <input {...inputProps} />}
        />

        <Autocomplete
          options={[]}
          fullWidth={true}
          renderInput={({ inputProps }) => <input {...inputProps} />}
        />

        <Autocomplete
          size="small"
          options={[]}
          renderInput={({ inputProps }) => <input {...inputProps} />}
        />
      </div>,
      [
        'MuiAutocomplete-root',
        'MuiAutocomplete-root',
        'MuiAutocomplete-fullWidth',
        'MuiAutocomplete-sizeSmall',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiAutocomplete-root.Mui-focused .MuiAutocomplete-clearIndicator {
      visibility: visible;
    }

    .MuiAutocomplete-root .MuiAutocomplete-tag {
      margin: 3px;
      max-width: calc(100% - 6px);
    }

    .MuiAutocomplete-root .MuiAutocomplete-inputRoot {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiAutocomplete-inputRoot,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiAutocomplete-inputRoot {
      padding-right: 30px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiAutocomplete-inputRoot {
      padding-right: 56px;
    }

    .MuiAutocomplete-root .MuiAutocomplete-inputRoot .MuiAutocomplete-input {
      width: 0;
      min-width: 30px;
    }

    .MuiAutocomplete-root .MuiInput-root {
      padding-bottom: 1px;
    }

    .MuiAutocomplete-root .MuiInput-root .MuiInput-input {
      padding: 4px 4px 4px 0px;
    }

    .MuiAutocomplete-root .MuiInput-root.MuiInputBase-sizeSmall .MuiInput-input {
      padding: 2px 4px 3px 0;
    }

    .MuiAutocomplete-root .MuiOutlinedInput-root {
      padding: 9px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiOutlinedInput-root,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiOutlinedInput-root {
      padding-right: 39px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiOutlinedInput-root {
      padding-right: 65px;
    }

    .MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input {
      padding: 7.5px 4px 7.5px 6px;
    }

    .MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-endAdornment {
      right: 9px;
    }

    .MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall {
      padding: 6px;
    }

    .MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input {
      padding: 2.5px 4px 2.5px 6px;
    }

    .MuiAutocomplete-root .MuiFilledInput-root {
      padding-top: 19px;
      padding-left: 8px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiFilledInput-root,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiFilledInput-root {
      padding-right: 39px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiFilledInput-root {
      padding-right: 65px;
    }

    .MuiAutocomplete-root .MuiFilledInput-root .MuiFilledInput-input {
      padding: 7px 4px;
    }

    .MuiAutocomplete-root .MuiFilledInput-root .MuiAutocomplete-endAdornment {
      right: 9px;
    }

    .MuiAutocomplete-root .MuiFilledInput-root.MuiInputBase-sizeSmall {
      padding-bottom: 1px;
    }

    .MuiAutocomplete-root .MuiFilledInput-root.MuiInputBase-sizeSmall .MuiFilledInput-input {
      padding: 2.5px 4px;
    }

    .MuiAutocomplete-root .MuiInputBase-hiddenLabel {
      padding-top: 8px;
    }

    .MuiAutocomplete-root .MuiAutocomplete-input {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      text-overflow: ellipsis;
      opacity: 1;
    }

    .MuiAutocomplete-root .MuiAutocomplete-tag {
      margin: 4px;
    }

    .MuiAutocomplete-root .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
      padding: 6px 8px;
    }

    .MuiAutocomplete-root .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
      width: 144px;
      padding: 4px;
    }

    .MuiAutocomplete-root .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child {
      padding-left: unset;
    }

    .MuiAutocomplete-root .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment {
      right: 12px;
    }

    .MuiAutocomplete-fullWidth {
      width: 100%;
    }

    .MuiAutocomplete-fullWidth.Mui-focused .MuiAutocomplete-clearIndicator {
      visibility: visible;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-tag {
      margin: 3px;
      max-width: calc(100% - 6px);
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiAutocomplete-inputRoot,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot {
      padding-right: 30px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiAutocomplete-inputRoot {
      padding-right: 56px;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot .MuiAutocomplete-input {
      width: 0;
      min-width: 30px;
    }

    .MuiAutocomplete-fullWidth .MuiInput-root {
      padding-bottom: 1px;
    }

    .MuiAutocomplete-fullWidth .MuiInput-root .MuiInput-input {
      padding: 4px 4px 4px 0px;
    }

    .MuiAutocomplete-fullWidth .MuiInput-root.MuiInputBase-sizeSmall .MuiInput-input {
      padding: 2px 4px 3px 0;
    }

    .MuiAutocomplete-fullWidth .MuiOutlinedInput-root {
      padding: 9px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiOutlinedInput-root,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-fullWidth .MuiOutlinedInput-root {
      padding-right: 39px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiOutlinedInput-root {
      padding-right: 65px;
    }

    .MuiAutocomplete-fullWidth .MuiOutlinedInput-root .MuiAutocomplete-input {
      padding: 7.5px 4px 7.5px 6px;
    }

    .MuiAutocomplete-fullWidth .MuiOutlinedInput-root .MuiAutocomplete-endAdornment {
      right: 9px;
    }

    .MuiAutocomplete-fullWidth .MuiOutlinedInput-root.MuiInputBase-sizeSmall {
      padding: 6px;
    }

    .MuiAutocomplete-fullWidth .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input {
      padding: 2.5px 4px 2.5px 6px;
    }

    .MuiAutocomplete-fullWidth .MuiFilledInput-root {
      padding-top: 19px;
      padding-left: 8px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiFilledInput-root,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-fullWidth .MuiFilledInput-root {
      padding-right: 39px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiFilledInput-root {
      padding-right: 65px;
    }

    .MuiAutocomplete-fullWidth .MuiFilledInput-root .MuiFilledInput-input {
      padding: 7px 4px;
    }

    .MuiAutocomplete-fullWidth .MuiFilledInput-root .MuiAutocomplete-endAdornment {
      right: 9px;
    }

    .MuiAutocomplete-fullWidth .MuiFilledInput-root.MuiInputBase-sizeSmall {
      padding-bottom: 1px;
    }

    .MuiAutocomplete-fullWidth .MuiFilledInput-root.MuiInputBase-sizeSmall .MuiFilledInput-input {
      padding: 2.5px 4px;
    }

    .MuiAutocomplete-fullWidth .MuiInputBase-hiddenLabel {
      padding-top: 8px;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-input {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      text-overflow: ellipsis;
      opacity: 1;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-tag {
      margin: 4px;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
      padding: 6px 8px;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
      width: 144px;
      padding: 4px;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child {
      padding-left: unset;
    }

    .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment {
      right: 12px;
    }

    .MuiAutocomplete-sizeSmall.Mui-focused .MuiAutocomplete-clearIndicator {
      visibility: visible;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-tag {
      margin: 2px;
      max-width: calc(100% - 4px);
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiAutocomplete-inputRoot,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot {
      padding-right: 30px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiAutocomplete-inputRoot {
      padding-right: 56px;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot .MuiAutocomplete-input {
      width: 0;
      min-width: 30px;
    }

    .MuiAutocomplete-sizeSmall .MuiInput-root {
      padding-bottom: 1px;
    }

    .MuiAutocomplete-sizeSmall .MuiInput-root .MuiInput-input {
      padding: 4px 4px 4px 0px;
    }

    .MuiAutocomplete-sizeSmall .MuiInput-root.MuiInputBase-sizeSmall .MuiInput-input {
      padding: 2px 4px 3px 0;
    }

    .MuiAutocomplete-sizeSmall .MuiOutlinedInput-root {
      padding: 9px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiOutlinedInput-root,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-sizeSmall .MuiOutlinedInput-root {
      padding-right: 39px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiOutlinedInput-root {
      padding-right: 65px;
    }

    .MuiAutocomplete-sizeSmall .MuiOutlinedInput-root .MuiAutocomplete-input {
      padding: 7.5px 4px 7.5px 6px;
    }

    .MuiAutocomplete-sizeSmall .MuiOutlinedInput-root .MuiAutocomplete-endAdornment {
      right: 9px;
    }

    .MuiAutocomplete-sizeSmall .MuiOutlinedInput-root.MuiInputBase-sizeSmall {
      padding: 6px;
    }

    .MuiAutocomplete-sizeSmall .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input {
      padding: 2.5px 4px 2.5px 6px;
    }

    .MuiAutocomplete-sizeSmall .MuiFilledInput-root {
      padding-top: 19px;
      padding-left: 8px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-root .MuiFilledInput-root,
    .MuiAutocomplete-hasClearIcon.MuiAutocomplete-sizeSmall .MuiFilledInput-root {
      padding-right: 39px;
    }

    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiFilledInput-root {
      padding-right: 65px;
    }

    .MuiAutocomplete-sizeSmall .MuiFilledInput-root .MuiFilledInput-input {
      padding: 7px 4px;
    }

    .MuiAutocomplete-sizeSmall .MuiFilledInput-root .MuiAutocomplete-endAdornment {
      right: 9px;
    }

    .MuiAutocomplete-sizeSmall .MuiFilledInput-root.MuiInputBase-sizeSmall {
      padding-bottom: 1px;
    }

    .MuiAutocomplete-sizeSmall .MuiFilledInput-root.MuiInputBase-sizeSmall .MuiFilledInput-input {
      padding: 2.5px 4px;
    }

    .MuiAutocomplete-sizeSmall .MuiInputBase-hiddenLabel {
      padding-top: 8px;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-input {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      text-overflow: ellipsis;
      opacity: 1;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-tag {
      margin: 4px;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
      padding: 6px 8px;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
      width: 144px;
      padding: 4px;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child {
      padding-left: unset;
    }

    .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment {
      right: 12px;
    }

    @media (pointer:fine) {
      .MuiAutocomplete-root:hover .MuiAutocomplete-clearIndicator {
        visibility: visible;
      }
    }

    @media (min-width:600px) {
      .MuiAutocomplete-root .MuiAutocomplete-tag {
        margin: 2px;
      }
    }

    @media (min-width:600px) {
      .MuiAutocomplete-root .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
        padding: 4px 6px;
      }

      .MuiAutocomplete-root .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
        padding: 2px;
      }

      .MuiAutocomplete-root .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment {
        right: 8px;
      }
    }

    @media (pointer:fine) {
      .MuiAutocomplete-fullWidth:hover .MuiAutocomplete-clearIndicator {
        visibility: visible;
      }
    }

    @media (min-width:600px) {
      .MuiAutocomplete-fullWidth .MuiAutocomplete-tag {
        margin: 2px;
      }
    }

    @media (min-width:600px) {
      .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
        padding: 4px 6px;
      }

      .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
        padding: 2px;
      }

      .MuiAutocomplete-fullWidth .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment {
        right: 8px;
      }
    }

    @media (pointer:fine) {
      .MuiAutocomplete-sizeSmall:hover .MuiAutocomplete-clearIndicator {
        visibility: visible;
      }
    }

    @media (min-width:600px) {
      .MuiAutocomplete-sizeSmall .MuiAutocomplete-tag {
        margin: 2px;
      }
    }

    @media (min-width:600px) {
      .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
        padding: 4px 6px;
      }

      .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
        padding: 2px;
      }

      .MuiAutocomplete-sizeSmall .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment {
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
