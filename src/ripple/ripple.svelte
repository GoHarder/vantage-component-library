<script lang="ts">
  import '@material/web/ripple/ripple';
  import Relay from '../internal/relay.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Disables the ripple. */
  export let disabled = false;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-ripple', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled };

  $: props = Relay.props($$props, ['disabled']);

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.update = (node, props) => {
    node.disabled = props.disabled;
  };
</script>

<md-ripple use:relay.action={actionProps} {...props} />
