import { renderCSS } from '@superdispatch/ui-testutils';
import { CardButton } from '../..';

it('checks component css', () => {
  expect(renderCSS(<CardButton />, ['SD-CardButton'])).toMatchInlineSnapshot(`
    .SD-CardButton-root {
      width: 100%;
      border: 1px dashed;
      display: flex;
      padding: 12px;
      min-height: 104px;
      transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      align-items: center;
      border-radius: 4px;
      flex-direction: column;
      justify-content: center;
      background-color: ColorDynamic.White;
    }

    .SD-CardButton-disabled {
      color: ColorDynamic.Dark100;
      border-color: ColorDynamic.Silver500;
      background-color: ColorDynamic.Silver400Alpha30;
    }

    .SD-CardButton-disabled .SD-CardButton-hint {
      color: ColorDynamic.Dark100;
    }

    .SD-CardButton-error {
      color: ColorDynamic.Red500;
      border-color: ColorDynamic.Red500;
      background-color: ColorDynamic.Red50;
    }

    .SD-CardButton-error:focus {
      background-color: ColorDynamic.Red300Aplha20;
    }

    .SD-CardButton-primary {
      color: ColorDynamic.Blue500;
      border-color: ColorDynamic.Silver500;
    }

    .SD-CardButton-primary:focus {
      background-color: ColorDynamic.Blue50;
    }

    .SD-CardButton-primary:hover,
    .SD-CardButton-primary:active {
      border-color: ColorDynamic.Blue300;
      background-color: ColorDynamic.Blue50;
    }

    .SD-CardButton-sizeSmall {
      min-height: 48px;
    }

    .SD-CardButton-sizeLarge {
      min-height: 140px;
    }

    .SD-CardButton-label {
      display: flex;
      align-items: center;
    }

    .SD-CardButton-icon {
      display: flex;
    }

    .SD-CardButton-icon svg {
      font-size: 24px;
    }

    @media (min-width: 600px) {
      .SD-CardButton-icon svg {
        font-size: 20px;
      }
    }

    .SD-CardButton-startIcon {
      margin-left: -4px;
      margin-right: 8px;
    }

    .SD-CardButton-endIcon {
      margin-left: 8px;
      margin-right: -4px;
    }

    .SD-CardButton-hint {
      margin-top: 4px;
    }
  `);
});
