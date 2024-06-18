<script>import '@material/web/menu/sub-menu.js';
import Relay from '../internal/relay.js';
export let anchorCorner = 'start-end';
export let menuCorner = 'start-start';
export let hoverOpenDelay = 400;
export let hoverCloseDelay = 400;
const relay = new Relay();
$: props = Relay.props($$props, ['anchorCorner', 'menuCorner', 'hoverOpenDelay', 'hoverCloseDelay']);
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
