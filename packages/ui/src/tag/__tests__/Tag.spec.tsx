import { renderCSS } from '@superdispatch/ui-testutils';
import { Tag } from '../..';

it('checks component css', () => {
  expect(renderCSS(<Tag color="blue" variant="bold" />, ['SD-Tag']))
    .toMatchInlineSnapshot(`
    .SD-Tag-root {
      display: inline-flex;
      padding: 0px 4px;
      max-width: 100%;
      align-items: center;
      border-radius: 4px;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorGrey {
      color: ColorV2.Dark300;
      background-color: ColorV2.Silver200;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorBlue {
      color: ColorV2.Blue500;
      background-color: ColorV2.Blue50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorGreen {
      color: ColorV2.Green500;
      background-color: ColorV2.Green50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorPurple {
      color: ColorV2.Purple500;
      background-color: ColorV2.Purple50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorRed {
      color: ColorV2.Red500;
      background-color: ColorV2.Red50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorTeal {
      color: ColorV2.Teal500;
      background-color: ColorV2.Teal50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorYellow {
      color: ColorV2.Yellow500;
      background-color: ColorV2.Yellow50;
    }

    .SD-Tag-variantBold {
      color: ColorV2.White;
    }

    .SD-Tag-variantBold.SD-Tag-colorGrey {
      background-color: ColorV2.Dark300;
    }

    .SD-Tag-variantBold.SD-Tag-colorBlue {
      background-color: ColorV2.Blue300;
    }

    .SD-Tag-variantBold.SD-Tag-colorGreen {
      background-color: ColorV2.Green300;
    }

    .SD-Tag-variantBold.SD-Tag-colorPurple {
      background-color: ColorV2.Purple300;
    }

    .SD-Tag-variantBold.SD-Tag-colorRed {
      background-color: ColorV2.Red300;
    }

    .SD-Tag-variantBold.SD-Tag-colorTeal {
      background-color: ColorV2.Teal300;
    }

    .SD-Tag-variantBold.SD-Tag-colorYellow {
      background-color: ColorV2.Yellow300;
    }
  `);
});
