import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

const copyright = `/*
 * react-intl-viz, (c) 2018 - present, Railslove GmbH.
 * This project is released under the MIT License.
 */
`

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner: copyright
    },
    {
      file: pkg.module,
      format: 'es',
      banner: copyright
    }
  ],
  plugins: [
    peerDepsExternal(),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react-dom/index.js': ['createPortal']
      }
    })
  ]
}
