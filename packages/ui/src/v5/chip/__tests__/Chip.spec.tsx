import { Chip } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiChip?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "deleteIcon": <div>
        <ForwardRef(SvgIcon)>
          <path
            clipRule="evenodd"
            d="M13.239 12L17 8.239 15.761 7 12 10.761 8.239 7 7 8.239 10.761 12 7 15.761 8.239 17 12 13.239 15.761 17 17 15.761 13.239 12z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </ForwardRef(SvgIcon)>
      </div>,
      "size": "small",
    }
  `);
});

it('checks component css', () => {
  expect(renderCSS(<Chip />, ['MuiChip-root', 'MuiChip-label']))
    .toMatchInlineSnapshot(`
    .MuiChip-root {
      font-family: "Inter",sans-serif;
      font-size: 0.8125rem;
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
      height: 24px;
      color: Color.Dark500;
      background-color: Color.Silver300;
      border-radius: 16px;
      white-space: nowrap;
      -webkit-transition: background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      cursor: default;
      outline: 0;
      -webkit-text-decoration: none;
      text-decoration: none;
      border: 0;
      padding: 0;
      vertical-align: middle;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: unset;
      height: unset;
      border-radius: 4px;
      background-color: Color.Silver200;
      height: unset;
    }

    .MuiChip-root.Mui-disabled {
      opacity: 0.38;
      pointer-events: none;
    }

    .MuiChip-root .MuiChip-avatar {
      margin-left: 5px;
      margin-right: -6px;
      width: 24px;
      height: 24px;
      color: #616161;
      font-size: 0.75rem;
    }

    .MuiChip-root .MuiChip-avatarColorPrimary {
      color: Color.White;
      background-color: rgb(0,81,178);
    }

    .MuiChip-root .MuiChip-avatarColorSecondary {
      color: Color.White;
      background-color: #7b1fa2;
    }

    .MuiChip-root .MuiChip-avatarSmall {
      margin-left: 4px;
      margin-right: -4px;
      width: 18px;
      height: 18px;
      font-size: 0.625rem;
    }

    .MuiChip-root .MuiChip-icon {
      color: #616161;
      margin-left: 4px;
      margin-right: -4px;
      font-size: 18px;
    }

    .MuiChip-root .MuiChip-deleteIcon {
      -webkit-tap-highlight-color: transparent;
      color: rgba(25,35,52,0.26);
      font-size: 16px;
      cursor: pointer;
      margin: 0 5px 0 -6px;
      margin-right: 4px;
      margin-left: -4px;
    }

    .MuiChip-root .MuiChip-deleteIcon:hover {
      color: rgba(25,35,52,0.4);
    }

    .MuiChip-root .MuiChip-icon {
      color: Color.Dark100;
      font-size: 1em;
      margin-right: unset;
    }

    .MuiChip-root .MuiChip-icon {
      width: unset;
      height: unset;
      margin-left: 8px;
      margin-right: unset;
    }

    .MuiChip-root .MuiChip-deleteIcon {
      width: unset;
      height: unset;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-size: 14px;
      -webkit-transition: background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .MuiChip-root .MuiChip-deleteIcon:active > svg,
    .MuiChip-root .MuiChip-deleteIcon:hover > svg,
    .MuiChip-root .MuiChip-deleteIcon:focus > svg {
      background-color: Color.Silver400;
    }

    .MuiChip-root .MuiChip-deleteIcon > svg {
      border-radius: 50%;
      color: Color.Dark200;
      font-size: 1em;
    }

    .MuiChip-root .MuiChip-deleteIcon {
      width: unset;
      height: unset;
      padding: 4px;
      margin-left: -4px;
      margin-right: 2px;
    }

    .MuiChip-root.Mui-disabled {
      opacity: 1;
      color: Color.Dark100;
    }

    .MuiChip-label {
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 8px;
      padding-right: 8px;
      white-space: nowrap;
      padding-left: 6px;
      padding-right: 6px;
    }

    @media (min-width:600px) {
      .MuiChip-root .MuiChip-icon {
        margin-left: 4px;
      }
    }

    @media (min-width:600px) {
      .MuiChip-root .MuiChip-deleteIcon {
        margin-right: 0;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiChip-root {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiChip-label {
        padding-left: 4px;
        padding-right: 4px;
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
