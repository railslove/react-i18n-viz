import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const copyright = `/*
 * react-intl-viz, (c) 2018 - present, Railslove GmbH.
 * This project is released under the MIT License.
 */
`

export default [
  // Main Package
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        banner: copyright,
        exports: 'named'
      },
      {
        file: pkg.module,
        format: 'es',
        banner: copyright,
        exports: 'named'
      }
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(),
      commonjs()
    ]
  },

  // react-intl Integration
  {
    input: 'src/plugs/react-intl.js',
    output: [
      {
        file: 'plug/react-intl/index.js',
        format: 'cjs'
      },
      {
        file: 'plug/react-intl/index.es.js',
        format: 'es'
      }
    ],
    external: [path.resolve('src/index.js'), 'react-intl', 'react-i18n-viz'],
    plugins: [
      peerDepsExternal(),
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
]
