<script lang="ts">
  import '@material/web/focus/md-focus-ring.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  // MARK: Properties
  // ------------------------------------------------

  /** Makes the focus ring visible. */
  export let visible = false;

  /** Makes the focus ring animate inwards instead of outwards. */
  export let inward = false;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-focus-ring', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { visible };

  $: props = Relay.props($$props, ['visible', 'inward']);

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.inward = inward;
  };

  relay.update = (node, props) => {
    node.visible = props.visible;
  };
</script>

<md-focus-ring use:relay.action={actionProps} {...props} />

<style global>
  @media (prefers-reduced-motion: reduce) {
    md-focus-ring {
      --md-focus-ring-duration: 0s;
    }
  }
</style>
