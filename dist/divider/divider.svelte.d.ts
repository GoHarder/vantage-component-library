import { SvelteComponent } from "svelte";
import '@material/web/divider/divider.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        inset?: boolean | undefined;
        insetStart?: boolean | undefined;
        insetEnd?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type DividerProps = typeof __propDef.props;
export type DividerEvents = typeof __propDef.events;
export type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponent<DividerProps, DividerEvents, DividerSlots> {
}
export {};
