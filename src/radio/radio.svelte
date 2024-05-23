<script lang="ts">
  import '@material/web/radio/radio.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdRadio } from '@material/web/radio/radio.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Whether or not the radio is disabled. */
  export let disabled = false;

  /** The element value to use in form submission when checked. */
  export let value = 'on';

  export let checked = false;

  export let name = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-radio', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, checked };
  $: props = Relay.props($$props, ['disabled', 'checked', 'value', 'name']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', (event) => {
    checked = event.target.checked;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.value = value;
    if (name) node.name = name;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.checked = props.checked;
  };
</script>

<md-radio use:relay.action={actionProps} {...props} />
