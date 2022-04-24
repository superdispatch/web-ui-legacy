import { ThumbDown, ThumbUp } from '@material-ui/icons';
import { Meta } from '@storybook/react';
import { Column, Columns, Stack } from '@superdispatch/ui';
import { ButtonArea } from './ButtonArea';

export default {
  title: 'v4/Lab/ButtonArea',
  component: ButtonArea,
} as Meta;

export const basic = () => (
  <Columns space="small">
    <Column>
      <Stack>
        <ButtonArea fullWidth={true} icon={<ThumbUp />} variant="success">
          Positive
        </ButtonArea>

        <ButtonArea
          active={true}
          fullWidth={true}
          icon={<ThumbUp />}
          variant="success"
        >
          Positive
        </ButtonArea>

        <ButtonArea
          disabled={true}
          fullWidth={true}
          icon={<ThumbUp />}
          variant="success"
        >
          Positive
        </ButtonArea>
      </Stack>
    </Column>

    <Column>
      <Stack>
        <ButtonArea fullWidth={true} icon={<ThumbDown />} variant="danger">
          Negative
        </ButtonArea>

        <ButtonArea
          active={true}
          fullWidth={true}
          icon={<ThumbDown />}
          variant="danger"
        >
          Negative
        </ButtonArea>

        <ButtonArea
          disabled={true}
          fullWidth={true}
          icon={<ThumbDown />}
          variant="danger"
        >
          Negative
        </ButtonArea>
      </Stack>
    </Column>
  </Columns>
);
