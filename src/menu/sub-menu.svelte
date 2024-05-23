<script lang="ts">
  // Components
  import '@material/web/menu/sub-menu.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdSubMenu } from '@material/web/menu/sub-menu.js';

  // MARK: Properties
  // ------------------------------------------------

  /** The anchorCorner to set on the submenu. */
  export let anchorCorner: MdSubMenu['anchorCorner'] = 'start-end';

  /** The menuCorner to set on the submenu. */
  export let menuCorner: MdSubMenu['menuCorner'] = 'start-start';

  /** The delay between mouseenter and submenu opening. */
  export let hoverOpenDelay = 400;

  /** The delay between pointerleave and the submenu closing. */
  export let hoverCloseDelay = 400;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-sub-menu'>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: props = Relay.props($$props, ['anchorCorner', 'menuCorner', 'hoverOpenDelay', 'hoverCloseDelay']);

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.anchorCorner = anchorCorner;
    node.menuCorner = menuCorner;
    node.hoverOpenDelay = hoverOpenDelay;
    node.hoverCloseDelay = hoverCloseDelay;
  };
</script>

<md-sub-menu use:relay.action={{}} {...props}>
  {#if $$slots.item}<slot name="item" />{/if}
  {#if $$slots.menu}<slot name="menu" />{/if}
</md-sub-menu>
