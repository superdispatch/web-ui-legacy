import { Radio } from '@material-ui/core';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { props } = renderTheme();

  expect(props.MuiRadio).toMatchInlineSnapshot(`
    Object {
      "checkedIcon": <WithStyles(ForwardRef(SvgIcon))>
        <circle
          cx="12"
          cy="12"
          fill="currentColor"
          r="9"
          stroke="currentColor"
        />
        <circle
          cx="12"
          cy="12"
          fill="var(--sd-white)"
          r="4"
        />
      </WithStyles(ForwardRef(SvgIcon))>,
      "color": "primary",
      "icon": <WithStyles(ForwardRef(SvgIcon))>
        <circle
          cx="12"
          cy="12"
          fill="var(--sd-white)"
          r="9"
          stroke="currentColor"
        />
      </WithStyles(ForwardRef(SvgIcon))>,
    }
  `);
});

it('checks component css', () => {
  expect(renderCSS(<Radio />, ['MuiRadio'])).toMatchInlineSnapshot(`
    .MuiRadio-root {
      color: ColorDynamic.Dark100;
      width: 24px;
      height: 24px;
      padding: 0;
      margin-top: 4px;
      margin-left: 8px;
      margin-right: 8px;
      margin-bottom: 4px;
    }

    .MuiRadio-colorPrimary.Mui-checked {
      color: Color.Blue300;
    }

    .MuiRadio-colorPrimary.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiRadio-colorPrimary.Mui-checked.Mui-disabled {
      color: ColorDynamic.Silver500;
    }

    .MuiRadio-colorPrimary:hover:not(.Mui-checked) {
      color: ColorDynamic.Dark100;
    }

    .MuiRadio-colorPrimary.Mui-checked:hover {
      background-color: rgba(0, 112, 245, 0.04);
    }

    @media (hover: none) {
      .MuiRadio-colorPrimary.Mui-checked:hover {
        background-color: transparent;
      }
    }

    .MuiRadio-colorSecondary.Mui-checked {
      color: #f50057;
    }

    .MuiRadio-colorSecondary.Mui-disabled {
      color: Color.Silver400;
    }

    .MuiRadio-colorSecondary.Mui-checked:hover {
      background-color: rgba(245, 0, 87, 0.04);
    }

    @media (hover: none) {
      .MuiRadio-colorSecondary.Mui-checked:hover {
        background-color: transparent;
      }
    }
  `);
});
