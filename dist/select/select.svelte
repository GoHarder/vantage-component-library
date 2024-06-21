<script context="module">"use strict";
let context = false;
let reducedMotion = undefined;
let style = undefined;
</script>

<script>import '@material/web/select/filled-select.js';
import '@material/web/select/outlined-select.js';
import { getContext } from 'svelte';
import Relay from '../internal/relay.js';
export let outlined = false;
export let quick = false;
export let required = false;
export let disabled = false;
export let errorText = '';
export let label = '';
export let supportingText = '';
export let error = false;
export let menuPositioning = 'absolute';
export let typeaheadDelay = 200;
export let value = undefined;
export let selectedIndex = undefined;
export let name = undefined;
const relay = new Relay();
if (!context) {
    style = getContext('style')?.select;
    reducedMotion = getContext('reducedMotion');
    context = true;
}
if (reducedMotion)
    quick = true;
if (style?.variant !== undefined)
    outlined = style.variant === 'outlined';
$: actionProps = { disabled, errorText, label, supportingText, error, value, selectedIndex };
$: props = Relay.props($$props, [
    'outlined',
    'quick',
    'required',
    'disabled',
    'errorText',
    'label',
    'supportingText',
    'error',
    'menuPositioning',
    'typeaheadDelay',
    'value',
    'selectedIndex',
    'name',
]);
relay.on('change', async (event) => {
    await event.target.getUpdateComplete();
    value = event.target.value;
    selectedIndex = event.target.selectedIndex;
});
relay.init = (node) => {
    node.quick = quick;
    node.required = required;
    node.menuPositioning = menuPositioning;
    node.typeaheadDelay = typeaheadDelay;
    if (name)
        node.name = name;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.errorText = props.errorText;
    node.label = props.label;
    node.supportingText = props.supportingText;
    node.error = props.error;
    if (props.value)
        node.value = props.value;
    if (props.selectedIndex)
        node.selectedIndex = props.selectedIndex;
};
</script>

{#if outlined}
  <md-outlined-select use:relay.action={actionProps} {...props}>
    <slot />
  </md-outlined-select>
{:else}
  <md-filled-select use:relay.action={actionProps} {...props}>
    <slot />
  </md-filled-select>
{/if}
