import { v5 } from '@superdispatch/ui-testutils';
import { OverflowText } from '../OverflowText';

const { renderCSS } = v5;

it('checks component css', () => {
  expect(
    renderCSS(
      <div>
        <OverflowText />
        <OverflowText>Text</OverflowText>
      </div>,
      [
        'MuiTypography-root',
        'SD-OverflowText-root',
        'SD-OverflowText-sentinel',
      ],
    ),
  ).toMatchInlineSnapshot(`
    .MuiTypography-root {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .SD-OverflowText-root {
      margin-bottom: -1px;
      border-bottom: 1px dashed transparent;
      -webkit-transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: border 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    }

    .SD-OverflowText-sentinel {
      width: 1px;
      height: 100%;
      display: inline-block;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {
      .MuiTypography-root {
        font-size: 16px;
        line-height: 24px;
      }
    }
  `);
});
