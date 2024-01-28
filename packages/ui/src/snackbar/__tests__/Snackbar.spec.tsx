import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';
import { Snackbar } from '../../index';

it('checks default props', () => {
  const { props } = renderTheme();

  expect(props.MuiSnackbar).toMatchInlineSnapshot(`undefined`);
  expect(props.MuiSnackbarContent).toMatchInlineSnapshot(`undefined`);
});

it('checks component css', () => {
  expect(
    renderCSS(<Snackbar open={true} />, [
      'MuiSnackbar',
      'MuiSnackbarContent',
      'SD-SnackbarContent',
    ]),
  ).toMatchInlineSnapshot(`
    .SDSnackbar-root {
      left: 8px;
      right: 8px;
      display: flex;
      z-index: 1400;
      position: fixed;
      align-items: center;
      justify-content: center;
    }

    .SDSnackbar-anchorOriginTopCenter {
      top: 8px;
    }

    @media (min-width: 600px) {
      .SDSnackbar-anchorOriginTopCenter {
        top: 24px;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
      }
    }

    .SDSnackbar-anchorOriginBottomCenter {
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0;
      background: transparent;
    }

    @media (min-width: 600px) {
      .SDSnackbar-anchorOriginBottomCenter {
        left: 50%;
        right: auto;
        bottom: 24px;
        transform: translateX(-50%);
      }
    }

    .SDSnackbar-anchorOriginTopRight {
      top: 8px;
      justify-content: flex-end;
    }

    @media (min-width: 600px) {
      .SDSnackbar-anchorOriginTopRight {
        top: 24px;
        left: auto;
        right: 24px;
      }
    }

    .SDSnackbar-anchorOriginBottomRight {
      bottom: 8px;
      justify-content: flex-end;
    }

    @media (min-width: 600px) {
      .SDSnackbar-anchorOriginBottomRight {
        left: auto;
        right: 24px;
        bottom: 24px;
      }
    }

    .SDSnackbar-anchorOriginTopLeft {
      top: 8px;
      justify-content: flex-start;
    }

    @media (min-width: 600px) {
      .SDSnackbar-anchorOriginTopLeft {
        top: 24px;
        left: 24px;
        right: auto;
      }
    }

    .SDSnackbar-anchorOriginBottomLeft {
      bottom: 8px;
      justify-content: flex-start;
    }

    @media (min-width: 600px) {
      .SDSnackbar-anchorOriginBottomLeft {
        left: 24px;
        right: auto;
        bottom: 24px;
      }
    }

    .SDSnackbar-root {
      color: Color.White;
      display: flex;
      padding: 6px 16px;
      flex-grow: 1;
      flex-wrap: wrap;
      font-size: 14px;
      min-height: 60px;
      align-items: center;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 20px;
      border-radius: 4px;
      background-color: rgb(49, 49, 49);
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .SDSnackbar-root {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .SDSnackbar-root.MuiTypography-colorError {
      color: Color.Red500;
    }

    .SDSnackbar-root.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    @media (min-width: 600px) {
      .SDSnackbar-root {
        flex-grow: initial;
        min-width: 288px;
      }
    }

    .SDSnackbar-root.SD-SnackbarContent-root {
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0;
      position: relative;
      border-radius: 0;
    }

    @media (min-width: 600px) {
      .SDSnackbar-root.SD-SnackbarContent-root {
        border-radius: 4px;
      }
    }

    .SDSnackbar-message {
      flex: 1;
      display: flex;
      padding: 8px 0;
    }

    .SDSnackbar-action {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: -8px;
      padding-left: 16px;
    }

    .SD-SnackbarContent-root {
      color: Color.White;
      padding: 10px 16px;
      align-items: flex-start;
      background-color: Color.Dark500;
    }

    @media (min-width: 960px) {
      .SD-SnackbarContent-root {
        width: auto;
        max-width: 512px;
        min-width: 432px;
      }
    }

    .SD-SnackbarContent-action {
      padding-left: 8px;
    }

    .SD-SnackbarContent-message {
      align-items: flex-start;
    }

    @media (max-width: 599.95px) {
      .SD-SnackbarContent-message {
        font-size: 16px;
      }
    }

    .SD-SnackbarContent-icon {
      font-size: 24px;
      margin-right: 8px;
    }

    .SD-SnackbarContent-closeButton {
      color: Color.White40;
    }

    .SD-SnackbarContent-closeButton:hover,
    .SD-SnackbarContent-closeButton:focus {
      color: Color.White40;
      background-color: Color.White08;
    }

    .SD-SnackbarContent-variantError {
      color: Color.Red500;
      background: Color.Red50;
    }

    .SD-SnackbarContent-variantError .SD-SnackbarContent-closeButton {
      color: Color.Red500;
    }
  `);
});
