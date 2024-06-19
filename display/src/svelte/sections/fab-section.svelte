<script>
  // Components
  import Section from './section.svelte';
  import { Fab } from '../../../../dist/fab/index.js';
  import { Icon } from '../../../../dist/icon';

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

  function onClick(event) {
    console.log(event);
  }

  // Lifecycle
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Floating action buttons (FAB)</h2>
  <div slot="supporting-text">
    <p>FABs help people take primary actions.</p>
    <p>They're used to represent the most important action on a screen.</p>
  </div>

  {#if expand}
    <Fab on:click={onClick}>
      <Icon slot="icon">edit</Icon>
    </Fab>

    <h3>Lowered</h3>
    <Fab lowered>
      <Icon slot="icon">edit</Icon>
    </Fab>

    <h3>Label</h3>
    <Fab label="Edit">
      <Icon slot="icon">edit</Icon>
    </Fab>
    <h3>Color</h3>
  {/if}
  <Fab>
    <Icon slot="icon">edit</Icon>
  </Fab>
  <Fab variant="primary">
    <Icon slot="icon">edit</Icon>
  </Fab>
  <Fab variant="secondary">
    <Icon slot="icon">edit</Icon>
  </Fab>
  <Fab variant="tertiary">
    <Icon slot="icon">edit</Icon>
  </Fab>

  {#if expand}
    <h3>Sizes</h3>
    <Fab size="small">
      <Icon slot="icon">edit</Icon>
    </Fab>
    <Fab size="medium">
      <Icon slot="icon">edit</Icon>
    </Fab>
    <Fab size="large">
      <Icon slot="icon">edit</Icon>
    </Fab>

    <h3>Branded</h3>
    <Fab branded>
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z" />
        <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
        <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
        <path fill="#EA4335" d="M20 16V6h-4v14z" />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </Fab>

    <h3>Extended</h3>

    <Fab branded label="Add">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z" />
        <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
        <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
        <path fill="#EA4335" d="M20 16V6h-4v14z" />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </Fab>

    <h3>Sizes</h3>
    <Fab branded>
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z" />
        <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
        <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
        <path fill="#EA4335" d="M20 16V6h-4v14z" />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </Fab>

    <Fab branded size="large">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z" />
        <path fill="#4285F4" d="M30 16H20l-4 4h14z" />
        <path fill="#FBBC05" d="M6 16v4h10l4-4z" />
        <path fill="#EA4335" d="M20 16V6h-4v14z" />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </Fab>
  {/if}
</Section>
