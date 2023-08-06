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
import { Color } from '../theme/Color';

const ClickableCard = styled(ButtonBase)`
  display: block;
  text-align: initial;
  width: 100%;
`;

const CardContent = styled(Box)`
  border-color: ${({ checked }: { checked: boolean }) =>
    checked ? `${Color.Blue300}` : `${Color.Silver500}`};
`;

const Card = styled(MuiCard)`
  width: 100%;
  opacity: ${(props: { disabled?: boolean }) => (props.disabled ? 0.5 : 1)};
`;

const FormControlLabel = styled(MuiFormControlLabel)`
  width: 100%;
`;

export interface RadioCardItemProps {
  value: string;
  label: string;
  name?: string;
  caption?: string;
  icon?: React.ReactNode;
}

interface RadioCardProps
  extends Omit<ButtonBaseProps, 'name' | 'value'>,
    RadioCardItemProps {
  disabled?: boolean;
  checked?: boolean;
}

export const RadioFieldCard: ForwardRefExoticComponent<RadioCardProps> =
  forwardRef(
    (
      {
        name,
        value,
        label,
        caption,
        disabled,
        icon,
        checked,
        onChange,
        ...props
      },
      ref,
    ) => {
      return (
        <Card disabled={disabled} key={value}>
          <ClickableCard name={name} disabled={disabled} {...props}>
            <CardContent
              borderRadius="small"
              borderWidth="small"
              checked={checked}
              padding={['small']}
              width="100%"
            >
              <Columns space="small">
                <Column>
                  <FormControlLabel
                    value={value}
                    name={name}
                    control={<Radio ref={ref} checked={checked} />}
                    label={<TextBox variant="heading-4">{label}</TextBox>}
                  />
                  <Box paddingLeft="large">
                    <TextBox color="secondary" variant="caption">
                      {caption}
                    </TextBox>
                  </Box>
                </Column>

                <Column width="content">{icon}</Column>
              </Columns>
            </CardContent>
          </ClickableCard>
        </Card>
      );
    },
  );
