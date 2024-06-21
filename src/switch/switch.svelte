<script lang="ts" context="module">
  let context = false;
  let settings: SvelteContext['style']['switch'] = undefined;
</script>

<script lang="ts">
  import '@material/web/switch/switch.js';
  import { getContext } from 'svelte';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { SvelteContext } from '../main.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Disables the switch and makes it non-interactive. */
  export let disabled = false;

  /**
   * Puts the switch in the selected state and sets the form submission value to the `value` property.
   */
  export let selected = false;

  /**	Shows both the selected and deselected icons. */
  export let icons = false;

  /**
   * Shows only the selected icon, and not the deselected icon.
   * If `true`, overrides the behavior of the `icons` property.
   */
  export let showOnlySelectedIcon = false;

  /**
   * When true, require the switch to be selected when participating in form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation)
   */
  export let required = false;

  /**
   * The value associated with this switch on form submission.
   * `null` is submitted when `selected` is `false`.
   */
  export let value = 'on';

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-switch', typeof actionProps>();

  // MARK: Contexts
  // ------------------------------------------------

  if (!context) {
    // settings = getContext<Lib.StyleContext>('style')?.switch;
    settings = getContext<SvelteContext['style']>('style')?.switch;
    context = true;
  }

  if (settings !== undefined) {
    icons = settings?.icons ?? icons;
    showOnlySelectedIcon = settings?.showOnlySelectedIcon ?? showOnlySelectedIcon;
  }

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, selected };

  $: props = Relay.props($$props, ['icons', 'showOnlySelectedIcon', 'required', 'disabled', 'selected', 'value']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', (event) => {
    selected = event.target.selected;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

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
