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
        variant?: ("text" | "elevated" | "filled" | "filled-tonal" | "outlined") | undefined;
        disabled?: boolean | undefined;
        href?: string | undefined;
        target?: "" | "_blank" | "_parent" | "_self" | "_top" | undefined;
        trailingIcon?: boolean | undefined;
        type?: import("@material/web/internal/controller/form-submitter.js").FormSubmitterType | undefined;
        value?: string | undefined;
        name?: string | undefined;
    };
    events: {
        click: MdEvent<"click", "md-elevated-button" | "md-filled-button" | "md-filled-tonal-button" | "md-outlined-button" | "md-text-button">;
    };
    slots: {
        default: {};
        icon: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
