'use strict';

module.exports = {
  storiesFilter:
    /^Data Display|^Surfaces|^Inputs|^Navigation\/Tabs|^Navigation\/Link|^Navigation\/Button|^Layout|^Feedback\/Dialog|^Navigation\/Drawer|^Lab/i,

  configurations: {
    'chrome.laptop': {
      target: 'chrome.docker',
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
      mobile: true,
    },
  },

  fileNameFormatter({ configurationName, kind, story }) {
    const [root, sub] = kind.split('/');
    return `${configurationName}/${root}/${sub}_${story}`.replace(/\s/g, '_');
  },
};
