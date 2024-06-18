import { SvelteComponent } from "svelte";
import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        secondary?: boolean | undefined;
        inlineIcon?: boolean | undefined;
        active?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        icon: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TabProps = typeof __propDef.props;
export type TabEvents = typeof __propDef.events;
export type TabSlots = typeof __propDef.slots;
export default class Tab extends SvelteComponent<TabProps, TabEvents, TabSlots> {
}
export {};
