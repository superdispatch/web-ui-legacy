import { Stack } from '@superdispatch/ui';
import { renderComponent } from '@superdispatch/ui-testutils';
import { screen } from '@testing-library/react';
import { FileListItem } from '../FileListItem';

it('checks if delete button appears', () => {
  renderComponent(<FileListItem name="TST1208 Dispatcher Info.pdf" />);

  expect(screen.getAllByTitle('Delete')).toHaveLength(1);
});

it('checks if delete button dont appear', () => {
  renderComponent(
    <FileListItem name="TST1208 Dispatcher Info.pdf" canDelete={false} />,
  );

  expect(screen.queryByTitle('Delete')).toBeNull();
});

it('checks if FileListItem renders properly', () => {
  renderComponent(
    <FileListItem name="TST1208 Dispatcher Info.pdf" canDelete={false} />,
  );

  expect(screen.getByLabelText('file-list-item')).toMatchInlineSnapshot(`
    <div
      aria-label="file-list-item"
    >
      <div
        class="Columns-SD__sc-1a73118-0 bwYPTL"
      >
        <div
          class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
        >
          <div>
            <svg
              aria-hidden="true"
              class="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"
              />
            </svg>
          </div>
        </div>
        <div
          class="Column__ColumnRoot-SD__sc-m9n6o6-0 hbBUFf"
        >
          <div>
            <div
              class="FileListItem__FileListItemName-SD__sc-hxbsiy-0 gMzDXg"
              id="uid_3"
            >
              TST1208 Dispatcher Info.pdf
            </div>
          </div>
        </div>
        <div
          class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
        >
          <div />
        </div>
      </div>
    </div>
  `);
});

it('checks if FileListItem renders', () => {
  renderComponent(
    <Stack aria-label="file-list-items-stack">
      <FileListItem name="Read this document.txt" />
      <FileListItem name="TST1208 Dispatcher Info.pdf" />
      <FileListItem name="TST1208 Dispatcher Info.pdf" canDelete={false} />
      <FileListItem
        name="attachment.jpg"
        url="https://picsum.photos/seed/picsum/1024/768"
      />
    </Stack>,
  );

  expect(screen.getByLabelText('file-list-items-stack')).toMatchInlineSnapshot(`
    <div
      aria-label="file-list-items-stack"
      class="Stack__StackRoot-SD__sc-qkml7c-0 cNqlNY"
    >
      <div>
        <div
          aria-label="file-list-item"
        >
          <div
            class="Columns-SD__sc-1a73118-0 bwYPTL"
          >
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 hbBUFf"
            >
              <div>
                <div
                  class="FileListItem__FileListItemName-SD__sc-hxbsiy-0 gMzDXg"
                  id="uid_4"
                >
                  Read this document.txt
                </div>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div>
                <button
                  class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                  tabindex="0"
                  title="Delete"
                  type="button"
                >
                  <span
                    class="MuiIconButton-label"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      />
                    </svg>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          aria-label="file-list-item"
        >
          <div
            class="Columns-SD__sc-1a73118-0 bwYPTL"
          >
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 hbBUFf"
            >
              <div>
                <div
                  class="FileListItem__FileListItemName-SD__sc-hxbsiy-0 gMzDXg"
                  id="uid_5"
                >
                  TST1208 Dispatcher Info.pdf
                </div>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div>
                <button
                  class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                  tabindex="0"
                  title="Delete"
                  type="button"
                >
                  <span
                    class="MuiIconButton-label"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      />
                    </svg>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          aria-label="file-list-item"
        >
          <div
            class="Columns-SD__sc-1a73118-0 bwYPTL"
          >
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 hbBUFf"
            >
              <div>
                <div
                  class="FileListItem__FileListItemName-SD__sc-hxbsiy-0 gMzDXg"
                  id="uid_6"
                >
                  TST1208 Dispatcher Info.pdf
                </div>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          aria-label="file-list-item"
        >
          <div
            class="Columns-SD__sc-1a73118-0 bwYPTL"
          >
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 hbBUFf"
            >
              <div>
                <div
                  class="FileListItem__FileListItemName-SD__sc-hxbsiy-0 gMzDXg"
                  id="uid_7"
                >
                  Object {
                    "pathname": "/seed/picsum/1024/768",
                  }
                </div>
              </div>
            </div>
            <div
              class="Column__ColumnRoot-SD__sc-m9n6o6-0 jNPayl"
            >
              <div>
                <button
                  class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                  tabindex="0"
                  title="Delete"
                  type="button"
                >
                  <span
                    class="MuiIconButton-label"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      />
                    </svg>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});
