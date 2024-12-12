import { StyleRules } from '@material-ui/core';
import { PaginationItemClassKey, PaginationItemProps } from '@material-ui/lab';
import { CSSProperties } from '@material-ui/styles';
import { ColorDynamic } from '../theme/Color';
import { SuperDispatchTheme } from '../theme/SuperDispatchTheme';

type Overrides<T extends string> = Partial<StyleRules<T>> & {
  MuiCssBaseline?: CSSProperties | string;
};

export function overridePagination(theme: SuperDispatchTheme): void {
  const props: Partial<PaginationItemProps> = {};
  const overrides: Overrides<PaginationItemClassKey> = {
    root: {
      color: ColorDynamic.Dark500,
    },
    page: {
      '&:hover': {
        backgroundColor: ColorDynamic.Silver200,
      },
      '&$focusVisible': {
        borderRadius: 4,
        backgroundColor: ColorDynamic.White,
        border: `1px solid ${ColorDynamic.Blue30}`,
      },
      '&$selected': {
        backgroundColor: ColorDynamic.Silver400,
        '&:hover, &$focusVisible': {
          backgroundColor: ColorDynamic.Silver500,
        },
        '&$disabled': {
          color: ColorDynamic.Dark100,
          backgroundColor: ColorDynamic.Silver400,
        },
      },

      '&$disabled': {
        opacity: undefined,
        color: ColorDynamic.Dark100,
      },
    },
  };

  // Remove `Object.assign` after official release of `PaginationItem`.
  Object.assign(theme.props, { MuiPaginationItem: props });
  Object.assign(theme.overrides, { MuiPaginationItem: overrides });
}
