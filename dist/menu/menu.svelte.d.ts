import { SvelteComponent } from "svelte";
import '@material/web/menu/menu.js';
import type { MdMenu } from '@material/web/menu/menu.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        anchor?: string;
        positioning?: MdMenu["positioning"];
        quick?: boolean;
        hasOverflow?: boolean;
        open?: boolean;
        xOffset?: number;
        yOffset?: number;
        typeaheadDelay?: number;
        anchorCorner?: MdMenu["anchorCorner"];
        menuCorner?: MdMenu["menuCorner"];
        stayOpenOnOutsideClick?: boolean;
        stayOpenOnFocusout?: boolean;
        skipRestoreFocus?: boolean;
        defaultFocus?: MdMenu["defaultFocus"];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponent<MenuProps, MenuEvents, MenuSlots> {
}
export {};
