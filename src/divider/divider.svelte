<script lang="ts">
  import '@material/web/divider/divider.js';
  import Relay from '../internal/relay.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Indents the divider with equal padding on both sides. */
  export let inset = false;

  /** Indents the divider with padding on the leading side. */
  export let insetStart = false;

  /** Indents the divider with padding on the trailing side. */
  export let insetEnd = false;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-divider'>();

  const actionProps = {};

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: props = Relay.props($$props, ['inset', 'insetStart', 'insetEnd']);

  // MARK: Lifecycle
  // ------------------------------------------------
  relay.init = (node) => {
    node.inset = inset;
    node.insetStart = insetStart;
    node.insetEnd = insetEnd;
  };
</script>

<md-divider use:relay.action={actionProps} {...props} />
