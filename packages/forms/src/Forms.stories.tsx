import { AccountBoxOutlined, VerifiedUser } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { Meta } from '@storybook/react';
import { Button, Inline, Stack, useSnackbarStack } from '@superdispatch/ui';
import { Box } from '@superdispatch/ui-lab';
import { Form, FormikProvider } from 'formik';
import {
  FormikDateField,
  FormikMaxLengthTextField,
  FormikPasswordField,
  FormikRadioCardField,
  FormikTextField,
  SuspendedFormikPhoneField,
  useFormikEnhanced,
} from '.';

export default {
  title: 'Recipes/Forms',
  parameters: { playroom: { disable: true } },
} as Meta;

export const SignUp = () => {
  const { addSnackbar } = useSnackbarStack();
  const radioItems = [
    {
      value: 'dispatcher',
      name: 'user_type',
      label: 'I Only Dispatch',
      caption: 'I use Carrier TMS and do not use Driver App.',
      icon: <AccountBoxOutlined />,
    },
    {
      value: 'driver_dispatcher',
      name: 'user_type',
      label: 'I Drive And Dispatch',
      caption: 'I use both Carrier TMS and Driver App.',
      icon: <VerifiedUser />,
    },
  ];

  const formik = useFormikEnhanced<
    {
      username: string;
      password: string;
      dateOfBirth: undefined | string;
      phone: string;
      about: string;
      user_type: string;
    },
    Record<string, unknown>
  >({
    initialValues: {
      username: '',
      password: '',
      dateOfBirth: undefined,
      phone: '',
      about: '',
      user_type: 'dispatcher',
    },
    onSubmit(values) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (values.username !== 'john_doe') {
            reject(new Error('Invalid username (try "john_doe")'));
          } else if (values.password !== '123') {
            reject(new Error('Invalid password (try "123")'));
          } else {
            resolve(values);
          }
        }, 1000);
      });
    },
    onSubmitSuccess() {
      addSnackbar('Successfully signed up!', { variant: 'success' });
    },
    onSubmitFailure(error) {
      addSnackbar(error.message, { variant: 'error' });
    },
  });

  const { status, resetForm, isSubmitting } = formik;

  if (status.type === 'submitted') {
    return (
      <Stack>
        <Alert severity="success">Welcome!</Alert>

        <pre>{JSON.stringify(status.payload, null, 2)}</pre>

        <Button
          variant="contained"
          onClick={() => {
            resetForm();
          }}
        >
          Reset
        </Button>
      </Stack>
    );
  }

  return (
    <FormikProvider value={formik}>
      <Form>
        <Box maxWidth="320px">
          <Stack>
            <FormikTextField
              name="username"
              fullWidth={true}
              label="Username"
              validate={(value) =>
                value ? undefined : 'Please enter a username'
              }
            />

            <FormikPasswordField
              name="password"
              fullWidth={true}
              label="Password"
            />

            <FormikDateField
              fullWidth={true}
              name="dateOfBirth"
              label="Date of birth"
              validate={({ dateValue }) =>
                !dateValue.isValid
                  ? 'Please select your date of birth'
                  : dateValue.valueOf() > Date.now()
                  ? 'Invalid Date of birth'
                  : undefined
              }
            />

            <SuspendedFormikPhoneField
              name="phone"
              fullWidth={true}
              label="Phone Number"
              validate={(value, phoneService) =>
                phoneService.validate(value, { required: true })
              }
            />

            <FormikMaxLengthTextField
              fullWidth={true}
              name="about"
              label="About"
              maxLength={100}
            />

            <FormikRadioCardField
              label="User Type"
              name="user_type"
              radioItems={radioItems}
            />

            {status.type === 'rejected' && (
              <Alert severity="error">{status.payload.message}</Alert>
            )}

            <Inline>
              <Button
                type="submit"
                variant="contained"
                isLoading={isSubmitting}
              >
                Sign Up
              </Button>

              <Button
                onClick={() => {
                  resetForm();
                }}
                variant="outlined"
                disabled={isSubmitting}
              >
                Reset
              </Button>
            </Inline>
          </Stack>
        </Box>
      </Form>
    </FormikProvider>
  );
};
