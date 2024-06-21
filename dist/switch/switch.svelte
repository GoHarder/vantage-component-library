<script context="module">"use strict";
let context = false;
let settings = undefined;
</script>

<script>import '@material/web/switch/switch.js';
import { getContext } from 'svelte';
import Relay from '../internal/relay.js';
export let disabled = false;
export let selected = false;
export let icons = false;
export let showOnlySelectedIcon = false;
export let required = false;
export let value = 'on';
const relay = new Relay();
if (!context) {
    settings = getContext('style')?.switch;
    context = true;
}
if (settings !== undefined) {
    icons = settings?.icons ?? icons;
    showOnlySelectedIcon = settings?.showOnlySelectedIcon ?? showOnlySelectedIcon;
}
$: actionProps = { disabled, selected };
$: props = Relay.props($$props, ['icons', 'showOnlySelectedIcon', 'required', 'disabled', 'selected', 'value']);
relay.on('change', (event) => {
    selected = event.target.selected;
});
relay.init = (node) => {
    node.showOnlySelectedIcon = showOnlySelectedIcon;
    node.required = required;
    node.value = value;
};
relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
};
</script>

<md-switch use:relay.action={actionProps} {...props} />
