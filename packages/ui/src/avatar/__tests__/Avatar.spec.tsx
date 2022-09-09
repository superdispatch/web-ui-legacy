import { Avatar } from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiAvatar?.defaultProps).toMatchInlineSnapshot(`undefined`);
});

it('checks component css', () => {
  expect(
    renderCSS(<Avatar />, [
      'MuiAvatar',
      'MuiSvgIcon-root',
      'MuiAvatar-fallback',
    ]),
  ).toMatchInlineSnapshot(`
    .MuiSvgIcon-root {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -webkit-transition: fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: fill 200ms cubic-bezier(0.4,0,0.2,1) 0ms;
      font-size: 1.5rem;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
    }

    .MuiAvatar {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      font-family: "Inter",sans-serif;
      font-size: 1.25rem;
      line-height: 1;
      border-radius: 50%;
      overflow: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: Color.White;
      background-color: #bdbdbd;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: "Inter",sans-serif;
      text-transform: uppercase;
      width: 40px;
      height: 40px;
      color: Color.Dark300;
      background-color: Color.Silver300;
    }

    .MuiAvatar-fallback {
      width: 75%;
      height: 75%;
    }

    @media (min-width:600px) {
      .MuiSvgIcon-root {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiAvatar {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .MuiAvatar {
        width: 32px;
        height: 32px;
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
