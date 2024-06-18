<script>import '@material/web/tabs/tabs.js';
import Relay from '../internal/relay.js';
export let autoActivate = false;
export let activeTabIndex = undefined;
const relay = new Relay();
$: actionProps = { activeTabIndex };
$: props = Relay.props($$props, ['autoActivate', 'activeTabIndex']);
relay.on('change', (event) => {
    activeTabIndex = event.target.activeTabIndex;
});
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
