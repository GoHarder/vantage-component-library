import '@material/web/field/filled-field.js';
import { FilledLengthField } from './internal/filled-length-field.js';
import type { CSSResultOrNative } from 'lit';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-length-field': MdFilledLengthField;
    }
}
export declare class MdFilledLengthField extends FilledLengthField {
    static styles: CSSResultOrNative[];
    protected readonly fieldTag: import("lit/static-html.js").StaticValue;
}
