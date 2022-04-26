import type { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useResponsiveContext } from './ResponsiveContext';

export type MinBreakpoint = 'sm' | 'md' | 'lg' | 'xl';

const BREAKPOINTS: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export function useMinBreakpoint(
  minBreakpoint: undefined | MinBreakpoint,
): boolean {
  const { breakpoint = 'xs' } = useResponsiveContext();

  if (minBreakpoint == null) {
    return false;
  }

  const breakpointIDX = BREAKPOINTS.indexOf(breakpoint);
  const minBreakpointIDX = BREAKPOINTS.indexOf(minBreakpoint);

  return minBreakpointIDX < breakpointIDX;
}
