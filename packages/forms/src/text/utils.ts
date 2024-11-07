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

  const optionsRaw = Children.toArray(children);
  return optionsRaw
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
      label: child.props.children?.toString() || '',
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
