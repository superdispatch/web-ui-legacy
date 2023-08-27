export type ColorVariant =
  | 'grey'
  | 'silver'
  | 'blue'
  | 'green'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

export enum Color {
  //
  // ???
  //

  White = '#fff',
  White50 = 'rgba(255, 255, 255, 0.5)',
  White40 = 'rgba(255, 255, 255, 0.4)',
  White20 = 'rgba(255, 255, 255, 0.2)',
  White10 = 'rgba(255, 255, 255, 0.1)',
  White08 = 'rgba(255, 255, 255, 0.08)',
  Transparent = 'rgba(0, 0, 0, 0)',

  Black = '#000',
  Black50 = 'rgba(0, 0, 0, 0.5)',
  Black20 = 'rgba(0, 0, 0, 0.2)',

  //Colors with 30% opacity
  Dark30 = 'rgba(143, 148, 158, 0.3)',
  Blue30 = 'rgba(0, 112, 245, 0.3)',
  Green30 = 'rgba(3, 135, 47, 0.3)',
  Red30 = 'rgba(229, 35, 13, 0.3)',
  Silver30 = 'rgba(225, 229, 234, 0.3)',

  //
  // Neutral Colors
  //

  /**@deprecated Use Dark100 */
  Grey100 = '#8F949E',
  /**@deprecated Use Dark200 */
  Grey200 = '#6A707C',
  /**@deprecated Use Dark300 */
  Grey300 = '#5B6371',
  /**@deprecated Use Dark400 */
  Grey400 = '#323C4E',
  /**@deprecated Use Dark450 */
  Grey450 = '#222F44',
  /**@deprecated Use Dark500 */
  Grey500 = '#192334',

  Dark100 = '#8F949E',
  Dark200 = '#6A707C',
  Dark300 = '#5B6371',
  /**@deprecated */
  Dark400 = '#323C4E',
  /**@deprecated */
  Dark450 = '#222F44',
  Dark500 = '#192334',

  /**@deprecated */
  Silver100 = '#F6F7F8',
  Silver200 = '#F3F5F8',
  /**@deprecated */
  Silver300 = '#E8ECF0',
  Silver400 = '#E1E5EA',
  Silver500 = '#C4CDD5',

  //
  // Extended Palette
  //

  Blue50 = '#EBF4FF',
  /** @deprecated */
  Blue75 = '#CCE5FF',
  /** @deprecated */
  Blue100 = '#A8D1FF',
  /** @deprecated */
  Blue200 = '#66ADFF',
  Blue300 = '#0070F5',
  /** @deprecated */
  Blue400 = '#0063DB',
  Blue500 = '#0063DB',

  Green50 = '#ECF9EF',
  /** @deprecated */
  Green75 = '#C8F4D1',
  /** @deprecated */
  Green100 = '#90EAAE',
  /** @deprecated */
  Green200 = '#5DDA87',
  Green300 = '#03872F',
  /** @deprecated */
  Green400 = '#1E8F46',
  Green500 = '#007A29',

  Purple50 = '#EFEEFC',
  /** @deprecated */
  Purple75 = '#DCDBF5',
  /** @deprecated */
  Purple100 = '#CBC8EE',
  /** @deprecated */
  Purple200 = '#A7A1E8',
  Purple300 = '#6559CF',
  /** @deprecated */
  Purple400 = '#473ABB',
  Purple500 = '#473ABB',

  Red50 = '#FFEDEB',
  /** @deprecated */
  Red75 = '#FDD9D3',
  /** @deprecated */
  Red100 = '#FDC2BA',
  /** @deprecated */
  Red200 = '#FE988B',
  Red300 = '#E5230D',
  /** @deprecated */
  Red400 = '#D9210D',
  Red500 = '#C31909',

  Teal50 = '#E3F6FC',
  /** @deprecated */
  Teal75 = '#BEEDF9',
  /** @deprecated */
  Teal100 = '#91E3F8',
  /** @deprecated */
  Teal200 = '#61D3EF',
  Teal300 = '#007EAB',
  /** @deprecated */
  Teal400 = '#008DB8',
  Teal500 = '#00678A',

  Yellow50 = '#FFF7DC',
  /** @deprecated */
  Yellow75 = '#FFF1C2',
  /** @deprecated */
  Yellow100 = '#FFE494',
  /** @deprecated */
  Yellow200 = '#FFDC6B',
  Yellow300 = '#E8671C',
  /** @deprecated */
  Yellow400 = '#FFA91F',
  Yellow500 = '#B84807',
}

export type ColorProp = keyof typeof Color;

export function isColorProp(name: unknown): name is ColorProp {
  return (
    typeof name == 'string' && Object.prototype.hasOwnProperty.call(Color, name)
  );
}
