import { renderComponent } from '@superdispatch/ui-testutils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PatternField } from './PatternField';

test('format', () => {
  const onChange = jest.fn();
  const onValueChange = jest.fn();
  renderComponent(
    <PatternField
      format="#### #### ####"
      onChange={onChange}
      onValueChange={onValueChange}
    />,
  );

  expect(screen.getByRole('textbox')).toHaveValue('');

  userEvent.type(screen.getByRole('textbox'), '1234');
  // Check onValueChange values
  expect(onValueChange).toHaveBeenCalledTimes(4);
  expect(onValueChange.mock.calls[3][0].floatValue).toBe(1234);
  expect(onValueChange.mock.calls[3][0].formattedValue).toBe('1234          ');
  expect(onValueChange.mock.calls[3][0].value).toBe('1234');

  // Check onChange values
  expect(onChange).toHaveBeenCalledTimes(4);
  expect(onChange.mock.calls[3][0].target.value).toBe('1234          ');

  // Check what user sees
  expect(screen.getByRole('textbox')).toHaveValue('1234          ');

  userEvent.type(screen.getByRole('textbox'), '56789012');

  // Check onValueChange values
  expect(onValueChange).toHaveBeenCalledTimes(12);
  expect(onValueChange.mock.calls[11][0].floatValue).toBe(123456789012);
  expect(onValueChange.mock.calls[11][0].formattedValue).toBe('1234 5678 9012');
  expect(onValueChange.mock.calls[11][0].value).toBe('123456789012');

  // Check onChange values
  expect(onChange).toHaveBeenCalledTimes(12);
  expect(onChange.mock.calls[11][0].target.value).toBe('1234 5678 9012');

  // Check what user sees
  expect(screen.getByRole('textbox')).toHaveValue('1234 5678 9012');
});

test('mask', () => {
  const onChange = jest.fn();
  const onValueChange = jest.fn();
  renderComponent(
    <PatternField
      mask="_"
      format="+1 (###) #### ###"
      allowEmptyFormatting={true}
      onChange={onChange}
      onValueChange={onValueChange}
    />,
  );

  expect(screen.getByRole('textbox')).toHaveValue('+1 (___) ____ ___');

  userEvent.type(screen.getByRole('textbox'), '1234567890');
  // Check onValueChange values
  expect(onValueChange).toHaveBeenCalledTimes(10);
  expect(onValueChange.mock.calls[9][0].floatValue).toBe(1234567890);
  expect(onValueChange.mock.calls[9][0].formattedValue).toBe(
    '+1 (123) 4567 890',
  );
  expect(onValueChange.mock.calls[9][0].value).toBe('1234567890');

  // Check onChange values
  expect(onChange).toHaveBeenCalledTimes(10);
  expect(onChange.mock.calls[9][0].target.value).toBe('+1 (123) 4567 890');

  // Check what user sees
  expect(screen.getByRole('textbox')).toHaveValue('+1 (123) 4567 890');
});
