import { v5 } from '@superdispatch/ui-testutils';
import { InfoCard } from '../..';

it('checks component css', () => {
  expect(v5.renderCSS(<InfoCard />)).toMatchInlineSnapshot(`
    .c1 {
      background-color: Color.White;
      color: Color.Dark500;
      -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
      border-radius: 4px;
      border: 1px solid Color.Silver400;
    }

    .c2 {
      overflow: hidden;
    }

    .c4 {
      padding: 16px;
    }

    .c4:last-child {
      padding-bottom: 24px;
    }

    .c4:last-child {
      padding-bottom: 16px;
    }

    .c6 {
      padding: 16px;
    }

    .c3[data-full-width="true"] {
      border-radius: 0;
      border-left-width: 0;
      border-right-width: 0;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:600px) {
      .c3[data-size="large"] > .c5 {
        padding: 24px;
      }
    }
  `);
});
