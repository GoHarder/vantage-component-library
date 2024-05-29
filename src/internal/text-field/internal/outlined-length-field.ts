import '@material/web/field/filled-field.js';
import { literal } from 'lit/static-html.js';

// import { TextField } from './text-field.js';
import { TextField } from '@material/web/textfield/internal/text-field.js';

/**
 * An outlined text field component
 */
export class OutlinedLengthField extends TextField {
  protected readonly fieldTag = literal`md-outlined-field`;
}
