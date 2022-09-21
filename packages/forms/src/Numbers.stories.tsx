import { Alert } from '@material-ui/lab';
import { Meta } from '@storybook/react';
import { Button, Inline, Stack, useSnackbarStack } from '@superdispatch/ui';
import { Box } from '@superdispatch/ui-lab';
import { Form, FormikProvider } from 'formik';
import { FormikCurrencyField, FormikNumberField, useFormikEnhanced } from '.';

export default {
  title: 'Recipes/Forms',
  parameters: { playroom: { disable: true } },
} as Meta;

export const NumberFields = () => {
  const { addSnackbar } = useSnackbarStack();

  const formik = useFormikEnhanced<
    {
      quantity: string;
      price: string;
    },
    Record<string, unknown>
  >({
    initialValues: {
      quantity: '',
      price: '',
    },
    onSubmit(values) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!values.quantity || !values.price) {
            reject(new Error('Invalid values'));
          } else {
            resolve(values);
          }
        }, 1000);
      });
    },
    onSubmitSuccess() {
      addSnackbar('Successfully!', { variant: 'success' });
    },
    onSubmitFailure(error) {
      addSnackbar(error.message, { variant: 'error' });
    },
  });

  const { status, resetForm, isSubmitting } = formik;

  if (status.type === 'submitted') {
    return (
      <Stack>
        <Alert severity="success">Done!</Alert>

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
            <FormikNumberField
              name="quantity"
              label="Quantity"
              fullWidth={true}
              inputProps={{
                thousandSeparator: '',
              }}
            />

            <FormikCurrencyField name="price" label="Price" fullWidth={true} />

            {status.type === 'rejected' && (
              <Alert severity="error">{status.payload.message}</Alert>
            )}

            <Inline>
              <Button
                type="submit"
                variant="contained"
                isLoading={isSubmitting}
              >
                Send
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
