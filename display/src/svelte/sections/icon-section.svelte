<script>
  // Components
  import Section from './section.svelte';
  import { Icon } from '../../../../dist/icon';

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
  <h2 slot="header">Icons</h2>
  <p slot="supporting-text">Icons can be used to represent common actions.</p>
  <Icon>settings</Icon>
  <Icon>check_box</Icon>
  <Icon>home</Icon>
</Section>

<style>
</style>
