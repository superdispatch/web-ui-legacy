import {
  createGenerateClassName,
  createTheme,
  CssBaseline,
} from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/styles';
// eslint-disable-next-line import/no-internal-modules
import { ThemeProvider as MaterialV5ThemeProvider } from '@mui/material/styles';
import { StylesProvider as MaterialV5StylesProvider } from '@mui/styles';
import { Rule, StyleSheet } from 'jss';
import { ReactElement, ReactNode, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { overrideAppBar } from '../app-bar/AppBarOverrides';
import { overrideAutocomplete } from '../autocomplete/AutocompleteOverrides';
import { overrideAvatar } from '../avatar/AvatarOverrides';
import { overrideButton } from '../button/ButtonOverrides';
import { overrideCard } from '../card/CardOverrides';
import { overrideCheckbox } from '../checkbox/CheckboxOverrides';
import { overrideChip } from '../chip/ChipOverrides';
import { overrideDialog } from '../dialog/DialogOverrides';
import { overrideDrawer } from '../drawer/DrawerOverrides';
import { overrideIconButton } from '../icon-button/IconButtonOverrides';
import { overrideLink } from '../link/LinkOverrides';
import { overrideList } from '../list/ListOverrides';
import { overrideMenu } from '../menu/MenuOverrides';
import { overridePagination } from '../pagination/PaginationOverrides';
import { overridePaper } from '../paper/PaperOverrides';
import { overridePreloader } from '../preloader/PreLoaderOverrides';
import { overrideRadio } from '../radio/RadioOverrides';
import { ResponsiveContextProvider } from '../responsive/ResponsiveContext';
import { overrideSnackbar } from '../snackbar/SnackbarOverrides';
import { SnackbarStackProvider } from '../snackbar/SnackbarStack';
import { overrideSvgIcon } from '../svg-icon/SvgIconOverrides';
import { overrideSwitch } from '../switch/SwitchOverrides';
import { overrideTabs } from '../tabs/TabsOverrides';
import { overrideTextField } from '../text-field/TextFieldOverrides';
import { overrideToolbar } from '../toolbar/ToolbarOverrides';
import { overrideTooltip } from '../tooltip/TooltipOverrides';
import {
  createTypographyOptions,
  overrideTypography,
} from '../typography/TypographyOverrides';
import { Color, ColorDark } from './Color';
import { GlobalStyles } from './GlobalStyles';
import { SuperDispatchTheme } from './SuperDispatchTheme';

function createSuperDispatchTheme(type?: 'light' | 'dark'): SuperDispatchTheme {
  const breakpoints = createBreakpoints({});
  const color = type === 'dark' ? ColorDark : Color;
  const theme = createTheme({
    breakpoints,
    palette: {
      type,
      primary: {
        main: color.Blue300,
      },

      error: {
        main: color.Red300,
      },

      action: {
        hover: color.Silver200,
        selected: color.Blue50,
        disabled: color.Silver400,
      },

      text: {
        primary: color.Dark500,
        secondary: color.Dark300,
        hint: color.Dark100,
        disabled: color.Dark100,
      },
      common: {
        white: color.White,
        black: color.Black,
      },
      divider: color.Silver400,
      background: {
        paper: color.White,
      },
    },

    typography: createTypographyOptions(breakpoints),

    props: {},
    overrides: {},
  }) as SuperDispatchTheme;

  overrideAppBar(theme);
  overrideAutocomplete(theme);
  overrideAvatar(theme);
  overrideButton(theme);
  overrideCard(theme);
  overrideCheckbox(theme);
  overrideChip(theme);
  overrideDialog(theme);
  overrideDrawer(theme);
  overrideIconButton(theme);
  overrideLink(theme);
  overrideList(theme);
  overrideMenu(theme);
  overridePaper(theme);
  overrideRadio(theme);
  overrideSnackbar(theme);
  overrideSvgIcon(theme);
  overrideSwitch(theme);
  overrideTabs(theme);
  overrideTextField(theme);
  overrideToolbar(theme);
  overrideTooltip(theme);
  overrideTypography(theme);
  overridePagination(theme);
  overridePreloader(theme);

  return theme;
}

const generateMaterialClassName = createGenerateClassName();

function generateClassName(rule: Rule, sheet?: StyleSheet): string {
  const { meta, link } = sheet?.options || {};

  if (meta && rule.type === 'style') {
    if (meta.startsWith('MuiSnackbar') && sheet) {
      return `SDSnackbar-${rule.key}`;
    }
    if (meta.startsWith('SD-')) {
      return `${meta}-${rule.key}`;
    }

    if (meta.startsWith('Mui')) {
      const isPseudoClass = [
        'checked',
        'disabled',
        'error',
        'focused',
        'focusVisible',
        'required',
        'expanded',
        'selected',
      ].includes(rule.key);

      if (isPseudoClass) {
        return `Mui-${rule.key}`;
      }

      if (!link) {
        return `${meta}-${rule.key}`;
      }
    }
  }

  return generateMaterialClassName(rule, sheet);
}

export interface ThemeProviderProps {
  children?: ReactNode;
  mode?: 'dark' | 'light';
  injectFirst?: boolean;
  modifier?: (theme: SuperDispatchTheme) => SuperDispatchTheme;
}

export function ThemeProvider({
  modifier,
  children,
  mode,
  injectFirst = true,
}: ThemeProviderProps): ReactElement {
  const theme = useMemo(() => {
    const nextTheme = createSuperDispatchTheme(mode);
    return !modifier ? nextTheme : modifier(nextTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- modifier may update on every render
  }, [mode]);

  return (
    <StylesProvider
      injectFirst={injectFirst}
      generateClassName={generateClassName}
    >
      <MaterialV5StylesProvider
        injectFirst={injectFirst}
        generateClassName={generateClassName}
      >
        <MaterialThemeProvider theme={theme}>
          <MaterialV5ThemeProvider theme={theme}>
            <CssBaseline />

            <StyledThemeProvider theme={theme}>
              <GlobalStyles />
              <ResponsiveContextProvider>
                <SnackbarStackProvider>{children}</SnackbarStackProvider>
              </ResponsiveContextProvider>
            </StyledThemeProvider>
          </MaterialV5ThemeProvider>
        </MaterialThemeProvider>
      </MaterialV5StylesProvider>
    </StylesProvider>
  );
}
