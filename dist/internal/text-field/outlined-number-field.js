import { __decorate } from "tslib";
import '@material/web/field/outlined-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';
import { styles as outlinedStyles } from '@material/web/textfield/internal/outlined-styles.js';
import { OutlinedTextField } from '@material/web/textfield/internal/outlined-text-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
let MdOutlinedNumberField = class MdOutlinedNumberField extends OutlinedTextField {
    static styles = [sharedStyles, outlinedStyles];
    fieldTag = literal `md-outlined-field`;
};
MdOutlinedNumberField = __decorate([
    customElement('md-outlined-number-field')
], MdOutlinedNumberField);
export { MdOutlinedNumberField };
