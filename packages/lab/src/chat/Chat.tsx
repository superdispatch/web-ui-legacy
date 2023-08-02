import { Typography } from '@material-ui/core';
import { Stack } from '@superdispatch/ui';
import { forwardRef } from 'react';
import styled from 'styled-components';

interface ChatProps {
  children?: React.ReactNode | React.ReactNode[];
  emptyText?: string;
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

function emptyPlaceholder(text: string): React.ReactNode {
  return (
    <Typography color="textSecondary" align="center">
      {text}
    </Typography>
  );
}

export const Chat = forwardRef<HTMLDivElement, ChatProps>(
  ({ children, emptyText = 'No new messages' }) => {
    const isEmpty = React.Children.toArray(children).length === 0;
    return (
      <ChatContainer data-testid="chat-container" isEmpty={isEmpty}>
        <Stack space="small">
          {isEmpty ? emptyPlaceholder(emptyText) : children}
        </Stack>
      </ChatContainer>
    );
  },
);

Chat.displayName = 'Chat';
