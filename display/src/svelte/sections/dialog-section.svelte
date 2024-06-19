<script>
  // MARK: Types
  // ------------------------------------------------
  // MARK: Components
  // ------------------------------------------------

  import Section from './section.svelte';
  import { Button } from '../../../../dist/button';
  import { Dialog } from '../../../../dist/dialog';
  import { Radio } from '../../../../dist/radio';

  // MARK: Stores
  // ------------------------------------------------

  // MARK: Properties
  // ------------------------------------------------

  export let expand = false;
  export let debug = false;

  // MARK: Methods
  // ------------------------------------------------

  // MARK: Constants
  // ------------------------------------------------

  const open = {
    1: false,
    2: false,
  };

  // MARK: Variables
  // ------------------------------------------------
  // MARK: Contexts
  // ------------------------------------------------
  // MARK: Subscriptions
  // ------------------------------------------------
  // MARK: Reactive Rules
  // ------------------------------------------------

  // MARK: Events
  // ------------------------------------------------

  function onClick(event) {
    const index = event.currentTarget.dataset.index;
    open[index] = !open[index];
  }

  // MARK: Lifecycle
  // ------------------------------------------------
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Dialogs</h2>
  <p slot="supporting-text">They can require an action, communicate information for making decisions, or help users accomplish a focused task.</p>

  <div class="hero">
    <Button on:click={onClick} data-index="1">Ringtone</Button>
    <Dialog bind:open={open[1]}>
      <div slot="headline">Phone ringtone</div>
      <form slot="content" id="phone-ringtone-form" method="dialog">
        <Radio id="ring-none" name="ringtone" value="none" />
        <label for="ring-none">None</label>

        <Radio id="ring-callisto" name="ringtone" value="callisto" />
        <label for="ring-callisto">Callisto</label>

        <Radio id="ring-ganymede" name="ringtone" value="ganymede" />
        <label for="ring-ganymede">Ganymede</label>

        <Radio id="ring-luna" name="ringtone" value="luna" />
        <label for="ring-luna">Luna</label>
      </form>
      <div slot="actions">
        <Button variant="text" value="cancel" form="phone-ringtone-form">Cancel</Button>
        <Button variant="text" value="ok" form="phone-ringtone-form">Ok</Button>
      </div>
    </Dialog>
  </div>
</Section>

<style>
  #phone-ringtone-form {
    display: grid;
    grid-template-columns: 20px max-content;
    gap: 10px;
    /* width: 100%; */
  }
</style>
