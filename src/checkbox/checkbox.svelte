<script lang="ts">
  import '@material/web/checkbox/checkbox.js';
  import Relay from '../internal/relay.js';

  // MARK: Properties
  // ------------------------------------------------

  /** Whether or not the checkbox is selected. */
  export let checked = false;

  /** Whether or not the checkbox is disabled. */
  export let disabled = false;

  /**
   * Whether or not the checkbox is indeterminate.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
   */
  export let indeterminate = false;

  /**
   * When true, require the checkbox to be selected when participating in form submission.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation)
   */
  export let required = false;

  /**
   * The value of the checkbox that is submitted with a form when selected.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value)
   */
  export let value = 'on';

  export let name: string | undefined = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-checkbox', typeof actionProps>();

  const props = Relay.props($$props, ['checked', 'disabled', 'indeterminate', 'required', 'value', 'name']);

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { checked, disabled };

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', (event) => {
    checked = event.target.checked;
    indeterminate = false;
  });

  // MARK: Lifecycle
  // ------------------------------------------------
  relay.init = (node) => {
    node.indeterminate = indeterminate;
    node.required = required;
    node.value = value;
    if (name) node.name = name;
  };

  relay.update = (node, props) => {
    node.checked = props.checked;
    node.disabled = props.disabled;
  };
</script>

<md-checkbox use:relay.action={actionProps} {...props} />
