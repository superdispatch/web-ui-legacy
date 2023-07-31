// This component renders a chat message.
// It displays the author, role, and date/time of the message.
// It also displays the text of the message.
// It displays the author's message on the right and the receiver's message on the left.

import { Typography } from '@material-ui/core';
import { Inline, Stack } from '@superdispatch/ui';
import { Box } from '@superdispatch/ui-lab';
import React, { forwardRef } from 'react';

interface ChatMessageProps {
  author: string;
  role: string;
  dateTime: string;
  text: string;
  variant: 'incoming' | 'outgoing';
}

export const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ author, role, dateTime, text, variant }) => {
    return (
      <Stack space="xxsmall" align={variant === 'outgoing' ? 'right' : 'left'}>
        <Inline verticalAlign="center">
          <Typography color="textPrimary">{author}</Typography>
          <Typography color="textSecondary">{role}</Typography>
          <Typography color="textSecondary">{dateTime}</Typography>
        </Inline>
        <Box
          display="inline-block"
          padding="xsmall"
          marginTop="none"
          borderRadius="medium"
          backgroundColor={variant === 'outgoing' ? 'Blue50' : 'Silver200'}
        >
          <Typography color="textPrimary">{text}</Typography>
        </Box>
      </Stack>
    );
  },
);

ChatMessage.displayName = 'ChatMessage';
