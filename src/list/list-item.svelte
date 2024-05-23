<script lang="ts">
  import '@material/web/list/list-item.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdListItem } from '@material/web/list/list-item.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Disables the item and makes it non-selectable and non-interactive. */
  export let disabled = false;

  /**
   * Sets the behavior of the list item, defaults to "text".
   * Change to "link" or "button" for interactive items.
   */
  export let type: MdListItem['type'] = 'text';

  /** Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. */
  export let href = '';

  /** Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set. */
  export let target: MdListItem['target'] = '';

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-list-item', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled };

  $: props = Relay.props($$props, ['disabled', 'type', 'href', 'target']);

  // MARK: Lifecycle
  // ------------------------------------------------

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
