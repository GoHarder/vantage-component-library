import { SvelteComponent } from "svelte";
import '@material/web/chips/suggestion-chip.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        elevated?: boolean | undefined;
        href?: string | undefined;
        target?: "" | "_blank" | "_parent" | "_self" | "_top" | undefined;
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
export type SuggestionChipProps = typeof __propDef.props;
export type SuggestionChipEvents = typeof __propDef.events;
export type SuggestionChipSlots = typeof __propDef.slots;
export default class SuggestionChip extends SvelteComponent<SuggestionChipProps, SuggestionChipEvents, SuggestionChipSlots> {
}
export {};
