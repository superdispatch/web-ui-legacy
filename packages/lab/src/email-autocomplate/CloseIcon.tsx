import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { Color } from '@superdispatch/ui';
import { ReactElement } from 'react';

export function CloseIcon(props: SvgIconProps): ReactElement {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 6 6"
      style={{ width: '6px', height: '6px' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.72278 2.99999L5.91671 0.806074L5.19396 0.0833282L3.00004 2.27725L0.80612 0.0833282L0.083374 0.806076L2.27729 2.99999L0.083374 5.19391L0.80612 5.91666L3.00004 3.72274L5.19396 5.91666L5.91671 5.19392L3.72278 2.99999Z"
        fill={Color.Dark100}
      />
    </SvgIcon>
  );
}
