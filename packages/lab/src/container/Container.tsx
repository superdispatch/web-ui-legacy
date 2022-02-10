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
        if (nodeRef.current) {
          nodeRef.current.style.removeProperty('height');
          nodeRef.current.style.removeProperty('--vh');
        }
        return;
      }

      function updateHeight(): void {
        if (nodeRef.current) {
          // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
          nodeRef.current.style.setProperty(
            'height',
            'calc(var(--vh, 1vh) * 100)',
          );
          nodeRef.current.style.setProperty(
            '--vh',
            `${window.innerHeight * 0.01}px`,
          );
        }
      }

      updateHeight();

      window.addEventListener('resize', updateHeight);

      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    }, [fullViewportHeight]);

    return <div ref={mergeRefs(ref, nodeRef)} {...props} />;
  },
);

Container.displayName = 'Container';
