<script lang="ts" context="module">
  let context = false;
  let style: SvelteContext['style']['numberInput'] = undefined;
</script>

<script lang="ts">
  import '../internal/text-field/filled-number-field.js';
  import '../internal/text-field/outlined-number-field.js';
  import { getContext } from 'svelte';
  import { round } from '@vantage-js/math';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { SvelteContext } from '../main.js';
  type MdComp = 'md-outlined-number-field' | 'md-filled-number-field';

  // MARK: Properties
  // ------------------------------------------------

  export let metric = false;

  export let outlined = false;

  export let disabled = false;

  /**
   * Gets or sets whether or not the text field is in a visually invalid state.
   * This error state overrides the error state controlled by `reportValidity()`.
   */
  export let error = false;

  /**
   * The error message that replaces supporting text when `error` is true.
   * If `errorText` is an empty string, then the supporting text will continue to show.
   * This error message overrides the error message displayed by `reportValidity()`.
   */
  export let errorText = '';

  export let label = '';

  export let required = false;

  /** The current value of the text field. It is always a string. */
  export let value: number | undefined = undefined;

  /** Disables the asterisk on the floating label, when the text field is required. */
  export let noAsterisk = false;

  /** An optional prefix to display before the input value. */
  export let prefixText = '';

  /** An optional suffix to display after the input value. */
  export let suffixText = '';

  /**
   * Conveys additional information below the text field, such as how it should be used.
   */
  export let supportingText = '';

  /**
   * Defines the greatest value in the range of permitted values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max)
   */
  export let max = '';

  /**
   * Defines the most negative value in the range of permitted values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min)
   */
  export let min = '';

  export let placeholder = '';

  /**
   * Indicates whether or not a user should be able to edit the text field's value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly)
   */
  export let readOnly = false;

  /**
   * Indicates that input accepts multiple email addresses.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple)
   */
  export let multiple = false;

  /**
   * Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step)
   */
  export let step = '';

  /**
   * The `<input>` type to use.
   * The type greatly changes how the text field behaves.
   *
   * Text fields support a limited number of `<input>` types:
   * - text
   * - textarea
   * - email
   * - password
   * - search
   * - tel
   * - url
   *
   * See the MDN reference for more details on each input type.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
   */
  export let type: keyof typeof types = 'number';

  /**
   * Describes what, if any, type of autocomplete functionality the input should provide.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
   */
  export let autocomplete = 'on';

  export let name = undefined;

  /** When true, hide the spinner for `type="number"` text fields. */
  export let noSpinner = false;

  // MARK:  Methods
  // ------------------------------------------------

  function pass(num: number) {
    return num;
  }

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<MdComp, typeof actionProps>();

  const types = {
    angle: { iUnit: '°', toMetric: () => '', toValue: pass, toComp: pass },
    area: {
      iUnit: 'ft²',
      toMetric: (x: number) => `${round(x * 6.4516e-4, 0.0001)} m²`,
      toValue: (x: number) => round(x * 144, 0.000001),
      toComp: (x: number) => round(x / 144, 0.01),
    },
    number: { iUnit: suffixText, toMetric: () => '', toValue: pass, toComp: pass },
    percent: { iUnit: '%', toMetric: () => '', toValue: (x: number) => round(x / 100, 0.001), toComp: (x: number) => x * 100 },
    pressure: {
      iUnit: 'lb/ft²',
      toMetric: (x: number) => `${round(x * 4.88242764, 0.0001)} kg/m²`,
      toValue: (x: number) => round(x / 144, 0.000001),
      toComp: (x: number) => round(x * 144, 0.01),
    },
    speed: { iUnit: 'ft/min', toMetric: (x: number) => `${round(x * 5.08e-3, 0.0001)} m/sec`, toValue: pass, toComp: pass },
    torque: {
      iUnit: 'lb/ft',
      toMetric: (x: number) => `${round(x * 1.48816, 0.0001)} kg/m`,
      toValue: (x: number) => round(x / 12, 0.0001),
      toComp: (x: number) => round(x * 12, 0.0001),
    },
    weight: { iUnit: 'lb', toMetric: (x: number) => `${round(x * 0.453592, 0.1)} kg`, toValue: pass, toComp: pass },
  };

  const { iUnit, toMetric, toComp, toValue } = types[type] || types.number;

  // MARK: Contexts
  // ------------------------------------------------

  if (!context) {
    style = getContext<SvelteContext['style']>('style')?.numberInput;
    context = true;
  }

  if (context) {
    if (style?.variant !== undefined) outlined = style.variant === 'outlined';
    noAsterisk = style?.noAsterisk ?? noAsterisk;
    noSpinner = style?.noSpinner ?? noSpinner;
  }

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, error, errorText, label, value, supportingText };

  $: props = Relay.props($$props, ['metric', 'disabled', 'error', 'errorText', 'label', 'value', 'supportingText']);

  $: metricValue = metric && value ? toMetric(value) : '';

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', (event) => {
    value = toValue(event.target.valueAsNumber);
  });

  // MARK: Lifecycle
  // ------------------------------------------------

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
    node.noAsterisk = noAsterisk;
    node.noSpinner = noSpinner;
    if (name) node.name = name;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.error = props.error;
    node.errorText = props.errorText;
    node.label = props.label;
    node.supportingText = metricValue || props.supportingText;
    if (props.value !== undefined) node.valueAsNumber = toComp(props.value);
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
