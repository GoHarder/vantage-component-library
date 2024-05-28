<script lang="ts">
  import '@material/web/slider/slider.js';
  import Relay from '../internal/relay.js';

  // MARK: Types
  // ------------------------------------------------

  // MARK: Properties
  // ------------------------------------------------

  /** Whether or not the slider is disabled. */
  export let disabled = false;

  /** The slider minimum value */
  export let min = 0;

  /** The slider maximum value */
  export let max = 100;

  /** The slider value displayed when range is false. */
  export let value: number | undefined = undefined;

  /** The slider start value displayed when range is true. */
  export let valueStart: number | undefined = undefined;

  /** The slider end value displayed when range is true. */
  export let valueEnd: number | undefined = undefined;

  /**
   * An optional label for the slider's value displayed when range is false;
   * if not set, the label is the value itself.
   */
  export let valueLabel = '';

  /**
   * An optional label for the slider's start value displayed when range is true;
   * if not set, the label is the valueStart itself.
   */
  export let valueLabelStart = '';

  /**
   * An optional label for the slider's end value displayed when range is true;
   * if not set, the label is the valueEnd itself.
   */
  export let valueLabelEnd = '';

  /** Whether or not to show tick marks. */
  export let step = 1;

  /** Whether or not to show tick marks. */
  export let ticks = false;

  /** Whether or not to show a value label when activated. */
  export let labeled = false;

  /**
   * Whether or not to show a value range.
   * When false, the slider displays a slide-able handle for the value property;
   * when true, it displays slide-able handles for the valueStart and valueEnd properties.
   */
  export let range = false;

  export let name: string | undefined = undefined;

  export let nameStart: string | undefined = undefined;

  export let nameEnd: string | undefined = undefined;

  // MARK: Constants
  // ------------------------------------------------

  const relay = new Relay<'md-slider', typeof actionProps>();

  // MARK: Reactive Rules
  // ------------------------------------------------

  $: actionProps = { disabled, value, valueStart, valueEnd, valueLabel, valueLabelStart, valueLabelEnd };

  $: props = Relay.props($$props, [
    'disabled',
    'min',
    'max',
    'value',
    'valueStart',
    'valueEnd',
    'valueLabel',
    'valueLabelStart',
    'valueLabelEnd',
    'step',
    'ticks',
    'labeled',
    'range',
    'name',
    'nameStart',
    'nameEnd',
  ]);

  // MARK: Events
  // ------------------------------------------------

  relay.on('change', (event) => {
    value = event.target.value;
    valueStart = event.target.valueStart;
    valueEnd = event.target.valueEnd;
  });

  // MARK: Lifecycle
  // ------------------------------------------------

  relay.init = (node) => {
    node.min = min;
    node.max = max;
    node.step = step;
    node.ticks = ticks;
    node.labeled = labeled;
    node.range = range;
    if (name) node.name = name;
    if (nameStart) node.nameStart = nameStart;
    if (nameEnd) node.nameEnd = nameEnd;
  };

  relay.update = (node, props) => {
    node.disabled = props.disabled;
    node.value = props.value;
    node.valueStart = props.valueStart;
    node.valueEnd = props.valueEnd;
    node.valueLabel = props.valueLabel;
    node.valueLabelStart = props.valueLabelStart;
    node.valueLabelEnd = props.valueLabelEnd;
  };
</script>

<md-slider use:relay.action={actionProps} {...props} />
