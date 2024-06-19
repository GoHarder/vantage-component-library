<script>
  // Components
  import Section from './section.svelte';
  import { Select, Option } from '../../../../dist/select';

  // Stores
  // Properties
  export let expand = false;
  export let debug = false;

  // Methods
  // Constants
  // Variables
  let value1 = undefined;

  // Contexts
  // Subscriptions
  // Reactive Rules
  $: if (debug) {
    console.log(value1);
  }

  // Events
  // Lifecycle
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Select</h2>
  <p slot="supporting-text">Select menus display a list of choices on temporary surfaces and display the currently selected menu item above the menu.</p>
  <Select label="Label" bind:value={value1} outlined>
    <Option value="1">
      <div slot="headline">Item 1</div>
    </Option>
    <Option value="2">
      <div slot="headline">Item 2</div>
    </Option>
    <Option value="3">
      <div slot="headline">Item 3</div>
    </Option>
  </Select>

  {#if expand}
    <h3>Required</h3>
    <Select label="Label" bind:value={value1} required>
      <Option value="1">
        <div slot="headline">Item 1</div>
      </Option>
      <Option value="2">
        <div slot="headline">Item 2</div>
      </Option>
    </Select>
  {/if}
</Section>
