import { SvelteComponent } from "svelte";
import '@material/web/menu/menu.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        anchor?: string | undefined;
        positioning?: "absolute" | "fixed" | "document" | "popover" | undefined;
        quick?: boolean | undefined;
        hasOverflow?: boolean | undefined;
        open?: boolean | undefined;
        xOffset?: number | undefined;
        yOffset?: number | undefined;
        typeaheadDelay?: number | undefined;
        anchorCorner?: import("@material/web/menu/menu.js").Corner | undefined;
        menuCorner?: import("@material/web/menu/menu.js").Corner | undefined;
        stayOpenOnOutsideClick?: boolean | undefined;
        stayOpenOnFocusout?: boolean | undefined;
        skipRestoreFocus?: boolean | undefined;
        defaultFocus?: import("@material/web/menu/menu.js").FocusState | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponent<MenuProps, MenuEvents, MenuSlots> {
}
export {};
