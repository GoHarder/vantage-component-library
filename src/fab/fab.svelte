<script lang="ts">
  import '@material/web/fab/branded-fab.js';
  import '@material/web/fab/fab.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdFab } from '@material/web/fab/fab.js';
  import type { MdEvent } from '../internal/relay.js';

  type MdComp = 'md-branded-fab' | 'md-fab';
  type Variant = 'surface' | 'primary' | 'secondary' | 'tertiary';

  interface $$Events {
    click: MdEvent<'click', MdComp>;
  }

  // MARK: Properties
  // ------------------------------------------------

  export let branded = false;

  /** The FAB color variant to render. */
  export let variant: Variant = 'surface';

  /**
   * The size of the FAB.
   *
   * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes.
   */
  export let size: MdFab['size'] = 'medium';

  /** The text to display on the FAB. */
  export let label = '';

  /** Lowers the FAB's elevation. */
  export let lowered = false;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<MdComp, typeof actionProps>();

  // Reactive Rules
  // ------------------------------------------------

  $: actionProps = { label };

  $: props = Relay.props($$props, ['branded', 'variant', 'size', 'label', 'lowered']);

  // Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.variant = variant;
    node.size = size;
    node.lowered = lowered;
  };

  relay.update = (node, props) => {
    if (props.label) node.label = props.label;
  };
</script>

{#if branded}
  <md-branded-fab use:relay.action={actionProps} {...props}>
    {#if $$slots.icon}<slot name="icon" />{/if}
  </md-branded-fab>
{:else}
  <md-fab use:relay.action={actionProps} {...props}>
    {#if $$slots.icon}<slot name="icon" />{/if}
  </md-fab>
{/if}
