import { Meta } from '@storybook/react';
import { Box } from '../box/Box';
import { MultilineText } from './MultilineText';

export default {
  title: 'Lab/MultilineText',
  component: MultilineText,
  decorators: [
    (Story) => (
      <Box maxWidth="300px">
        <Story />
      </Box>
    ),
  ],
} as Meta;

export const basic = () => (
  <Box>
    <MultilineText>{`This is a multiline text with a lot of white space.

Lorem     ipsum     dolor      sit   amet, 
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 



Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}</MultilineText>
  </Box>
);
