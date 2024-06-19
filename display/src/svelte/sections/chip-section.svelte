<script>
  import Section from './section.svelte';
  import { AssistChip, ChipSet, FilterChip, InputChip, SuggestionChip } from '../../../../dist/chip';
  import { Divider } from '../../../../dist/divider';
  import { Icon } from '../../../../dist/icon';

  // Components
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
    console.log(selected);
  }

  // Events
  // Lifecycle
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Chips</h2>
  <p slot="supporting-text">Chips help people enter information, make selections, filter content, or trigger actions.</p>
  {#if expand}
    <div class="hero">
      <div class="label">
        <Icon>star</Icon>
        <p>Amenities</p>
      </div>
      <ChipSet>
        <FilterChip label="Washer/Dryer" />
        <FilterChip label="Ramp access" bind:selected />
        <FilterChip label="Garden" />
        <FilterChip label="Cats OK" selected />
        <FilterChip label="Dogs Ok" />
        <FilterChip label="Smoke-free" />
      </ChipSet>
      <Divider />
      <div class="label">
        <Icon>map</Icon>
        <p>Neighborhoods</p>
      </div>
      <ChipSet>
        <FilterChip label="Eaglehead" selected />
        <FilterChip label="Rabbit Island" selected />
        <FilterChip label="Downtown" />
        <FilterChip label="Clinton Hill" />
        <FilterChip label="Downtown Brooklyn" />
      </ChipSet>
    </div>
    <h3>Usage</h3>
  {/if}
  <ChipSet>
    <AssistChip label="Assist" />
    <FilterChip label="Filter" />
    <InputChip label="Input" />
    <SuggestionChip label="Suggestion" />
  </ChipSet>
  {#if expand}
    <h3>Chip Sets</h3>
    <p>New Event</p>
    <ChipSet>
      <FilterChip label="All day" />
      <AssistChip label="Add to calendar" />
      <AssistChip label="Set a reminder" />
    </ChipSet>
    <h3>Icons</h3>
    <ChipSet>
      <AssistChip label="Add to calendar">
        <Icon slot="icon">event</Icon>
      </AssistChip>
      <InputChip label="Ping Qiang" avatar>
        <img slot="icon" alt="Some person" src="https://i.pravatar.cc/300?img=3" />
      </InputChip>
    </ChipSet>
    <h3>Elevated</h3>
    <div>
      <img alt="Some person" src="https://i.pravatar.cc/100?img=10" />
      <ChipSet>
        <SuggestionChip label="Share" elevated />
        <SuggestionChip label="Favorite" elevated />
      </ChipSet>
    </div>

    <h3>Focusable and Disabled</h3>
    <!-- TODO: 10-23-2023 2:27 PM Set up this example. -->
    <ChipSet aria-label="Actions">
      <!--
        Disabled until text is selected. Since both are disabled by default, keep
        them focusable so that screen readers can discover the actions available.
      -->
      <AssistChip label="Copy" disabled alwaysFocusable />
      <AssistChip label="Paste" disabled alwaysFocusable />
    </ChipSet>
    PUT TEXT FIELD HERE
    <!-- <OutlinedTextField type="textarea" /> -->

    <!-- TODO: 10-23-2023 Add the rest of the examples. -->
  {/if}
</Section>

<style lang="scss">
  .hero {
    width: 400px;
    display: flex;
    flex-direction: column;
    // flex: 1 0 0;
    gap: 12px;
  }

  .label {
    display: flex;
    align-items: center;
    gap: 6px;

    p {
      margin: 0;
    }
  }
</style>
