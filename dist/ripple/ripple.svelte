<script>import '@material/web/ripple/ripple';
import Relay from '../internal/relay.js';
export let disabled = false;
const relay = new Relay();
$: actionProps = { disabled };
$: props = Relay.props($$props, ['disabled']);
relay.update = (node, props) => {
    node.disabled = props.disabled;
};
</script>

<md-ripple use:relay.action={actionProps} {...props} />
