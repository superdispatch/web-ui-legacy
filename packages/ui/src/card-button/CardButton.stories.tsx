import {
  Add as AddIcon,
  AttachFile as AttachFileIcon,
  Error,
} from '@material-ui/icons';
import { Meta } from '@storybook/react';
import { ColorDynamic } from '../theme/Color';
import { CardButton } from './CardButton';

export default { title: 'Inputs/CardButton', component: CardButton } as Meta;

export const basic = () => (
  <CardButton
    hint="or Drag & Drop files here"
    startIcon={<AddIcon htmlColor={ColorDynamic.Blue300} />}
  >
    Add Attachments
  </CardButton>
);

export const endIcon = () => (
  <CardButton
    hint="or Drag & Drop files here"
    endIcon={<AttachFileIcon htmlColor={ColorDynamic.Blue300} />}
  >
    Add Attachments
  </CardButton>
);

export const error = () => (
  <CardButton
    startIcon={<Error htmlColor={ColorDynamic.Red300} />}
    error="Invalid file extension"
  >
    Add Attachments
  </CardButton>
);

export const small = () => (
  <CardButton size="small" hint="or Drag & Drop files here">
    Add Attachments
  </CardButton>
);

export const large = () => (
  <CardButton size="large" hint="or Drag & Drop files here">
    Add Attachments
  </CardButton>
);

export const disabled = () => (
  <CardButton disabled={true} hint="or Drag & Drop files here">
    Add Attachments
  </CardButton>
);
