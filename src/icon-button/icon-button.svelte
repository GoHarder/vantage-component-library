<script lang="ts">
  import '@material/web/iconbutton/filled-icon-button.js';
  import '@material/web/iconbutton/filled-tonal-icon-button.js';
  import '@material/web/iconbutton/icon-button.js';
  import '@material/web/iconbutton/outlined-icon-button.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdIconButton } from '@material/web/iconbutton/icon-button.js';
  import type { MdEvent } from '../internal/relay.js';

  type Variant = '' | 'filled' | 'filled-tonal' | 'outlined';
  type MdComp<V extends Variant = Variant> = V extends '' ? 'md-icon-button' : `md-${V}-icon-button`;

  interface $$Events {
    click: MdEvent<'click', MdComp>;
  }

  // MARK: Properties
  // ------------------------------------------------

  export let variant: Variant = '';

  /** Disables the icon button and makes it non-interactive. */
  export let disabled = false;

  /** Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. */
  export let href = '';

  /** Sets the underlying `HTMLAnchorElement`'s `target` attribute. */
  export let target: MdIconButton['target'] = '';

  /** When true, the button will toggle between selected and unselected states. */
  export let toggle = false;

  /**
   * Sets the selected state.
   * When false, displays the default icon.
   * When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
   */
  export let selected = false;

  export let type: MdIconButton['type'] = 'submit';

  export let value = '';

  export let name: string | undefined = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<MdComp, typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, selected };

  $: props = Relay.props($$props, ['variant', 'disabled', 'href', 'target', 'toggle', 'selected', 'type', 'value', 'name']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('click', (event) => {
    if (toggle) selected = event.target.selected;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.toggle = toggle;
    node.type = type;
    if (target) node.target = target;
    if (href) node.href = href;
    if (value) node.value = value;
    if (name) node.name = name;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.selected = props.selected;
  };
</script>

{#if variant === 'filled'}
  <md-filled-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-filled-icon-button>
{:else if variant === 'filled-tonal'}
  <md-filled-tonal-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-filled-tonal-icon-button>
{:else if variant === 'outlined'}
  <md-outlined-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-outlined-icon-button>
{:else}
  <md-icon-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.selected}<slot name="selected" />{/if}
  </md-icon-button>
{/if}
