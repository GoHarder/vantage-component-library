<script>
  // Components
  import Section from './section.svelte';
  import { Checkbox } from '../../../../dist/checkbox/index.js';
  import { Divider } from '../../../../dist/divider/index.js';

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
  <h2 slot="header">Checkboxes</h2>
  <div slot="supporting-text">
    <p>Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off.</p>
    <p>They're a kind of selection control that helps users make a choice from a set of options.</p>
  </div>

  {#if expand}
    <div class="hero">
      <p>Allow access</p>

      <div class="row">
        <label for="microphone-checkbox">Microphone Access</label>
        <Checkbox checked id="microphone-checkbox" />
      </div>
      <Divider />
      <div class="row">
        <label for="location-checkbox">Location Access</label>
        <Checkbox checked id="location-checkbox" />
      </div>
      <Divider />
      <div>
        <label for="haptics-checkbox">Haptics</label>
        <Checkbox id="haptics-checkbox" />
      </div>
      <Divider />
    </div>

    <h3>Usage</h3>
    <div class="usage">
      <Checkbox />
      <Checkbox checked />
      <Checkbox indeterminate />
    </div>
    <h3>Label</h3>
    <div class="usage-label">
      <div>
        <Checkbox id="checkbox-1" />
        <label for="checkbox-1">Checkbox 1</label>
      </div>
      <div>
        <Checkbox id="checkbox-2" />
        <label for="checkbox-2"> Checkbox 2 </label>
      </div>
    </div>
    <h3>Disabled</h3>
    <div class="states">
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </div>
  {:else}
    <form class="small-grid">
      <Checkbox id="normal-checkbox" />
      <label for="normal-checkbox"> Normal </label>

      <Checkbox id="checked-checkbox" checked />
      <label for="checked-checkbox">Checked</label>

      <Checkbox id="indeterminate-checkbox" indeterminate />
      <label for="indeterminate-checkbox">Indeterminate</label>
    </form>
  {/if}
</Section>

<style lang="scss">
  .hero {
    width: 200px;

    p {
      margin: 4px;
    }

    div {
      display: flex;
      justify-content: space-between;
      margin: 6px;
    }
  }

  .usage {
    display: grid;
    grid-template-columns: repeat(3, 32px);
  }

  .usage-label > div {
    display: flex;
    align-items: center;
    column-gap: 6px;
    margin: 6px 0;
  }

  .states {
    display: grid;
    grid-template-columns: repeat(3, 32px);
    grid-auto-rows: 32px;
    justify-items: start;
    align-items: center;
  }

  .small-grid {
    display: grid;
    grid-template-columns: repeat(6, max-content);
    gap: 6px;
  }
</style>
