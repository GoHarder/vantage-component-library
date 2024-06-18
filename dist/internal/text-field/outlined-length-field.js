import { __decorate } from "tslib";
import '@material/web/field/outlined-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';
import { styles as outlinedStyles } from '@material/web/textfield/internal/outlined-styles.js';
import { OutlinedLengthField } from './internal/outlined-length-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
let MdOutlinedLengthField = class MdOutlinedLengthField extends OutlinedLengthField {
    static styles = [sharedStyles, outlinedStyles];
    fieldTag = literal `md-outlined-field`;
};
MdOutlinedLengthField = __decorate([
    customElement('md-outlined-length-field')
], MdOutlinedLengthField);
export { MdOutlinedLengthField };
