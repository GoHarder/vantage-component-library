<script lang="ts" context="module">
  let context = false;
  let style: SvelteContext['style']['textInput'] | undefined = undefined;
</script>

<script lang="ts">
  import '@material/web/textfield/filled-text-field.js';
  import '@material/web/textfield/outlined-text-field.js';
  import { getContext } from 'svelte';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { TextField } from '@material/web/textfield/internal/text-field.js';
  import type { SvelteContext } from '../main.js';

  type MdComp = 'md-outlined-text-field' | 'md-filled-text-field';

  // MARK: Properties
  // ------------------------------------------------

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
  export let value = '';

  /** An optional prefix to display before the input value. */
  export let prefixText = '';

  /** An optional suffix to display after the input value. */
  export let suffixText = '';

  /**
   * Conveys additional information below the text field, such as how it should be used.
   */
  export let supportingText = '';

  /** The number of rows to display for a `type="textarea"` text field. */
  export let rows = 2;

  /** The number of cols to display for a `type="textarea"` text field. */
  export let cols = 20;

  export let inputMode = '';

  /**
   * Defines the greatest value in the range of permitted values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max)
   */
  export let max = '';

  /**
   * The maximum number of characters a user can enter into the text field.
   * Set to -1 for none.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength)
   */
  export let maxLength = -1;

  /**
   * Defines the most negative value in the range of permitted values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min)
   */
  export let min = '';

  /**
   * The minimum number of characters a user can enter into the text field.
   * Set to -1 for none.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength)
   */
  export let minLength = -1;

  /**
   * A regular expression that the text field's value must match to pass constraint validation.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern)
   */
  export let pattern = '';

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
  export let type: TextField['type'] = 'text';

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
    style = getContext<SvelteContext['style']>('context')?.textInput;
    context = true;
  }

  if (style?.variant) {
    outlined = style.variant === 'outlined';
  }

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, error, errorText, label, value, supportingText };

  $: props = Relay.props($$props, ['disabled', 'error', 'errorText', 'label', 'value', 'supportingText']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('input', (event) => {
    const invalidTargetTypes = ['submit', 'reset', 'button'];

    if (invalidTargetTypes.includes(event.target.type)) return;

    value = event.target.value;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

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
    if (name) node.name = name;
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
