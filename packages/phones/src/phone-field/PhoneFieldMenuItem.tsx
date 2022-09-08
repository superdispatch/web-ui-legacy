import {
  MenuItem,
  MenuItemClassKey,
  MenuItemProps,
  Theme,
  Typography,
} from '@mui/material';
import { ClassNameMap, makeStyles } from '@mui/styles';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useMemo,
} from 'react';
import {
  CountryISO,
  formatCountry,
  getCountryCode,
} from '../country-code-metadata/CountryCodeMetadata';
import { PhoneFieldFlag } from './PhoneFieldFlag';

export type PhoneFieldMenuItemClassKey = MenuItemClassKey | 'flag';

const useStyles = makeStyles<
  Theme,
  { classes?: Partial<ClassNameMap<PhoneFieldMenuItemClassKey>> },
  PhoneFieldMenuItemClassKey
>(
  (theme) => ({
    dense: {},
    gutters: {},
    root: {},
    selected: {},
    disabled: {},
    divider: {},
    focusVisible: {},
    flag: { marginRight: theme.spacing(1) },
  }),
  { name: 'SD-PhoneFieldMenuItem' },
);

export interface PhoneFieldMenuItemProps
  extends RefAttributes<HTMLLIElement>,
    Omit<MenuItemProps, 'classes' | 'children'> {
  country: CountryISO;
  classes?: Partial<ClassNameMap<PhoneFieldMenuItemClassKey>>;
}

export const PhoneFieldMenuItem: ForwardRefExoticComponent<PhoneFieldMenuItemProps> =
  forwardRef<HTMLLIElement, PhoneFieldMenuItemProps>(
    ({ country, classes, ...props }, ref) => {
      const { flag: flagClassName, ...styles } = useStyles({ classes });
      const countryCode = useMemo(() => getCountryCode(country), [country]);

      return (
        <MenuItem {...props} ref={ref} classes={styles}>
          <PhoneFieldFlag country={country} className={flagClassName} />
          {formatCountry(country)}
          &nbsp;
          <Typography color="textSecondary">{countryCode}</Typography>
        </MenuItem>
      );
    },
  );
