import '@material/web/field/filled-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';

import { styles as filledStyles } from '@material/web/textfield/internal/filled-styles.js';
import { FilledLengthField } from './internal/filled-length-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

// MARK: Types
// ------------------------------------------------

import type { CSSResultOrNative } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-length-field': MdFilledLengthField;
  }
}

// MARK: Code
// ------------------------------------------------

@customElement('md-filled-length-field')
export class MdFilledLengthField extends FilledLengthField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
  protected override readonly fieldTag = literal`md-filled-field`;
}
