import { ResizeObserver } from '@juggle/resize-observer';
import { useEventHandler } from '@superdispatch/hooks';
import { useLayoutEffect } from 'react';

export function useResizeObserver<T extends HTMLElement>(
  node: null | undefined | T,
  observer: (node: T) => void,
): void {
  const handler = useEventHandler(observer);

  useLayoutEffect(() => {
    if (!node) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      handler(node);
    });

    resizeObserver.observe(node);

    handler(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, [node, handler]);
}
