import { ESLintUtils } from '@typescript-eslint/experimental-utils';

export const createRule = ESLintUtils.RuleCreator(
  (ruleName) =>
    `https://github.com/superdispatch/web-ui/blob/main/packages/eslint-plugin/src/rules/${ruleName}.ts`,
);
