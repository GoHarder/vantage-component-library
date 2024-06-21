import { SvelteComponent } from "svelte";
import '@material/web/chips/filter-chip.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        elevated?: boolean;
        removable?: boolean;
        selected?: boolean;
        disabled?: boolean;
        alwaysFocusable?: boolean;
        label?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type FilterChipProps = typeof __propDef.props;
export type FilterChipEvents = typeof __propDef.events;
export type FilterChipSlots = typeof __propDef.slots;
export default class FilterChip extends SvelteComponent<FilterChipProps, FilterChipEvents, FilterChipSlots> {
}
export {};
