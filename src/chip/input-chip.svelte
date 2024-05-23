<script lang="ts">
  import '@material/web/chips/input-chip.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdInputChip } from '@material/web/chips/input-chip.js';

  // MARK: Properties
  // ------------------------------------------------

  export let avatar = false;

  export let href = '';

  export let target: MdInputChip['target'] = '';

  export let removeOnly = false;

  export let selected = false;

  /**
   * Whether or not the chip is disabled.
   * Disabled chips are not focusable, unless always-focusable is set.
   */
  export let disabled = false;

  /**
   * When true, allow disabled chips to be focused with arrow keys.
   * Add this when a chip needs increased visibility when disabled.
   * See [W3C](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls) for more guidance on when this is needed.
   */
  export let alwaysFocusable = false;

  /** The label of the chip. */
  export let label = '';

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-input-chip', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, label, selected };

  $: props = Relay.props($$props, ['disabled', 'avatar', 'href', 'target', 'removeOnly', 'selected', 'label']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('click', (event) => {
    setTimeout(() => (selected = event.target.selected), 0);
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.avatar = avatar;
    node.href = href;
    node.target = target;
    node.removeOnly = removeOnly;
    node.alwaysFocusable = alwaysFocusable;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
    if (props.label) node.label = props.label;
  };
</script>

<md-input-chip use:relay.action={actionProps} {...props}>
  {#if $$slots.icon}<slot name="icon" />{/if}
</md-input-chip>
