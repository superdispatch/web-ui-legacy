import { Card } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { Box } from '@superdispatch/ui-lab';
import { Chat } from './Chat';
import { ChatMessage } from './ChatMessage';

export default { title: 'Lab/Chat', component: Chat } as Meta;

export const SingleMessage = () => (
  <Box maxWidth="560px">
    <Card>
      <Chat>
        <ChatMessage
          variant="outgoing"
          author="You"
          role="dispatcher"
          dateTime="now"
          text="Hello. Just wanted to check how the messaging works :) As a reminder, pickup should be done during the morning hours 9 – 11 AM!"
        />
      </Chat>
    </Card>
  </Box>
);

export const EmptyArrayChat = () => (
  <Box>
    <Card>
      <Chat emptyText="Array is empty">{[]}</Chat>
    </Card>
  </Box>
);

export const EmptyNullableChat = () => (
  <Box>
    <Card>
      <Chat>{null}</Chat>
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

export const LoremIpsum = () => (
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
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Justo eget magna fermentum iaculis eu non diam. Fames ac turpis egestas maecenas. Justo laoreet sit amet cursus sit amet dictum sit. Et pharetra pharetra massa massa ultricies mi. Felis eget velit aliquet sagittis. Scelerisque in dictum non consectetur a erat nam. Amet nulla facilisi morbi tempus. Imperdiet nulla malesuada pellentesque elit eget gravida cum. A iaculis at erat pellentesque. Eget mauris pharetra et ultrices neque ornare aenean euismod. Amet purus gravida quis blandit turpis cursus in hac habitasse. Sit amet dictum sit amet justo donec. Tortor id aliquet lectus proin nibh nisl condimentum id. Condimentum mattis pellentesque id nibh tortor.
          "
        />
        <ChatMessage
          variant="incoming"
          author="John Wick"
          role="admin"
          dateTime="3:34 PM"
          text="Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Integer vitae justo eget magna fermentum iaculis. Dapibus ultrices in iaculis nunc sed augue. Eget magna fermentum iaculis eu non diam phasellus. Libero nunc consequat interdum varius sit. Eget velit aliquet sagittis id consectetur purus ut. Sed vulputate mi sit amet mauris commodo. Gravida rutrum quisque non tellus. Feugiat sed lectus vestibulum mattis ullamcorper. Vitae aliquet nec ullamcorper sit."
        />
        <ChatMessage
          variant="outgoing"
          author="Lora Accounting"
          role="accounting"
          dateTime="4:35 PM"
          text="Dolor sit amet consectetur adipiscing. Diam sit amet nisl suscipit. Egestas sed sed risus pretium quam. Non consectetur a erat nam at lectus urna. Odio eu feugiat pretium nibh ipsum consequat. Volutpat odio facilisis mauris sit. Consectetur a erat nam at lectus urna duis convallis. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Sed turpis tincidunt id aliquet risus feugiat in. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Arcu felis bibendum ut tristique et egestas. Cursus eget nunc scelerisque viverra mauris. Luctus accumsan tortor posuere ac ut consequat. Justo nec ultrices dui sapien eget mi proin sed. Egestas erat imperdiet sed euismod nisi porta. Amet venenatis urna cursus eget nunc scelerisque."
        />
      </Chat>
    </Card>
  </Box>
);
