import { SvelteComponent } from "svelte";
import '@material/web/list/list-item.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean | undefined;
        type?: import("@material/web/list/list-item.js").ListItemType | undefined;
        href?: string | undefined;
        target?: "" | "_blank" | "_parent" | "_self" | "_top" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        start: {};
        end: {};
        'start-image': {};
        overline: {};
        headline: {};
        'supporting-text': {};
        'trailing-supporting-text': {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ListItemProps = typeof __propDef.props;
export type ListItemEvents = typeof __propDef.events;
export type ListItemSlots = typeof __propDef.slots;
export default class ListItem extends SvelteComponent<ListItemProps, ListItemEvents, ListItemSlots> {
}
export {};
