import { SvelteComponent } from "svelte";
import '@material/web/progress/linear-progress.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        buffer?: number | undefined;
        value?: number | undefined;
        max?: number | undefined;
        fourColor?: boolean | undefined;
        indeterminate?: boolean | undefined;
        visible?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LinearProgressProps = typeof __propDef.props;
export type LinearProgressEvents = typeof __propDef.events;
export type LinearProgressSlots = typeof __propDef.slots;
export default class LinearProgress extends SvelteComponent<LinearProgressProps, LinearProgressEvents, LinearProgressSlots> {
}
export {};
