import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderFormField } from '../__testutils__/renderFormField';
import { FormikMaxLengthTextField } from './FormikMaxLengthTextField';

test('changes', async () => {
  const onBlur = jest.fn();
  const onChange = jest.fn();

  const view = renderFormField(
    <FormikMaxLengthTextField
      name="name"
      label="Name"
      maxLength={100}
      onBlur={onBlur}
      onChange={onChange}
    />,
    { initialValues: { name: '' } },
  );

  const input = screen.getByLabelText('Name0 of 100');

  userEvent.type(input, 'John');
  userEvent.tab();

  expect(input).toHaveValue('John');
  expect(screen.getByLabelText('Name4 of 100')).toBeInTheDocument();

  expect(onChange).toHaveBeenCalledTimes(4);
  expect(onBlur).toHaveBeenCalledTimes(1);

  view.submitForm();

  await waitFor(() => {
    expect(view.onSubmit).toHaveBeenCalledTimes(1);
  });

  expect(view.onSubmit).toHaveBeenLastCalledWith({ name: 'John' });
});

test('changes for nested fields', () => {
  const onBlur = jest.fn();
  const onChange = jest.fn();

  const view = renderFormField(
    <FormikMaxLengthTextField
      label="Name"
      name="user.name"
      maxLength={100}
      onBlur={onBlur}
      onChange={onChange}
    />,
    { initialValues: { name: '' } },
  );

  const input = screen.getByLabelText('Name0 of 100');

  userEvent.type(input, 'John');
  userEvent.tab();

  expect(input).toHaveValue('John');
  expect(screen.getByLabelText('Name4 of 100')).toBeInTheDocument();
});
