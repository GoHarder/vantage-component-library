import { __decorate } from "tslib";
import '@material/web/field/filled-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';
import { styles as filledStyles } from '@material/web/textfield/internal/filled-styles.js';
import { FilledTextField } from '@material/web/textfield/internal/filled-text-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
let MdFilledNumberField = class MdFilledNumberField extends FilledTextField {
    static styles = [sharedStyles, filledStyles];
    fieldTag = literal `md-filled-field`;
};
MdFilledNumberField = __decorate([
    customElement('md-filled-number-field')
], MdFilledNumberField);
export { MdFilledNumberField };
