import { Typography } from '@mui/material';
import { mockDate, renderComponent } from '@superdispatch/ui-testutils';
import { DateTime } from 'luxon';
import { FormattedRelativeTime } from './FormattedRelativeTime';

beforeEach(() => {
  mockDate();
});

describe('FormattedRelativeTime', () => {
  test('basic', () => {
    const now = DateTime.fromMillis(Date.now());
    const { container } = renderComponent(
      <>
        <FormattedRelativeTime date={now} />
        <FormattedRelativeTime date={now.startOf('minute')} />
        <FormattedRelativeTime date={now.endOf('minute')} />
        <FormattedRelativeTime date={now.startOf('hour')} />
        <FormattedRelativeTime date={now.endOf('hour')} />
        <FormattedRelativeTime date={now.startOf('day')} />
        <FormattedRelativeTime date={now.endOf('day')} />
        <FormattedRelativeTime date={now.startOf('week')} />
        <FormattedRelativeTime date={now.endOf('week')} />
        <FormattedRelativeTime date={now.startOf('month')} />
        <FormattedRelativeTime date={now.endOf('month')} />
        <FormattedRelativeTime date={now.startOf('year')} />
        <FormattedRelativeTime date={now.endOf('year')} />
        <FormattedRelativeTime date={now.minus({ year: 1 })} />
      </>,
    );

    expect(container).toMatchInlineSnapshot(`
      @media (min-width:0px) and (max-width:599.95px) {

      }

      @media print {

      }

      @media (min-width:0px) and (max-width:599.95px) {

      }

      <div>
        in 0s
        14s ago
        in 45s
        13m ago
        in 46m
        7h ago
        in 16h
        4d ago
        in 2d
        23d ago
        in 7d
        4mo ago
        in 7mo
        1y ago
      </div>
    `);
  });

  test('base', () => {
    const now = DateTime.fromMillis(Date.now());
    const { container } = renderComponent(
      <FormattedRelativeTime
        date={now.plus({ days: 10 })}
        base={now.minus({ days: 10 })}
      />,
    );

    expect(container).toMatchInlineSnapshot(`
      @media (min-width:0px) and (max-width:599.95px) {

      }

      @media print {

      }

      @media (min-width:0px) and (max-width:599.95px) {

      }

      <div>
        in 20d
      </div>
    `);
  });

  test('invalid', () => {
    const now = DateTime.fromMillis(Date.now());
    const { container } = renderComponent(
      <>
        <FormattedRelativeTime date={NaN} />
        <FormattedRelativeTime date={now.startOf('month')} base={NaN} />
        <FormattedRelativeTime
          date={NaN}
          fallback={<Typography color="textSecondary">N/A</Typography>}
        />
      </>,
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: "Inter",sans-serif;
        color: #6A707C;
      }

      @media (min-width:0px) and (max-width:599.95px) {
        .c0 {
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

      <div>
        Invalid Date
        Invalid Date
        <p
          class="c0 MuiTypography-root MuiTypography-body2"
        >
          N/A
        </p>
      </div>
    `);
  });
});
