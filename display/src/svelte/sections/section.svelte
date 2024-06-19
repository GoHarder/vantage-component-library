<script>
  // Components
  import { Elevation } from '../../../../dist/elevation/index.js';
  import { Icon } from '../../../../dist/icon/index.js';
  import { IconButton } from '../../../../dist/icon-button/index.js';

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

  function toggleExpand() {
    expand = !expand;
  }

  function toggleDebug() {
    debug = !debug;
  }

  // Lifecycle
</script>

<section class="component">
  <Elevation />
  <header>
    <div class="row-1">
      <slot name="header" />

      <div>
        <IconButton on:click={toggleDebug} toggle selected={debug}>
          <Icon>bug_report</Icon>
        </IconButton>

        <IconButton on:click={toggleExpand} toggle selected={expand}>
          <Icon>expand_all</Icon>
          <Icon slot="selected">collapse_all</Icon>
        </IconButton>
      </div>
    </div>

    {#if expand}
      <slot name="supporting-text" />
    {/if}
  </header>
  <div class="container">
    <slot />
  </div>
</section>
