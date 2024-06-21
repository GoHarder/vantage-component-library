import { SvelteComponent } from "svelte";
import '@material/web/progress/linear-progress.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        buffer?: number;
        value?: number;
        max?: number;
        fourColor?: boolean;
        indeterminate?: boolean;
        visible?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type LinearProgressProps = typeof __propDef.props;
export type LinearProgressEvents = typeof __propDef.events;
export type LinearProgressSlots = typeof __propDef.slots;
export default class LinearProgress extends SvelteComponent<LinearProgressProps, LinearProgressEvents, LinearProgressSlots> {
}
export {};
