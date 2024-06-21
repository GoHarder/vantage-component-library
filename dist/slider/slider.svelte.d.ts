import { SvelteComponent } from "svelte";
import '@material/web/slider/slider.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean;
        min?: number;
        max?: number;
        value?: number | undefined;
        valueStart?: number | undefined;
        valueEnd?: number | undefined;
        valueLabel?: string;
        valueLabelStart?: string;
        valueLabelEnd?: string;
        step?: number;
        ticks?: boolean;
        labeled?: boolean;
        range?: boolean;
        name?: string | undefined;
        nameStart?: string | undefined;
        nameEnd?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
export default class Slider extends SvelteComponent<SliderProps, SliderEvents, SliderSlots> {
}
export {};
