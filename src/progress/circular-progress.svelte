<script lang="ts">
  import '@material/web/progress/circular-progress.js';
  import Relay from '../internal/relay.js';

  /* Properties
   * ---------------------------------------------------------------------------------- */

  /** Progress to display, a fraction between 0 and `max`. */
  export let value = 0;

  /** Maximum progress to display, defaults to 1. */
  export let max = 1;

  /**
   * Whether or not to display indeterminate progress, which gives no
   * indication to how long an activity will take.
   */
  export let indeterminate = false;

  /**
   * Whether or not to render indeterminate mode using 4 colors instead of
   * one.
   */
  export let fourColor = false;

  export let size: 'small' | 'medium' | 'large' = 'large';

  /* Constants
   * ---------------------------------------------------------------------------------- */

  const relay = new Relay<'md-circular-progress', typeof actionProps>();

  /* Reactive Rules
   * ---------------------------------------------------------------------------------- */

  $: actionProps = { value, max, indeterminate };

  $: props = Relay.props($$props, ['value', 'max', 'indeterminate', 'fourColor', 'size']);

  /* Lifecycle
   * ---------------------------------------------------------------------------------- */

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
