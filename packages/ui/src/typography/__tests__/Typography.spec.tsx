import { Typography } from '@material-ui/core';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { props } = renderTheme();

  expect(props.MuiTypography).toMatchInlineSnapshot(`
    Object {
      "variant": "body2",
    }
  `);
});

it('checks component css', () => {
  expect(renderCSS(<Typography />, ['MuiTypography'])).toMatchInlineSnapshot(`
    .MuiTypography-root {
      margin: 0;
    }

    .MuiTypography-body2 {
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 20px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-body2 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .MuiTypography-body2.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-body2.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-body1 {
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      line-height: 20px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-body1 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .MuiTypography-body1.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-body1.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-caption {
      font-size: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 16px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-caption {
        font-size: 14px;
        line-height: 20px;
      }
    }

    .MuiTypography-caption.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-caption.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-button {
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      line-height: 20px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-button {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .MuiTypography-button.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-button.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-h1 {
      font-size: 32px;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      line-height: 40px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-h1 {
        font-size: 28px;
        line-height: 36px;
      }
    }

    .MuiTypography-h1.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-h1.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-h2 {
      font-size: 24px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      line-height: 28px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-h2 {
        font-size: 22px;
        line-height: 26px;
      }
    }

    .MuiTypography-h2.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-h2.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-h3 {
      font-size: 20px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      line-height: 28px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-h3 {
        font-size: 20px;
        line-height: 26px;
      }
    }

    .MuiTypography-h3.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-h3.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-h4 {
      font-size: 16px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      line-height: 24px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-h4 {
        font-size: 17px;
        line-height: 26px;
      }
    }

    .MuiTypography-h4.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-h4.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-h5 {
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      line-height: 20px;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-h5 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .MuiTypography-h5.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-h5.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-h6 {
      font-size: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    @media (min-width: 0px) and (max-width: 599.95px) {
      .MuiTypography-h6 {
        font-size: 14px;
        line-height: 20px;
      }
    }

    .MuiTypography-h6.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-h6.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-subtitle1 {
      font-size: 1rem;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.75;
    }

    .MuiTypography-subtitle1.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-subtitle1.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-subtitle2 {
      font-size: 0.875rem;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      line-height: 1.57;
    }

    .MuiTypography-subtitle2.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-subtitle2.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-overline {
      font-size: 0.75rem;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 2.66;
      text-transform: uppercase;
    }

    .MuiTypography-overline.MuiTypography-colorError {
      color: Color.Red500;
    }

    .MuiTypography-overline.MuiTypography-colorPrimary {
      color: Color.Blue500;
    }

    .MuiTypography-srOnly {
      width: 1px;
      height: 1px;
      overflow: hidden;
      position: absolute;
    }

    .MuiTypography-alignLeft {
      text-align: left;
    }

    .MuiTypography-alignCenter {
      text-align: center;
    }

    .MuiTypography-alignRight {
      text-align: right;
    }

    .MuiTypography-alignJustify {
      text-align: justify;
    }

    .MuiTypography-noWrap {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .MuiTypography-gutterBottom {
      margin-bottom: 0.35em;
    }

    .MuiTypography-paragraph {
      margin-bottom: 16px;
    }

    .MuiTypography-colorInherit {
      color: inherit;
    }

    .MuiTypography-colorPrimary {
      color: Color.Blue300;
    }

    .MuiTypography-colorSecondary {
      color: #f50057;
    }

    .MuiTypography-colorTextPrimary {
      color: Color.Dark500;
    }

    .MuiTypography-colorTextSecondary {
      color: Color.Dark300;
    }

    .MuiTypography-colorError {
      color: Color.Red300;
    }

    .MuiTypography-displayInline {
      display: inline;
    }

    .MuiTypography-displayBlock {
      display: block;
    }
  `);
});
