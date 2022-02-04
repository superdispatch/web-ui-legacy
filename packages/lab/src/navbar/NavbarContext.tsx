import { noop } from 'lodash';
import { createContext, useContext } from 'react';

interface NavbarContextType {
  isDrawerOpen: boolean;
  isExpanded: boolean;

  setIsExpanded: (value: boolean) => void;
  setDrawerOpen: (value: boolean) => void;
}

export const NavbarContext = createContext<NavbarContextType>({
  isDrawerOpen: false,
  isExpanded: false,
  setIsExpanded: noop,
  setDrawerOpen: noop,
});

export function useNavbarContext(): NavbarContextType {
  return useContext(NavbarContext);
}
