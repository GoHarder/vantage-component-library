<script>import '@material/web/fab/branded-fab.js';
import '@material/web/fab/fab.js';
import Relay from '../internal/relay.js';
export let branded = false;
export let variant = 'surface';
export let size = 'medium';
export let label = '';
export let lowered = false;
const relay = new Relay();
$: actionProps = { label };
$: props = Relay.props($$props, ['branded', 'variant', 'size', 'label', 'lowered']);
relay.init = (node) => {
    node.variant = variant;
    node.size = size;
    node.lowered = lowered;
};
relay.update = (node, props) => {
    if (props.label)
        node.label = props.label;
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
