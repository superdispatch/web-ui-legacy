import { renderComponent } from '@superdispatch/ui-testutils';
import { screen } from '@testing-library/react';
import { ChatMessage } from '../ChatMessage';

describe('ChatMessage', () => {
  it('displays incoming message correctly', () => {
    renderComponent(
      <ChatMessage
        variant="incoming"
        author="Steve Trabajo"
        role="dispatcher"
        dateTime="2023-06-16T09:48:43.291212+00:00"
        text="Hello, Vin! ..."
      />,
    );

    expect(screen.getByText('Steve Trabajo')).toBeInTheDocument();
    expect(screen.getByText('dispatcher')).toBeInTheDocument();
    expect(screen.getByText('4:48 AM')).toBeInTheDocument();
    expect(screen.getByText('Hello, Vin! ...')).toBeInTheDocument();
  });

  it('displays outgoing message correctly', () => {
    renderComponent(
      <ChatMessage
        variant="outgoing"
        author="Daisy Lord"
        role="admin"
        dateTime="2023-06-16T09:48:43.291212+00:00"
        text="Hey Steve ..."
      />,
    );

    expect(screen.getByText('Daisy Lord')).toBeInTheDocument();
    expect(screen.getByText('admin')).toBeInTheDocument();
    expect(screen.getByText('4:48 AM')).toBeInTheDocument();
    expect(screen.getByText('Hey Steve ...')).toBeInTheDocument();
  });
});
