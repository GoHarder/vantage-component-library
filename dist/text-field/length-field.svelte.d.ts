import { SvelteComponent } from "svelte";
import '../internal/text-field/filled-length-field.js';
import '../internal/text-field/outlined-length-field.js';
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
        prefixText?: string;
        suffixText?: string;
        supportingText?: string;
        max?: string;
        min?: string;
        placeholder?: string;
        readOnly?: boolean;
        multiple?: boolean;
        step?: string;
        autocomplete?: string;
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
export type LengthFieldProps = typeof __propDef.props;
export type LengthFieldEvents = typeof __propDef.events;
export type LengthFieldSlots = typeof __propDef.slots;
export default class LengthField extends SvelteComponent<LengthFieldProps, LengthFieldEvents, LengthFieldSlots> {
}
export {};
