import { SvelteComponent } from "svelte";
import '@material/web/chips/input-chip.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        avatar?: boolean | undefined;
        href?: string | undefined;
        target?: "" | "_blank" | "_parent" | "_self" | "_top" | undefined;
        removeOnly?: boolean | undefined;
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
    exports?: undefined;
    bindings?: undefined;
};
export type InputChipProps = typeof __propDef.props;
export type InputChipEvents = typeof __propDef.events;
export type InputChipSlots = typeof __propDef.slots;
export default class InputChip extends SvelteComponent<InputChipProps, InputChipEvents, InputChipSlots> {
}
export {};
