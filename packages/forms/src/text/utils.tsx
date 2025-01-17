import {
  Children,
  Fragment,
  isValidElement,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

export function getOptionsFromChildren(children: ReactNode): Array<{
  value: string | number | readonly string[] | undefined;
  label: string;
}> {
  // TextField doesn't support Fragment
  if (isFragment(children)) {
    return [];
  }

  return Children.toArray(children)
    .filter(
      (
        child,
      ): child is ReactElement<{
        value: string | number | readonly string[] | undefined;
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

interface KeyboardSelectionState {
  key: string;
  time: number;
  index: number;
}

interface UseKeyboardSelectionProps {
  options: Array<{
    label: string;
    value: string | number | readonly string[] | undefined;
  }>;
  onSelect: (value: string | number | readonly string[] | undefined) => void;
}

export function useKeyboardSelection({
  options,
  onSelect,
}: UseKeyboardSelectionProps): (event: KeyboardEvent<HTMLDivElement>) => void {
  const [lastKeyPress, setLastKeyPress] = useState<KeyboardSelectionState>({
    key: '',
    time: 0,
    index: 0,
  });

  return function handleKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    if (!isSingleLetterOrNumber(event.key) || options.length === 0) {
      return;
    }

    const currentTime = Date.now();
    const isKeyPressExpired = currentTime - lastKeyPress.time > 2000;

    if (isKeyPressExpired) {
      setLastKeyPress({ key: '', time: 0, index: 0 });
    }

    const isSameKey = lastKeyPress.key === event.key;
    const matchedKey = isSameKey
      ? event.key.toLowerCase()
      : (lastKeyPress.key + event.key).toLowerCase();

    const matchedOptions = options.filter((option) =>
      option.label.toLowerCase().startsWith(matchedKey),
    );

    const nextIndex =
      isSameKey && matchedOptions.length > lastKeyPress.index + 1
        ? lastKeyPress.index + 1
        : 0;

    const selectedOption = matchedOptions[nextIndex];

    if (selectedOption?.value) {
      onSelect(selectedOption.value);
      setLastKeyPress({
        key: matchedKey,
        time: currentTime,
        index: nextIndex,
      });
    }
  };
}
