import { Link } from '@material-ui/core';
import {
  AnchorHTMLAttributes,
  forwardRef,
  FunctionComponent,
  ReactElement,
} from 'react';
import { Anchorme } from 'react-anchorme';

export type LinkComponentProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  href: string;
  truncate?: number;
};

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
  linkComponent?: FunctionComponent<LinkComponentProps>;
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
