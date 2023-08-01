// Chat.tsx
import { Typography } from '@material-ui/core';
import { Stack } from '@superdispatch/ui';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface ChatProps {
  children?: React.ReactNode;
}

const ChatContainer = styled('div')<{
  isEmpty: boolean;
}>(
  ({ isEmpty }) => `
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: ${isEmpty ? 'center' : 'flex-end'};
  width: 100%;
  height: 100%;
  min-height: 368px;
  max-height: 696px;
  max-width: 560px;
  min-width: 432px;
  padding: 16px;
  box-sizing: border-box;
`,
);

export const Chat = forwardRef<HTMLDivElement, ChatProps>(({ children }) => {
  const emptyPlaceholder = (
    <Typography color="textSecondary" align="center">
      No new messages from Super Shipper. <br />
      We will let you know when they send you a message.
    </Typography>
  );

  return (
    <ChatContainer data-testid="chat-container" isEmpty={!children}>
      <Stack space="small">{!children ? emptyPlaceholder : children}</Stack>
    </ChatContainer>
  );
});

Chat.displayName = 'Chat';
