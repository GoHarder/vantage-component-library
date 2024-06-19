<script>
  // Components
  import Section from './section.svelte';
  import { Switch } from '../../../../dist/switch';

  // Stores
  // Properties
  export let expand = false;
  export let debug = false;

  // Methods
  // Constants
  // Variables
  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Switches</h2>
  <p slot="supporting-text">Switches toggle the state of a single item on or off.</p>

  <div class="hero">
    <p>General</p>
    <div class="switch">
      <label for="wifi-switch">Wi-Fi</label>
      <Switch id="wifi-switch" selected icon showOnlySelectedIcon />
    </div>
    <div class="switch">
      <label for="bluetooth-switch">Bluetooth</label>
      <Switch id="bluetooth-switch" icon showOnlySelectedIcon />
    </div>
  </div>

  {#if expand}
    <h3>Usage</h3>
    <Switch />
    <Switch selected />

    <h3>Icons</h3>
    <Switch icons />
    <Switch icons selected />

    <Switch icons show-only-selected-icon />
    <Switch icons show-only-selected-icon selected />

    <h3>Label</h3>
    <label for="switch">Bluetooth</label>
    <Switch id="switch" />
  {/if}
</Section>

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
      padding: 0;
      margin: 0;
    }

    > .switch {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  }
</style>
