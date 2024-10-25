<script>
  // Components
  import Section from './section.svelte';
  import { Button } from '../../../../dist/button';
  import { Icon } from '../../../../dist/icon';

  // Stores
  // Properties
  // Methods
  // Constants
  // Variables
  let debug = $state(false)
  let expand = $state(false)

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

{#snippet header()}
<h2>Buttons</h2>
{/snippet}

{#snippet supportingText()}
<p>Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.</p>
{/snippet}

{#snippet slotIcon(iconName)}
<Icon slot="icon">{iconName}</Icon>
{/snippet}

<Section bind:debug={debug} bind:expand={expand} {header} {supportingText}>
  {#if expand}
    <div class="hero">
      <Button variant="filled">Make Payment</Button>
    </div>
    <h3>Types</h3>
  {/if}

  <div class="button-grid">
    <Button>
      {@render slotIcon('add')} 
      Elevated
    </Button>
    <Button variant="filled">Filled</Button>
    <Button variant="filled-tonal">Tonal</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
  </div>

  {#if expand}
    <h3>Usage</h3>
    <Button variant="outlined">Back</Button>
    <Button variant="filled">Complete</Button>

    <h3>Icon</h3>
    <Button variant="filled-tonal">
      {@render slotIcon('send')} 
      Send
    </Button>
    <Button variant="filled" trailingIcon>
      {@render slotIcon('open_in_new')}      
      Open
    </Button>

    <h3>Disabled</h3>
    <div class="button-grid">
      <Button disabled>Elevated</Button>
      <Button disabled variant="filled">Filled</Button>
      <Button disabled variant="filled-tonal">Tonal</Button>
      <Button disabled variant="outlined">Outlined</Button>
      <Button disabled variant="text">Text</Button>
    </div>
  {/if}
</Section>

<style>
  .hero {
    display: grid;
    width: 200px;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(5, min-content);
    grid-template-rows: auto;
    gap: 8px;
    justify-items: center;
  }
</style>
