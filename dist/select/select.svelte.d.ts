import { SvelteComponent } from "svelte";
import '@material/web/select/filled-select.js';
import '@material/web/select/outlined-select.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        outlined?: boolean | undefined;
        quick?: boolean | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        errorText?: string | undefined;
        label?: string | undefined;
        supportingText?: string | undefined;
        error?: boolean | undefined;
        menuPositioning?: "absolute" | "fixed" | "popover" | undefined;
        typeaheadDelay?: number | undefined;
        value?: string | undefined;
        selectedIndex?: number | undefined;
        name?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponent<SelectProps, SelectEvents, SelectSlots> {
}
export {};
