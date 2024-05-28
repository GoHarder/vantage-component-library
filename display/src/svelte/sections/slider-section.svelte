<script>
  import Section from './section.svelte';
  import { Icon } from '../../../../dist/icon';
  import { Slider } from '../../../../dist/slider';

  // Components
  // Stores
  // Properties
  export let expand = false;
  export let debug = false;

  // Methods
  // Constants
  // Variables
  let value = 50;
  let valueStart = 25;
  let valueEnd = 75;

  // Contexts
  // Subscriptions
  // Reactive Rules
  $: if (debug) {
    console.table({ value, valueStart, valueEnd });
  }

  // Events
  // Lifecycle
</script>

<Section {expand}>
  <h2 slot="header">Sliders</h2>
  <p slot="supporting-text">Sliders allow users to make selections from a range of values.</p>
  <div class="hero">
    <div class="volume">
      <Icon style="grid-area: icon;">search</Icon>
      <label style="grid-area: label;" for="media-vol">Media volume</label>
      <Slider style="grid-area: slider;" id="media-vol" value={62} />
    </div>

    <div class="volume">
      <Icon style="grid-area: icon;">search</Icon>
      <label style="grid-area: label;" for="call-vol">Call Volume</label>
      <Slider style="grid-area: slider;" id="call-vol" value={52} />
    </div>
    <div class="volume">
      <Icon style="grid-area: icon;">notifications</Icon>
      <label style="grid-area: label;" for="ring-vol">Ring volume</label>
      <Slider style="grid-area: slider;" id="ring-vol" value={46} />
    </div>
    <div class="volume">
      <Icon style="grid-area: icon;">search</Icon>
      <label style="grid-area: label;" for="alarm-vol">Alarm volume</label>
      <Slider style="grid-area: slider;" id="alarm-vol" value={62} />
    </div>
  </div>

  {#if expand}
    <h3>Usage</h3>
    <Slider />
    <Slider ticks bind:value />
    <Slider range bind:valueStart bind:valueEnd />

    <h3>Continuous</h3>
    <Slider min="0" max="100" value={50} />

    <h3>Discrete</h3>
    <Slider step="5" ticks min="0" max="20" />

    <h3>Range</h3>
    <Slider range valueStart="25" valueEnd="50" />

    <h3>Value Label</h3>
    <Slider labeled />
  {/if}
</Section>

<style lang="scss">
  .volume {
    display: grid;
    grid-template-areas:
      'icon label'
      'icon slider';
    grid-template-columns: 24px 1fr;
    align-items: center;

    label {
      padding: 10px 0 0 18px;
    }
  }
</style>
