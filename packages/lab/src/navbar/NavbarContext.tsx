import { createContext, Key, useContext } from 'react';

export interface NavbarContextType {
  isDrawerOpen: boolean;
  isMenuExpanded: boolean;
  isNavbarExpanded: boolean;
  groupExpanded: Record<Key, boolean>;

  setDrawerOpen: (value: boolean) => void;
  setMenuExpanded: (value: boolean) => void;
  setGroupExpanded: (expandedKey: Key, isExpanded: boolean) => void;
}

export const NavbarContext = createContext<NavbarContextType>({
  isDrawerOpen: false,
  isMenuExpanded: false,
  isNavbarExpanded: false,
  groupExpanded: {},

  setMenuExpanded: () => void 0,
  setDrawerOpen: () => void 0,
  setGroupExpanded: () => void 0,
});

export function useNavbarContext(): NavbarContextType {
  return useContext(NavbarContext);
}
