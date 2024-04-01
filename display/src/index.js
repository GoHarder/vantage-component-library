// @ts-check

import './scss/index.scss';
import App from './svelte/app.svelte';

const target = document.querySelector('body');

if (target) new App({ target });
