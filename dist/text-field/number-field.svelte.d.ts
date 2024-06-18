import { SvelteComponent } from "svelte";
import '../internal/text-field/filled-number-field.js';
import '../internal/text-field/outlined-number-field.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        metric?: boolean | undefined;
        outlined?: boolean | undefined;
        disabled?: boolean | undefined;
        error?: boolean | undefined;
        errorText?: string | undefined;
        label?: string | undefined;
        required?: boolean | undefined;
        value?: number | undefined;
        prefixText?: string | undefined;
        suffixText?: string | undefined;
        supportingText?: string | undefined;
        max?: string | undefined;
        min?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        multiple?: boolean | undefined;
        step?: string | undefined;
        type?: "number" | "area" | "angle" | "percent" | "pressure" | "speed" | "torque" | "weight" | undefined;
        autocomplete?: string | undefined;
        name?: undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'leading-icon': {};
        'trailing-icon': {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type NumberFieldProps = typeof __propDef.props;
export type NumberFieldEvents = typeof __propDef.events;
export type NumberFieldSlots = typeof __propDef.slots;
export default class NumberField extends SvelteComponent<NumberFieldProps, NumberFieldEvents, NumberFieldSlots> {
}
export {};
