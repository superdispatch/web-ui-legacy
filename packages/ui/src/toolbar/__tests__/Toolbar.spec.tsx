import { Toolbar } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiToolbar?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <Toolbar disableGutters={false} />
        <Toolbar disableGutters={true} />
        <Toolbar variant="dense" />
      </div>,
      [
        'MuiToolbar-regular-gutters',
        'MuiToolbar-disableGutters',
        'MuiToolbar-dense',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiToolbar-regular-gutters {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      min-height: 56px;
      min-height: 64px;
    }

    .MuiToolbar-disableGutters {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      min-height: 56px;
      min-height: 64px;
    }

    .MuiToolbar-dense {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      min-height: 48px;
    }

    @media (min-width:600px) {
      .MuiToolbar-regular-gutters {
        padding-left: 24px;
        padding-right: 24px;
      }
    }

    @media (min-width:0px) and (orientation:landscape) {
      .MuiToolbar-regular-gutters {
        min-height: 48px;
      }
    }

    @media (min-width:600px) {
      .MuiToolbar-regular-gutters {
        min-height: 64px;
      }
    }

    @media (min-width:600px) {
      .MuiToolbar-regular-gutters {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    @media (min-width:0px) and (orientation:landscape) {
      .MuiToolbar-disableGutters {
        min-height: 48px;
      }
    }

    @media (min-width:600px) {
      .MuiToolbar-disableGutters {
        min-height: 64px;
      }
    }

    @media (min-width:600px) {
      .MuiToolbar-dense {
        padding-left: 24px;
        padding-right: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiToolbar-dense {
        padding-left: 16px;
        padding-right: 16px;
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
