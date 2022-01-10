import { spyLogs } from '@superdispatch/jestutils';
import {
  getForwardRefSerializer,
  resetMockDate,
} from '@superdispatch/ui-testutils';
import '@testing-library/jest-dom';

spyLogs({ warn: 'forbid', error: 'forbid' });

afterEach(resetMockDate);

// Mock `getComputedStyle` to workaround `accessible-name-and-description`
// selector of the `dom-accessibility-api`.
Object.defineProperty(window, 'getComputedStyle', {
  writable: false,
  enumerable: false,
  configurable: false,
  value: () => ({ getPropertyValue: () => '' }),
});

// @eslint/eslintrc uses document.baseURI in cjs builds.
// Remove when migrating tests to ESModules.
Object.defineProperty(document, 'baseURI', {
  value: 'file:',
  writable: true,
});

expect.addSnapshotSerializer(getForwardRefSerializer());
