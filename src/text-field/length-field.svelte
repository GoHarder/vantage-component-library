<script lang="ts" context="module">
  let context = false;
  let style: Lib.StyleContext['textInput'] | undefined = undefined;
</script>

<script lang="ts">
  import '../internal/text-field/filled-length-field.js';
  import '../internal/text-field/outlined-length-field.js';
  import { getContext } from 'svelte';
  import { round } from '@vantage-js/math';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  type MdComp = 'md-outlined-length-field' | 'md-filled-length-field';

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
  // export let type: keyof typeof types = 'number';

  /**
   * Describes what, if any, type of autocomplete functionality the input should provide.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
   */
  export let autocomplete = 'on';

  export let name = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<MdComp, typeof actionProps>();

  // MARK: Contexts
  // ------------------------------------------------

  if (!context) {
    style = getContext<Lib.StyleContext>('style')?.textInput;
    context = true;
  }

  if (style?.variant) {
    outlined = style.variant === 'outlined';
  }

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, error, errorText, label, value, supportingText };

  $: props = Relay.props($$props, ['metric', 'disabled', 'error', 'errorText', 'label', 'value', 'supportingText']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', (event) => {
    value = event.target.valueAsNumber;
  });

  // MARK: Lifecycle
  // ------------------------------------------------
  relay.init = (node) => {
    node.required = required;
    node.prefixText = prefixText;
    node.inputMode = 'decimal';
    // node.max = max;
    // node.min = min;
    // node.placeholder = placeholder;
    node.readOnly = readOnly;
    // node.multiple = multiple;
    node.step = step;
    node.type = 'number';
    node.autocomplete = autocomplete;
    if (name) node.name = name;
    node.value = '';
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.error = props.error;
    node.errorText = props.errorText;
    node.label = props.label;
    // node.supportingText = metricValue || props.supportingText;
    if (props.value !== undefined) node.value = `${props.value}`;
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
