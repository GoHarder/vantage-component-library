<script lang="ts">
  import '@material/web/tabs/tabs.js';
  import Relay from '../internal/relay.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Whether or not to automatically select a tab when it is focused. */
  export let autoActivate = false;

  export let activeTabIndex: number | undefined = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-tabs', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { activeTabIndex };

  $: props = Relay.props($$props, ['autoActivate', 'activeTabIndex']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', (event) => {
    activeTabIndex = event.target.activeTabIndex;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.autoActivate = autoActivate;
  };

  relay.update = (node, props) => {
    if (props.activeTabIndex !== undefined) {
      node.activeTabIndex = props.activeTabIndex;
    }
  };
</script>

<md-tabs use:relay.action={actionProps} {...props}>
  <slot />
</md-tabs>
