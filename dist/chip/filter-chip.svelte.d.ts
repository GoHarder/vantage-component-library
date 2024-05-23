import { SvelteComponent } from "svelte";
import '@material/web/chips/filter-chip.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        elevated?: boolean | undefined;
        removable?: boolean | undefined;
        selected?: boolean | undefined;
        disabled?: boolean | undefined;
        alwaysFocusable?: boolean | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
    };
};
export type FilterChipProps = typeof __propDef.props;
export type FilterChipEvents = typeof __propDef.events;
export type FilterChipSlots = typeof __propDef.slots;
export default class FilterChip extends SvelteComponent<FilterChipProps, FilterChipEvents, FilterChipSlots> {
}
export {};
