<script>
  // Components
  import ButtonCard from './sections/button-section.svelte';
  import CheckboxCard from './sections/checkbox-section.svelte';
  import ChipCard from './sections/chip-section.svelte';
  import DividerCard from './sections/divider-section.svelte';
  import ElevationCard from './sections/elevation-section.svelte';
  import FabCard from './sections/fab-section.svelte';
  import FocusCard from './sections/focus-section.svelte';
  import IconCard from './sections/icon-section.svelte';
  import IconButtonCard from './sections/icon-button-section.svelte';
  import ListCard from './sections/list-section.svelte';
  import MenuCard from './sections/menu-section.svelte';
  import ProgressCard from './sections/progress-section.svelte';
  import RadioCard from './sections/radio-section.svelte';
  import RippleCard from './sections/ripple-section.svelte';
  import SelectCard from './sections/select-section.svelte';
  import SliderCard from './sections/slider-section.svelte';
  import SwitchCard from './sections/switch-section.svelte';
  import TabsCard from './sections/tabs-section.svelte';
  import TextFieldCard from './sections/text-field-section.svelte';

  // Stores
  // Properties
  // Methods
  // Constants
  // Variables
  // let expand = false;
  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

<h1>Component Library</h1>

<div class="main">
  <ButtonCard expand={false} />
  <CheckboxCard expand={false} />
  <ChipCard expand={false} />
  <DividerCard expand={false} />
  <ElevationCard expand={false} />
  <FabCard expand={false} />
  <FocusCard expand={false} />
  <IconCard expand={false} />
  <IconButtonCard expand={false} />
  <ListCard expand={false} />
  <MenuCard expand={false} />
  <ProgressCard expand={false} />
  <RadioCard expand={false} />
  <RippleCard expand={false} />
  <SelectCard expand={false} />
  <SliderCard expand={false} />
  <SwitchCard expand={false} />
  <TabsCard expand={false} />
  <TextFieldCard expand={true} />
</div>

<style>
  h1 {
    margin: 16px 8px;
  }
</style>
