<script>
  // Components
  import Section from './section.svelte';
  import { Elevation } from '../../../../dist/elevation';

  // Stores
  // Properties
  export let expand = false;

  // Methods
  // Constants
  // Variables
  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

<Section {expand}>
  <h2 slot="header">Elevations</h2>
  <p slot="supporting-text">Elevation is the relative distance between two surfaces along the z-axis.</p>
  <div class="surface-1">
    <Elevation />
    <p>Elevation</p>
  </div>
</Section>

<style>
  .surface-1 {
    position: relative;
    height: 64px;
    width: 100px;
    border-radius: 8px;
    --md-elevation-level: 3;

    display: grid;
    justify-items: center;
    align-items: center;

    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
  }

  .surface-1:hover {
    --md-elevation-level: 0;
  }
</style>
