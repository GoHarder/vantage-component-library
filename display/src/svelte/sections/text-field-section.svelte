<script>
  import Section from './section.svelte';
  import { Icon } from '../../../../dist/icon';
  import { IconButton } from '../../../../dist/icon-button';
  import { LengthField, NumberField, TextField } from '../../../../dist/text-field';

  // Components
  // Stores
  // Properties
  export let expand = true;
  export let debug = false;

  // Methods
  // Constants
  const hero = {
    firstName: 'Odette',
    lastName: "D'Ambricourt",
    phone: undefined,
    address: undefined,
  };

  // Variables
  let field;
  let value = undefined;

  // Contexts
  // Subscriptions
  // Reactive Rules
  $: if (debug) {
    console.table(hero);
    // console.log('svelte', value);
  }

  // Events
  // Lifecycle
</script>

<Section bind:expand bind:debug>
  <h2 slot="header">Text Fields</h2>
  <div slot="supporting-text">
    <p>Text fields allow users to enter text into a UI.</p>
    <p>They typically appear in forms and dialogs.</p>
  </div>
  <form id="hero">
    <Icon style="grid-area: person-icon;">person</Icon>
    <TextField bind:value={hero.firstName} label="First name" outlined style="grid-area: first-name;" autocomplete="given-name" />
    <TextField bind:value={hero.lastName} label="Last name" outlined style="grid-area: last-name;" autocomplete="family-name" />
    <Icon style="grid-area: call-icon;">call</Icon>
    <TextField bind:value={hero.phone} label="Phone" outlined style="grid-area: phone;" type="tel" autocomplete="tel" />
    <Icon style="grid-area: location-on-icon;">location_on</Icon>
    <TextField bind:value={hero.address} label="Address" outlined style="grid-area: address;" autocomplete="street-address" />
  </form>

  {#if expand}
    <h3>Usage</h3>
    <TextField label="Label" value="Value" />
    <TextField label="Label" outlined value="Value" />

    <h3>Input types</h3>
    <TextField label="Username" type="email" />
    <TextField label="Password" type="password" />

    <h3>Text area</h3>
    <TextField label="Vertical resize" type="textarea" style="resize: vertical;" />

    <h3>Icons</h3>
    <TextField placeholder="Search for messages" type="search" outlined>
      <Icon slot="leading-icon">search</Icon>
    </TextField>
    <TextField label="Password" type="password" outlined>
      <Icon slot="trailing-icon">visibility</Icon>
    </TextField>
    <TextField label="Username" outlined error errorText="Username not available">
      <Icon slot="trailing-icon">error</Icon>
    </TextField>

    <h3>Prefix and suffix</h3>
    <TextField value={0} label="Dollar amount" outlined prefixText="$" suffixText=".00" />

    <h3>Supporting text</h3>
    <TextField label="Comments" supportingText="Provide comments for the issue" />
    <TextField label="Name" required supportingText="*required" errorText="Please fill out this field" />

    <h3>Character counter</h3>
    <TextField label="Title" value="Short" maxLength="10" />

    <h3>Number</h3>
    <NumberField label="Number" type="weight" metric />
    <NumberField outlined label="Number" type="weight" metric />

    <h3>Length</h3>
    <LengthField label="Length" />
    <LengthField outlined={true} label="Length" />
  {/if}
</Section>

<style>
  #hero {
    display: grid;
    grid-template-areas:
      'person-icon first-name'
      '. last-name'
      'call-icon phone'
      'location-on-icon address';
    grid-template-columns: 24px 213px;
    grid-auto-rows: 56px;
    align-items: center;
    gap: 12px;
  }
</style>
