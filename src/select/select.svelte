<script lang="ts" context="module">
  let context = false;
  let reducedMotion: boolean | undefined = undefined;
  let style: Lib.StyleContext['select'] | undefined = undefined;
</script>

<script lang="ts">
  import '@material/web/select/filled-select.js';
  import '@material/web/select/outlined-select.js';
  import { getContext } from 'svelte';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { Select } from '@material/web/select/internal/select.js';
  type MdComp = 'md-outlined-select' | 'md-filled-select';

  // MARK: Properties
  // ------------------------------------------------

  export let outlined = false;

  /** Opens the menu synchronously with no animation. */
  export let quick = false;

  /** Whether or not the select is required. */
  export let required = false;

  /** Disables the select. */
  export let disabled = false;

  /**
   * The error message that replaces supporting text when `error` is true.
   * If `errorText` is an empty string, then the supporting text will continue to show.
   * This error message overrides the error message displayed by `reportValidity()`.
   */
  export let errorText = '';

  /** The floating label for the field. */
  export let label = '';

  /** Conveys additional information below the select, such as how it should be used. */
  export let supportingText = '';

  /**
   * Gets or sets whether or not the select is in a visually invalid state.
   * This error state overrides the error state controlled by `reportValidity()`.
   */
  export let error = false;

  /**
   * Whether or not the underlying md-menu should be position:fixed to display in a top-level manner, or position:absolute.
   * position:fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`.
   */
  export let menuPositioning: Select['menuPositioning'] = 'absolute';

  /**
   * The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.
   */
  export let typeaheadDelay = 200;

  export let value: string | undefined = undefined;

  export let selectedIndex: number | undefined = undefined;

  export let name: string | undefined = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<MdComp, typeof actionProps>();

  // MARK: Contexts
  // ------------------------------------------------

  if (!context) {
    style = getContext<Lib.StyleContext>('style')?.select;
    reducedMotion = getContext('reducedMotion');
    context = true;
  }

  if (reducedMotion) quick = true;

  if (style !== undefined) {
    outlined = style.variant === 'outlined';
  }

  // MARK: Reactive Rules
  // ------------------------------------------------

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

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', async (event) => {
    await event.target.getUpdateComplete();
    value = event.target.value;
    selectedIndex = event.target.selectedIndex;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.quick = quick;
    node.required = required;
    node.menuPositioning = menuPositioning;
    node.typeaheadDelay = typeaheadDelay;
    if (name) node.name = name;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.errorText = props.errorText;
    node.label = props.label;
    node.supportingText = props.supportingText;
    node.error = props.error;
    if (props.value) node.value = props.value;
    if (props.selectedIndex) node.selectedIndex = props.selectedIndex;
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
