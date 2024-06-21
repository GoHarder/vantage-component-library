import { SvelteComponent } from "svelte";
import '@material/web/radio/radio.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        value?: string;
        checked?: boolean;
        name?: undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponent<RadioProps, RadioEvents, RadioSlots> {
}
export {};
