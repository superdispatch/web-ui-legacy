import { ForwardRef } from 'react-is';

export function getForwardRefSerializer() {
  return {
    test: (value: any) => value?.$$typeof === ForwardRef,
    serialize: (value: any) =>
      `React.forwardRef(${value.displayName || 'unknown'})`,
  };
}
