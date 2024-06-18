<script>import '@material/web/checkbox/checkbox.js';
import Relay from '../internal/relay.js';
export let checked = false;
export let disabled = false;
export let indeterminate = false;
export let required = false;
export let value = 'on';
export let name = undefined;
const relay = new Relay();
const props = Relay.props($$props, ['checked', 'disabled', 'indeterminate', 'required', 'value', 'name']);
$: actionProps = { checked, disabled };
relay.on('change', (event) => {
    checked = event.target.checked;
    indeterminate = false;
});
relay.init = (node) => {
    node.indeterminate = indeterminate;
    node.required = required;
    node.value = value;
    if (name)
        node.name = name;
};
relay.update = (node, props) => {
    node.checked = props.checked;
    node.disabled = props.disabled;
};
</script>

<md-checkbox use:relay.action={actionProps} {...props} />
