import { Typography } from '@mui/material';
import { v5 } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = v5.renderTheme();

  expect(components.MuiTypography).toMatchInlineSnapshot(`
    Object {
      "defaultProps": Object {
        "variant": "body2",
      },
    }
  `);
});

it('checks component css', () => {
  expect(
    v5.renderCSS(
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
        <Typography className="colorInherit" color="inherit" />
        <Typography className="colorPrimary" color="primary" />
        <Typography className="colorSecondary" color="secondary" />
        <Typography className="colorTextPrimary" color="textPrimary" />
        <Typography className="colorTextSecondary" color="textSecondary" />
        <Typography className="colorError" color="error" />
        <Typography className="displayInline" display="inline" />
        <Typography className="displayBlock" display="block" />
      </div>,
      'MuiTypography',
    ),
  ).toMatchInlineSnapshot(`
.MuiTypography-root.MuiTypography-body2 {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2 {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body1, .MuiTypography-root.MuiTypography-button, .MuiTypography-root.MuiTypography-h5 {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body1, .MuiTypography-root.MuiTypography-button, .MuiTypography-root.MuiTypography-h5 {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-caption {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-caption {
    font-size: 14px;
    line-height: 20px;
  }
}

.MuiTypography-root.MuiTypography-h1 {
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-h1 {
    font-size: 28px;
    line-height: 36px;
  }
}

.MuiTypography-root.MuiTypography-h2 {
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-h2 {
    font-size: 22px;
    line-height: 26px;
  }
}

.MuiTypography-root.MuiTypography-h3 {
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-h3 {
    font-size: 20px;
    line-height: 26px;
  }
}

.MuiTypography-root.MuiTypography-h4 {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-h4 {
    font-size: 17px;
    line-height: 26px;
  }
}

.MuiTypography-root.MuiTypography-h6 {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  -webkit-letter-spacing: 0.1em;
  -moz-letter-spacing: 0.1em;
  -ms-letter-spacing: 0.1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-h6 {
    font-size: 14px;
    line-height: 20px;
  }
}

.MuiTypography-root.MuiTypography-subtitle1 {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75;
}

.MuiTypography-root.MuiTypography-subtitle2 {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.57;
}

.MuiTypography-root.MuiTypography-overline {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 2.66;
  text-transform: uppercase;
}

.MuiTypography-root.MuiTypography-body2.MuiTypography-alignLeft {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  text-align: left;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.MuiTypography-alignLeft {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.MuiTypography-alignCenter {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.MuiTypography-alignCenter {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.MuiTypography-alignRight {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  text-align: right;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.MuiTypography-alignRight {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.MuiTypography-alignJustify {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  text-align: justify;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.MuiTypography-alignJustify {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.MuiTypography-noWrap {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.MuiTypography-noWrap {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.MuiTypography-gutterBottom {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  margin-bottom: 0.35em;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.MuiTypography-gutterBottom {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.MuiTypography-paragraph {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  margin-bottom: 16px;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.MuiTypography-paragraph {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.colorInherit {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: inherit;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.colorInherit {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.colorPrimary {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: Color.Blue300;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.colorPrimary {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.colorSecondary {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: #9c27b0;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.colorSecondary {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.colorTextPrimary {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: Color.Dark500;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.colorTextPrimary {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.colorTextSecondary {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: Color.Dark200;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.colorTextSecondary {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.colorError {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: Color.Red300;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.colorError {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.displayInline {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  display: inline;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.displayInline {
    font-size: 16px;
    line-height: 24px;
  }
}

.MuiTypography-root.MuiTypography-body2.displayBlock {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  display: block;
}

@media (min-width: 0px) and (max-width: 599.95px) {
  .MuiTypography-root.MuiTypography-body2.displayBlock {
    font-size: 16px;
    line-height: 24px;
  }
}
`);
});
