<script lang="ts">
  import '@material/web/iconbutton/filled-icon-button.js';
  import '@material/web/iconbutton/filled-tonal-icon-button.js';
  import '@material/web/iconbutton/icon-button.js';
  import '@material/web/iconbutton/outlined-icon-button.js';
  import { onDestroy, onMount } from "svelte";

  // MARK: Types
  // ------------------------------------------------
  import type { MdIconButton } from '@material/web/iconbutton/icon-button';
  import type { MdFilledIconButton } from "@material/web/iconbutton/filled-icon-button";  
  import type { MdFilledTonalIconButton } from "@material/web/iconbutton/filled-tonal-icon-button";  
  import type { MdOutlinedIconButton } from "@material/web/iconbutton/outlined-icon-button";

  type Variant = '' | 'filled' | 'filled-tonal' | 'outlined';

  type MdComp = MdIconButton | MdFilledIconButton | MdFilledTonalIconButton | MdOutlinedIconButton | undefined;

  type Props = {
    /** The default slot content. */
    children: Function;
    /** The on click event handler. */
    onClick?: (event: MouseEvent) => void;
    /** The variant of button to render. */
    variant: Variant;
    /** Disables the icon button and makes it non-interactive. */
    disabled?: boolean;
    /** Sets the underlying `HTMLAnchorElement`'s `href` resource attribute. */
    href: string;
    /** Sets the underlying `HTMLAnchorElement`'s `target` attribute. */
    target: MdIconButton['target']
    /** When true, the button will toggle between selected and unselected states. */
    toggle: boolean;
    /**
     * Sets the selected state.
     * When false, displays the default icon.
     * When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     */
    selected: boolean;
    /** The default behavior of the button. May be "button", "reset", or "submit" */
    type: MdIconButton['type'];
    /** The value added to a form with the button's name when the button submits a form. */
    value: string;
    name?: string;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { 
    children, 
    onClick, 
    variant, 
    disabled = false, 
    href = '',
    target = '',
    toggle = false, 
    selected = $bindable(false),
    type = 'submit',
    value = '',
    name = undefined,
  }: Props = $props();

  // MARK: Variables
  // ------------------------------------------------
  let component: MdComp = $state()

  // MARK: Events
  // ------------------------------------------------
  function defaultOnClick() {
    if (toggle) selected = !selected;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    const listener = onClick || defaultOnClick;
    if (component) component.addEventListener('click', listener);    
  })

  onDestroy(() => {
    const listener = onClick || defaultOnClick;
    if (component) component.removeEventListener('click', listener);
  })
</script>

{#if variant === 'filled'}
  <md-filled-icon-button bind:this={component} {toggle} {selected} {disabled} {href} {target} {type} {value} {name}>
    {@render children()}
  </md-filled-icon-button>
{:else if variant === 'filled-tonal'}
  <md-filled-tonal-icon-button bind:this={component} {toggle} {selected} {disabled} {href} {target} {type} {value} {name}>
    {@render children()}
  </md-filled-tonal-icon-button>
{:else if variant === 'outlined'}
  <md-outlined-icon-button bind:this={component} {toggle} {selected} {disabled} {href} {target} {type} {value} {name}>
    {@render children()}
  </md-outlined-icon-button>
{:else}
  <md-icon-button bind:this={component} {toggle} {selected} {disabled} {href} {target} {type} {value} {name}>
    {@render children()}
  </md-icon-button>
{/if}
