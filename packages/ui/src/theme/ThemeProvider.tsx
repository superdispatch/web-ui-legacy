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
import { useConstant } from '@superdispatch/hooks';
import { Rule, StyleSheet } from 'jss';
import { ReactElement, ReactNode } from 'react';
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
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
import { Color } from './Color';
import { SuperDispatchTheme } from './SuperDispatchTheme';

const GlobalStyles = createGlobalStyle`
  :root {
    --sd-blue50: #EBF4FF;
    --sd-blue500: #0063DB;
    --sd-blue300: #0070F5;
    --sd-green300: #03872F;
    --sd-green500: #007A29;
    --sd-green50: #ECF9EF;
    --sd-yellow300: #E8671C;
    --sd-yellow500: #B84807;
    --sd-yellow50: #FFF7DC;
    --sd-red300: #E5230D;
    --sd-red500:#C31909
    --sd-red50:#FFEDEB
    --sd-purple300:#6559CF
    --sd-purple500:#473ABB
    --sd-purple50:#EFEEFC
    --sd-teal300:#007EAB
    --sd-teal500:#00678A
    --sd-teal50:#E3F6FC
    --sd-silver500:#C4CDD5
    --sd-silver200:#F3F5F8
    --sd-silver400:#E1E5EA
    --sd-dark100:#8F949E
    --sd-dark300:#5B6371
    --sd-dark500:#192334
    --sd-pinkRed:#FE4A49
  }

    @media (prefers-color-scheme: dark) {
  :root {
   --sd-blue50:#0E2947
    --sd-blue500:#55ADFF
    --sd-blue300:#0070F5
    --sd-green300:#03872F
    --sd-green500:#5EE18A
    --sd-green50:#092E16
    --sd-yellow300:#E8671C
    --sd-yellow500:#FCA542
    --sd-yellow50:#33200A
    --sd-red500:#FF6359
    --sd-red50:#3D0A06
    --sd-purple300:#6559CF
    --sd-purple500:#BFA0FF
    --sd-purple50:#262247
    --sd-teal300:#007EAB
    --sd-teal500:#31C7F5
    --sd-teal50:#11333D
    --sd-silver500:#47505B
    --sd-silver200:#0D1017
    --sd-silver400:#30373D
    --sd-dark100:#6E7A8A
    --sd-dark300:#AEB4BD
    --sd-dark500:#FFFFFF
    --sd-pinkRed:#FE4A49
    }
}     

`;

function createSuperDispatchTheme(): SuperDispatchTheme {
  const breakpoints = createBreakpoints({});
  const theme = createTheme({
    breakpoints,
    palette: {
      primary: {
        main: Color.Blue300,
      },

      error: {
        main: Color.Red300,
      },

      action: {
        hover: Color.Silver100,
        selected: Color.Silver300,
        disabled: Color.Silver400,
      },

      text: {
        primary: Color.Dark500,
        secondary: Color.Dark300,
        hint: Color.Dark100,
        disabled: Color.Dark100,
      },

      divider: Color.Silver400,
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
  injectFirst?: boolean;
  modifier?: (theme: SuperDispatchTheme) => SuperDispatchTheme;
}

export function ThemeProvider({
  modifier,
  children,
  injectFirst = true,
}: ThemeProviderProps): ReactElement {
  const theme = useConstant(() => {
    const nextTheme = createSuperDispatchTheme();
    return !modifier ? nextTheme : modifier(nextTheme);
  });

  return (
    <StylesProvider
      injectFirst={injectFirst}
      generateClassName={generateClassName}
    >
      <MaterialThemeProvider theme={theme}>
        <CssBaseline />

        <StyledThemeProvider theme={theme}>
          <GlobalStyles />
          <ResponsiveContextProvider>
            <SnackbarStackProvider>{children}</SnackbarStackProvider>
          </ResponsiveContextProvider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
}
