import React from 'react';
import { RadioFieldCard } from '../RadioFieldCard';
import { RadioGroupField } from '../RadioGroupField';

test('radio card component', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  expect(
    <RadioGroupField
      name="color"
      label="Color"
      onBlur={onBlur}
      onChange={onChange}
    >
      <RadioFieldCard name="color" label="Red" value="red" />
      <RadioFieldCard name="color" label="Green" value="green" />
    </RadioGroupField>,
  ).toBeDefined();
});
