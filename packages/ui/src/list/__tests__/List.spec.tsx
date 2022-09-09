import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { renderCSS, renderTheme } from '@superdispatch/ui-testutils';

it('checks default props', () => {
  const { components } = renderTheme();

  expect(components.MuiList?.defaultProps).toMatchInlineSnapshot(`undefined`);
  expect(components.MuiListItem?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiListItemAvatar?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(components.MuiListItemIcon?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
  expect(
    components.MuiListItemSecondaryAction?.defaultProps,
  ).toMatchInlineSnapshot(`undefined`);
  expect(components.MuiListItemText?.defaultProps).toMatchInlineSnapshot(
    `undefined`,
  );
});

it('checks component css', () => {
  expect(
    renderCSS(
      <List>
        <ListItem>
          <ListItemAvatar>
            <span />
          </ListItemAvatar>

          <ListItemIcon>
            <span />
          </ListItemIcon>

          <ListItemText />
          <ListItemSecondaryAction />
        </ListItem>

        <ListItem button={true} />
      </List>,
    ),
  ).toMatchInlineSnapshot(`
    .c10 {
      overflow: hidden;
      pointer-events: none;
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
    }

    .c8 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      outline: 0;
      border: 0;
      margin: 0;
      border-radius: 0;
      padding: 0;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      vertical-align: middle;
      -moz-appearance: none;
      -webkit-appearance: none;
      -webkit-text-decoration: none;
      text-decoration: none;
      color: inherit;
    }

    .c8::-moz-focus-inner {
      border-style: none;
    }

    .c8.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .c1 {
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;
      padding-top: 8px;
      padding-bottom: 8px;
    }

    .c7 {
      position: absolute;
      right: 16px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 16px;
      padding-right: 48px;
    }

    .c3.Mui-focusVisible {
      background-color: rgba(0,0,0,0.12);
    }

    .c3.Mui-selected {
      background-color: rgba(0,117,255,0.08);
    }

    .c3.Mui-selected.Mui-focusVisible {
      background-color: rgba(0,117,255,0.2);
    }

    .c3.Mui-disabled {
      opacity: 0.38;
    }

    .c3.Mui-selected,
    .c3.Mui-selected:hover {
      background-color: Color.Blue50;
    }

    .c3 .MuiTouchRipple-root {
      color: Color.Blue100;
    }

    .c9 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 16px;
      padding-right: 16px;
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c9.Mui-focusVisible {
      background-color: rgba(0,0,0,0.12);
    }

    .c9.Mui-selected {
      background-color: rgba(0,117,255,0.08);
    }

    .c9.Mui-selected.Mui-focusVisible {
      background-color: rgba(0,117,255,0.2);
    }

    .c9.Mui-disabled {
      opacity: 0.38;
    }

    .c9:hover {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-color: Color.Silver100;
    }

    .c9.Mui-selected:hover {
      background-color: rgba(0,117,255,0.12);
    }

    .c9.Mui-selected,
    .c9.Mui-selected:hover {
      background-color: Color.Blue50;
    }

    .c9 .MuiTouchRipple-root {
      color: Color.Blue100;
    }

    .c2 {
      position: relative;
    }

    .c4 {
      min-width: 56px;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c5 {
      min-width: 56px;
      color: rgba(0,0,0,0.54);
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
    }

    .c6 {
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-width: 0;
      margin-top: 4px;
      margin-bottom: 4px;
    }

    @media print {
      .c8 {
        color-adjust: exact;
      }
    }

    @media (hover:none) {
      .c9:hover {
        background-color: transparent;
      }
    }

    @media (hover:none) {
      .c9.Mui-selected:hover {
        background-color: rgba(0,117,255,0.08);
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
