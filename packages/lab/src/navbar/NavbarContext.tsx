import { createContext, useContext } from 'react';

export interface NavbarContextType {
  isDrawerOpen: boolean;
  isMenuExpanded: boolean;
  isNavbarExpanded: boolean;

  setDrawerOpen: (value: boolean) => void;
  setMenuExpanded: (value: boolean) => void;
}

export const NavbarContext = createContext<NavbarContextType>({
  isDrawerOpen: false,
  isMenuExpanded: false,
  isNavbarExpanded: false,
  setMenuExpanded: () => void 0,
  setDrawerOpen: () => void 0,
});

export function useNavbarContext(): NavbarContextType {
  return useContext(NavbarContext);
}
