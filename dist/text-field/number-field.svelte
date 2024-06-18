<script context="module">"use strict";
let context = false;
let style = undefined;
</script>

<script>import '../internal/text-field/filled-number-field.js';
import '../internal/text-field/outlined-number-field.js';
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
export let type = 'number';
export let autocomplete = 'on';
export let name = undefined;
function pass(num) {
    return num;
}
const relay = new Relay();
const types = {
    angle: { iUnit: '°', toMetric: () => '', toValue: pass, toComp: pass },
    area: {
        iUnit: 'ft²',
        toMetric: (x) => `${round(x * 6.4516e-4, 0.0001)} m²`,
        toValue: (x) => round(x * 144, 0.000001),
        toComp: (x) => round(x / 144, 0.01),
    },
    number: { iUnit: suffixText, toMetric: () => '', toValue: pass, toComp: pass },
    percent: { iUnit: '%', toMetric: () => '', toValue: (x) => round(x / 100, 0.001), toComp: (x) => x * 100 },
    pressure: {
        iUnit: 'lb/ft²',
        toMetric: (x) => `${round(x * 4.88242764, 0.0001)} kg/m²`,
        toValue: (x) => round(x / 144, 0.000001),
        toComp: (x) => round(x * 144, 0.01),
    },
    speed: { iUnit: 'ft/min', toMetric: (x) => `${round(x * 5.08e-3, 0.0001)} m/sec`, toValue: pass, toComp: pass },
    torque: {
        iUnit: 'lb/ft',
        toMetric: (x) => `${round(x * 1.48816, 0.0001)} kg/m`,
        toValue: (x) => round(x / 12, 0.0001),
        toComp: (x) => round(x * 12, 0.0001),
    },
    weight: { iUnit: 'lb', toMetric: (x) => `${round(x * 0.453592, 0.1)} kg`, toValue: pass, toComp: pass },
};
const { iUnit, toMetric, toComp, toValue } = types[type] || types.number;
if (!context) {
    style = getContext('style')?.textInput;
    context = true;
}
if (style?.variant) {
    outlined = style.variant === 'outlined';
}
$: actionProps = { disabled, error, errorText, label, value, supportingText };
$: props = Relay.props($$props, ['metric', 'disabled', 'error', 'errorText', 'label', 'value', 'supportingText']);
$: metricValue = metric && value ? toMetric(value) : '';
relay.on('change', (event) => {
    value = toValue(event.target.valueAsNumber);
});
relay.init = (node) => {
    node.required = required;
    node.prefixText = prefixText;
    node.suffixText = iUnit || suffixText;
    node.inputMode = 'decimal';
    node.max = max;
    node.min = min;
    node.placeholder = placeholder;
    node.readOnly = readOnly;
    node.multiple = multiple;
    node.step = step;
    node.type = 'number';
    node.autocomplete = autocomplete;
    if (name)
        node.name = name;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.error = props.error;
    node.errorText = props.errorText;
    node.label = props.label;
    node.supportingText = metricValue || props.supportingText;
    if (props.value !== undefined)
        node.valueAsNumber = toComp(props.value);
};
</script>

{#if outlined}
  <md-outlined-number-field no-spinner use:relay.action={actionProps} {...props}>
    {#if $$slots['leading-icon']}<slot name="leading-icon" />{/if}
    {#if $$slots['trailing-icon']}<slot name="trailing-icon" />{/if}
  </md-outlined-number-field>
{:else}
  <md-filled-number-field no-spinner use:relay.action={actionProps} {...props}>
    {#if $$slots['leading-icon']}<slot name="leading-icon" />{/if}
    {#if $$slots['trailing-icon']}<slot name="trailing-icon" />{/if}
  </md-filled-number-field>
{/if}
