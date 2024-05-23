<script lang="ts">
  import '@material/web/chips/suggestion-chip.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdSuggestionChip } from '@material/web/chips/suggestion-chip.js';

  // Properties
  // ------------------------------------------------

  export let elevated = false;

  export let href = '';

  export let target: MdSuggestionChip['target'] = '';

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

  const relay = new Relay<'md-suggestion-chip', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, label };

  $: props = Relay.props($$props, ['disabled', 'elevated', 'href', 'target', 'alwaysFocusable', 'label']);

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.elevated = elevated;
    node.target = target;
    node.alwaysFocusable = alwaysFocusable;
    if (href) node.href = href;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    if (props.label) node.label = props.label;
  };
</script>

<md-suggestion-chip use:relay.action={actionProps} {...props}>
  {#if $$slots.icon}<slot name="icon" />{/if}
</md-suggestion-chip>
