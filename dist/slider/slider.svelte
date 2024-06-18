<script>import '@material/web/slider/slider.js';
import Relay from '../internal/relay.js';
export let disabled = false;
export let min = 0;
export let max = 100;
export let value = undefined;
export let valueStart = undefined;
export let valueEnd = undefined;
export let valueLabel = '';
export let valueLabelStart = '';
export let valueLabelEnd = '';
export let step = 1;
export let ticks = false;
export let labeled = false;
export let range = false;
export let name = undefined;
export let nameStart = undefined;
export let nameEnd = undefined;
const relay = new Relay();
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
relay.on('change', (event) => {
    value = event.target.value;
    valueStart = event.target.valueStart;
    valueEnd = event.target.valueEnd;
});
relay.init = (node) => {
    node.min = min;
    node.max = max;
    node.step = step;
    node.ticks = ticks;
    node.labeled = labeled;
    node.range = range;
    if (name)
        node.name = name;
    if (nameStart)
        node.nameStart = nameStart;
    if (nameEnd)
        node.nameEnd = nameEnd;
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
