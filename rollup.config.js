// @ts-check

import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import svelte from 'rollup-plugin-svelte';
import sveltePre from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

/** @type {import('@rollup/plugin-node-resolve').RollupNodeResolveOptions} */
const resolveConfig = {
  browser: true,
  dedupe: ['svelte'],
  moduleDirectories: ['node_modules'],
};

/** @type {import('rollup-plugin-scss').CSSPluginOptions} */
const scssOpts = {
  fileName: 'index.css',
  outputStyle: production ? 'compressed' : 'expanded',
  prefix: '@use "display/src/scss/prefix.scss";',
  sourceMap: !production,
  watch: ['display/src/scss'],
};

/** @type {Partial<import('rollup-plugin-svelte').Options>} */
const svelteConfig = {
  compilerOptions: {
    dev: !production,
  },
  preprocess: sveltePre(),
};

/** @type {import("rollup").RollupOptions} */
const display = {
  input: 'display/src/index.js',
  output: {
    file: 'display/dist/index.js',
    sourcemap: !production,
  },
  plugins: [resolve(resolveConfig), svelte(svelteConfig), scss(scssOpts)],
};

export default [display];
