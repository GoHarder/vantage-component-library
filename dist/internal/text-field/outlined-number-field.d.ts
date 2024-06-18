import '@material/web/field/outlined-field.js';
import { OutlinedTextField } from '@material/web/textfield/internal/outlined-text-field.js';
import type { CSSResultOrNative } from 'lit';
declare global {
    interface HTMLElementTagNameMap {
        'md-outlined-number-field': MdOutlinedNumberField;
    }
}
export declare class MdOutlinedNumberField extends OutlinedTextField {
    static styles: CSSResultOrNative[];
    protected readonly fieldTag: import("lit/static-html.js").StaticValue;
}
