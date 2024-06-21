import { SvelteComponent } from "svelte";
import '@material/web/ripple/ripple';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type RippleProps = typeof __propDef.props;
export type RippleEvents = typeof __propDef.events;
export type RippleSlots = typeof __propDef.slots;
export default class Ripple extends SvelteComponent<RippleProps, RippleEvents, RippleSlots> {
}
export {};
