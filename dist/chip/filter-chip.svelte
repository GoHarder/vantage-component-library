<script>import '@material/web/chips/filter-chip.js';
import Relay from '../internal/relay.js';
export let elevated = false;
export let removable = false;
export let selected = false;
export let disabled = false;
export let alwaysFocusable = false;
export let label = '';
const relay = new Relay();
$: actionProps = { disabled, label, selected };
$: props = Relay.props($$props, ['disabled', 'elevated', 'removable', 'selected', 'label']);
relay.on('click', (event) => {
    setTimeout(() => (selected = event.target.selected), 0);
});
relay.init = (node) => {
    node.elevated = elevated;
    node.removable = removable;
    node.alwaysFocusable = alwaysFocusable;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
    if (props.label)
        node.label = props.label;
};
</script>

<md-filter-chip use:relay.action={actionProps} {...props}>
  {#if $$slots.icon}<slot name="icon" />{/if}
</md-filter-chip>
