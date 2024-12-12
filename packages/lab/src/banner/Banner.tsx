import { ColorDynamic } from '@superdispatch/ui';
import { forwardRef, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// eslint-disable-next-line import/no-internal-modules
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import styled, {
  css,
  Keyframes,
  keyframes,
  SimpleInterpolation,
} from 'styled-components';

function enterMixin(border: BorderPlacement): readonly SimpleInterpolation[] {
  return css`
  min-height: 56px;
  color: ${ColorDynamic.Dark500};
  background-color: ${ColorDynamic.White};

  border-${border}: 1px #dfe3e8 solid;
`;
}

function enterAnimation(border: BorderPlacement): Keyframes {
  return keyframes`
    0% { 
      min-height: 0; 
      color: ${ColorDynamic.White};  
      background-color: ${ColorDynamic.Dark500};
    }
  
    50% { 
      min-height: 56px; 
      color: ${ColorDynamic.White};
      background-color: ${ColorDynamic.Dark500};
    } 
  
    70% { 
      min-height: 56px; 
      color: ${ColorDynamic.White};
      background-color: ${ColorDynamic.Dark500};
    } 
  
    100% {
      ${enterMixin(border)}
    } 
`;
}

type BorderPlacement = 'top' | 'bottom';

type CustomerTransitionProps = CSSTransitionProps<HTMLDivElement> & {
  className?: string;
  border?: BorderPlacement;
};

const CustomTransition = forwardRef<
  CSSTransition<HTMLDivElement>,
  CustomerTransitionProps
>(({ children, ...props }, ref) => (
  <CSSTransition
    {...props}
    ref={ref}
    timeout={3000}
    classNames={props.className}
  >
    <div>{children}</div>
  </CSSTransition>
));

const BannerContent = styled(CustomTransition)<CustomerTransitionProps>(
  ({ border = 'bottom' }) => {
    return css`
      height: 0;
      width: 100%;
      overflow: hidden;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${ColorDynamic.White};
      background-color: ${ColorDynamic.White};

      &-enter-active {
        animation: ${enterAnimation(border)} 2s 1s forwards;
      }

      &-enter-done {
        ${enterMixin(border)};
      }

      &-exit {
        ${enterMixin(border)};
      }

      &-exit-active {
        min-height: 0;
        transition: min-height 2s 1s;
      }
    `;
  },
);

type BannerProps = Omit<
  CustomerTransitionProps,
  'timeout' | 'className' | 'classNames'
>;

export const Banner = forwardRef<CSSTransition<HTMLDivElement>, BannerProps>(
  ({ in: inProp, ...props }, ref) => {
    const [isIn, setIn] = useState(false);

    // transition is not triggered on initial render with `in: true`
    useEffect(() => {
      setIn(!!inProp);
    }, [inProp]);

    return <BannerContent ref={ref} in={isIn} {...props} />;
  },
);
