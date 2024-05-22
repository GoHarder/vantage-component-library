<script>
  // Components
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

<section class="component">
  <header>
    <slot name="header" />
    {#if expand}
      <slot name="supporting-text" />
    {/if}
  </header>
  <div class="container">
    <slot />
  </div>
</section>

<style global lang="scss">
  section.component {
    --md-elevation-level: 1;

    // layout
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    width: max-content;
    margin: 8px;

    // position
    position: relative;

    // style
    border-radius: 12px;
    background: var(--md-sys-color-surface-container-low);

    header {
      // layout
      display: flex;
      padding: 12px 16px;
      align-items: flex-start;
      align-self: stretch;
      flex-direction: column;
      gap: 4px;
      flex: 1 0 0;

      h2 {
        // typography
        color: var(--md-sys-color-on-surface);

        // M3/title/medium
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
        letter-spacing: 0.15px;
        margin: 0;
      }

      p {
        // typography
        color: var(--md-sys-color-on-surface);

        // M3/body/medium
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.25px;
        margin: 0;
      }
    }

    .container {
      align-self: stretch;
      padding: 12px 16px;
      min-height: 20px;
      background-color: var(--md-sys-color-surface-container-high);
      border-radius: 12px;

      h3 {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
        letter-spacing: 0.1px;
      }
    }
  }
</style>
