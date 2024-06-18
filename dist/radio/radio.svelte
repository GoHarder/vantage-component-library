<script>import '@material/web/radio/radio.js';
import Relay from '../internal/relay.js';
export let disabled = false;
export let value = 'on';
export let checked = false;
export let name = undefined;
const relay = new Relay();
$: actionProps = { disabled, checked };
$: props = Relay.props($$props, ['disabled', 'checked', 'value', 'name']);
relay.on('change', (event) => {
    checked = event.target.checked;
});
relay.init = (node) => {
    node.value = value;
    if (name)
        node.name = name;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.checked = props.checked;
};
</script>

<md-radio use:relay.action={actionProps} {...props} />
