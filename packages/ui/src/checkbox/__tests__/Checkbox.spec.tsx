import { Checkbox } from '@material-ui/core';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { props } = renderTheme();

  expect(props.MuiCheckbox).toMatchInlineSnapshot(`
    Object {
      "checkedIcon": <WithStyles(ForwardRef(SvgIcon))>
        <rect
          fill="currentColor"
          height="18"
          rx="2"
          width="18"
          x="3"
          y="3"
        />
        <path
          d="M15.73 8l-.63.63c-1.43 1.43-2.94 3.05-4.37 4.5l-1.9-1.57-.7-.57L7 12.38l.7.57 2.53 2.09.63.52.58-.58c1.6-1.62 3.35-3.5 4.93-5.08l.63-.63L15.73 8z"
          fill="var(--sd-white)"
        />
      </WithStyles(ForwardRef(SvgIcon))>,
      "color": "primary",
      "icon": <WithStyles(ForwardRef(SvgIcon))>
        <rect
          fill="var(--sd-white)"
          height="17"
          rx="1.5"
          stroke="currentColor"
          width="17"
          x="3.5"
          y="3.5"
        />
      </WithStyles(ForwardRef(SvgIcon))>,
      "indeterminateIcon": <WithStyles(ForwardRef(SvgIcon))>
        <rect
          fill="currentIcon"
          height="18"
          rx="2"
          width="18"
          x="3"
          y="3"
        />
        <path
          d="M7 11h10v2H7v-2z"
          fill="var(--sd-white)"
        />
      </WithStyles(ForwardRef(SvgIcon))>,
    }
  `);
});

it('checks component css', () => {
  expect(renderCSS(<Checkbox />, ['MuiCheckbox'])).toMatchInlineSnapshot(`
    .MuiCheckbox-root {
      color: ColorV2.Dark100;
      width: 24px;
      height: 24px;
      padding: 0;
      margin-top: 4px;
      margin-left: 8px;
      margin-right: 8px;
      margin-bottom: 4px;
    }

    .MuiCheckbox-root:hover {
      background-color: ColorV2.Blue10;
    }

    .MuiCheckbox-root.MuiButtonBase-root {
      border-radius: 4px;
    }

    .MuiCheckbox-colorPrimary.Mui-checked {
      color: Color.Blue300;
    }

    .MuiCheckbox-colorPrimary.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiCheckbox-colorPrimary.Mui-checked.Mui-disabled {
      color: ColorV2.Silver500;
    }

    .MuiCheckbox-colorPrimary:hover:not(.Mui-checked) {
      color: ColorV2.Dark100;
      background-color: ColorV2.Blue10;
    }

    .MuiCheckbox-colorPrimary.Mui-checked:hover {
      background-color: rgba(0, 112, 245, 0.04);
    }

    @media (hover: none) {
      .MuiCheckbox-colorPrimary.Mui-checked:hover {
        background-color: transparent;
      }
    }

    .MuiCheckbox-colorSecondary.Mui-checked {
      color: #f50057;
    }

    .MuiCheckbox-colorSecondary.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiCheckbox-colorSecondary.Mui-checked:hover {
      background-color: rgba(245, 0, 87, 0.04);
    }

    @media (hover: none) {
      .MuiCheckbox-colorSecondary.Mui-checked:hover {
        background-color: transparent;
      }
    }
  `);
});
