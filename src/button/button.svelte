<script lang="ts">
  import '@material/web/button/elevated-button.js';
  import '@material/web/button/filled-button.js';
  import '@material/web/button/filled-tonal-button.js';
  import '@material/web/button/outlined-button.js';
  import '@material/web/button/text-button.js';
  import { onDestroy, onMount } from "svelte";

  // MARK: Types
  // ------------------------------------------------
  import type { MdElevatedButton } from "@material/web/button/elevated-button";
  import type { MdFilledButton } from "@material/web/button/filled-button";
  import type { MdFilledTonalButton } from "@material/web/button/filled-tonal-button";
  import type { MdOutlinedButton } from "@material/web/button/outlined-button";
  import type { MdTextButton } from "@material/web/button/text-button";

  type Variant = 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text';
  type MdComp = MdElevatedButton | MdFilledButton | MdFilledTonalButton | MdOutlinedButton | MdTextButton | undefined;

  type Props = {
    /** The default slot content. */
    children: Function;
    /** The selected icon slot. */
    slotIcon?: Function;
    /** The on click event handler. */
    onClick?: (event: MouseEvent) => void;    
    /** The variant of button to render. */
    variant: Variant;
    /** Disables the icon button and makes it non-interactive. */
    disabled?: boolean;
    /** Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. */
    href: string;
    /** Sets the underlying `HTMLAnchorElement`'s `target` attribute. */
    target: MdElevatedButton['target'];
    /**
     * Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * NOTE: Link buttons cannot have trailing icons.
     */
    trailingIcon: boolean;
    /** The default behavior of the button. May be "button", "reset", or "submit" */
    type: MdElevatedButton['type'];
    /** The value added to a form with the button's name when the button submits a form. */
    value: string;
    name?: string;
  };

  // MARK: Properties
  // ------------------------------------------------
  let {
    children,
    slotIcon,
    onClick,
    variant,
    disabled = false,
    href = '',
    target = '',
    trailingIcon = false,
    type = 'submit',
    value = '',
    name = undefined,
  }: Props = $props();

  // MARK: Variables
  // ------------------------------------------------
  let component: MdComp = $state()

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component && onClick) component.addEventListener('click', onClick);    
  })

  onDestroy(() => {
    if (component && onClick) component.removeEventListener('click', onClick);
  })
</script>

{#if variant === 'filled'}
  <md-filled-button bind:this={component} {disabled} {href} {target} {trailingIcon} {type} {value} {name}>
    {@render children()}
    {@render slotIcon?.()}
  </md-filled-button>
{:else if variant === 'filled-tonal'}
  <md-filled-tonal-button bind:this={component} {disabled} {href} {target} {trailingIcon} {type} {value} {name}>
    {@render children()}
    {@render slotIcon?.()}
  </md-filled-tonal-button>
{:else if variant === 'outlined'}
  <md-outlined-button bind:this={component} {disabled} {href} {target} {trailingIcon} {type} {value} {name}>
    {@render children()}
    {@render slotIcon?.()}
  </md-outlined-button>
{:else if variant === 'text'}
  <md-text-button bind:this={component} {disabled} {href} {target} {trailingIcon} {type} {value} {name}>
    {@render children()}
    {@render slotIcon?.()}
  </md-text-button>
{:else}
  <md-elevated-button bind:this={component} {disabled} {href} {target} {trailingIcon} {type} {value} {name}>  
    {@render children()}
    {@render slotIcon?.()}
  </md-elevated-button>
{/if}
