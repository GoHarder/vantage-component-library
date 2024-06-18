import { SvelteComponent } from "svelte";
import '../internal/text-field/filled-length-field.js';
import '../internal/text-field/outlined-length-field.js';
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
export type LengthFieldProps = typeof __propDef.props;
export type LengthFieldEvents = typeof __propDef.events;
export type LengthFieldSlots = typeof __propDef.slots;
export default class LengthField extends SvelteComponent<LengthFieldProps, LengthFieldEvents, LengthFieldSlots> {
}
export {};
