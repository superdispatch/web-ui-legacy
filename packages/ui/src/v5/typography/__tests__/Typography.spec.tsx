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
        <Typography color="primary" />
        <Typography variant="h1" />
        <Typography variant="h2" />
        <Typography variant="h3" />
        <Typography variant="h4" />
        <Typography variant="h5" />
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
      
      .MuiTypography-root.MuiTypography-body2 {
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        color: Color.Blue300;
      }
      
      @media (min-width: 0px) and (max-width: 599.95px) {
        .MuiTypography-root.MuiTypography-body2 {
          font-size: 16px;
          line-height: 24px;
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
      
      .MuiTypography-root.MuiTypography-h5 {
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
      }
      
      @media (min-width: 0px) and (max-width: 599.95px) {
        .MuiTypography-root.MuiTypography-h5 {
          font-size: 16px;
          line-height: 24px;
        }
      }
  `);
});
