import { v5 } from '@superdispatch/ui-testutils';
import { screen } from '@testing-library/react';
import { DescriptionList, DescriptionListItem } from './DescriptionList';

const { renderComponent, renderCSS } = v5;

test('label id', () => {
  renderComponent(
    <DescriptionListItem
      label="Label"
      labelTypographyProps={{ id: 'label-id' }}
      content="Text"
    />,
  );

  expect(screen.getByLabelText('Label')).toMatchInlineSnapshot(`
    .c1 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #192334;
    }

    .c3 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: #6A707C;
    }

    .c2 {
      margin-bottom: -1px;
      border-bottom: 1px dashed transparent;
      -webkit-transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c4 {
      width: 1px;
      height: 100%;
      display: inline-block;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c1 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c3 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    <div
      aria-labelledby="label-id"
      class="c0"
    >
      <span
        aria-label="Text"
        class="c1 MuiTypography-root MuiTypography-body2 MuiTypography-noWrap c2"
        data-mui-internal-clone-element="true"
      >
        <span
          class="c3 MuiTypography-root MuiTypography-body2"
          id="label-id"
        >
          Label
        </span>
         
        Text
        <span
          class="c4"
        />
      </span>
    </div>
  `);
});

test('dynamic label id', () => {
  renderComponent(<DescriptionListItem label="Label" content="Text" />);

  expect(screen.getByLabelText('Label')).toMatchInlineSnapshot(`
    .c1 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #192334;
    }

    .c3 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: #6A707C;
    }

    .c2 {
      margin-bottom: -1px;
      border-bottom: 1px dashed transparent;
      -webkit-transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c4 {
      width: 1px;
      height: 100%;
      display: inline-block;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c1 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c3 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    <div
      aria-labelledby="uid_2"
      class="c0"
    >
      <span
        aria-label="Text"
        class="c1 MuiTypography-root MuiTypography-body2 MuiTypography-noWrap c2"
        data-mui-internal-clone-element="true"
      >
        <span
          class="c3 MuiTypography-root MuiTypography-body2"
          id="uid_2"
        >
          Label
        </span>
         
        Text
        <span
          class="c4"
        />
      </span>
    </div>
  `);
});

test('css', () => {
  expect(
    renderCSS(
      <DescriptionList>
        <DescriptionListItem />
        <DescriptionListItem icon={<div />} />
        <DescriptionListItem label={<div />} />
        <DescriptionListItem content={<div />} />
        <DescriptionListItem label={<div />} content={<div />} />
      </DescriptionList>,
    ),
  ).toMatchInlineSnapshot(`
    .c4 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: Color.Dark200;
    }

    .c8 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: Color.Dark500;
    }

    .c9 {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      color: Color.Dark200;
    }

    .c5 {
      margin-bottom: -1px;
      border-bottom: 1px dashed transparent;
      -webkit-transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .c6 {
      width: 1px;
      height: 100%;
      display: inline-block;
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c7 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      margin-right: 8px;
    }

    .c7 > .MuiSvgIcon-root {
      color: Color.Dark100;
      font-size: 24px;
    }

    .c1 > .c2:not(:last-child) {
      padding-bottom: 16px;
    }

    .c1[data-size="small"] > .c2:not(:last-child) {
      padding-bottom: 8px;
    }

    .c1[data-size="large"] > .c2:not(:last-child) {
      padding-bottom: 24px;
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c4 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c8 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c9 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (min-width:600px) {
      .c7 > .MuiSvgIcon-root {
        font-size: 16px;
      }
    }

    @media (min-width:600px) {
      .c1 > .c2:not(:last-child) {
        padding-bottom: 8px;
      }
    }

    @media (min-width:600px) {
      .c1[data-size="small"] > .c2:not(:last-child) {
        padding-bottom: 4px;
      }
    }

    @media (min-width:600px) {
      .c1[data-size="large"] > .c2:not(:last-child) {
        padding-bottom: 16px;
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
