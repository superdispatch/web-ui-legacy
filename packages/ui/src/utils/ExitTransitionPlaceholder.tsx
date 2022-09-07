import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { renderChildren } from './renderChildren';

interface ExitTransitionPlaceholderProps {
  in: boolean;
  children: ReactNode;
}

export function ExitTransitionPlaceholder({
  in: inProp,
  children: childrenProp,
}: ExitTransitionPlaceholderProps): null | ReactElement {
  const [children, setChildren] = useState(childrenProp);

  useEffect(() => {
    if (inProp) {
      setChildren(childrenProp);
    }
  }, [inProp, childrenProp]);

  return renderChildren(children);
}
