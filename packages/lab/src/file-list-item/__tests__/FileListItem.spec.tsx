import { Stack } from '@superdispatch/ui';
import { renderComponent } from '@superdispatch/ui-testutils';
import { screen } from '@testing-library/react';
import { FileListItem } from '../FileListItem';

it('checks if delete button appears', async () => {
  renderComponent(<FileListItem name="TST1208 Dispatcher Info.pdf" />);

  const deleteButton = await screen.findByRole('button', { name: 'Delete' });
  expect(deleteButton).toBeTruthy();
});

it('checks if delete button dont appear', () => {
  renderComponent(
    <FileListItem name="TST1208 Dispatcher Info.pdf" canDelete={false} />,
  );

  return expect(
    screen.findByRole('button', { name: 'Delete' }),
  ).rejects.toBeTruthy();
});

it('checks if FileListItem renders properly', () => {
  renderComponent(
    <FileListItem name="TST1208 Dispatcher Info.pdf" canDelete={false} />,
  );

  expect(screen.getByLabelText('file-list-item')).toMatchInlineSnapshot(`
    .c2 {
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
      font-size: 1.25rem;
      color: rgba(0,0,0,0.54);
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
      color: #8F949E;
      font-size: var(--mui-svg-icon-size,24px);
    }

    .c1 {
      min-width: 0;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -webkit-flex-basis: auto;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
      width: auto;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c1 > div {
      padding-top: var(--column-space-top);
      padding-left: var(--column-space-left);
      padding-bottom: var(--column-space-bottom);
    }

    .c1:last-child > div {
      padding-top: 0;
      padding-bottom: 0;
    }

    .c3 {
      min-width: 0;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -webkit-flex-basis: auto;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
      width: 100%;
      -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
    }

    .c3 > div {
      padding-top: var(--column-space-top);
      padding-left: var(--column-space-left);
      padding-bottom: var(--column-space-bottom);
    }

    .c3:last-child > div {
      padding-top: 0;
      padding-bottom: 0;
    }

    .c0 {
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      --column-space-left: 8px;
      --column-space-top: 0px;
      --column-space-bottom: 0px;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-left: -8px;
      width: calc(100% + 8px);
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .c4 {
      overflow: hidden;
      line-height: 22px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    @media (min-width:600px) {
      .c2 {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .c2 {
        font-size: var(--mui-svg-icon-size,16px);
      }
    }

    @media (min-width:600px) {
      .c1 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: auto;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
    }

    @media (min-width:900px) {
      .c1 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: auto;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
    }

    @media (min-width:600px) {
      .c3 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%;
        -webkit-flex-shrink: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
      }
    }

    @media (min-width:900px) {
      .c3 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%;
        -webkit-flex-shrink: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
      }
    }

    @media (min-width:600px) {
      .c0 {
        --column-space-left: 8px;
        --column-space-top: 0px;
        --column-space-bottom: 0px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-left: -8px;
        width: calc(100% + 8px);
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:900px) {
      .c0 {
        --column-space-left: 8px;
        --column-space-top: 0px;
        --column-space-bottom: 0px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-left: -8px;
        width: calc(100% + 8px);
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    <div
      aria-label="file-list-item"
    >
      <div
        class="c0"
      >
        <div
          class="c1"
        >
          <div>
            <svg
              aria-hidden="true"
              class="c2 MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
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
          class="c3"
        >
          <div>
            <div
              class="c4"
              id="uid_3"
            >
              TST1208 Dispatcher Info.pdf
            </div>
          </div>
        </div>
        <div
          class="c1"
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
    .c3 {
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
      font-size: 1.25rem;
      color: rgba(0,0,0,0.54);
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
      color: #8F949E;
      font-size: var(--mui-svg-icon-size,24px);
    }

    .c8 {
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
      font-size: 1.25rem;
      display: inherit;
      font-size: var(--mui-svg-icon-size,32px);
      font-size: var(--mui-svg-icon-size,24px);
    }

    .c9 {
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

    .c6 {
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

    .c6::-moz-focus-inner {
      border-style: none;
    }

    .c6.Mui-disabled {
      pointer-events: none;
      cursor: default;
    }

    .c7 {
      text-align: center;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 1.5rem;
      padding: 8px;
      border-radius: 50%;
      overflow: visible;
      color: rgba(0,0,0,0.54);
      -webkit-transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 5px;
      font-size: 1.125rem;
      background-color: rgba(0,0,0,0);
      -webkit-transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
      padding: 3px;
      font-size: 1.125rem;
    }

    .c7:hover {
      background-color: rgba(0,0,0,0.04);
    }

    .c7.Mui-disabled {
      background-color: transparent;
      color: #E1E5EA;
    }

    .c7:not(.MuiIconButton-colorInherit):not(.MuiIconButton-colorPrimary):not(.MuiIconButton-colorSecondary):not(.Mui-disabled) {
      color: #8F949E;
    }

    .c7:hover {
      background-color: rgba(0,0,0,0);
    }

    .c7:active {
      color: #192334;
    }

    .c7:hover {
      color: #5B6371;
    }

    .c7:focus {
      background-color: #E1E5EA;
    }

    .c7.Mui-disabled {
      color: #C4CDD5;
    }

    .c10 {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #192334;
    }

    .c11 {
      -webkit-text-decoration: none;
      text-decoration: none;
      background-size: 100% 1px;
      background-repeat: repeat-x;
      background-position: 0 100%;
      background-color: rgba(0,0,0,0);
    }

    .c11:focus {
      outline: none;
    }

    .c11:hover,
    .c11:active {
      background-image: linear-gradient(to right,currentColor 0%,currentColor 100%);
    }

    .c2 {
      min-width: 0;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -webkit-flex-basis: auto;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
      width: auto;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c2 > div {
      padding-top: var(--column-space-top);
      padding-left: var(--column-space-left);
      padding-bottom: var(--column-space-bottom);
    }

    .c2:last-child > div {
      padding-top: 0;
      padding-bottom: 0;
    }

    .c4 {
      min-width: 0;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -webkit-flex-basis: auto;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
      width: 100%;
      -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
    }

    .c4 > div {
      padding-top: var(--column-space-top);
      padding-left: var(--column-space-left);
      padding-bottom: var(--column-space-bottom);
    }

    .c4:last-child > div {
      padding-top: 0;
      padding-bottom: 0;
    }

    .c1 {
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      --column-space-left: 8px;
      --column-space-top: 0px;
      --column-space-bottom: 0px;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-left: -8px;
      width: calc(100% + 8px);
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .c0 {
      width: 100%;
    }

    .c0 > div {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: initial;
      -webkit-box-align: initial;
      -ms-flex-align: initial;
      align-items: initial;
      display: block;
    }

    .c0 > div:empty {
      display: none;
    }

    .c0 > div:not(:empty) ~ div {
      padding-top: 8px;
    }

    .c5 {
      overflow: hidden;
      line-height: 22px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    @media (min-width:600px) {
      .c3 {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .c3 {
        font-size: var(--mui-svg-icon-size,16px);
      }
    }

    @media (min-width:600px) {
      .c8 {
        font-size: var(--mui-svg-icon-size,24px);
      }
    }

    @media (min-width:600px) {
      .c8 {
        font-size: var(--mui-svg-icon-size,16px);
      }
    }

    @media print {
      .c6 {
        color-adjust: exact;
      }
    }

    @media (hover:none) {
      .c7:hover {
        background-color: transparent;
      }
    }

    @media (min-width:600px) {
      .c2 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: auto;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
    }

    @media (min-width:900px) {
      .c2 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: auto;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
    }

    @media (min-width:600px) {
      .c4 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%;
        -webkit-flex-shrink: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
      }
    }

    @media (min-width:900px) {
      .c4 {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        width: 100%;
        -webkit-flex-shrink: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
      }
    }

    @media (min-width:600px) {
      .c1 {
        --column-space-left: 8px;
        --column-space-top: 0px;
        --column-space-bottom: 0px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-left: -8px;
        width: calc(100% + 8px);
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:900px) {
      .c1 {
        --column-space-left: 8px;
        --column-space-top: 0px;
        --column-space-bottom: 0px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-left: -8px;
        width: calc(100% + 8px);
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:600px) {
      .c0 > div {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: initial;
        -webkit-box-align: initial;
        -ms-flex-align: initial;
        align-items: initial;
        display: block;
      }

      .c0 > div:empty {
        display: none;
      }

      .c0 > div:not(:empty) ~ div {
        padding-top: 8px;
      }
    }

    @media (min-width:900px) {
      .c0 > div {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: initial;
        -webkit-box-align: initial;
        -ms-flex-align: initial;
        align-items: initial;
        display: block;
      }

      .c0 > div:empty {
        display: none;
      }

      .c0 > div:not(:empty) ~ div {
        padding-top: 8px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    <div
      aria-label="file-list-items-stack"
      class="c0"
    >
      <div>
        <div
          aria-label="file-list-item"
        >
          <div
            class="c1"
          >
            <div
              class="c2"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="c3 MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
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
              class="c4"
            >
              <div>
                <div
                  class="c5"
                  id="uid_4"
                >
                  Read this document.txt
                </div>
              </div>
            </div>
            <div
              class="c2"
            >
              <div>
                <button
                  aria-label="Delete"
                  class="c6 MuiButtonBase-root c7 MuiIconButton-root MuiIconButton-sizeSmall"
                  data-mui-internal-clone-element="true"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    class="c8 MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                    data-testid="DeleteIcon"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    />
                  </svg>
                  <span
                    class="c9 MuiTouchRipple-root"
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
            class="c1"
          >
            <div
              class="c2"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="c3 MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
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
              class="c4"
            >
              <div>
                <div
                  class="c5"
                  id="uid_5"
                >
                  TST1208 Dispatcher Info.pdf
                </div>
              </div>
            </div>
            <div
              class="c2"
            >
              <div>
                <button
                  aria-label="Delete"
                  class="c6 MuiButtonBase-root c7 MuiIconButton-root MuiIconButton-sizeSmall"
                  data-mui-internal-clone-element="true"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    class="c8 MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                    data-testid="DeleteIcon"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    />
                  </svg>
                  <span
                    class="c9 MuiTouchRipple-root"
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
            class="c1"
          >
            <div
              class="c2"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="c3 MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
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
              class="c4"
            >
              <div>
                <div
                  class="c5"
                  id="uid_6"
                >
                  TST1208 Dispatcher Info.pdf
                </div>
              </div>
            </div>
            <div
              class="c2"
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
            class="c1"
          >
            <div
              class="c2"
            >
              <div>
                <svg
                  aria-hidden="true"
                  class="c3 MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeSmall"
                  data-testid="ImageIcon"
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
              class="c4"
            >
              <div>
                <div
                  class="c5"
                  id="uid_7"
                >
                  Object {
                    "pathname": "/seed/picsum/1024/768",
                  }
                </div>
              </div>
            </div>
            <div
              class="c2"
            >
              <div>
                <button
                  aria-label="Delete"
                  class="c6 MuiButtonBase-root c7 MuiIconButton-root MuiIconButton-sizeSmall"
                  data-mui-internal-clone-element="true"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    class="c8 MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                    data-testid="DeleteIcon"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    />
                  </svg>
                  <span
                    class="c9 MuiTouchRipple-root"
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
