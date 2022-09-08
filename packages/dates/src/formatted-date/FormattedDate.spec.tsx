import { Typography } from '@mui/material';
import { mockDate, v5 } from '@superdispatch/ui-testutils';
import { renderHook } from '@testing-library/react-hooks';
import { NullableDateInput } from '../date-time-utils/DateTimeUtils';
import {
  FormattedDate,
  FormattedDateConfig,
  useFormattedDate,
} from './FormattedDate';

const { renderComponent } = v5;

beforeEach(() => {
  mockDate();
});

describe('useFormattedDate', () => {
  interface HookProps extends FormattedDateConfig {
    input: NullableDateInput;
  }

  test('basic', () => {
    const { result, rerender } = renderHook(
      ({ input, ...options }: HookProps) => useFormattedDate(input, options),
      { initialProps: { input: Date.now(), variant: 'DateTime' } },
    );

    expect(result.current).toBe('May 24, 2019, 7:13 AM');

    rerender({ input: Date.now(), variant: 'Date' });

    expect(result.current).toBe('May 24, 2019');

    rerender({ input: Date.now(), variant: 'ShortDate' });

    expect(result.current).toBe('May 24');

    rerender({ input: Date.now(), variant: 'Time' });

    expect(result.current).toBe('7:13 AM');
  });

  test('invalid', () => {
    const { result, rerender } = renderHook(
      ({ input, ...options }: HookProps) => useFormattedDate(input, options),
      { initialProps: { input: NaN, variant: 'DateTime' } },
    );

    expect(result.current).toBe('Invalid Date');

    rerender({
      input: NaN,
      variant: 'DateTime',
      fallback: 'Custom Empty Text',
    });

    expect(result.current).toBe('Custom Empty Text');
  });
});

describe('FormattedDate', () => {
  test('basic', () => {
    const { container } = renderComponent(
      <>
        <FormattedDate date={Date.now()} variant="DateTime" />
        <FormattedDate date={Date.now()} variant="Date" />
        <FormattedDate date={Date.now()} variant="Time" />
        <FormattedDate date={Date.now()} variant="ShortDate" />
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
        May 24, 2019, 7:13 AM
        May 24, 2019
        7:13 AM
        May 24
      </div>
    `);
  });

  test('invalid', () => {
    const { container } = renderComponent(
      <>
        <FormattedDate date={NaN} variant="Date" />
        <FormattedDate
          date={NaN}
          variant="Date"
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
        <p
          class="c0 MuiTypography-root MuiTypography-body2"
        >
          N/A
        </p>
      </div>
    `);
  });
});
