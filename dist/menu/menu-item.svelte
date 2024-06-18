<script>import '@material/web/menu/menu-item.js';
import Relay from '../internal/relay.js';
export let disabled = false;
export let type = 'menuitem';
export let href = '';
export let target = '';
export let keepOpen = false;
export let selected = false;
export let typeaheadText = undefined;
const relay = new Relay();
$: actionProps = { disabled, selected };
$: props = Relay.props($$props, ['disabled', 'href', 'target', 'keepOpen', 'selected', 'type', 'typeaheadText']);
relay.on('closed', (event) => {
    selected = event.target.selected;
});
relay.init = (node) => {
    node.href = href;
    node.target = target;
    node.keepOpen = keepOpen;
    node.type = type;
    if (typeaheadText)
        node.typeaheadText = typeaheadText;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
};
</script>

<md-menu-item use:relay.action={actionProps} {...props}>
  {#if $$slots.start}<slot name="start" />{/if}
  {#if $$slots.headline}<slot name="headline" />{/if}
  {#if $$slots.end}<slot name="end" />{/if}
</md-menu-item>
