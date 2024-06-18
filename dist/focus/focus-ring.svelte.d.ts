import { SvelteComponent } from "svelte";
import '@material/web/focus/md-focus-ring.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        visible?: boolean | undefined;
        inward?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type FocusRingProps = typeof __propDef.props;
export type FocusRingEvents = typeof __propDef.events;
export type FocusRingSlots = typeof __propDef.slots;
export default class FocusRing extends SvelteComponent<FocusRingProps, FocusRingEvents, FocusRingSlots> {
}
export {};
