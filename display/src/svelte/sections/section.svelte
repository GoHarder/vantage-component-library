<script>
  // Components
  import { Elevation } from '../../../../dist/elevation/index.js';
  import { Icon } from '../../../../dist/icon/index.js';
  import { IconButton } from '../../../../dist/icon-button/index.js';

  // Stores
  // Properties
  let { 
    header, 
    supportingText, 
    children, 
    expand = $bindable(false), 
    debug = $bindable(false)
  } = $props();

  // Methods
  // Constants
  // Variables
  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

{#snippet slotIcon(iconName)}
<Icon slot="selected">{iconName}</Icon>
{/snippet}

<section class="component">
  <Elevation />
  <header>
    <div class="row-1">
      {@render header?.()}
      <div>
        <IconButton bind:selected={debug} toggle>
          <Icon>bug_report</Icon>
        </IconButton> 

        <IconButton bind:selected={expand} toggle>
          {@render slotIcon('collapse_all')}
          <Icon>expand_all</Icon>
        </IconButton>

      </div>
    </div>
    {#if expand}
    {@render supportingText?.()}      
    {/if}
  </header>
  <div class="container">
    {@render children?.()} 
  </div> 
</section> 
