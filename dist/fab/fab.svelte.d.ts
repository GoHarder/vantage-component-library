import { SvelteComponent } from "svelte";
import '@material/web/fab/branded-fab.js';
import '@material/web/fab/fab.js';
import type { MdEvent } from '../internal/relay.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        branded?: boolean | undefined;
        variant?: ("surface" | "primary" | "secondary" | "tertiary") | undefined;
        size?: import("@material/web/fab/branded-fab.js").FabSize | undefined;
        label?: string | undefined;
        lowered?: boolean | undefined;
    };
    events: {
        click: MdEvent<"click", "md-branded-fab" | "md-fab">;
    };
    slots: {
        icon: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FabProps = typeof __propDef.props;
export type FabEvents = typeof __propDef.events;
export type FabSlots = typeof __propDef.slots;
export default class Fab extends SvelteComponent<FabProps, FabEvents, FabSlots> {
}
export {};
