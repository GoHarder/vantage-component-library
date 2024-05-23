<script lang="ts">
  import '@material/web/menu/menu-item.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdMenuItem } from '@material/web/menu/menu-item.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Disables the item and makes it non-selectable and non-interactive. */
  export let disabled = false;

  /** Sets the behavior and role of the menu item, defaults to "menuitem". */
  export let type: MdMenuItem['type'] = 'menuitem';

  /** Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. */
  export let href = '';

  /** Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set. */
  export let target: MdMenuItem['target'] = '';

  /** Keeps the menu open if clicked or keyboard selected. */
  export let keepOpen = false;

  /** Sets the item in the selected visual state when a submenu is opened. */
  export let selected = false;

  export let typeaheadText: string | undefined = undefined;

  // Constants

  const relay = new Relay<'md-menu-item', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, selected };

  $: props = Relay.props($$props, ['disabled', 'href', 'target', 'keepOpen', 'selected', 'type', 'typeaheadText']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('closed', (event) => {
    selected = event.target.selected;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.href = href;
    node.target = target;
    node.keepOpen = keepOpen;
    node.type = type;
    if (typeaheadText) node.typeaheadText = typeaheadText;
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
