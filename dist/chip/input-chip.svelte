<script>import '@material/web/chips/input-chip.js';
import Relay from '../internal/relay.js';
export let avatar = false;
export let href = '';
export let target = '';
export let removeOnly = false;
export let selected = false;
export let disabled = false;
export let alwaysFocusable = false;
export let label = '';
const relay = new Relay();
$: actionProps = { disabled, label, selected };
$: props = Relay.props($$props, ['disabled', 'avatar', 'href', 'target', 'removeOnly', 'selected', 'label']);
relay.on('click', (event) => {
    setTimeout(() => (selected = event.target.selected), 0);
});
relay.init = (node) => {
    node.avatar = avatar;
    node.href = href;
    node.target = target;
    node.removeOnly = removeOnly;
    node.alwaysFocusable = alwaysFocusable;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
    if (props.label)
        node.label = props.label;
};
</script>

<md-input-chip use:relay.action={actionProps} {...props}>
  {#if $$slots.icon}<slot name="icon" />{/if}
</md-input-chip>
