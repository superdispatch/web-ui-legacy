import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { PropsLink, UseState } from '@superdispatch/ui-docs';
import { Button } from '@superdispatch/ui-lab';
import { Dialog } from './Dialog.playroom';

export default {
  title: 'Feedback/Dialog',
  parameters: {
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/dialog/#props" />
    ),
  },
};

export const basic = () => (
  <UseState initialState={false}>
    {(open, setOpen) => (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="neutral"
        >
          Open Dialog
        </Button>

        <Dialog
          open={open}
          disablePortal={true}
          onClose={() => {
            setOpen(false);
          }}
        >
          <DialogTitle>Use Google’s location service?</DialogTitle>
          <DialogContent>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant="neutral"
            >
              Disagree
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant="primary"
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )}
  </UseState>
);
