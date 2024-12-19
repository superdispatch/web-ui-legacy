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
      color: ColorDynamic.Dark300;
      background-color: ColorDynamic.Silver200;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorBlue {
      color: ColorDynamic.Blue500;
      background-color: ColorDynamic.Blue50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorGreen {
      color: ColorDynamic.Green500;
      background-color: ColorDynamic.Green50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorPurple {
      color: ColorDynamic.Purple500;
      background-color: ColorDynamic.Purple50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorRed {
      color: ColorDynamic.Red500;
      background-color: ColorDynamic.Red50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorTeal {
      color: ColorDynamic.Teal500;
      background-color: ColorDynamic.Teal50;
    }

    .SD-Tag-variantSubtle.SD-Tag-colorYellow {
      color: ColorDynamic.Yellow500;
      background-color: ColorDynamic.Yellow50;
    }

    .SD-Tag-variantBold {
      color: Color.White;
    }

    .SD-Tag-variantBold.SD-Tag-colorGrey {
      color: ColorDynamic.White;
      background-color: ColorDynamic.Dark300;
    }

    .SD-Tag-variantBold.SD-Tag-colorBlue {
      background-color: ColorDynamic.Blue300;
    }

    .SD-Tag-variantBold.SD-Tag-colorGreen {
      background-color: ColorDynamic.Green300;
    }

    .SD-Tag-variantBold.SD-Tag-colorPurple {
      background-color: ColorDynamic.Purple300;
    }

    .SD-Tag-variantBold.SD-Tag-colorRed {
      background-color: ColorDynamic.Red300;
    }

    .SD-Tag-variantBold.SD-Tag-colorTeal {
      background-color: ColorDynamic.Teal300;
    }

    .SD-Tag-variantBold.SD-Tag-colorYellow {
      background-color: ColorDynamic.Yellow300;
    }
  `);
});
