<script>
  import Section from './section.svelte';
  import { Ripple } from '../../../../dist/ripple';

  // Components
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
  <h2 slot="header">Ripples</h2>
  <div slot="supporting-text">
    <p>Ripples are state layers used to communicate the status of a component or interactive element.</p>
    <p>A state layer is a semi-transparent covering on an element that indicates its state.</p>
    <p>A layer can be applied to an entire element or in a circular shape.</p>
  </div>

  <div class="target">
    <Ripple />
    <p>Ripple</p>
  </div>
</Section>

<style lang="scss">
  .target {
    position: relative;
    width: 75px;
    height: 75px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid var(--md-sys-color-outline-variant);

    p {
      margin: 0;
      padding: 0;
    }
  }
</style>
