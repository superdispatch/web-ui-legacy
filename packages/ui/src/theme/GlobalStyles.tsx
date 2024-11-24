import { createGlobalStyle } from 'styled-components';
import { ColorLightInternal } from './Color';

export const GlobalStyles = createGlobalStyle`
  :root {
    --sd-white: ${ColorLightInternal.White};
    --sd-white-50: ${ColorLightInternal.White50};
    --sd-white-40: ${ColorLightInternal.White40};
    --sd-white-20: ${ColorLightInternal.White20};
    --sd-white-10: ${ColorLightInternal.White10};
    --sd-white-08: ${ColorLightInternal.White08};
    --sd-transparent: ${ColorLightInternal.Transparent};

    --sd-black: ${ColorLightInternal.Black};
    --sd-black-50: ${ColorLightInternal.Black50};
    --sd-black-20: ${ColorLightInternal.Black20};

    --sd-dark-30: ${ColorLightInternal.Dark30};
    --sd-blue-30: ${ColorLightInternal.Blue30};
    --sd-green-30: ${ColorLightInternal.Green30};
    --sd-red-30: ${ColorLightInternal.Red30};
    --sd-silver-30: ${ColorLightInternal.Silver30};

    --sd-blue-10: ${ColorLightInternal.Blue10};
    --sd-red-10: ${ColorLightInternal.Red10};

    /* Legacy Neutral Colors */
    --sd-grey-100: ${ColorLightInternal.Grey100}; /* @deprecated Use Dark100 */
    --sd-grey-200: ${ColorLightInternal.Grey200}; /* @deprecated Use Dark200 */
    --sd-grey-300: ${ColorLightInternal.Grey300}; /* @deprecated Use Dark300 */
    --sd-grey-400: ${ColorLightInternal.Grey400}; /* @deprecated Use Dark400 */
    --sd-grey-450: ${ColorLightInternal.Grey450}; /* @deprecated Use Dark450 */
    --sd-grey-500: ${ColorLightInternal.Grey500}; /* @deprecated Use Dark500 */

    --sd-dark-200: ${ColorLightInternal.Dark200}; /* @deprecated */
    --sd-dark-400: ${ColorLightInternal.Dark400}; /* @deprecated */
    --sd-dark-450: ${ColorLightInternal.Dark450}; /* @deprecated */

    --sd-silver-100: ${ColorLightInternal.Silver100}; /* @deprecated */
    --sd-silver-300: ${ColorLightInternal.Silver300}; /* @deprecated */

    /* Legacy Extended Palette */
    --sd-blue-75: ${ColorLightInternal.Blue75}; /* @deprecated */
    --sd-blue-100: ${ColorLightInternal.Blue100}; /* @deprecated */
    --sd-blue-200: ${ColorLightInternal.Blue200}; /* @deprecated */
    --sd-blue-400: ${ColorLightInternal.Blue400}; /* @deprecated */

    --sd-green-75: ${ColorLightInternal.Green75}; /* @deprecated */
    --sd-green-100: ${ColorLightInternal.Green100}; /* @deprecated */
    --sd-green-200: ${ColorLightInternal.Green200}; /* @deprecated */
    --sd-green-400: ${ColorLightInternal.Green400}; /* @deprecated */

    --sd-purple-75: ${ColorLightInternal.Purple75}; /* @deprecated */
    --sd-purple-100: ${ColorLightInternal.Purple100}; /* @deprecated */
    --sd-purple-200: ${ColorLightInternal.Purple200}; /* @deprecated */
    --sd-purple-400: ${ColorLightInternal.Purple400}; /* @deprecated */

    --sd-red-75: ${ColorLightInternal.Red75}; /* @deprecated */
    --sd-red-100: ${ColorLightInternal.Red100}; /* @deprecated */
    --sd-red-200: ${ColorLightInternal.Red200}; /* @deprecated */
    --sd-red-400: ${ColorLightInternal.Red400}; /* @deprecated */

    --sd-teal-75: ${ColorLightInternal.Teal75}; /* @deprecated */
    --sd-teal-100: ${ColorLightInternal.Teal100}; /* @deprecated */
    --sd-teal-200: ${ColorLightInternal.Teal200}; /* @deprecated */
    --sd-teal-400: ${ColorLightInternal.Teal400}; /* @deprecated */

    --sd-yellow-75: ${ColorLightInternal.Yellow75}; /* @deprecated */
    --sd-yellow-100: ${ColorLightInternal.Yellow100}; /* @deprecated */
    --sd-yellow-200: ${ColorLightInternal.Yellow200}; /* @deprecated */
    --sd-yellow-400: ${ColorLightInternal.Yellow400}; /* @deprecated */
    --sd-dark-50: ${ColorLightInternal.Dark50};
    /* extended palette */
  
    --sd-blue-50: ${ColorLightInternal.Blue50};
    --sd-blue-500: ${ColorLightInternal.Blue500};
    --sd-blue-300: ${ColorLightInternal.Blue300};
    --sd-green-300: ${ColorLightInternal.Green300};
    --sd-green-500: ${ColorLightInternal.Green500};
    --sd-green-50: ${ColorLightInternal.Green50};
    --sd-yellow-300: ${ColorLightInternal.Yellow300};
    --sd-yellow-500: ${ColorLightInternal.Yellow500};
    --sd-yellow-50: ${ColorLightInternal.Yellow50};
    --sd-red-300: ${ColorLightInternal.Red300};
    --sd-red-500: ${ColorLightInternal.Red500};
    --sd-red-50: ${ColorLightInternal.Red50};
    --sd-purple-300: ${ColorLightInternal.Purple300};
    --sd-purple-500: ${ColorLightInternal.Purple500};
    --sd-purple-50: ${ColorLightInternal.Purple50};
    --sd-teal-300: ${ColorLightInternal.Teal300};
    --sd-teal-500: ${ColorLightInternal.Teal500};
    --sd-teal-50: ${ColorLightInternal.Teal50};
    --sd-silver-500: ${ColorLightInternal.Silver500};
    --sd-silver-200: ${ColorLightInternal.Silver200};
    --sd-silver-400: ${ColorLightInternal.Silver400};
    --sd-dark-100: ${ColorLightInternal.Dark100};
    --sd-dark-300: ${ColorLightInternal.Dark300};
    --sd-dark-500: ${ColorLightInternal.Dark500};
  }
`;
