import { SvelteComponent } from "svelte";
import '@material/web/menu/menu-item.js';
import type { MdMenuItem } from '@material/web/menu/menu-item.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        type?: MdMenuItem["type"];
        href?: string;
        target?: MdMenuItem["target"];
        keepOpen?: boolean;
        selected?: boolean;
        typeaheadText?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        start: {};
        headline: {};
        end: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type MenuItemProps = typeof __propDef.props;
export type MenuItemEvents = typeof __propDef.events;
export type MenuItemSlots = typeof __propDef.slots;
export default class MenuItem extends SvelteComponent<MenuItemProps, MenuItemEvents, MenuItemSlots> {
}
export {};
