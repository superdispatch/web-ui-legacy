import { styled } from '@mui/material';
import { HTMLAttributes } from 'react';

export type DrawerContentProps = HTMLAttributes<HTMLDivElement>;

export const DrawerContent = styled('div', {
  name: 'SD-DrawerContent',
})(({ theme }) => {
  return {
    maxWidth: '100%',
    padding: theme.spacing(2, 3),

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 4),
    },
  };
});
