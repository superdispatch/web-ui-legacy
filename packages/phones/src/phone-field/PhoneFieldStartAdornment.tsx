import { ButtonBase, InputAdornment, Typography } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { ColorV2, SuperDispatchTheme } from '@superdispatch/ui';
import { forwardRef, useMemo } from 'react';
import {
  CountryISO,
  formatCountry,
  getCountryCode,
} from '../country-code-metadata/CountryCodeMetadata';
import { PhoneFieldFlag } from './PhoneFieldFlag';

const useStyles = makeStyles(
  (theme: SuperDispatchTheme) => ({
    root: {
      marginLeft: theme.spacing(-1),
      marginRight: 0,
    },
    button: {
      color: ColorV2.Blue300,
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      borderRadius: theme.spacing(0.5, 0, 0, 0.5),
      '&:hover, &:focus': {
        backgroundColor: ColorV2.Blue50,
      },
    },
  }),
  { name: 'SD-PhoneFieldStartAdornment' },
);

export interface PhoneFieldProps {
  onClick?: () => void;
  isExpanded?: boolean;
  country: CountryISO;
}

export const PhoneFieldStartAdornment = forwardRef<
  HTMLDivElement,
  PhoneFieldProps
>(({ country, onClick, isExpanded }, ref) => {
  const styles = useStyles();
  const [title, countryCode] = useMemo(() => {
    const code = `+${getCountryCode(country)}`;

    return [`${formatCountry(country)}: ${code}`, code];
  }, [country]);

  return (
    <InputAdornment ref={ref} position="start" className={styles.root}>
      <ButtonBase
        title={title}
        onClick={onClick}
        className={styles.button}
        aria-expanded={isExpanded}
      >
        <PhoneFieldFlag country={country} />

        {isExpanded ? (
          <ArrowDropUp htmlColor={ColorV2.Dark200} />
        ) : (
          <ArrowDropDown htmlColor={ColorV2.Dark200} />
        )}

        <Typography color="textPrimary">{countryCode}</Typography>
      </ButtonBase>
    </InputAdornment>
  );
});
