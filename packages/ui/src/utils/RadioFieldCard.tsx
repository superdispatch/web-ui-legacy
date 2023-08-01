import {
  ButtonBase,
  ButtonBaseProps,
  Card as MuiCard,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import { Box, TextBox } from '@superdispatch/ui-lab';
import { forwardRef, ForwardRefExoticComponent } from 'react';
import styled from 'styled-components';
import { Column, Columns } from '..';

const ClickableCard = styled(ButtonBase)`
  display: block;
  text-align: initial;
  width: 100%;
`;

const Card = styled(MuiCard)`
  opacity: ${(props: { disabled?: boolean }) => (props.disabled ? 0.5 : 1)};
`;

export interface RadioCardItemProps {
  value: string;
  label: string;
  caption: string;
  icon: React.ReactNode;
}

interface RadioCardProps extends ButtonBaseProps {
  radioItem: RadioCardItemProps;
  value?: string;
  disabled?: boolean;
}

export const RadioFieldCard: ForwardRefExoticComponent<RadioCardProps> =
  forwardRef(({ radioItem, value, disabled, ...props }) => {
    return (
      <Card disabled={disabled} key={radioItem.value}>
        <ClickableCard disabled={disabled} {...props}>
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
                  label={
                    <Typography variant="h4">{radioItem.label}</Typography>
                  }
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
  });
