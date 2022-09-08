import { MenuItem } from '@mui/material';
import { Deferred } from '@superdispatch/ui-testutils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderFormField } from '../__testutils__/renderFormField';
import { FormikTextField } from './FormikTextField';

test('changes', async () => {
  const onBlur = jest.fn();
  const onChange = jest.fn();

  const view = renderFormField(
    <FormikTextField
      name="name"
      label="Name"
      onBlur={onBlur}
      onChange={onChange}
    />,
    { initialValues: { name: '' } },
  );

  const input = screen.getByLabelText('Name');

  userEvent.type(input, 'John');
  userEvent.tab();

  expect(input).toHaveValue('John');

  expect(onChange).toHaveBeenCalledTimes(4);
  expect(onBlur).toHaveBeenCalledTimes(1);

  view.submitForm();

  await waitFor(() => {
    expect(view.onSubmit).toHaveBeenCalledTimes(1);
  });

  expect(view.onSubmit).toHaveBeenLastCalledWith({ name: 'John' });
});

test('errors', async () => {
  renderFormField(
    <FormikTextField
      id="name"
      name="name"
      validate={(value) => (value === 'john' ? 'Invalid Name' : undefined)}
    />,
    { initialValues: { name: '' } },
  );

  expect(screen.getByRole('textbox')).toBeValid();

  userEvent.type(screen.getByRole('textbox'), 'john');

  expect(screen.getByRole('textbox')).toBeValid();

  fireEvent.blur(screen.getByRole('textbox'));

  await waitFor(() => {
    expect(screen.getByRole('textbox')).toBeInvalid();
  });

  const errorID = screen.getByRole('textbox').getAttribute('aria-describedby');

  expect(document.getElementById(errorID!)).toMatchInlineSnapshot(`
    .c0 {
      color: #6A707C;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      text-align: left;
      margin-top: 3px;
      margin-right: 14px;
      margin-bottom: 0;
      margin-left: 14px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      margin-top: 4px;
      margin-left: unset;
      margin-right: unset;
    }

    .c0.Mui-disabled {
      color: #8F949E;
    }

    .c0.Mui-error {
      color: #EE3017;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:600px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c0 {
        font-size: 14px;
        line-height: 20px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c0 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {

    }

    @media (min-width:600px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    <p
      class="c0 MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled"
      id="name-helper-text"
    >
      Invalid Name
    </p>
  `);
});

test('formatErrors', async () => {
  renderFormField(
    <FormikTextField
      id="name"
      name="name"
      formatError={(error) => <strong>{error}</strong>}
      validate={(value) => (!value ? 'Name is required' : undefined)}
    />,
    { initialValues: { name: '' } },
  );

  expect(screen.getByRole('textbox')).toBeValid();

  fireEvent.blur(screen.getByRole('textbox'));

  await waitFor(() => {
    expect(screen.getByRole('textbox')).toBeInvalid();
  });

  const errorID = screen.getByRole('textbox').getAttribute('aria-describedby');

  expect(document.getElementById(errorID!)).toMatchInlineSnapshot(`
    .c0 {
      color: #6A707C;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      text-align: left;
      margin-top: 3px;
      margin-right: 14px;
      margin-bottom: 0;
      margin-left: 14px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-family: "Inter",sans-serif;
      margin-top: 4px;
      margin-left: unset;
      margin-right: unset;
    }

    .c0.Mui-disabled {
      color: #8F949E;
    }

    .c0.Mui-error {
      color: #EE3017;
    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media (min-width:600px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c0 {
        font-size: 14px;
        line-height: 20px;
      }
    }

    @media (min-width:0px) and (max-width:599.95px) {
      .c0 {
        font-size: 16px;
        line-height: 24px;
      }
    }

    @media (hover:none) {

    }

    @media (min-width:600px) {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    @media print {

    }

    @media (min-width:0px) and (max-width:599.95px) {

    }

    <p
      class="c0 MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained"
      id="name-helper-text"
    >
      <strong>
        Name is required
      </strong>
    </p>
  `);
});

test('submitting', async () => {
  const deferred = new Deferred();
  const onChange = jest.fn();
  const onSubmit = jest.fn(() => deferred.promise);

  const view = renderFormField(
    <FormikTextField
      name="name"
      label="Name"
      onChange={onChange}
      validate={(value) => (!value ? 'Name is Required' : undefined)}
    />,
    { onSubmit, initialValues: { name: 'John' } },
  );
  const input = screen.getByLabelText('Name');

  expect(input).toBeEnabled();

  view.submitForm();

  await waitFor(() => {
    expect(input).toBeDisabled();
  });

  await deferred.resolve({});

  await waitFor(() => {
    expect(input).toBeEnabled();
  });
});

test('default format and parse', async () => {
  const view = renderFormField(<FormikTextField name="name" />, {
    initialValues: { name: null },
  });

  expect(screen.getByRole('textbox')).toHaveValue('');
  expect(view.formik.current.values.name).toBeNull();

  userEvent.type(screen.getByRole('textbox'), 'foo');

  expect(screen.getByRole('textbox')).toHaveValue('foo');
  expect(view.formik.current.values.name).toBe('foo');

  act(() => {
    view.formik.current.setFieldValue('name', undefined);
  });

  expect(screen.getByRole('textbox')).toHaveValue('');
  expect(view.formik.current.values.name).toBeUndefined();

  view.submitForm();

  await waitFor(() => {
    expect(view.onSubmit).toHaveBeenCalledTimes(1);
  });

  expect(view.onSubmit).toHaveBeenLastCalledWith({});
});

test('format and parse', async () => {
  const onSubmit = jest.fn();

  const view = renderFormField(
    <FormikTextField
      select={true}
      label="Status"
      name="isActive"
      format={(value: boolean) => (value ? 'active' : 'inactive')}
      parse={(event): boolean => event.target.value === 'active'}
    >
      <MenuItem value="active">Active</MenuItem>
      <MenuItem value="inactive">Inactive</MenuItem>
    </FormikTextField>,
    { onSubmit, initialValues: { isActive: true } },
  );

  expect(screen.getByLabelText('Status')).toHaveTextContent(/Active/);

  userEvent.click(screen.getByLabelText('Status'));

  userEvent.click(await screen.findByRole('option', { name: 'Inactive' }));

  await waitFor(() => {
    expect(screen.getByLabelText('Status')).toHaveTextContent(/Inactive/);
  });

  view.submitForm();

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  expect(onSubmit).toHaveBeenLastCalledWith({ isActive: false });
});
