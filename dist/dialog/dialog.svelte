<script context="module">"use strict";
let context = false;
let reducedMotion;
</script>

<script>import '@material/web/dialog/dialog.js';
import { getContext } from 'svelte';
import Relay from '../internal/relay.js';
export let quick = false;
export let type = undefined;
export let noFocusTrap = false;
export let open = undefined;
const relay = new Relay();
if (!context)
    reducedMotion = getContext('reducedMotion');
if (reducedMotion)
    quick = true;
$: actionProps = { open };
$: props = Relay.props($$props, ['open', 'returnValue', 'type', 'noFocusTrap', 'quick']);
relay.on('closed', (event) => {
    open = event.target.open;
});
relay.init = (node) => {
    node.quick = quick;
    node.noFocusTrap = noFocusTrap;
    if (type)
        node.type = type;
};
relay.update = (node, props) => {
    if (props.open !== undefined)
        node.open = props.open;
};
</script>

<md-dialog use:relay.action={actionProps} {...props}>
  {#if $$slots.headline}<slot name="headline" />{/if}
  {#if $$slots.content}<slot name="content" />{/if}
  {#if $$slots.actions}<slot name="actions" />{/if}
</md-dialog>
