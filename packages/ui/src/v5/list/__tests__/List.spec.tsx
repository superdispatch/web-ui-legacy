import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { v5 } from '@superdispatch/ui-testutils';

const { renderCSS, renderTheme } = v5;

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
    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }
  `);
});
