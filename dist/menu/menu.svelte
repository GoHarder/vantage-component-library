<script>import "@material/web/menu/menu.js";
import Relay from "../internal/relay.js";
export let anchor = "";
export let positioning = "absolute";
export let quick = false;
export let hasOverflow = false;
export let open = false;
export let xOffset = 0;
export let yOffset = 0;
export let typeaheadDelay = 200;
export let anchorCorner = "end-start";
export let menuCorner = "start-start";
export let stayOpenOnOutsideClick = false;
export let stayOpenOnFocusout = false;
export let skipRestoreFocus = false;
export let defaultFocus = "first-item";
const relay = new Relay();
$:
  actionProps = { open };
$:
  props = Relay.props($$props, [
    "anchor",
    "positioning",
    "quick",
    "hasOverflow",
    "open",
    "xOffset",
    "yOffset",
    "typeaheadDelay",
    "anchorCorner",
    "menuCorner",
    "stayOpenOnOutsideClick",
    "stayOpenOnFocusout",
    "skipRestoreFocus",
    "defaultFocus"
  ]);
relay.on("closed", (event) => {
  open = event.target.open;
});
relay.init = (node) => {
  node.anchor = anchor;
  node.positioning = positioning;
  node.quick = quick;
  node.hasOverflow = hasOverflow;
  node.xOffset = xOffset;
  node.yOffset = yOffset;
  node.typeaheadDelay = typeaheadDelay;
  node.anchorCorner = anchorCorner;
  node.menuCorner = menuCorner;
  node.stayOpenOnOutsideClick = stayOpenOnOutsideClick;
  node.stayOpenOnFocusout = stayOpenOnFocusout;
  node.skipRestoreFocus = skipRestoreFocus;
  node.defaultFocus = defaultFocus;
};
relay.update = (node, props2) => {
  node.open = props2.open;
};
</script>

<md-menu use:relay.action={actionProps} {...props}>
  <slot />
</md-menu>
