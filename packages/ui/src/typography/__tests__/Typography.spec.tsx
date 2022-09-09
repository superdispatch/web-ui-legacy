import { Typography } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const {
    components: { MuiTypography },
  } = renderTheme();

  expect(MuiTypography?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "variant": "body2",
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <Typography />
        <Typography variant="body1" />
        <Typography variant="caption" />
        <Typography variant="button" />
        <Typography variant="h1" />
        <Typography variant="h2" />
        <Typography variant="h3" />
        <Typography variant="h4" />
        <Typography variant="h5" />
        <Typography variant="h6" />
        <Typography variant="subtitle1" />
        <Typography variant="subtitle2" />
        <Typography variant="overline" />
        <Typography align="left" />
        <Typography align="center" />
        <Typography align="right" />
        <Typography align="justify" />
        <Typography noWrap={true} />
        <Typography gutterBottom={true} />
        <Typography paragraph={true} />
        <Typography color="inherit" />
        <Typography color="primary" />
        <Typography color="secondary" />
        <Typography color="textPrimary" />
        <Typography color="textSecondary" />
        <Typography color="error" />
        <Typography display="inline" />
        <Typography display="block" />
      </div>,
      [
        'MuiTypography-body2',
        'MuiTypography-body1',
        'MuiTypography-caption',
        'MuiTypography-h1',
        'MuiTypography-h2',
        'MuiTypography-h3',
        'MuiTypography-h4',
        'MuiTypography-h5',
        'MuiTypography-h6',
        'MuiTypography-subtitle2',
        'MuiTypography-overline',
        'MuiTypography-alignLeft',
        'MuiTypography-alignCenter',
        'MuiTypography-alignRight',
        'MuiTypography-alignJustify',
        'MuiTypography-noWrap',
        'MuiTypography-gutterBottom',
        'MuiTypography-paragraph',
        'MuiTypography-colorInherit',
        'MuiTypography-colorPrimary',
        'MuiTypography-colorSecondary',
        'MuiTypography-colorTextPrimary',
        'MuiTypography-colorTextSecondary',
        'MuiTypography-colorError',
        'MuiTypography-displayInline',
        'MuiTypography-displayBlock',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiTypography-body2 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-body1 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-caption {
      margin: 0;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-h1 {
      margin: 0;
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-h2 {
      margin: 0;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-h3 {
      margin: 0;
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-h4 {
      margin: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-h5 {
      margin: 0;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      -webkit-letter-spacing: 0.1em;
      -moz-letter-spacing: 0.1em;
      -ms-letter-spacing: 0.1em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: "Inter",sans-serif;
    }

    .MuiTypography-h6 {
      margin: 0;
      font-family: "Inter",sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.75;
    }

    .MuiTypography-subtitle2 {
      margin: 0;
      font-family: "Inter",sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.57;
    }

    .MuiTypography-overline {
      margin: 0;
      font-family: "Inter",sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 2.66;
      text-transform: uppercase;
    }

    .MuiTypography-alignLeft {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      text-align: left;
    }

    .MuiTypography-alignCenter {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      text-align: center;
    }

    .MuiTypography-alignRight {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      text-align: right;
    }

    .MuiTypography-alignJustify {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      text-align: justify;
    }

    .MuiTypography-noWrap {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .MuiTypography-gutterBottom {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      margin-bottom: 0.35em;
    }

    .MuiTypography-paragraph {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      margin-bottom: 16px;
    }

    .MuiTypography-colorInherit {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: inherit;
    }

    .MuiTypography-colorPrimary {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: Color.Blue300;
    }

    .MuiTypography-colorSecondary {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: #9c27b0;
    }

    .MuiTypography-colorTextPrimary {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: Color.Dark500;
    }

    .MuiTypography-colorTextSecondary {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: Color.Dark200;
    }

    .MuiTypography-colorError {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: Color.Red300;
    }

    .MuiTypography-displayInline {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      display: inline;
    }

    .MuiTypography-displayBlock {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      display: block;
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-body2 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-body1 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-caption {
        font-size: 14px;
        line-height: 20px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-h1 {
        font-size: 28px;
        line-height: 36px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-h2 {
        font-size: 22px;
        line-height: 26px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-h3 {
        font-size: 20px;
        line-height: 26px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-h4 {
        font-size: 17px;
        line-height: 26px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-h5 {
        font-size: 14px;
        line-height: 20px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-alignLeft {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-alignCenter {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-alignRight {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-alignJustify {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-noWrap {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-gutterBottom {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-paragraph {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-colorInherit {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-colorPrimary {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-colorSecondary {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-colorTextPrimary {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-colorTextSecondary {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-colorError {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-displayInline {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-displayBlock {
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
});
