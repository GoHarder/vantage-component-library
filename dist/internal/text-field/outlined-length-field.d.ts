import '@material/web/field/outlined-field.js';
import { OutlinedLengthField } from './internal/outlined-length-field.js';
import type { CSSResultOrNative } from 'lit';
declare global {
    interface HTMLElementTagNameMap {
        'md-outlined-length-field': MdOutlinedLengthField;
    }
}
export declare class MdOutlinedLengthField extends OutlinedLengthField {
    static styles: CSSResultOrNative[];
    protected readonly fieldTag: import("lit/static-html.js").StaticValue;
}
