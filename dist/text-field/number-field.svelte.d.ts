import { SvelteComponent } from "svelte";
import '../internal/text-field/filled-number-field.js';
import '../internal/text-field/outlined-number-field.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        metric?: boolean;
        outlined?: boolean;
        disabled?: boolean;
        error?: boolean;
        errorText?: string;
        label?: string;
        required?: boolean;
        value?: number | undefined;
        noAsterisk?: boolean;
        prefixText?: string;
        suffixText?: string;
        supportingText?: string;
        max?: string;
        min?: string;
        placeholder?: string;
        readOnly?: boolean;
        multiple?: boolean;
        step?: string;
        type?: "number" | "area" | "angle" | "percent" | "pressure" | "speed" | "torque" | "weight";
        autocomplete?: string;
        name?: undefined;
        noSpinner?: boolean;
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
