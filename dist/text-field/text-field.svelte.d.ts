import { SvelteComponent } from "svelte";
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        outlined?: boolean | undefined;
        disabled?: boolean | undefined;
        error?: boolean | undefined;
        errorText?: string | undefined;
        label?: string | undefined;
        required?: boolean | undefined;
        value?: string | undefined;
        prefixText?: string | undefined;
        suffixText?: string | undefined;
        supportingText?: string | undefined;
        rows?: number | undefined;
        cols?: number | undefined;
        inputMode?: string | undefined;
        max?: string | undefined;
        maxLength?: number | undefined;
        min?: string | undefined;
        minLength?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        multiple?: boolean | undefined;
        step?: string | undefined;
        type?: import("@material/web/textfield/filled-text-field.js").TextFieldType | import("@material/web/textfield/internal/text-field.js").UnsupportedTextFieldType | undefined;
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
export type TextFieldProps = typeof __propDef.props;
export type TextFieldEvents = typeof __propDef.events;
export type TextFieldSlots = typeof __propDef.slots;
export default class TextField extends SvelteComponent<TextFieldProps, TextFieldEvents, TextFieldSlots> {
}
export {};
