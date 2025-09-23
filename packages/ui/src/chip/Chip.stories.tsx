import { Chip } from '@material-ui/core';
import { PropsLink } from '@superdispatch/ui-docs';
import { Inline, Stack } from '..';

export default {
  title: 'Data Display/Chip',
  parameters: {
    componentSubtitle: (
      <PropsLink url="https://material-ui.com/api/chip/#props" />
    ),
  },
};

const colors = ['default', 'primary', 'secondary'] as const;

export const examples = () => (
  <Stack>
    {colors.map((color) => (
      <Inline key={color}>
        <Chip label="Basic" color={color} />
        <Chip label="Disabled" disabled={true} color={color} />
        <Chip label="Clickable" clickable={true} color={color} />
        <Chip
          color={color}
          label="Deletable"
          onDelete={() => {
            alert('Delete!');
          }}
        />
      </Inline>
    ))}
  </Stack>
);
