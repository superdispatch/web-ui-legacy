import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiCard?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "variant": "outlined",
    }
  `);
  expect(components.MuiCardHeader?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiCardContent?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiCardActions?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <Card />
        <CardHeader
          avatar={<img src="packages/ui/src/card/__tests__/Card.spec" alt="" />}
          action={<button>Rate</button>}
        />

        <CardContent />
        <CardActions />
        <CardActions disableSpacing={true} />
      </div>,
      [
        'MuiPaper-root',
        'MuiCard-root',
        'MuiCardHeader-root',
        'MuiCardHeader-avatar',
        'MuiCardHeader-content',
        'MuiCardHeader-action',
        'MuiCardContent-root',
        'MuiCardActions-spacing',
        'MuiCardActions-root',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiPaper-root {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border-radius: 4px;
      border: 1px solid Color.Silver400;
    }

    .MuiCard-root {
      overflow: hidden;
    }

    .MuiCardActions-spacing {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 8px;
    }

    .MuiCardActions-spacing > :not(:first-of-type) {
      margin-left: 8px;
    }

    .MuiCardActions-root {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 8px;
    }

    .MuiCardContent-root {
      padding: 16px;
    }

    .MuiCardContent-root:last-child {
      padding-bottom: 24px;
    }

    .MuiCardContent-root:last-child {
      padding-bottom: 16px;
    }

    .MuiCardHeader-root {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 16px;
    }

    .MuiCardHeader-avatar {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      margin-right: 16px;
    }

    .MuiCardHeader-action {
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      -webkit-align-self: flex-start;
      -ms-flex-item-align: start;
      align-self: flex-start;
      margin-top: -4px;
      margin-right: -8px;
      margin-bottom: -4px;
    }

    .MuiCardHeader-content {
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }
  `);
});
