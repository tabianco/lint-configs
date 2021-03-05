const readdirSync = require('fs').readdirSync
const resolve = require('path').resolve
const commonjs = require('@rollup/plugin-commonjs')

const PACKAGES_DIR = resolve(__dirname, 'packages')

module.exports = readdirSync(PACKAGES_DIR).map(pkg => ([
  genConfig(pkg),
  genConfig(pkg, true)
])).flat()

/**
 * @param pkg {string}
 */
function genBanner (pkg) {
  const version = require(getPath(pkg, 'package.json')).version

  return (
`/**
 * ${pkg} v${version}
 * (c) ${new Date().getFullYear()} Tabian Co.
 */`)
}

/**
 * @param pkg {string}
 * @param isESM {boolean}
 */
function genConfig (pkg, isESM = false) {
  return {
    input: getPath(pkg, 'index.js'),
    output: {
      banner: genBanner(pkg),
      exports: 'default',
      file: getPath(pkg, `dist/index${isESM ? '.esm' : ''}.js`),
      format: isESM ? 'es' : 'cjs',
      preferConst: true
    },
    plugins: [
      commonjs()
    ]
  }
}

/**
 * @param pkg {string}
 * @param path {string}
 */
function getPath (pkg, path) {
  return resolve(PACKAGES_DIR, pkg, path)
}
