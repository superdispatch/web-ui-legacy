import {
  ButtonBase,
  Card,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import { Box, TextBox } from '@superdispatch/ui-lab';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Column } from '../columns/Column';
import { Columns } from '../columns/Columns';

const ClickableCard = styled(ButtonBase)`
  display: block;
  text-align: initial;
  width: 100%;
`;

interface RoleProps {
  value: string;
  label: string;
  caption: string;
  icon: React.ReactNode;
}

interface RadioCardProps {
  radioItem: RoleProps;
  value?: string;
  setValue?: (type: string) => void;
}

export function RadioCard({
  radioItem,
  value,
  setValue,
}: RadioCardProps): ReactElement {
  return (
    <Card key={radioItem.value}>
      <ClickableCard
        onClick={() => {
          if (setValue) {
            setValue(radioItem.value);
          }
        }}
      >
        <Box
          borderRadius="small"
          borderWidth="small"
          borderColor={radioItem.value === value ? 'Blue300' : 'Silver500'}
          padding={['small']}
          width="100%"
        >
          <Columns space="small">
            <Column>
              <FormControlLabel
                value={radioItem.value}
                control={<Radio />}
                checked={radioItem.value === value}
                label={<Typography variant="h4">{radioItem.label}</Typography>}
              />
              <Box paddingLeft="large">
                <TextBox color="secondary" variant="caption">
                  {radioItem.caption}
                </TextBox>
              </Box>
            </Column>
            <Column width="content">{radioItem.icon}</Column>
          </Columns>
        </Box>
      </ClickableCard>
    </Card>
  );
}
