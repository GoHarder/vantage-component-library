<script>import "@material/web/radio/radio.js";
import Relay from "../internal/relay.js";
export let disabled = false;
export let value = "on";
export let checked = false;
export let name = void 0;
const relay = new Relay();
$:
  actionProps = { disabled, checked };
$:
  props = Relay.props($$props, ["disabled", "checked", "value", "name"]);
relay.on("change", (event) => {
  checked = event.target.checked;
});
relay.init = (node) => {
  node.value = value;
  if (name)
    node.name = name;
};
relay.update = (node, props2) => {
  node.disabled = props2.disabled;
  node.checked = props2.checked;
};
</script>

<md-radio use:relay.action={actionProps} {...props} />
