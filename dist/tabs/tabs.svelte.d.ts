import { SvelteComponent } from "svelte";
import '@material/web/tabs/tabs.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        autoActivate?: boolean | undefined;
        activeTabIndex?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
export default class Tabs extends SvelteComponent<TabsProps, TabsEvents, TabsSlots> {
}
export {};
