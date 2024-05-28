<script lang="ts">
  import '@material/web/tabs/primary-tab.js';
  import '@material/web/tabs/secondary-tab.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  type MdComp = 'md-primary-tab' | 'md-secondary-tab';

  // MARK: Properties
  // ------------------------------------------------

  export let secondary = false;

  /** Whether or not the icon renders inline with label or stacked vertically. */
  export let inlineIcon = false;

  /** Whether or not the tab is selected. */
  export let active = false;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<MdComp>();

  const actionProps = {};

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: props = Relay.props($$props, ['secondary', 'inlineIcon', 'active']);

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    if ('inlineIcon' in node) node.inlineIcon = inlineIcon;
    node.active = active;
  };
</script>

{#if !secondary}
  <md-primary-tab use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}<slot name="icon" />{/if}
  </md-primary-tab>
{:else}
  <md-secondary-tab use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}<slot name="icon" />{/if}
  </md-secondary-tab>
{/if}
