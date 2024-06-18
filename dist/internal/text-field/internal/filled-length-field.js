import '@material/web/field/filled-field.js';
import { literal } from 'lit/static-html.js';
import { TextField } from './text-field.js';
export class FilledLengthField extends TextField {
    fieldTag = literal `md-filled-field`;
}
