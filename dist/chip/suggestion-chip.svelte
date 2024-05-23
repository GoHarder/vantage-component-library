<script>import "@material/web/chips/suggestion-chip.js";
import Relay from "../internal/relay.js";
export let elevated = false;
export let href = "";
export let target = "";
export let disabled = false;
export let alwaysFocusable = false;
export let label = "";
const relay = new Relay();
$:
  actionProps = { disabled, label };
$:
  props = Relay.props($$props, ["disabled", "elevated", "href", "target", "alwaysFocusable", "label"]);
relay.init = (node) => {
  node.elevated = elevated;
  node.target = target;
  node.alwaysFocusable = alwaysFocusable;
  if (href)
    node.href = href;
};
relay.update = (node, props2) => {
  node.disabled = props2.disabled;
  if (props2.label)
    node.label = props2.label;
};
</script>

<md-suggestion-chip use:relay.action={actionProps} {...props}>
  {#if $$slots.icon}<slot name="icon" />{/if}
</md-suggestion-chip>
