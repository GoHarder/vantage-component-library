import { SvelteComponent } from "svelte";
import '@material/web/chips/suggestion-chip.js';
import type { MdSuggestionChip } from '@material/web/chips/suggestion-chip.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        elevated?: boolean;
        href?: string;
        target?: MdSuggestionChip["target"];
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
export type SuggestionChipProps = typeof __propDef.props;
export type SuggestionChipEvents = typeof __propDef.events;
export type SuggestionChipSlots = typeof __propDef.slots;
export default class SuggestionChip extends SvelteComponent<SuggestionChipProps, SuggestionChipEvents, SuggestionChipSlots> {
}
export {};
