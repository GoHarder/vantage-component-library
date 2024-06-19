<script>
  // Components
  import Section from './section.svelte';
  import { Divider } from '../../../../dist/divider';
  import { List, ListItem } from '../../../../dist/list';

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
  <h2 slot="header">Dividers</h2>

  <p slot="supporting-text">A divider is a thin line that groups content in lists and containers.</p>

  {#if expand}
    <div class="hero">
      <List>
        <ListItem>
          <img slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/one/100/50" />
          <div slot="headline">A Year in Ecuador</div>
          <div slot="supporting-text">10 episodes</div>
          <div slot="trailing-supporting-text">68 min</div>
        </ListItem>
        <Divider inset />
        <ListItem>
          <img slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/two/100/50" />
          <div slot="headline">Wizards & Winona</div>
          <div slot="supporting-text">86 episodes</div>
          <div slot="trailing-supporting-text">109 min</div>
        </ListItem>
        <Divider inset />
        <ListItem>
          <img slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/three/100/50" />
          <div slot="headline">Gamer Course</div>
          <div slot="supporting-text">79 episodes</div>
          <div slot="trailing-supporting-text">57 min</div>
        </ListItem>
        <Divider inset />
        <ListItem>
          <img slot="start" alt="" class="hero-img" src="https://picsum.photos/seed/four/100/50" />
          <div slot="headline">Song Histories</div>
          <div slot="supporting-text">38 episodes</div>
          <div slot="trailing-supporting-text">46 min</div>
        </ListItem>
      </List>
    </div>
    <h3>Usage</h3>
  {/if}

  <p>Lorem ipsum...</p>
  <Divider />
  <p>Lorem ipsum...</p>

  {#if expand}
    <h3>Inset</h3>

    <p>Material 2</p>
    <Divider inset />
    <p>Material 3</p>
  {/if}
</Section>

<style>
  /* img.hero-img {
    height: 50px;
    width: 100px;
    border-radius: 4px;
  } */
</style>
