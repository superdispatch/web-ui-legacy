import { Link } from '@material-ui/core';
import React, { forwardRef, ReactElement } from 'react';
import { Anchorme, LinkComponent, LinkComponentProps } from 'react-anchorme';

const DefaultLinkComponent = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  (
    { color, target = '_blank', rel = 'noreferrer noopener', ...props },
    ref,
  ) => <Link {...props} ref={ref} rel={rel} target={target} />,
);

DefaultLinkComponent.displayName = 'DefaultLinkComponent';

export interface LinkedTextProps
  extends Omit<LinkComponentProps, 'ref' | 'href'> {
  children?: null | string;
  linkComponent?: LinkComponent;
}

export function LinkedText({
  children,
  linkComponent = DefaultLinkComponent,
  ...props
}: LinkedTextProps): ReactElement | null {
  if (!children) {
    return null;
  }

  return (
    <Anchorme {...props} linkComponent={linkComponent}>
      {children}
    </Anchorme>
  );
}
