import '@material/web/field/outlined-field.js';
import { literal } from 'lit/static-html.js';
import { TextField } from './text-field.js';
export class OutlinedLengthField extends TextField {
    fieldTag = literal `md-outlined-field`;
}
