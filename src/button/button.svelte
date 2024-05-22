<script lang="ts">
  import '@material/web/button/elevated-button.js';
  import '@material/web/button/filled-button.js';
  import '@material/web/button/filled-tonal-button.js';
  import '@material/web/button/outlined-button.js';
  import '@material/web/button/text-button.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { Button } from '@material/web/button/internal/button.js';
  import type { MdEvent } from '../internal/relay.js';

  type Variant = 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text';
  type MdComp = `md-${Variant}-button`;

  interface $$Events {
    click: MdEvent<'click', `md-${Variant}-button`>;
  }

  // MARK: Properties
  // ------------------------------------------------

  export let variant: Variant = 'elevated';

  /** Whether or not the button is disabled. */
  export let disabled = false;

  /** The URL that the link button points to. */
  export let href = '';

  /**
   * Where to display the linked `href` URL for a link button.
   * Common options include `_blank` to open in a new tab.
   */
  export let target: Button['target'] = '';

  /**
   * Whether to render the icon at the inline end of the label rather than the inline start.
   *
   * _Note_: Link buttons cannot have trailing icons.
   */
  export let trailingIcon = false;

  export let type: Button['type'] = 'submit';

  export let value = '';

  export let name: string | undefined = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<MdComp, typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled };

  $: props = Relay.props($$props, ['variant', 'disabled', 'href', 'target', 'trailingIcon', 'type', 'value', 'name']);

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.href = href;
    node.target = target;
    node.trailingIcon = trailingIcon;
    node.type = type;
    node.value = value;
    if (name) node.name = name;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
  };
</script>

{#if variant === 'elevated'}
  <md-elevated-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-elevated-button>
{:else if variant === 'filled'}
  <md-filled-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-filled-button>
{:else if variant === 'filled-tonal'}
  <md-filled-tonal-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-filled-tonal-button>
{:else if variant === 'outlined'}
  <md-outlined-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-outlined-button>
{:else if variant === 'text'}
  <md-text-button use:relay.action={actionProps} {...props}>
    <slot />
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </md-text-button>
{/if}
