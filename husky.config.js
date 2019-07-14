module.exports = {
  // ...require('@naturalcycles/dev-lib/cfg/husky.config'),
  hooks: {
    'commit-msg': './node_modules/.bin/commitlint-def',
    // 'pre-commit': './node_modules/.bin/lint-staged-def',
  },
}
