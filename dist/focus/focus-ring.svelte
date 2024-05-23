<script>import "@material/web/focus/md-focus-ring.js";
import Relay from "../internal/relay.js";
export let visible = false;
export let inward = false;
const relay = new Relay();
$:
  actionProps = { visible };
$:
  props = Relay.props($$props, ["visible", "inward"]);
relay.init = (node) => {
  node.inward = inward;
};
relay.update = (node, props2) => {
  node.visible = props2.visible;
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
