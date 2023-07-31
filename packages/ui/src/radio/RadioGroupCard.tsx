import {
  ButtonBase,
  Card,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import { Box, TextBox } from '@superdispatch/ui-lab';
import React from 'react';
import styled from 'styled-components';
import { Column } from '../columns/Column';
import { Columns } from '../columns/Columns';
import { Stack } from '../stack/Stack';

const ClickableCard = styled(ButtonBase)`
  display: block;
  text-align: initial;
  width: 100%;
`;

interface RadioCardProps {
  roles: Array<{
    value: string;
    label: string;
    caption: string;
    icon: React.ReactNode;
  }>;
  type?: string;
  setType?: (type: string) => void;
}

export function RadioCard({ roles, type, setType }: RadioCardProps): void {
  <Stack space="small">
    {roles.map((roleType) => (
      <Card key={roleType.value}>
        <ClickableCard
          onClick={() => {
            if (setType) {
              setType(roleType.value);
            }
          }}
        >
          <Box
            borderRadius="small"
            borderWidth="small"
            borderColor={roleType.value === type ? 'Blue300' : 'Silver500'}
            padding={['small']}
            width="100%"
          >
            <Columns space="small">
              <Column>
                <FormControlLabel
                  value={roleType.value}
                  control={<Radio />}
                  checked={roleType.value === type}
                  label={<Typography variant="h4">{roleType.label}</Typography>}
                />
                <Box paddingLeft="large">
                  <TextBox color="secondary" variant="caption">
                    {roleType.caption}
                  </TextBox>
                </Box>
              </Column>
              <Column width="content">{roleType.icon}</Column>
            </Columns>
          </Box>
        </ClickableCard>
      </Card>
    ))}
  </Stack>;
}
