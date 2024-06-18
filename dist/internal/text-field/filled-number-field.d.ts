import '@material/web/field/filled-field.js';
import { FilledTextField } from '@material/web/textfield/internal/filled-text-field.js';
import type { CSSResultOrNative } from 'lit';
declare global {
    interface HTMLElementTagNameMap {
        'md-filled-number-field': MdFilledNumberField;
    }
}
export declare class MdFilledNumberField extends FilledTextField {
    static styles: CSSResultOrNative[];
    protected readonly fieldTag: import("lit/static-html.js").StaticValue;
}
