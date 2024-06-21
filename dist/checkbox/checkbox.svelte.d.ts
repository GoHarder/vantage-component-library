import { SvelteComponent } from "svelte";
import '@material/web/checkbox/checkbox.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        checked?: boolean;
        disabled?: boolean;
        indeterminate?: boolean;
        required?: boolean;
        value?: string;
        name?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
