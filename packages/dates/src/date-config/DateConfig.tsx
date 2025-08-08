import { FixedOffsetZone, Settings } from 'luxon';
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from 'react';

Settings.defaultLocale = 'en-US';

export function setDefaultTimeZone(offset: number | 'system'): string {
  if (offset === 'system') {
    Settings.defaultZone = offset;
  } else {
    const zone = FixedOffsetZone.instance(offset);
    Settings.defaultZone = zone.name;
  }

  if (typeof Settings.defaultZone === 'string') {
    return Settings.defaultZone;
  }

  return Settings.defaultZone.name;
}

export function useDefaultTimeZone(offset: number | 'system'): string {
  return useMemo(() => setDefaultTimeZone(offset), [offset]);
}

export type DateFormat = 'DateISO' | 'DateTimeISO' | 'JodaISO';

export interface DateConfig {
  readonly format: DateFormat;
}

export const defaultDateConfig: DateConfig = { format: 'DateTimeISO' };

const Context = createContext(defaultDateConfig);

export function useDateConfig(options: Partial<DateConfig> = {}): DateConfig {
  const config = useContext(Context);
  const { format = config.format } = options;

  return useMemo<DateConfig>(() => ({ format }), [format]);
}

export interface DateConfigProviderProps extends Partial<DateConfig> {
  children?: ReactNode;
}

export function DateConfigProvider({
  format,
  children,
}: DateConfigProviderProps): ReactElement {
  const prev = useDateConfig();
  const ctx = useMemo(
    (): DateConfig => ({ format: format || prev.format }),
    [format, prev.format],
  );

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
}
