import { Typography } from '@material-ui/core';
import { Stack } from '@superdispatch/ui';
import { forwardRef } from 'react';
import styled from 'styled-components';

interface ChatProps {
  children?: React.ReactNode;
}

const ChatContainer = styled('div')<{
  isEmpty: boolean;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}>(
  ({ isEmpty, minWidth, maxWidth, minHeight, maxHeight }) => `
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  justify-content: ${isEmpty ? 'center' : 'end'};
  width: 100%;
  height: 100%;
  min-width: ${minWidth || 432}px;
  max-width: ${maxWidth || 560}px;
  min-height: ${minHeight || 368}px;
  max-height: ${maxHeight || 696}px;
  padding: 16px;
  box-sizing: border-box;
`,
);

const emptyPlaceholder = (
  <Typography color="textSecondary" align="center">
    No new messages from Super Shipper. <br />
    We will let you know when they send you a message.
  </Typography>
);

export const Chat = forwardRef<HTMLDivElement, ChatProps>(({ children }) => {
  return (
    <ChatContainer data-testid="chat-container" isEmpty={!children}>
      <Stack space="small">{!children ? emptyPlaceholder : children}</Stack>
    </ChatContainer>
  );
});

Chat.displayName = 'Chat';
