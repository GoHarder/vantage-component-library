import { SvelteComponent } from "svelte";
import '@material/web/switch/switch.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        selected?: boolean;
        icons?: boolean;
        showOnlySelectedIcon?: boolean;
        required?: boolean;
        value?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponent<SwitchProps, SwitchEvents, SwitchSlots> {
}
export {};
