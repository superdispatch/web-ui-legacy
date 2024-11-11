import { get } from 'lodash';
import {
  Children,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export function getOptionsFromChildren(
  children: ReactNode,
): Array<{ value: unknown; label: string }> {
  // TextField doesn't support Fragment
  if (isFragment(children)) {
    return [];
  }

  return Children.toArray(children)
    .filter(
      (
        child,
      ): child is ReactElement<{
        value: unknown;
        children?: ReactNode;
      }> => isValidElement(child),
    )
    .map((child) => ({
      value: child.props.value,
      label: isValidElement(child.props.children)
        ? String(get(child.props.children.props, 'children') || '')
        : String(child.props.children || ''),
    }));
}

function isFragment(
  element: ReactNode,
): element is ReactElement<{ children: ReactNode }> {
  return isValidElement(element) && element.type === Fragment;
}

export function isSingleLetterOrNumber(key: string): boolean {
  return key.length === 1 && /^[a-zA-Z0-9_.-]*$/.test(key);
}
