import { SvelteComponent } from "svelte";
import '@material/web/dialog/dialog.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        quick?: boolean;
        type?: "alert" | undefined;
        noFocusTrap?: boolean;
        open?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        headline: {};
        content: {};
        actions: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponent<DialogProps, DialogEvents, DialogSlots> {
}
export {};
