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

## Troubleshooting

#### `tsc` error: Output file '...' has not been built from source file '...'

If error points at `@superdispatch/...` package, open respective package directory and run `yarn tsc` command.

#### `tsc` error on `yarn run release` or `lerna publish` commands:

- Run logged `tsc` command.
- Try solution of error described above (_tsc error: Output file ..._).
