import { render, screen } from '@testing-library/react';
import React from 'react';
import { Chat } from '../Chat';

test('Chat renders', () => {
  render(<Chat>Chat</Chat>);
  expect(screen.getByTestId('chat')).toMatchSnapshot();
});
