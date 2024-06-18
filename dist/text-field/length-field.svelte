<script context="module">"use strict";
let context = false;
let style = undefined;
</script>

<script>import '../internal/text-field/filled-length-field.js';
import '../internal/text-field/outlined-length-field.js';
import { getContext } from 'svelte';
import { round } from '@vantage-js/math';
import Relay from '../internal/relay.js';
export let metric = false;
export let outlined = false;
export let disabled = false;
export let error = false;
export let errorText = '';
export let label = '';
export let required = false;
export let value = undefined;
export let prefixText = '';
export let suffixText = '';
export let supportingText = '';
export let max = '';
export let min = '';
export let placeholder = '';
export let readOnly = false;
export let multiple = false;
export let step = '';
export let autocomplete = 'on';
export let name = undefined;
const relay = new Relay();
if (!context) {
    style = getContext('style')?.textInput;
    context = true;
}
if (style?.variant) {
    outlined = style.variant === 'outlined';
}
$: actionProps = { disabled, error, errorText, label, value, supportingText };
$: props = Relay.props($$props, ['metric', 'disabled', 'error', 'errorText', 'label', 'value', 'supportingText']);
relay.on('change', (event) => {
    value = event.target.valueAsNumber;
});
relay.init = (node) => {
    node.required = required;
    node.prefixText = prefixText;
    node.inputMode = 'decimal';
    node.readOnly = readOnly;
    node.step = step;
    node.type = 'number';
    node.autocomplete = autocomplete;
    if (name)
        node.name = name;
    node.value = '';
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.error = props.error;
    node.errorText = props.errorText;
    node.label = props.label;
    if (props.value !== undefined)
        node.value = `${props.value}`;
};
</script>

{#if outlined}
  <md-outlined-length-field no-spinner use:relay.action={actionProps} {...props}>
    {#if $$slots['leading-icon']}<slot name="leading-icon" />{/if}
    {#if $$slots['trailing-icon']}<slot name="trailing-icon" />{/if}
  </md-outlined-length-field>
{:else}
  <md-filled-length-field no-spinner use:relay.action={actionProps} {...props}>
    {#if $$slots['leading-icon']}<slot name="leading-icon" />{/if}
    {#if $$slots['trailing-icon']}<slot name="trailing-icon" />{/if}
  </md-filled-length-field>
{/if}
