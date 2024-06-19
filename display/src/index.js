// @ts-check

import './scss/index.scss';
import App from './svelte/app.svelte';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const style = {
  textInput: { variant: 'outlined' },
};

/** @type {Map<string, boolean | typeof style>} */
const context = new Map([
  ['reducedMotion', reducedMotion],
  ['style', style],
]);

const target = document.querySelector('body');

if (target) new App({ target, context });
