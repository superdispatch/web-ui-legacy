import { createGlobalStyle } from 'styled-components';
import { ColorDarkInternal, ColorLightInternal } from './Color';
import { SuperDispatchTheme } from './SuperDispatchTheme';

export const GlobalStyles = createGlobalStyle(
  ({ theme }: { theme: SuperDispatchTheme }) => {
    const color =
      theme.palette.type === 'dark' ? ColorDarkInternal : ColorLightInternal;
    return `
    :root{
      --sd-white: ${color.White};
      --sd-inverted-white: ${color.InvertedWhite};
      --sd-white-50: ${color.White50};
      --sd-white-40: ${color.White40};
      --sd-white-20: ${color.White20};
      --sd-white-10: ${color.White10};
      --sd-white-08: ${color.White08};
      --sd-transparent: ${color.Transparent};

      --sd-black: ${color.Black};
      --sd-black-50: ${color.Black50};
      --sd-black-20: ${color.Black20};

      --sd-dark-30: ${color.Dark30};
      --sd-blue-30: ${color.Blue30};
      --sd-green-30: ${color.Green30};
      --sd-red-30: ${color.Red30};
      --sd-silver-30: ${color.Silver30};

      --sd-blue-10: ${color.Blue10};
      --sd-red-10: ${color.Red10};

      /* Legacy Neutral Colors */
      --sd-grey-100: ${color.Grey100}; /* @deprecated Use Dark100 */
      --sd-grey-200: ${color.Grey200}; /* @deprecated Use Dark200 */
      --sd-grey-300: ${color.Grey300}; /* @deprecated Use Dark300 */
      --sd-grey-400: ${color.Grey400}; /* @deprecated Use Dark400 */
      --sd-grey-450: ${color.Grey450}; /* @deprecated Use Dark450 */
      --sd-grey-500: ${color.Grey500}; /* @deprecated Use Dark500 */

      --sd-dark-200: ${color.Dark200}; /* @deprecated */
      --sd-dark-400: ${color.Dark400}; /* @deprecated */
      --sd-dark-450: ${color.Dark450}; /* @deprecated */

      --sd-silver-100: ${color.Silver100}; /* @deprecated */
      --sd-silver-300: ${color.Silver300}; /* @deprecated */

      /* Legacy Extended Palette */
      --sd-blue-75: ${color.Blue75}; /* @deprecated */
      --sd-blue-100: ${color.Blue100}; /* @deprecated */
      --sd-blue-200: ${color.Blue200}; /* @deprecated */
      --sd-blue-400: ${color.Blue400}; /* @deprecated */

      --sd-green-75: ${color.Green75}; /* @deprecated */
      --sd-green-100: ${color.Green100}; /* @deprecated */
      --sd-green-200: ${color.Green200}; /* @deprecated */
      --sd-green-400: ${color.Green400}; /* @deprecated */

      --sd-purple-75: ${color.Purple75}; /* @deprecated */
      --sd-purple-100: ${color.Purple100}; /* @deprecated */
      --sd-purple-200: ${color.Purple200}; /* @deprecated */
      --sd-purple-400: ${color.Purple400}; /* @deprecated */

      --sd-red-75: ${color.Red75}; /* @deprecated */
      --sd-red-100: ${color.Red100}; /* @deprecated */
      --sd-red-200: ${color.Red200}; /* @deprecated */
      --sd-red-400: ${color.Red400}; /* @deprecated */

      --sd-teal-75: ${color.Teal75}; /* @deprecated */
      --sd-teal-100: ${color.Teal100}; /* @deprecated */
      --sd-teal-200: ${color.Teal200}; /* @deprecated */
      --sd-teal-400: ${color.Teal400}; /* @deprecated */

      --sd-yellow-75: ${color.Yellow75}; /* @deprecated */
      --sd-yellow-100: ${color.Yellow100}; /* @deprecated */
      --sd-yellow-200: ${color.Yellow200}; /* @deprecated */
      --sd-yellow-400: ${color.Yellow400}; /* @deprecated */
      --sd-dark-50: ${color.Dark50};
      /* extended palette */
    
      --sd-blue-50: ${color.Blue50};
      --sd-blue-500: ${color.Blue500};
      --sd-blue-300: ${color.Blue300};
      --sd-green-300: ${color.Green300};
      --sd-green-500: ${color.Green500};
      --sd-green-50: ${color.Green50};
      --sd-yellow-300: ${color.Yellow300};
      --sd-yellow-500: ${color.Yellow500};
      --sd-yellow-50: ${color.Yellow50};
      --sd-red-300: ${color.Red300};
      --sd-red-500: ${color.Red500};
      --sd-red-50: ${color.Red50};
      --sd-purple-300: ${color.Purple300};
      --sd-purple-500: ${color.Purple500};
      --sd-purple-50: ${color.Purple50};
      --sd-teal-300: ${color.Teal300};
      --sd-teal-500: ${color.Teal500};
      --sd-teal-50: ${color.Teal50};
      --sd-silver-500: ${color.Silver500};
      --sd-silver-200: ${color.Silver200};
      --sd-silver-400: ${color.Silver400};
      --sd-dark-100: ${color.Dark100};
      --sd-dark-300: ${color.Dark300};
      --sd-dark-500: ${color.Dark500};
    }
  `;
  },
);
