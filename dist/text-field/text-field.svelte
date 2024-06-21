<script context="module">"use strict";
let context = false;
let style = undefined;
</script>

<script>import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';
import { getContext } from 'svelte';
import Relay from '../internal/relay.js';
export let outlined = false;
export let disabled = false;
export let error = false;
export let errorText = '';
export let label = '';
export let required = false;
export let value = '';
export let noAsterisk = false;
export let prefixText = '';
export let suffixText = '';
export let supportingText = '';
export let rows = 2;
export let cols = 20;
export let inputMode = '';
export let max = '';
export let maxLength = -1;
export let min = '';
export let minLength = -1;
export let pattern = '';
export let placeholder = '';
export let readOnly = false;
export let multiple = false;
export let step = '';
export let type = 'text';
export let autocomplete = 'on';
export let name = undefined;
const relay = new Relay();
if (!context) {
    style = getContext('context')?.textInput;
    context = true;
}
if (style !== undefined) {
    outlined = style.variant === 'outlined';
}
$: actionProps = { disabled, error, errorText, label, value, supportingText };
$: props = Relay.props($$props, ['disabled', 'error', 'errorText', 'label', 'value', 'supportingText']);
relay.on('input', (event) => {
    const invalidTargetTypes = ['submit', 'reset', 'button'];
    if (invalidTargetTypes.includes(event.target.type))
        return;
    value = event.target.value;
});
relay.init = (node) => {
    node.required = required;
    node.prefixText = prefixText;
    node.suffixText = suffixText;
    node.rows = rows;
    node.cols = cols;
    node.inputMode = inputMode;
    node.max = max;
    node.maxLength = maxLength;
    node.min = min;
    node.minLength = minLength;
    node.pattern = pattern;
    node.placeholder = placeholder;
    node.readOnly = readOnly;
    node.multiple = multiple;
    node.step = step;
    node.type = type;
    node.autocomplete = autocomplete;
    node.noAsterisk = noAsterisk;
    if (name)
        node.name = name;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.error = props.error;
    node.errorText = props.errorText;
    node.label = props.label;
    node.value = props.value;
    node.supportingText = props.supportingText;
};
</script>

{#if outlined}
  <md-outlined-text-field use:relay.action={actionProps} {...props}>
    {#if $$slots['leading-icon']}<slot name="leading-icon" />{/if}
    {#if $$slots['trailing-icon']}<slot name="trailing-icon" />{/if}
  </md-outlined-text-field>
{:else}
  <md-filled-text-field use:relay.action={actionProps} {...props}>
    {#if $$slots['leading-icon']}<slot name="leading-icon" />{/if}
    {#if $$slots['trailing-icon']}<slot name="trailing-icon" />{/if}
  </md-filled-text-field>
{/if}
