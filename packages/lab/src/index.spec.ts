import * as api from '.';

test('api', () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "Alert": React.forwardRef(Alert),
      "AnchorButton": React.forwardRef(AnchorButton),
      "Banner": React.forwardRef(Banner),
      "Box": React.forwardRef(Box),
      "Button": React.forwardRef(Button),
      "ButtonArea": React.forwardRef(ButtonArea),
      "Container": React.forwardRef(Container),
      "DescriptionItem": React.forwardRef(DescriptionItem),
      "FileDropZone": React.forwardRef(FileDropZone),
      "FileListItem": React.forwardRef(FileListItem),
      "LinkedText": [Function],
      "MultilineText": React.forwardRef(MultilineText),
      "Navbar": [Function],
      "NavbarAvatar": [Function],
      "NavbarBadge": React.forwardRef(NavbarItem__NavbarBadge),
      "NavbarBottomBar": [Function],
      "NavbarItem": [Function],
      "NavbarLabel": React.forwardRef(NavbarItem__NavbarLabel),
      "NavbarList": [Function],
      "NavbarMenu": [Function],
      "NavbarMenuItem": [Function],
      "Sidebar": React.forwardRef(Sidebar),
      "SidebarContainer": React.forwardRef(SidebarContainer),
      "SidebarContent": [Function],
      "SidebarDivider": React.forwardRef(SidebarDivider),
      "SidebarMenuItem": React.forwardRef(SidebarMenuItem),
      "SidebarMenuItemAction": React.forwardRef(SidebarMenuItemAction),
      "SidebarMenuItemAvatar": React.forwardRef(SidebarMenuItemAvatar),
      "SidebarSubheader": React.forwardRef(SidebarSubheader),
      "TextBox": React.forwardRef(TextBox),
      "formatBytes": [Function],
      "toBytes": [Function],
      "useNavbarContext": [Function],
      "useSidebarContext": [Function],
    }
  `);
});
