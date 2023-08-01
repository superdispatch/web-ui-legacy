import { renderComponent } from '@superdispatch/ui-testutils';
import { screen } from '@testing-library/react';
import { Chat } from '../Chat';
import { ChatMessage } from '../ChatMessage';

describe('Chat', () => {
  it('Snapshot', () => {
    renderComponent(<Chat>Chat</Chat>);
    expect(screen.getByTestId('chat-container')).toMatchSnapshot();
  });

  it('Displays placeholder message when no messages are provided', () => {
    renderComponent(<Chat />);

    expect(
      screen.getByText(/No new messages from Super Shipper./i),
    ).toBeInTheDocument();
  });

  it('Renders provided messages', () => {
    renderComponent(
      <Chat>
        <ChatMessage
          variant="incoming"
          author="Steve Trabajo"
          role="dispatcher"
          dateTime="2023-06-12 6:43PM"
          text="Hello, Vin! ..."
        />
      </Chat>,
    );

    expect(screen.getByText('Steve Trabajo')).toBeInTheDocument();
    expect(screen.getByText('Hello, Vin! ...')).toBeInTheDocument();
  });
});
