<script>import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';
import Relay from '../internal/relay.js';
export let secondary = false;
export let inlineIcon = false;
export let active = false;
const relay = new Relay();
const actionProps = {};
$: props = Relay.props($$props, ['secondary', 'inlineIcon', 'active']);
relay.init = (node) => {
    if ('inlineIcon' in node)
        node.inlineIcon = inlineIcon;
    node.active = active;
};
</script>

{#if !secondary}
  <md-primary-tab use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}<slot name="icon" />{/if}
  </md-primary-tab>
{:else}
  <md-secondary-tab use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}<slot name="icon" />{/if}
  </md-secondary-tab>
{/if}
