import {
  createTheme,
  CssBaseline,
  ThemeProvider as MaterialThemeProvider,
} from '@mui/material';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import { createBreakpoints } from '@mui/system';
import { useConstant } from '@superdispatch/hooks';
import { Rule, StyleSheet } from 'jss';
import { ReactElement, ReactNode } from 'react';
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
import { overrideRadio } from '../radio/RadioOverrides';
import { overrideSvgIcon } from '../svg-icon/SvgIconOverrides';
import { overrideSwitch } from '../switch/SwitchOverrides';
import { overrideTextField } from '../text-field/TextFieldOverrides';
import { overrideToolbar } from '../toolbar/ToolbarOverrides';
import { overrideTooltip } from '../tooltip/TooltipOverrides';
import {
  createTypographyOptions,
  overrideTypography,
} from '../typography/TypographyOverrides';
import { Color } from './Color';
import { overrideCssBaseline } from './CssBaselineOverrides';
import { SuperDispatchTheme } from './SuperDispatchTheme';

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
        secondary: Color.Dark200,
        // hint: Color.Dark100, todo
        disabled: Color.Dark100,
      },

      divider: Color.Silver400,
    },

    typography: createTypographyOptions(breakpoints),

    components: {},
  }) as SuperDispatchTheme;

  overrideCard(theme);
  overrideButton(theme);
  overrideAppBar(theme);
  overridePaper(theme);
  overrideTooltip(theme);
  overrideSvgIcon(theme);
  overrideToolbar(theme);
  overrideIconButton(theme);
  overrideTypography(theme);
  overrideMenu(theme);
  overrideAvatar(theme);
  overrideTextField(theme);
  overrideAutocomplete(theme);
  overrideCssBaseline(theme);
  overrideCheckbox(theme);
  overrideRadio(theme);
  overrideSwitch(theme);
  overrideChip(theme);
  overrideDialog(theme);
  overrideDrawer(theme);
  overridePagination(theme);
  overrideList(theme);
  overrideLink(theme);

  return theme;
}

const generateMaterialClassName = createGenerateClassName();

function generateClassName(rule: Rule, sheet?: StyleSheet): string {
  const { meta, link } = sheet?.options || {};

  if (meta && rule.type === 'style') {
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
        {children}
      </MaterialThemeProvider>
    </StylesProvider>
  );
}
