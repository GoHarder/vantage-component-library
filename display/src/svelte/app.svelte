<script>
  // Components
  import ButtonCard from './sections/button-section.svelte';
  import CheckboxCard from './sections/checkbox-section.svelte';

  // Stores
  // Properties
  // Methods
  // Constants
  const stages = [
    { visible: true, buffer: 0, value: 0, indeterminate: true },
    { visible: true, buffer: 0.25, value: 0, indeterminate: false },
    { visible: true, buffer: 0.5, value: 0.25, indeterminate: false },
    { visible: true, buffer: 0.75, value: 0.5, indeterminate: false },
    { visible: true, buffer: 1, value: 0.75, indeterminate: false },
    { visible: true, buffer: 1, value: 1, indeterminate: false },
    { visible: false, buffer: 1, value: 0, indeterminate: false },
  ];

  const animate = (index = 0) => {
    const time = Math.round(Math.random() * 3 + 2) * 1000;
    if (index < stages.length) {
      setTimeout(() => {
        state = stages[index];
        animate(index + 1);
      }, time);
    }
  };

  setInterval(() => {
    disabled = !disabled;
  }, 2000);

  // Variables
  let state = {
    visible: false,
    buffer: 0,
    value: 0,
    indeterminate: false,
  };

  let disabled = false;

  animate();

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle
</script>

<div class="main">
  <ButtonCard expand={false} />
  <CheckboxCard expand={true} />
</div>
