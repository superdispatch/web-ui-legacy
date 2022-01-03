'use strict';

const identity = require('lodash/identity');
const fs = require('fs/promises');
const path = require('path');
const traverse = require('@babel/traverse').default;
const { diff } = require('jest-diff');
const { parseAsync } = require('@babel/core');

function diffString(a, b) {
  return diff(a, b, {
    expand: false,
    contextLines: -1, // Forces to use default from Jest
    aAnnotation: 'v4',
    bAnnotation: 'v5',

    aColor: identity,
    bColor: identity,
    changeColor: identity,
    commonColor: identity,
    patchColor: identity,
  });
}

async function parseAST(filename) {
  const plugins = [];
  const presets = [require.resolve('babel-preset-current-node-syntax')];

  if (/\.tsx?$/.test(filename)) {
    plugins.push([
      require.resolve('@babel/plugin-syntax-typescript'),
      { isTSX: filename.endsWith('x') },
    ]);
  }

  const content = await fs.readFile(filename);
  return parseAsync(content.toString(), {
    filename,
    plugins,
    presets,
    root: path.dirname(filename),
  });
}

function traverseAST(ast, results) {
  traverse(ast, {
    CallExpression({ node }) {
      const { arguments: args, callee } = node;
      if (
        callee.type !== 'MemberExpression' ||
        callee.property.type !== 'Identifier' ||
        callee.property.loc == null
      ) {
        return;
      }

      const templateLiteral = args.find(
        ({ type }) => type === 'TemplateLiteral',
      );

      if (templateLiteral) {
        const [{ value }] = templateLiteral.quasis;
        results.push(value.cooked);
      }
    },
  });
}

class DiffReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  async onTestFileResult(test) {
    // todo check for snapshot from testResult
    if (test.path.includes('/v5')) {
      await processFileSnapshots(test);
      await processInlineSnapshots(test);
    }
  }
}

async function processInlineSnapshots(test) {
  const pathV4 = getPathV4(test.path);
  const snapshots = await getInlineSnapshotValues(test.path);
  const snapshotsV4 = await getInlineSnapshotValues(pathV4);

  if (!snapshotsV4) {
    console.warn('DiffReporter: v4 snapshots not found for ' + test.path);
    return;
  }

  if (snapshots.length !== snapshotsV4.length) {
    console.warn(
      'DiffReporter: v4 and v5 snapshots are not the same length for ' +
        test.path,
    );
    return;
  }

  const diffs = [];

  for (let i = 0; i < snapshots.length; i++) {
    const snapshot = snapshots[i];
    const snapshotV4 = snapshotsV4[i];
    const diffContent = diffString(snapshot, snapshotV4);

    if (diffContent.length) {
      diffs.push(diffString(snapshotV4, snapshot));
    }
  }

  if (diffs.length) {
    const diffPath = getDiffPath(test.path);
    await fs.writeFile(diffPath, diffs.join('\n'));
  }
}

async function getInlineSnapshotValues(filename) {
  const results = [];
  const content = await fs.readFile(filename);

  if (content.includes('toMatchInlineSnapshot')) {
    const ast = await parseAST(filename);

    traverseAST(ast, results);
  }

  return results;
}

async function processFileSnapshots(test) {
  const pathV4 = getPathV4(test.path);
  const snapshotPath = getSnapshotPath(test.path);
  const snapshotPathV4 = getSnapshotPath(pathV4);

  try {
    await fs.access(snapshotPath);
    await fs.access(snapshotPathV4);
  } catch (err) {
    return;
  }

  const snapshot = await fs.readFile(snapshotPath);
  const snapshotV4 = await fs.readFile(snapshotPathV4);
  if (snapshot.toString() !== snapshotV4.toString()) {
    const diffPath = getDiffPath(snapshotPath);
    await fs.writeFile(
      diffPath,
      diffString(snapshotV4.toString(), snapshot.toString()),
    );
  }
}

function getDiffPath(filename) {
  return filename + '.diff';
}

function getSnapshotPath(filename) {
  const dir = path.dirname(filename);
  const basename = path.basename(filename);
  return dir + '/__snapshots__/' + basename + '.snap';
}

function getPathV4(filename) {
  return filename.replace('/v5', '');
}

module.exports = DiffReporter;
