<script>
  // Components
  import Section from './section.svelte';
  import { Icon } from '../../../../dist/icon';
  import { IconButton } from '../../../../dist/icon-button';

  // Stores
  // Properties
  export let expand = false;
  export let debug = false;

  // Methods
  // Constants
  // Variables
  let selected = false;
  // Contexts
  // Subscriptions
  // Reactive Rules
  $: if (debug) {
    console.log('Icon Button', selected);
  }

  // Events
  function onClick(event) {
    if (debug) console.log(event);
  }

  // Lifecycle
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Icon buttons</h2>
  <p slot="supporting-text">Icon buttons help people take supplementary actions with a single tap.</p>

  {#if expand}
    <div class="hero">
      <IconButton on:click={onClick}>
        <Icon>arrow_back</Icon>
      </IconButton>
      <span>
        <IconButton on:click={onClick}>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton on:click={onClick}>
          <Icon>share</Icon>
        </IconButton>
        <IconButton on:click={onClick}>
          <Icon>more_vert</Icon>
        </IconButton>
      </span>
    </div>
    <h3>Usage</h3>
  {/if}

  <IconButton on:click={onClick}>
    <Icon>check</Icon>
  </IconButton>
  <IconButton variant="filled">
    <Icon>check</Icon>
  </IconButton>
  <IconButton variant="filled-tonal">
    <Icon>check</Icon>
  </IconButton>
  <IconButton variant="outlined">
    <Icon>check</Icon>
  </IconButton>

  {#if expand}
    <h3>Links</h3>
    <IconButton variant="outlined" href="https://learn.svelte.dev" target="_blank">
      <Icon>link</Icon>
    </IconButton>
    <h3>Toggle</h3>
    <IconButton variant="outlined" toggle bind:selected>
      <Icon>close</Icon>
      <Icon slot="selected">check</Icon>
    </IconButton>
  {/if}
</Section>

<style>
  .hero {
    display: flex;
    justify-content: space-between;
    min-width: 200px;
  }
</style>
