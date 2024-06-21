import { SvelteComponent } from "svelte";
import '@material/web/chips/input-chip.js';
import type { MdInputChip } from '@material/web/chips/input-chip.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        avatar?: boolean;
        href?: string;
        target?: MdInputChip["target"];
        removeOnly?: boolean;
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
export type InputChipProps = typeof __propDef.props;
export type InputChipEvents = typeof __propDef.events;
export type InputChipSlots = typeof __propDef.slots;
export default class InputChip extends SvelteComponent<InputChipProps, InputChipEvents, InputChipSlots> {
}
export {};
