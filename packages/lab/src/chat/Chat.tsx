import { Typography } from '@material-ui/core';
import { Stack } from '@superdispatch/ui';
import { Children, forwardRef } from 'react';
import styled from 'styled-components';

interface ChatProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  emptyText?: string;
}

const ChatContainer = styled('div')<{
  isEmpty: boolean;
}>(
  ({ isEmpty }) => `
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  justify-content: ${isEmpty ? 'center' : 'end'};
  width: 100%;
  height: 100%;
  min-width: 300px;
  max-width: 560px;
  min-height: 368px;
  max-height: 696px;
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
  ({ children, className, emptyText = 'No new messages' }, ref) => {
    const isEmpty = Children.toArray(children).length === 0;
    return (
      <ChatContainer
        data-testid="chat-container"
        isEmpty={isEmpty}
        ref={ref}
        className={className}
      >
        <Stack space="small">
          {isEmpty ? emptyPlaceholder(emptyText) : children}
        </Stack>
      </ChatContainer>
    );
  },
);

Chat.displayName = 'Chat';
