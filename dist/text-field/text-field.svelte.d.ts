import { SvelteComponent } from "svelte";
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        outlined?: boolean;
        disabled?: boolean;
        error?: boolean;
        errorText?: string;
        label?: string;
        required?: boolean;
        value?: string;
        noAsterisk?: boolean;
        prefixText?: string;
        suffixText?: string;
        supportingText?: string;
        rows?: number;
        cols?: number;
        inputMode?: string;
        max?: string;
        maxLength?: number;
        min?: string;
        minLength?: number;
        pattern?: string;
        placeholder?: string;
        readOnly?: boolean;
        multiple?: boolean;
        step?: string;
        type?: TextField["type"];
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
export type TextFieldProps = typeof __propDef.props;
export type TextFieldEvents = typeof __propDef.events;
export type TextFieldSlots = typeof __propDef.slots;
export default class TextField extends SvelteComponent<TextFieldProps, TextFieldEvents, TextFieldSlots> {
}
export {};
