<script lang="ts">
  import '@material/web/checkbox/checkbox.js';
  import { onDestroy, onMount } from 'svelte';

  // MARK: Types
  // ------------------------------------------------
  import type { MdCheckbox } from '@material/web/checkbox/checkbox';

  type Props = {
    /** Whether or not the checkbox is selected. */
    checked: boolean;
    /** Whether or not the checkbox is disabled. */
    disabled: boolean;
    /**
     * Whether or not the checkbox is indeterminate.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
     */
    indeterminate: boolean;
    /**
     * When true, require the checkbox to be selected when participating in form submission.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation)
     */
    required: boolean;
    /**
     * The value of the checkbox that is submitted with a form when selected.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value)
     */
    value: string;
    name?: string;
  };

  // MARK: Properties
  // ------------------------------------------------
  let { checked = $bindable(false), disabled = false, indeterminate = false, required = false, value = 'on', name = undefined }: Props = $props();

  // MARK: Variables
  // ------------------------------------------------
  let component: MdCheckbox | undefined = $state();

  // MARK: Events
  // ------------------------------------------------
  function onChange() {
    checked = !checked;
    indeterminate = false;
  }

  // MARK: Lifecycle
  // ------------------------------------------------
  onMount(() => {
    if (component) component.addEventListener('click', onChange);
  });

  onDestroy(() => {
    if (component) component.removeEventListener('click', onChange);
  });
</script>

<md-checkbox bind:this={component} {checked} {disabled} {indeterminate} {required} {value} {name}></md-checkbox>
