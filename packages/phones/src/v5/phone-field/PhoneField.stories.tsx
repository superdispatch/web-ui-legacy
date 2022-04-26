import { PhoneField } from './PhoneField.playroom';

export default {
  title: 'Phones/PhoneField',
  component: PhoneField,
  parameters: { v5: true },
};

export const basic = () => <PhoneField />;
export const validation = () => <PhoneField value="+1 201555123" />;
