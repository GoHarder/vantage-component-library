import { SvelteComponent } from "svelte";
import '@material/web/chips/assist-chip.js';
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
    exports?: undefined;
    bindings?: undefined;
};
export type AssistChipProps = typeof __propDef.props;
export type AssistChipEvents = typeof __propDef.events;
export type AssistChipSlots = typeof __propDef.slots;
export default class AssistChip extends SvelteComponent<AssistChipProps, AssistChipEvents, AssistChipSlots> {
}
export {};
