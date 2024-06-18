<script>import '@material/web/progress/linear-progress.js';
import Relay from '../internal/relay.js';
export let buffer = 1;
export let value = 0;
export let max = 1;
export let fourColor = false;
export let indeterminate = false;
export let visible = false;
const relay = new Relay();
$: actionProps = { buffer, value, max, indeterminate };
$: props = Relay.props($$props, ['value', 'indeterminate', 'fourColor', 'visible', 'buffer', 'max', 'visible']);
relay.init = (node) => {
    node.fourColor = fourColor;
};
relay.update = (node, props) => {
    node.buffer = props.buffer;
    node.value = props.value;
    node.max = props.max;
    node.indeterminate = props.indeterminate;
};
</script>

<md-linear-progress use:relay.action={actionProps} {...props} class:hidden={!visible} />

<style>
  .hidden {
    opacity: 0;
  }
</style>
