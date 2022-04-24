import { Link } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Inline, Stack } from '@superdispatch/ui';
import { UseState } from '@superdispatch/ui-docs';
import { Button } from '../button/Button';
import { TextBox } from '../text-box/TextBox';
import { Banner } from './Banner';

export default {
  title: 'Lab/Banner',
  component: Banner,
} as Meta;

export const basic = () => (
  <Stack>
    <UseState initialState={true}>
      {(open, setOpen) => (
        <Stack space="none">
          <Button
            size="small"
            variant="neutral"
            aria-label="Rate Button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? 'Close' : 'Open'}
          </Button>

          <Banner
            in={open}
            border="top"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Inline
              verticalAlign="center"
              horizontalAlign="center"
              space="small"
            >
              <Inline
                space="xxsmall"
                verticalAlign="center"
                horizontalAlign="center"
              >
                <TextBox color="inherit">
                  Rate your recent experience with{' '}
                </TextBox>
                <Link
                  color="inherit"
                  target="_blank"
                  rel="noreferrer"
                  href="https://superdispatch.com/"
                >
                  SuperDispatch
                </Link>
              </Inline>
            </Inline>
          </Banner>
        </Stack>
      )}
    </UseState>
  </Stack>
);
