<script>
  import { onMount } from 'svelte';

  // Components
  import Section from './section.svelte';
  import { FocusRing } from '../../../../dist/focus';

  // Stores
  // Properties
  export let expand = false;

  // Methods
  // Constants
  // Variables
  /** @type {HTMLDivElement}*/
  let content;

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle

  onMount(() => {
    const targets = content.querySelectorAll('.target');
    for (const target of targets) {
      target.tabIndex = 0;
    }
  });
</script>

<Section {expand}>
  <h2 slot="header">Focus rings</h2>
  <p slot="supporting-text">Focus rings are accessible outlines for components to show keyboard focus.</p>

  <div bind:this={content}>
    <div class="hero">
      <div class="target">
        <FocusRing style="--md-focus-ring-shape: 8px" />
        <p>Focus 1</p>
      </div>
      <div class="target">
        <FocusRing style="--md-focus-ring-shape: 8px" />
        <p>Focus 2</p>
      </div>
      <div class="target">
        <FocusRing style="--md-focus-ring-shape: 8px" />
        <p>Focus 3</p>
      </div>
    </div>

    {#if expand}
      <h3>Usage</h3>
      <div class="target">
        <FocusRing style="--md-focus-ring-shape: 8px" />
        <p>Usage</p>
      </div>

      <h3>Inward</h3>
      <div class="target">
        <FocusRing inward style="--md-focus-ring-shape: 8px" />
        <p>Focus</p>
        <p>Inward</p>
      </div>
    {/if}
  </div>
</Section>

<style>
</style>
