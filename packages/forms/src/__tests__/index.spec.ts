import * as api from '..';

it('exposes public api', () => {
  const { v5, ...v4 } = api;
  expect(v4).toMatchInlineSnapshot(`
    Object {
      "FormikCheckboxField": React.forwardRef(FormikCheckboxField),
      "FormikDateField": React.forwardRef(FormikDateField),
      "FormikEnhanced": [Function],
      "FormikMaxLengthTextField": React.forwardRef(FormikMaxLengthTextField),
      "FormikPasswordField": React.forwardRef(FormikPasswordField),
      "FormikPhoneField": React.forwardRef(FormikPhoneField),
      "FormikRadioGroupField": React.forwardRef(FormikRadioGroupField),
      "FormikTextField": React.forwardRef(FormikTextField),
      "FormsProvider": [Function],
      "SuspendedFormikPhoneField": React.forwardRef(SuspendedFormikPhoneField),
      "useFormikEnhanced": [Function],
      "useFormsContext": [Function],
    }
  `);
});
