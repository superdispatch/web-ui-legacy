# Super Dispatch UI

[![Main](https://github.com/superdispatch/ui/workflows/Main/badge.svg?branch=main)](https://github.com/superdispatch/ui/actions)
[![codecov](https://codecov.io/gh/superdispatch/ui/branch/master/graph/badge.svg)](https://codecov.io/gh/superdispatch/ui)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Super-Dispatch/UI)

- [@superdispatch/ui](https://github.com/superdispatch/ui/tree/master/packages/ui) - UI components
- [@superdispatch/dates](https://github.com/superdispatch/ui/tree/master/packages/dates) - Date and Time components
- [@superdispatch/phones](https://github.com/superdispatch/ui/tree/master/packages/phones) - Phone Number components
- [@superdispatch/forms](https://github.com/superdispatch/ui/tree/master/packages/forms) - UI, Date, Time and Phone Number component adapters to work with forms

## Publishing to NPM

1.  Open an [NPM](https://www.npmjs.com/) account if you don't have one
2.  Ask frontend chapter lead to give access to Superdispatch organization in NPM
3.  Enable 2FA for your NPM account
4.  Run `npm login` from your terminal and login into your account
5.  Run `yarn release`
6.  Make sure the tag is created on Github and packages published into NPM
7.  Update all usages of packages in product repositories.

## Component Boilerplate Generation with Plop

In our project, we use Plop, a micro-generator framework that helps developers to generate boilerplate code snippets. Plop is flexible and simple to use, and it works by using "generators" configured in a plopfile.js.

To generate component use command:

```bash
yarn run generate
```

1. Plop will ask you what type of component you'd like to generate
2. Next, Plop will ask you for the name of your component.
3. Plop will generate all Boilerplate files for you
4. Open up the new files and you'll see that they're pre-populated with the code needed to get started on your new component, story, and tests.
5. From here, you can start developing your component, adding new states and props to the Storybook story, and writing tests.

## Troubleshooting

#### `tsc` error: Output file '...' has not been built from source file '...'

If error points at `@superdispatch/...` package, open respective package directory and run `yarn tsc` command.

#### `tsc` error on `yarn run release` or `lerna publish` commands:

- Run logged `tsc` command.
- Try solution of error described above (_tsc error: Output file ..._).
