import { SvelteComponent } from "svelte";
import '@material/web/menu/menu-item.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean | undefined;
        type?: import("@material/web/menu/internal/controllers/menuItemController.js").MenuItemType | undefined;
        href?: string | undefined;
        target?: "" | "_blank" | "_parent" | "_self" | "_top" | undefined;
        keepOpen?: boolean | undefined;
        selected?: boolean | undefined;
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
