import { StyleRules } from '@material-ui/core';
import { PaginationItemClassKey, PaginationItemProps } from '@material-ui/lab';
import { CSSProperties } from '@material-ui/styles';
import { ColorV2 } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

type Overrides<T extends string> = Partial<StyleRules<T>> & {
  MuiCssBaseline?: CSSProperties | string;
};

export function overridePagination(theme: SuperDispatchTheme): void {
  const props: Partial<PaginationItemProps> = {};
  const overrides: Overrides<PaginationItemClassKey> = {
    root: {
      color: ColorV2.Dark500,
    },
    page: {
      '&:hover': {
        backgroundColor: ColorV2.Silver200,
      },
      '&$focusVisible': {
        borderRadius: 4,
        backgroundColor: ColorV2.White,
        border: `1px solid ${ColorV2.Blue30}`,
      },
      '&$selected': {
        backgroundColor: ColorV2.Silver400,
        '&:hover, &$focusVisible': {
          backgroundColor: ColorV2.Silver500,
        },
        '&$disabled': {
          color: ColorV2.Dark100,
          backgroundColor: ColorV2.Silver400,
        },
      },

      '&$disabled': {
        opacity: undefined,
        color: ColorV2.Dark100,
      },
    },
  };

  // Remove `Object.assign` after official release of `PaginationItem`.
  Object.assign(theme.props, { MuiPaginationItem: props });
  Object.assign(theme.overrides, { MuiPaginationItem: overrides });
}
