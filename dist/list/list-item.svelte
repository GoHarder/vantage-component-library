<script>import '@material/web/list/list-item.js';
import Relay from '../internal/relay.js';
export let disabled = false;
export let type = 'text';
export let href = '';
export let target = '';
const relay = new Relay();
$: actionProps = { disabled };
$: props = Relay.props($$props, ['disabled', 'type', 'href', 'target']);
relay.init = (node) => {
    node.href = href;
    node.target = target;
    node.type = type;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
};
</script>

<md-list-item use:relay.action={actionProps} {...props}>
  <slot />
  {#if $$slots.start}<slot name="start" />{/if}
  {#if $$slots.end}<slot name="end" />{/if}
  {#if $$slots['start-image']}<slot name="start-image" />{/if}
  {#if $$slots.overline}<slot name="overline" />{/if}
  {#if $$slots.headline}<slot name="headline" />{/if}
  {#if $$slots['supporting-text']}<slot name="supporting-text" />{/if}
  {#if $$slots['trailing-supporting-text']}<slot name="trailing-supporting-text" />{/if}
</md-list-item>
