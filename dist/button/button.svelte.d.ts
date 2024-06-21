import { SvelteComponent } from "svelte";
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import type { MdEvent } from '../internal/relay.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: "filled" | "outlined" | "text" | "elevated" | "filled-tonal";
        disabled?: boolean;
        href?: string;
        target?: Button["target"];
        trailingIcon?: boolean;
        type?: Button["type"];
        value?: string;
        name?: string | undefined;
    };
    events: {
        click: MdEvent<"click", "md-elevated-button" | "md-filled-button" | "md-filled-tonal-button" | "md-outlined-button" | "md-text-button">;
    };
    slots: {
        default: {};
        icon: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
