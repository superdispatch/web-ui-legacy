import { AppBar } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiAppBar?.defaultProps).toMatchInlineSnapshot(`
    Object {
      "color": "inherit",
      "elevation": 0,
      "position": "static",
    }
  `);
});

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <AppBar position="fixed" />
        <AppBar position="absolute" />
        <AppBar position="sticky" />
        <AppBar position="static" />
        <AppBar position="relative" />

        <AppBar color="default" />
        <AppBar color="primary" />
        <AppBar color="secondary" />
        <AppBar color="transparent" />
        <AppBar color="inherit" />
      </div>,
      [
        'MuiPaper-root',
        'MuiAppBar-positionFixed',
        'MuiAppBar-positionAbsolute',
        'MuiAppBar-positionSticky',
        'MuiAppBar-positionStatic',
        'MuiAppBar-positionRelative',
        'MuiAppBar-colorDefault',
        'MuiAppBar-colorPrimary',
        'MuiAppBar-colorSecondary',
        'MuiAppBar-colorTransparent',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiPaper-root {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      box-shadow: none;
      border: 1px solid Color.Silver400;
    }

    .MuiAppBar-positionFixed {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: fixed;
      z-index: 1100;
      top: 0;
      left: auto;
      right: 0;
      color: inherit;
    }

    .MuiAppBar-positionAbsolute {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: absolute;
      z-index: 1100;
      top: 0;
      left: auto;
      right: 0;
      color: inherit;
    }

    .MuiAppBar-positionSticky {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: -webkit-sticky;
      position: sticky;
      z-index: 1100;
      top: 0;
      left: auto;
      right: 0;
      color: inherit;
    }

    .MuiAppBar-positionStatic {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: static;
      color: inherit;
    }

    .MuiAppBar-positionRelative {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: relative;
      color: inherit;
    }

    .MuiAppBar-colorDefault {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: static;
      background-color: #f5f5f5;
      color: rgba(0,0,0,0.87);
    }

    .MuiAppBar-colorPrimary {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: static;
      background-color: Color.Blue300;
      color: Color.White;
    }

    .MuiAppBar-colorSecondary {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: static;
      background-color: #9c27b0;
      color: Color.White;
    }

    .MuiAppBar-colorTransparent {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      position: static;
      background-color: transparent;
      color: inherit;
    }

    @media print {
      .MuiAppBar-positionFixed {
        position: absolute;
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
