<script>
  // Components
  import Section from './section.svelte';
  import { Button } from '../../../../dist/button';
  import { IconButton } from '../../../../dist/icon-button';
  import { Icon } from '../../../../dist/icon';
  import { Menu, MenuItem, SubMenu } from '../../../../dist/menu';
  // Stores
  // Properties
  export let expand = false;

  // Methods
  // Constants
  const open = {
    1: false,
    2: false,
    3: false,
    4: false,
  };

  // Variables
  let auto = false;

  // Contexts
  // Subscriptions
  // Reactive Rules
  // Events
  // Lifecycle

  function toggle(event) {
    const { index } = event.target.dataset;
    open[index] = !open[index];
  }
</script>

<Section {expand}>
  <h2 slot="header">Menus</h2>
  <div slot="supporting-text">
    <p>Menus display a list of choices on a temporary surface.</p>
    <p>They appear when users interact with a button, action, or other control.</p>
  </div>

  {#if expand}
    <div class="hero">
      <IconButton>
        <Icon>arrow_back</Icon>
      </IconButton>
      <span>
        <IconButton toggle>
          <Icon>star</Icon>
        </IconButton>
        <span style="position: relative;">
          <IconButton id="anchor-1" data-index="1" on:click={toggle}>
            <Icon>more_vert</Icon>
          </IconButton>
          <Menu bind:open={open[1]} anchor="anchor-1" id="menu-1" menuCorner="start-end" anchorCorner="end-end" yOffset="-1">
            <MenuItem>
              <div slot="headline">Revert</div>
            </MenuItem>
            <MenuItem>
              <div slot="headline">Settings</div>
            </MenuItem>
            <MenuItem>
              <div style="white-space: nowrap;" slot="headline">Send Feedback</div>
            </MenuItem>
            <MenuItem>
              <div slot="headline">Help</div>
            </MenuItem>
          </Menu>
        </span>
      </span>
    </div>
    <h3>Usage</h3>
  {/if}

  <span style="position: relative;">
    <Button id="anchor-2" data-index="2" variant="filled" on:click={toggle}>Menu</Button>
    <Menu bind:open={open[2]} anchor="anchor-2" id="menu-2">
      <MenuItem>
        <div slot="headline">Apple</div>
      </MenuItem>
      <MenuItem>
        <div slot="headline">Banana</div>
      </MenuItem>
      <MenuItem>
        <div slot="headline">Cucumber</div>
      </MenuItem>
    </Menu>
  </span>

  {#if expand}
    <h3>Submenus</h3>
    <span style="position: relative;">
      <Button id="anchor-3" data-index="3" variant="filled" on:click={toggle}>Menu with Submenus</Button>
      <Menu bind:open={open[3]} hasOverflow anchor="anchor-3" id="menu-3">
        <SubMenu>
          <MenuItem slot="item">
            <div slot="headline">Fruits with A</div>
            <Icon slot="end">arrow_right</Icon>
          </MenuItem>
          <Menu slot="menu">
            <MenuItem><div slot="headline">Apricot</div></MenuItem>
            <MenuItem><div slot="headline">Avocado</div></MenuItem>
            <SubMenu menuCorner="start-end" anchorCorner="start-start">
              <MenuItem slot="item">
                <div slot="headline">Apples</div>
                <Icon slot="start">arrow_left</Icon>
              </MenuItem>
              <Menu slot="menu">
                <MenuItem><div slot="headline">Fuji</div></MenuItem>
                <MenuItem>
                  <div slot="headline" style="white-space: nowrap;">Granny Smith</div>
                </MenuItem>
                <MenuItem>
                  <div slot="headline" style="white-space: nowrap;">Red Delicious</div>
                </MenuItem>
              </Menu>
            </SubMenu>
          </Menu>
        </SubMenu>
        <MenuItem><div slot="headline">Banana</div></MenuItem>
        <MenuItem><div slot="headline">Cucumber</div></MenuItem>
      </Menu>
    </span>

    <h3>Fixed menus</h3>
    <Button variant="filled" on:click={toggle} data-index="4" id="anchor-4">Open fixed menu</Button>
    <Menu bind:open={open[4]} positioning="fixed" id="menu-4" anchor="anchor-4">
      <MenuItem>
        <div slot="headline">Apple</div>
      </MenuItem>
      <MenuItem>
        <div slot="headline">Banana</div>
      </MenuItem>
      <MenuItem>
        <div slot="headline">Cucumber</div>
      </MenuItem>
    </Menu>

    <h3>Autocomplete</h3>

    <span style="position: relative;">
      <!-- <TextField label="State" name="state" list="browsers" on:focus={focusIn} on:change={focusOut} id="anchor-5" /> -->
      <Menu bind:open={auto} id="menu-5" anchor="anchor-5" yOffset="-1" defaultFocus="none">
        <MenuItem>
          <div slot="headline">Apple</div>
        </MenuItem>
        <MenuItem>
          <div slot="headline">Banana</div>
        </MenuItem>
        <MenuItem>
          <div slot="headline">Cucumber</div>
        </MenuItem>
      </Menu>
    </span>
  {/if}
</Section>

<style>
  .hero {
    display: flex;
    justify-content: space-between;
  }
</style>
