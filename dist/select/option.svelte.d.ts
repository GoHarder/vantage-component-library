import { SvelteComponent } from "svelte";
import '@material/web/select/select-option.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        selected?: boolean;
        value?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        end: {};
        headline: {};
        overline: {};
        start: {};
        'supporting-text': {};
        'trailing-supporting-text': {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type OptionProps = typeof __propDef.props;
export type OptionEvents = typeof __propDef.events;
export type OptionSlots = typeof __propDef.slots;
export default class Option extends SvelteComponent<OptionProps, OptionEvents, OptionSlots> {
}
export {};
