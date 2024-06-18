<script>import '@material/web/select/select-option.js';
import Relay from '../internal/relay.js';
export let disabled = false;
export let selected = false;
export let value = '';
const relay = new Relay();
$: actionProps = { disabled, selected };
$: props = Relay.props($$props, ['disabled', 'selected', 'value']);
relay.init = (node) => {
    if (value)
        node.value = value;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
};
</script>

<md-select-option use:relay.action={actionProps} {...props}>
  <slot />
  {#if $$slots.end}
    <slot name="end" />
  {/if}
  {#if $$slots.headline}
    <slot name="headline" />
  {/if}
  {#if $$slots.overline}
    <slot name="overline" />
  {/if}
  {#if $$slots.start}
    <slot name="start" />
  {/if}
  {#if $$slots['supporting-text']}
    <slot name="supporting-text" />
  {/if}
  {#if $$slots['trailing-supporting-text']}
    <slot name="trailing-supporting-text" />
  {/if}
</md-select-option>
