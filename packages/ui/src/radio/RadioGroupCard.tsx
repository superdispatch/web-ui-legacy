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
import { Stack } from '../stack/Stack';

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
  roleType: RoleProps;
  type?: string;
  setType?: (type: string) => void;
}

export function RadioCard({
  roleType,
  type,
  setType,
}: RadioCardProps): ReactElement {
  return (
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
  );
}

interface RadioGroupCardProps {
  roles: RoleProps[];
  type?: string;
  setType?: (type: string) => void;
}

export function RadioGroupCard({
  roles,
  type,
  setType,
}: RadioGroupCardProps): ReactElement {
  return (
    <Stack space="small">
      {roles.map((roleType, index) => (
        <RadioCard
          key={index}
          roleType={roleType}
          type={type}
          setType={setType}
        />
      ))}
    </Stack>
  );
}
