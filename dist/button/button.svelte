<script>import "@material/web/button/elevated-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/text-button.js";
import Relay from "../internal/relay.js";
export let variant = "elevated";
export let disabled = false;
export let href = "";
export let target = "";
export let trailingIcon = false;
export let type = "submit";
export let value = "";
export let name = void 0;
const relay = new Relay();
$:
  actionProps = { disabled };
$:
  props = Relay.props($$props, ["variant", "disabled", "href", "target", "trailingIcon", "type", "value", "name"]);
relay.init = (node) => {
  node.href = href;
  node.target = target;
  node.trailingIcon = trailingIcon;
  node.type = type;
  node.value = value;
  if (name)
    node.name = name;
};
relay.update = (node, props2) => {
  node.disabled = props2.disabled;
};
</script>

{#if variant === 'elevated'}
  <md-elevated-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-elevated-button>
{:else if variant === 'filled'}
  <md-filled-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-filled-button>
{:else if variant === 'filled-tonal'}
  <md-filled-tonal-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-filled-tonal-button>
{:else if variant === 'outlined'}
  <md-outlined-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-outlined-button>
{:else if variant === 'text'}
  <md-text-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-text-button>
{/if}
