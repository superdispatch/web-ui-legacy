import { Meta } from '@storybook/react';
import { FormattedDate } from './FormattedDate';

export default {
  title: 'Dates/FormattedDate',
  component: FormattedDate,
} as Meta;

const newDate = () => new Date();

export const Default = () => <FormattedDate date={newDate()} variant="Date" />;

export const ShortDate = () => (
  <FormattedDate date={newDate()} variant="ShortDate" />
);

export const Time = () => <FormattedDate date={newDate()} variant="Time" />;

export const DateTime = () => (
  <FormattedDate date={newDate()} variant="DateTime" />
);

export const WithFallback = () => (
  <FormattedDate date={null} fallback="No date provided" variant="Date" />
);
