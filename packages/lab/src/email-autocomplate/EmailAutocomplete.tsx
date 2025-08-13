import {
  IconButton,
  StandardTextFieldProps,
  TextField,
} from '@material-ui/core';
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteProps,
} from '@material-ui/lab';
import { Inline, Tag } from '@superdispatch/ui';
import { TextBox } from '@superdispatch/ui-lab';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { CloseIcon } from './CloseIcon';

const MultipleFieldText = styled(TextField)`
  /* Inline input next to tags rather than next line on focus */
  & {
    width: 100%;
    margin-top: 8px;
    overflow: hidden;
  }

  && .MuiAutocomplete-inputRoot {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 8px;

    & .MuiAutocomplete-input {
      width: 100%;
    }
  }
`;

interface EmailAutocompleteProps
  extends Omit<
    AutocompleteProps<string, true, true, true>,
    'onChange' | 'renderInput' | 'renderTags'
  > {
  options: string[];
  TextFieldProps?: StandardTextFieldProps;

  onAdd?: (value: string) => void;
  onRemove?: (value: string) => void;
  onChange?: (
    value: string[] | undefined,
    reason: AutocompleteChangeReason,
  ) => void;
}

export const EmailAutocomplete = forwardRef(
  (
    { value, onChange, TextFieldProps, ...props }: EmailAutocompleteProps,
    ref,
  ) => {
    function handleDelete(index: number): void {
      const filteredOrders = value?.filter(
        (_item, fieldIndex) => fieldIndex !== index,
      );
      void onChange?.(filteredOrders, 'remove-option');
    }

    return (
      <Autocomplete
        {...props}
        ref={ref}
        multiple={true}
        freeSolo={true}
        filterSelectedOptions={true}
        disableClearable={true}
        value={value}
        filterOptions={(filterOptions) => {
          return filterOptions.filter((option) => option !== '');
        }}
        onChange={(event, selectedValue) => {
          const keyboardEvent = event as React.KeyboardEvent<HTMLInputElement>;
          const lastElement = selectedValue[selectedValue.length - 1];

          if (keyboardEvent.key === 'Backspace') {
            const removeLatesElement = value?.filter(
              (_, index) => index < value.length - 1,
            );

            onChange?.(removeLatesElement, 'remove-option');
          } else if (keyboardEvent.key === 'Enter' && lastElement) {
            onChange?.([...(value || []), lastElement], 'select-option');
          } else if (lastElement) {
            const emails = lastElement
              .split(',')
              .map((item) => item.replace(' ', ''));

            onChange?.(emails, 'select-option');
          } else {
            onChange?.(selectedValue, 'select-option');
          }
        }}
        renderTags={(items) => {
          return (
            <Inline space="xxsmall">
              {items.map((option, index) => {
                return (
                  <Tag key={index} color="grey" variant="subtle">
                    <Inline space="xxsmall">
                      <TextBox wrapOverflow={true} color="primary">
                        {option}
                      </TextBox>

                      <IconButton
                        size="small"
                        onClick={() => {
                          handleDelete(index);
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Inline>
                  </Tag>
                );
              })}
            </Inline>
          );
        }}
        renderInput={(params) => (
          <MultipleFieldText
            {...params}
            {...TextFieldProps}
            multiline={true}
            minRows={2}
            variant="outlined"
            fullWidth={true}
            InputProps={{
              ...TextFieldProps?.InputProps,
              ...params.InputProps,
              startAdornment: params.InputProps.startAdornment,
            }}
            placeholder="Enter individual emails on each line or separate them with comma (,)"
            onChange={(event) => {
              const text = event.target.value.replace(/,/g, '');
              const hasCommaOrSpace = /,|\s/.test(event.target.value);

              if (hasCommaOrSpace && text.trim() !== '') {
                onChange?.([...(value || []), text.trim()], 'select-option');
              }
            }}
          />
        )}
      />
    );
  },
);

EmailAutocomplete.displayName = 'EmailAutocomplete';
