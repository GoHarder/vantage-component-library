<script lang="ts" context="module">
  let context = false;
  let reducedMotion: boolean | undefined;
</script>

<script lang="ts">
  import '@material/web/dialog/dialog.js';
  import { getContext } from 'svelte';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  // MARK: Properties
  // ------------------------------------------------

  /** Skips the opening and closing animations. */
  export let quick = false;

  /**
   * Gets or sets the dialog's return value, usually to indicate which
   * button a user pressed to close it.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue)
   */
  // export let returnValue = '';

  /**
   * The type of dialog for accessibility.
   * Set this to alert to announce a dialog as an alert dialog.
   */
  export let type: 'alert' | undefined = undefined;

  /**
   * Disables focus trapping, which by default keeps keyboard Tab navigation
   * within the dialog.
   *
   * When disabled, after focusing the last element of a dialog, pressing
   * Tab again will release focus from the window back to the
   * browser (such as the URL bar).
   *
   * Focus trapping is recommended for accessibility, and should not
   * typically be disabled.
   *
   * Only turn this off if the use case of a dialog is more accessible
   * without focus trapping.
   */
  export let noFocusTrap = false;

  export let open: boolean | undefined = undefined;

  // MARK: Methods
  // ------------------------------------------------

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-dialog', typeof actionProps>();

  // MARK: Contexts
  // ------------------------------------------------

  if (!context) reducedMotion = getContext('reducedMotion');

  if (reducedMotion) quick = true;

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { open };

  $: props = Relay.props($$props, ['open', 'returnValue', 'type', 'noFocusTrap', 'quick']);

  // MARK: Events
  // ------------------------------------------------

  relay.on('closed', (event) => {
    open = event.target.open;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.quick = quick;
    node.noFocusTrap = noFocusTrap;
    if (type) node.type = type;
  };

  relay.update = (node, props) => {
    if (props.open !== undefined) node.open = props.open;
  };
</script>

<md-dialog use:relay.action={actionProps} {...props}>
  {#if $$slots.headline}<slot name="headline" />{/if}
  {#if $$slots.content}<slot name="content" />{/if}
  {#if $$slots.actions}<slot name="actions" />{/if}
</md-dialog>
