<script>import "@material/web/divider/divider.js";
import Relay from "../internal/relay.js";
export let inset = false;
export let insetStart = false;
export let insetEnd = false;
const relay = new Relay();
const actionProps = {};
$:
  props = Relay.props($$props, ["inset", "insetStart", "insetEnd"]);
relay.init = (node) => {
  node.inset = inset;
  node.insetStart = insetStart;
  node.insetEnd = insetEnd;
};
</script>

<md-divider use:relay.action={actionProps} {...props} />
