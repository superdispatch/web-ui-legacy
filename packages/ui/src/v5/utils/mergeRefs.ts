import { MutableRefObject, Ref } from 'react';

export function mergeRefs<T>(
  ...refs: Array<null | undefined | Ref<T>>
): (node: T) => void {
  return (node) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}

export function assignRef<T>(ref: Ref<T> | undefined, value: T): void {
  if (ref) {
    if (typeof ref === 'function') {
      ref(value);
    } else {
      (ref as MutableRefObject<T>).current = value;
    }
  }
}
