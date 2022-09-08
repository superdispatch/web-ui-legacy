import isLokiRunning from '@loki/is-loki-running';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { PropsLink, UseState } from '@superdispatch/ui-docs';
import { Button } from '../index';
import { Dialog } from './Dialog.playroom';

export default {
  title: 'Feedback/Dialog',
  parameters: {
    v5: true,
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/dialog/#props" />
    ),
  },
};

const initialState = isLokiRunning();

export const basic = () => (
  <UseState initialState={initialState}>
    {(open, setOpen) => (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
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
            >
              Disagree
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(false);
              }}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )}
  </UseState>
);
