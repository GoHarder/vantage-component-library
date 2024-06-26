<script lang="ts">
  import '@material/web/progress/linear-progress.js';
  import Relay from '../internal/relay.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Buffer amount to display, a fraction between 0 and `max`. */
  export let buffer = 1;

  /** Progress to display, a fraction between 0 and `max`. */
  export let value = 0;

  /** Maximum progress to display, defaults to 1. */
  export let max = 1;

  /**
   * Whether or not to render indeterminate mode using 4 colors instead
   * of one.
   */
  export let fourColor = false;

  /**
   * Whether or not to display indeterminate progress, which gives no
   * indication to how long an activity will take.
   */
  export let indeterminate = false;

  export let visible = false;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-linear-progress', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { buffer, value, max, indeterminate };

  $: props = Relay.props($$props, ['value', 'indeterminate', 'fourColor', 'visible', 'buffer', 'max', 'visible']);

  // MARK: Lifecycle
  // ------------------------------------------------

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
