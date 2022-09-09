import { Avatar } from '@mui/material';
import { PropsLink } from '@superdispatch/ui-docs';

export default {
  title: 'Data Display/Avatar',
  parameters: {
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/avatar/#props" />
    ),
  },
};

export const basic = () => <Avatar />;
export const text = () => <Avatar>A1</Avatar>;
export const image = () => (
  <Avatar src="https://images.unsplash.com/photo-1571816119607-57e48af1caa9?q=80" />
);
