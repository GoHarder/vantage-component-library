<script>
  import Section from './section.svelte';
  import { Icon } from '../../../../dist/icon';
  import { Tab, Tabs } from '../../../../dist/tabs';

  // Components
  // Stores
  // Properties
  export let expand = false;

  // Methods
  // Constants
  // Variables
  let index = 0;

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

<Section {expand}>
  <h2 slot="header">Tabs</h2>
  <p slot="supporting-text">Tabs organize and support navigation between groups of related content at the same level of hierarchy.</p>

  <div class="hero">
    <Tabs aria-label="Content to view" bind:activeTabIndex={index}>
      <Tab id="videos-tab" aria-controls="videos-panel">
        <Icon slot="icon">videocam</Icon>
        Videos
      </Tab>
      <Tab id="photos-tab" aria-controls="photos-panel">
        <Icon slot="icon">image</Icon>
        Photos
      </Tab>

      <Tab id="audio-tab" aria-controls="music-panel">
        <Icon slot="icon">music_note</Icon>
        Audio
      </Tab>
    </Tabs>
    <div class="panel" id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden={index !== 0}>
      <p>Video Panel</p>
    </div>
    <div class="panel" id="photos-panel" role="tabpanel" aria-labelledby="photos-tab" hidden={index !== 1}>
      <p>Photos Panel</p>
    </div>
    <div class="panel" id="audio-panel" role="tabpanel" aria-labelledby="music-tab" hidden={index !== 2}>
      <p>Audio Panel</p>
    </div>
  </div>

  {#if expand}
    <h3>Usage</h3>
    <Tabs>
      <Tab>Videos</Tab>
      <Tab>Photos</Tab>
      <Tab>Audio</Tab>
    </Tabs>

    <Tabs>
      <Tab secondary>Birds</Tab>
      <Tab secondary>Cats</Tab>
      <Tab secondary>Dogs</Tab>
    </Tabs>

    <h3>Selection</h3>
    <Tabs>
      <Tab>Video</Tab>
      <Tab active>Photos</Tab>
      <Tab>Audio</Tab>
    </Tabs>

    <h3>Icons</h3>
    <Tabs>
      <Tab>
        <Icon slot="icon">piano</Icon>
        Keyboard
      </Tab>
      <Tab>
        <Icon slot="icon">tune</Icon>
        Guitar
      </Tab>
    </Tabs>
    <Tabs>
      <Tab>
        <Icon slot="icon">piano</Icon>
      </Tab>
      <Tab>
        <Icon slot="icon">tune</Icon>
      </Tab>
    </Tabs>
    <h3>Inline icons</h3>
    <Tabs>
      <Tab inlineIcon>
        <Icon slot="icon">piano</Icon>
        Keyboard
      </Tab>
      <Tab inlineIcon>
        <Icon slot="icon">tune</Icon>
        Guitar
      </Tab>
    </Tabs>
  {/if}
</Section>

<style>
  .panel {
    min-width: 300px;
  }
</style>
