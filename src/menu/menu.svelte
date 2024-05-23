<script lang="ts">
  import '@material/web/menu/menu.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  import type { MdMenu } from '@material/web/menu/menu.js';

  // MARK: Properties
  // ------------------------------------------------

  /**
   * The ID of the element in the same root node in which the menu should align to.
   * Overrides setting `anchorElement = elementReference`.
   *
   * NOTE: anchor or anchorElement must either be an HTMLElement or resolve to an HTMLElement in order for menu to open.
   */
  export let anchor = '';

  /**
   * Whether the positioning algorithm should calculate relative to the parent of the anchor element (absolute) or relative to the window (fixed).
   *
   * Examples for `position = 'fixed'`:
   * - If there is no `position:relative` in the given parent tree and the surface is `position:absolute`
   * - If the surface is `position:fixed` - If the surface is in the "top layer"
   * - The anchor and the surface do not share a common `position:relative` ancestor
   * When using positioning = fixed, in most cases, the menu should position itself above most other `position:absolute` or `position:fixed` elements when placed inside of them. e.g. using a menu inside of an `md-dialog`.
   *
   * NOTE: Fixed menus will not scroll with the page and will be fixed to the window instead.
   */
  export let positioning: MdMenu['positioning'] = 'absolute';

  /** Skips the opening and closing animations. @type {Menu["quick"]} */
  export let quick = false;

  /**
   * Displays overflow content like a submenu.
   *
   * NOTE: This may cause adverse effects if you set `md-menu {max-height:...}` and have items overflowing items in the "y" direction.
   */
  export let hasOverflow = false;

  /**
   * Opens the menu and makes it visible.
   * Alternative to the `.show()` and `.close()` methods.
   */
  export let open = false;

  /**
   * Offsets the menu's inline alignment from the anchor by the given number in pixels. This value is direction aware and will follow the LTR / RTL direction.
   * e.g.
   * - LTR: positive -> right, negative -> left
   * - RTL: positive -> left, negative -> right
   */
  export let xOffset = 0;

  /**
   * Offsets the menu's block alignment from the anchor by the given number in pixels.
   * e.g. positive -> down, negative -> up
   */
  export let yOffset = 0;

  /**
   * The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer.
   */
  export let typeaheadDelay = 200;

  /**
   * The corner of the anchor which to align the menu in the standard logical property style of - e.g. `'end-start'`.
   *
   * NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outside the viewport.
   */
  export let anchorCorner: MdMenu['anchorCorner'] = 'end-start';

  /**
   * The corner of the menu which to align the anchor in the standard logical property style of - e.g. `'start-start'`.
   *
   * NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outside the viewport.
   */
  export let menuCorner: MdMenu['menuCorner'] = 'start-start';

  /**
   * Keeps the user clicks outside the menu.
   * NOTE: clicking outside may still cause focusout to close the menu so see `stayOpenOnFocusout`.
   */
  export let stayOpenOnOutsideClick = false;

  /**
   * Keeps the menu open when focus leaves the menu's composed subtree.
   *
   * NOTE: Focusout behavior will stop propagation of the focusout event.
   * Set this property to true to opt-out of menu's focusout handling altogether.
   */
  export let stayOpenOnFocusout = false;

  /**
   * After closing, does not restore focus to the last focused element before the menu was opened.
   */
  export let skipRestoreFocus = false;

  /**
   * The element that should be focused by default once opened.
   *
   * NOTE: When setting default focus to 'LIST_ROOT', remember to change `tabindex` to `0` and change md-menu's display to something other than `display:contents` when necessary.
   */
  export let defaultFocus: MdMenu['defaultFocus'] = 'first-item';

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-menu', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { open };

  $: props = Relay.props($$props, [
    'anchor',
    'positioning',
    'quick',
    'hasOverflow',
    'open',
    'xOffset',
    'yOffset',
    'typeaheadDelay',
    'anchorCorner',
    'menuCorner',
    'stayOpenOnOutsideClick',
    'stayOpenOnFocusout',
    'skipRestoreFocus',
    'defaultFocus',
  ]);

  // MARK: Events
  // ------------------------------------------------
  relay.on('closed', (event) => {
    open = event.target.open;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.anchor = anchor;
    node.positioning = positioning;
    node.quick = quick;
    node.hasOverflow = hasOverflow;
    node.xOffset = xOffset;
    node.yOffset = yOffset;
    node.typeaheadDelay = typeaheadDelay;
    node.anchorCorner = anchorCorner;
    node.menuCorner = menuCorner;
    node.stayOpenOnOutsideClick = stayOpenOnOutsideClick;
    node.stayOpenOnFocusout = stayOpenOnFocusout;
    node.skipRestoreFocus = skipRestoreFocus;
    node.defaultFocus = defaultFocus;
  };

  relay.update = (node, props) => {
    node.open = props.open;
  };
</script>

<md-menu use:relay.action={actionProps} {...props}>
  <slot />
</md-menu>
