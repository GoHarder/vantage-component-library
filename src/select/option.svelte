<script lang="ts">
  import '@material/web/select/select-option.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  // MARK: Properties
  // ------------------------------------------------

  /** Disables the item and makes it non-selectable and non-interactive. */
  export let disabled = false;

  /** Sets the item in the selected visual state when a submenu is opened. */
  export let selected = false;

  /** Form value of the option. */
  export let value = '';

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-select-option', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, selected };

  $: props = Relay.props($$props, ['disabled', 'selected', 'value']);

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    if (value) node.value = value;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
  };
</script>

<md-select-option use:relay.action={actionProps} {...props}>
  <slot />
  {#if $$slots.end}
    <slot name="end" />
  {/if}
  {#if $$slots.headline}
    <slot name="headline" />
  {/if}
  {#if $$slots.overline}
    <slot name="overline" />
  {/if}
  {#if $$slots.start}
    <slot name="start" />
  {/if}
  {#if $$slots['supporting-text']}
    <slot name="supporting-text" />
  {/if}
  {#if $$slots['trailing-supporting-text']}
    <slot name="trailing-supporting-text" />
  {/if}
</md-select-option>
