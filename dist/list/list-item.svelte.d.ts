import { SvelteComponent } from "svelte";
import '@material/web/list/list-item.js';
import type { MdListItem } from '@material/web/list/list-item.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        type?: MdListItem["type"];
        href?: string;
        target?: MdListItem["target"];
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
