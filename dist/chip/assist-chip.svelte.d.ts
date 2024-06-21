import { SvelteComponent } from "svelte";
import '@material/web/chips/assist-chip.js';
import type { MdAssistChip } from '@material/web/chips/assist-chip.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        elevated?: boolean;
        href?: string;
        target?: MdAssistChip["target"];
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
export type AssistChipProps = typeof __propDef.props;
export type AssistChipEvents = typeof __propDef.events;
export type AssistChipSlots = typeof __propDef.slots;
export default class AssistChip extends SvelteComponent<AssistChipProps, AssistChipEvents, AssistChipSlots> {
}
export {};
