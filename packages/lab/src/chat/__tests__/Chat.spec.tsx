import { render, screen } from '@testing-library/react';
import { Chat } from '../Chat';

test('Chat renders', () => {
  render(<Chat>Chat</Chat>);
  expect(screen.getByTestId('chat-container')).toMatchSnapshot();
});
