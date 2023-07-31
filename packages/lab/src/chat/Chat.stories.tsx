// Chat.stories.tsx
import { Card } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Box } from '@superdispatch/ui-lab';
import React from 'react';
import { Chat } from './Chat';
import { ChatMessage } from './ChatMessage';

export default { title: 'Lab/Chat', component: Chat } as Meta;

export const EmptyChat = () => (
  <Box maxWidth="560px">
    <Card>
      <Chat />
    </Card>
  </Box>
);

export const SingleMessage = () => (
  <Box maxWidth="560px">
    <Card>
      <Chat>
        <ChatMessage
          variant="outgoing"
          author="Steve Trabajo"
          role="dispatcher"
          dateTime="2:32 PM"
          text="Hello, Vin! Yes we understand. I will ask our driver to pick up on time. "
        />
      </Chat>
    </Card>
  </Box>
);

export const MultipleMessages = () => (
  <Box maxWidth="560px">
    <Card>
      <Chat>
        <ChatMessage
          variant="incoming"
          author="Steve Trabajo"
          role="dispatcher"
          dateTime="2:32 PM"
          text="Hello, Vin! Just to confirm, load is completed."
        />
        <ChatMessage
          variant="outgoing"
          author="Daisy Lord"
          role="admin"
          dateTime="2:33 PM"
          text="Hey, Steve. Awesome, thanks!"
        />
        <ChatMessage
          variant="outgoing"
          author="John Wick"
          role="admin"
          dateTime="2:34 PM"
          text="Hey, Steve. Awesome, thanks!"
        />
        <ChatMessage
          variant="outgoing"
          author="Lora Accounting"
          role="accounting"
          dateTime="2:35 PM"
          text="Can’t wait this load to be delivered to start my part :)"
        />
      </Chat>
    </Card>
  </Box>
);
