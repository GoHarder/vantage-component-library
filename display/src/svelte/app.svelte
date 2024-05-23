<script>
  // Components
  import ButtonCard from './sections/button-section.svelte';
  import CheckboxCard from './sections/checkbox-section.svelte';
  import ChipCard from './sections/chip-section.svelte';
  import DividerCard from './sections/divider-section.svelte';
  import ElevationCard from './sections/elevation-section.svelte';
  import FabCard from './sections/fab-section.svelte';
  import FocusCard from './sections/focus-section.svelte';
  import ListCard from './sections/list-section.svelte';

  // Stores
  // Properties
  // Methods
  // Constants
  // const stages = [
  //   { visible: true, buffer: 0, value: 0, indeterminate: true },
  //   { visible: true, buffer: 0.25, value: 0, indeterminate: false },
  //   { visible: true, buffer: 0.5, value: 0.25, indeterminate: false },
  //   { visible: true, buffer: 0.75, value: 0.5, indeterminate: false },
  //   { visible: true, buffer: 1, value: 0.75, indeterminate: false },
  //   { visible: true, buffer: 1, value: 1, indeterminate: false },
  //   { visible: false, buffer: 1, value: 0, indeterminate: false },
  // ];

  // const animate = (index = 0) => {
  //   const time = Math.round(Math.random() * 3 + 2) * 1000;
  //   if (index < stages.length) {
  //     setTimeout(() => {
  //       state = stages[index];
  //       animate(index + 1);
  //     }, time);
  //   }
  // };

  // setInterval(() => {
  //   disabled = !disabled;
  // }, 2000);

  // Variables
  // let expand = false;

  // let state = { visible: false, buffer: 0, value: 0, indeterminate: false };

  // let disabled = false;

  // animate();

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
  <FocusCard expand={true} />
  <!--  -->
  <ListCard expand={false} />
</div>

<style>
  h1 {
    margin: 16px 8px;
  }
</style>
