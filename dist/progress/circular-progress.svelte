<script>import '@material/web/progress/circular-progress.js';
import Relay from '../internal/relay.js';
export let value = 0;
export let max = 1;
export let indeterminate = false;
export let fourColor = false;
export let size = 'large';
const relay = new Relay();
$: actionProps = { value, max, indeterminate };
$: props = Relay.props($$props, ['value', 'max', 'indeterminate', 'fourColor', 'size']);
relay.init = (node) => {
    node.fourColor = fourColor;
};
relay.update = (node, props) => {
    node.value = props.value;
    node.max = props.max;
    node.indeterminate = props.indeterminate;
};
</script>

<md-circular-progress use:relay.action={actionProps} {...props} class:small={size === 'small'} class:medium={size === 'medium'} />

<style>
  .small {
    --md-circular-progress-size: 24px;
    --md-circular-progress-active-indicator-width: 16.6666;
  }

  .medium {
    --md-circular-progress-size: 32px;
    --md-circular-progress-active-indicator-width: 12.5;
  }
</style>
