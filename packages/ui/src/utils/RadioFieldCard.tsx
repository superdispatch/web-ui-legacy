import {
  ButtonBase,
  ButtonBaseProps,
  Card as MuiCard,
  FormControlLabel as MuiFormControlLabel,
  Radio,
} from '@material-ui/core';
import { Box, TextBox } from '@superdispatch/ui-lab';
import { forwardRef, ForwardRefExoticComponent } from 'react';
import styled from 'styled-components';
import { Column } from '../columns/Column';
import { Columns } from '../columns/Columns';
import { Inline } from '../inline/Inline';

const ClickableCard = styled(ButtonBase)`
  display: block;
  text-align: initial;
  width: 100%;
`;

const Card = styled(MuiCard)`
  width: 100%;
  opacity: ${(props: { disabled?: boolean }) => (props.disabled ? 0.5 : 1)};
`;

const FormControlLabel = styled(MuiFormControlLabel)`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  .MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
  }
  .MuiFormControlLabel-label {
    display: none;
  }
`;

export interface RadioCardItemProps {
  value: string;
  label: string;
  name: string;
  caption: string;
  icon: React.ReactNode;
}

interface RadioCardProps
  extends Omit<ButtonBaseProps, 'name' | 'value'>,
    RadioCardItemProps {
  disabled?: boolean;
}

export const RadioFieldCard: ForwardRefExoticComponent<RadioCardProps> =
  forwardRef(
    ({ name, value, label, caption, disabled, icon, onChange, ...props }) => {
      return (
        <FormControlLabel
          value={value}
          control={
            <Card disabled={disabled} key={value}>
              <ClickableCard disabled={disabled} {...props}>
                <Box
                  borderRadius="small"
                  borderWidth="small"
                  borderColor={value === name ? 'Blue300' : 'Silver500'}
                  padding={['small']}
                  width="100%"
                >
                  <Columns space="small">
                    <Column>
                      <Inline verticalAlign="center">
                        <Radio checked={value === name} />
                        <TextBox variant="heading-4">{label}</TextBox>
                      </Inline>
                      <Box paddingLeft="xxlarge">
                        <TextBox color="secondary" variant="caption">
                          {caption}
                        </TextBox>
                      </Box>
                    </Column>
                    <Column width="content">{icon}</Column>
                  </Columns>
                </Box>
              </ClickableCard>
            </Card>
          }
          checked={value === name}
          label=""
        />
      );
    },
  );
