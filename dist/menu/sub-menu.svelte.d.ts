import { SvelteComponent } from "svelte";
import '@material/web/menu/sub-menu.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        anchorCorner?: import("@material/web/menu/menu.js").Corner | undefined;
        menuCorner?: import("@material/web/menu/menu.js").Corner | undefined;
        hoverOpenDelay?: number | undefined;
        hoverCloseDelay?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        item: {};
        menu: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type SubMenuProps = typeof __propDef.props;
export type SubMenuEvents = typeof __propDef.events;
export type SubMenuSlots = typeof __propDef.slots;
export default class SubMenu extends SvelteComponent<SubMenuProps, SubMenuEvents, SubMenuSlots> {
}
export {};
