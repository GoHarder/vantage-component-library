import { __decorate } from "tslib";
import '@material/web/field/filled-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';
import { styles as filledStyles } from '@material/web/textfield/internal/filled-styles.js';
import { FilledLengthField } from './internal/filled-length-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
let MdFilledLengthField = class MdFilledLengthField extends FilledLengthField {
    static styles = [sharedStyles, filledStyles];
    fieldTag = literal `md-filled-field`;
};
MdFilledLengthField = __decorate([
    customElement('md-filled-length-field')
], MdFilledLengthField);
export { MdFilledLengthField };
