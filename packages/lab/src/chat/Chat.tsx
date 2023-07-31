// Chat.tsx
import { Typography } from '@material-ui/core';
import { Stack } from '@superdispatch/ui';
import { Box } from '@superdispatch/ui-lab';
import React, { forwardRef } from 'react';

interface ChatProps {
  children?: React.ReactNode;
}

export const Chat = forwardRef<HTMLDivElement, ChatProps>(({ children }) => {
  const plug = (
    <Typography>
      No new messages. We will let you know when they send you a message.
    </Typography>
  );

  return (
    <Box padding="small">
      <Stack space="small">{!children ? plug : children}</Stack>
    </Box>
  );
});

Chat.displayName = 'Chat';
