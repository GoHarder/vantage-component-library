<script>
  import Section from './section.svelte';
  import { Radio } from '../../../../dist/radio';

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
  <h2 slot="header">Radio buttons</h2>
  <div slot="supporting-text">
    <p>Radio buttons allow users to select one option from a set.</p>
    <p>They're a selection control that often appears when users are asked to make decisions for select a choice from options.</p>
  </div>

  <form class="hero">
    <Radio id="ring-none" name="ringtone" value="none" />
    <label for="ring-none">None</label>

    <Radio id="ring-callisto" name="ringtone" value="callisto" />
    <label for="ring-callisto">Callisto</label>

    <Radio id="ring-ganymede" name="ringtone" value="ganymede" />
    <label for="ring-ganymede">Ganymede</label>

    <Radio id="ring-luna" name="ringtone" value="luna" />
    <label for="ring-luna">Luna</label>
  </form>

  {#if expand}
    <h3>Usage</h3>
    <form>
      <Radio name="animals" value="cats" />
      <Radio name="animals" value="dogs" />
      <Radio name="animals" value="birds" checked />
    </form>

    <h3>Label</h3>
    <form>
      <md-radio id="cats-radio" name="animals" value="cats" />
      <label for="cats-radio">Cats</label>

      <md-radio id="dogs-radio" name="animals" value="dogs" />
      <label for="dogs-radio">Dogs</label>
    </form>
  {/if}
</Section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 20px max-content;
    gap: 10px;
    /* width: 100%; */
  }
</style>
