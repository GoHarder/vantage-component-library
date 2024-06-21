import { SvelteComponent } from "svelte";
import '@material/web/menu/sub-menu.js';
import type { MdSubMenu } from '@material/web/menu/sub-menu.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        anchorCorner?: MdSubMenu["anchorCorner"];
        menuCorner?: MdSubMenu["menuCorner"];
        hoverOpenDelay?: number;
        hoverCloseDelay?: number;
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
