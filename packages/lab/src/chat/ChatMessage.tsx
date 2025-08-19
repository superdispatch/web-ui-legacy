import { Typography } from '@material-ui/core';
import { formatDate, PrimitiveDateInput } from '@superdispatch/dates';
import { Inline, Stack } from '@superdispatch/ui';
import { DateTime } from 'luxon';
import { forwardRef } from 'react';
import { Box } from '../box/Box';

interface ChatMessageProps {
  author: string;
  role: string;
  dateTime: Date | DateTime | PrimitiveDateInput;
  text: string;
  variant: 'incoming' | 'outgoing';
}

export const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ author, role, dateTime, text, variant }, ref) => {
    const time = formatDate(dateTime, { variant: 'Time' });
    return (
      <Stack
        space="xxsmall"
        align={variant === 'outgoing' ? 'right' : 'left'}
        ref={ref}
        data-testid="chat-message"
      >
        <Inline verticalAlign="center">
          <Typography color="textPrimary">{author}</Typography>
          <Typography color="textSecondary">{role}</Typography>
          <Typography color="textSecondary">{time}</Typography>
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
