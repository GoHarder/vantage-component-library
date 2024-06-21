import { SvelteComponent } from "svelte";
import '@material/web/progress/circular-progress.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: number;
        max?: number;
        indeterminate?: boolean;
        fourColor?: boolean;
        size?: "small" | "medium" | "large";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type CircularProgressProps = typeof __propDef.props;
export type CircularProgressEvents = typeof __propDef.events;
export type CircularProgressSlots = typeof __propDef.slots;
export default class CircularProgress extends SvelteComponent<CircularProgressProps, CircularProgressEvents, CircularProgressSlots> {
}
export {};
