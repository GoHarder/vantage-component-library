<script>import "@material/web/iconbutton/filled-icon-button.js";
import "@material/web/iconbutton/filled-tonal-icon-button.js";
import "@material/web/iconbutton/icon-button.js";
import "@material/web/iconbutton/outlined-icon-button.js";
import Relay from "../internal/relay.js";
export let variant = "";
export let disabled = false;
export let href = "";
export let target = "";
export let toggle = false;
export let selected = false;
export let type = "submit";
export let value = "";
export let name = void 0;
const relay = new Relay();
$:
  actionProps = { disabled, selected };
$:
  props = Relay.props($$props, ["variant", "disabled", "href", "target", "toggle", "selected", "type", "value", "name"]);
relay.on("click", (event) => {
  if (toggle)
    selected = event.target.selected;
});
relay.init = (node) => {
  node.toggle = toggle;
  node.type = type;
  if (target)
    node.target = target;
  if (href)
    node.href = href;
  if (value)
    node.value = value;
  if (name)
    node.name = name;
};
relay.update = (node, props2) => {
  node.disabled = props2.disabled;
  node.selected = props2.selected;
};
</script>

{#if variant === 'filled'}
  <md-filled-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-filled-icon-button>
{:else if variant === 'filled-tonal'}
  <md-filled-tonal-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-filled-tonal-icon-button>
{:else if variant === 'outlined'}
  <md-outlined-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-outlined-icon-button>
{:else}
  <md-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-icon-button>
{/if}
