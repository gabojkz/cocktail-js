// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const config = (output, plugins) => {
  return {
    input: 'src/index.js',
    output: output,
    plugins: plugins
  };
}

export default [
  /** Node commonjs*/
  config({
    file: __dirname + '/dist/cocktail.cjs.js',
    format: 'cjs',
    name: 'Cocktail',
  }, [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
  ]),
  /** ESM modules */
  config({
    file: __dirname + '/dist/cocktail.mjs.js',
    format: 'es',
    sourcemap: true,
    name: 'Cocktail',
  }, [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
  ]),
  /** Browser CDN */
  config({
    file: __dirname + '/dist/cocktail.min.js',
    format: 'iife',
    name: 'Cocktail',
    sourcemap: true,
    intro: 'var global = typeof self !== undefined ? self : this;'
  }, [
    nodePolyfills(),
    resolve({
      mainFields: ['browser', 'main'],
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      babelrc: false,
      presets: [["@babel/preset-env"]],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    terser()
  ])
];