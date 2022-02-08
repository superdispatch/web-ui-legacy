import { mergeRefs } from '@superdispatch/ui';
import { forwardRef, HTMLAttributes, useLayoutEffect, useRef } from 'react';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  fullViewportHeight?: boolean;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ fullViewportHeight, ...props }, ref) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
      if (!fullViewportHeight) {
        return;
      }

      const node = nodeRef.current;

      function updateHeight(): void {
        if (node) {
          // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
          node.style.setProperty('height', 'calc(var(--vh, 1vh) * 100)');
          node.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        }
      }

      updateHeight();

      window.addEventListener('resize', updateHeight);

      return () => {
        if (node) {
          node.style.removeProperty('height');
          node.style.removeProperty('--vh');
        }

        window.removeEventListener('resize', updateHeight);
      };
    }, [fullViewportHeight]);

    return <div ref={mergeRefs(ref, nodeRef)} {...props} />;
  },
);

Container.displayName = 'Container';
