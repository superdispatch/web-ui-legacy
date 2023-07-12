import {
  AddAlertOutlined,
  OutlinedFlag,
  SecurityRounded,
  WarningRounded,
} from '@material-ui/icons';
import { Meta } from '@storybook/react';
import { Column, Columns, Inline, Stack } from '@superdispatch/ui';
import { Button } from '../button/Button';
import { Alert } from './Alert';

export default {
  title: 'Lab/Alert',
  component: Alert,
} as Meta;

export const basic = () => (
  <Columns collapseBelow="tablet" space="xsmall">
    <Column>
      <Stack>
        <Alert severity="positive">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert severity="info">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert severity="caution">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert severity="critical">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>
      </Stack>
    </Column>

    <Column>
      <Stack>
        <Alert severity="positive">
          <Inline verticalAlign="center">
            <span>
              Uh-Oh! Your Super Carrier documents need review. please submit the
              following documents. Don’t worry! Be happy!
            </span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert severity="info">
          <Inline verticalAlign="center">
            <span>
              Uh-Oh! Your Super Carrier documents need review. please submit the
              following documents. Don’t worry! Be happy!
            </span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert severity="caution">
          <Inline verticalAlign="center">
            <span>
              Uh-Oh! Your Super Carrier documents need review. please submit the
              following documents. Don’t worry! Be happy!
            </span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert severity="critical">
          <Inline verticalAlign="center">
            <span>
              Uh-Oh! Your Super Carrier documents need review. please submit the
              following documents. Don’t worry! Be happy!
            </span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>
      </Stack>
    </Column>

    <Column>
      <Stack>
        <Alert icon={<OutlinedFlag />} severity="positive">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert icon={<SecurityRounded />} severity="info">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert icon={<WarningRounded />} severity="caution">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>

        <Alert icon={<AddAlertOutlined />} severity="critical">
          <Inline verticalAlign="center">
            <span>This is an error alert — check it out!</span>
            <Button variant="neutral" size="small">
              Button
            </Button>
          </Inline>
        </Alert>
      </Stack>
    </Column>
  </Columns>
);
