import { SvelteComponent } from "svelte";
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/iconbutton/outlined-icon-button.js';
import type { MdIconButton } from '@material/web/iconbutton/icon-button.js';
import type { MdEvent } from '../internal/relay.js';
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: "" | "filled" | "outlined" | "filled-tonal";
        disabled?: boolean;
        href?: string;
        target?: MdIconButton["target"];
        toggle?: boolean;
        selected?: boolean;
        type?: MdIconButton["type"];
        value?: string;
        name?: string | undefined;
    };
    events: {
        click: MdEvent<"click", "md-filled-icon-button" | "md-filled-tonal-icon-button" | "md-icon-button" | "md-outlined-icon-button">;
    };
    slots: {
        default: {};
        selected: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type IconButtonProps = typeof __propDef.props;
export type IconButtonEvents = typeof __propDef.events;
export type IconButtonSlots = typeof __propDef.slots;
export default class IconButton extends SvelteComponent<IconButtonProps, IconButtonEvents, IconButtonSlots> {
}
export {};
