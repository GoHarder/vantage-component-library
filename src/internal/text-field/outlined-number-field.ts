import '@material/web/field/outlined-field.js';
import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';

import { styles as outlinedStyles } from '@material/web/textfield/internal/outlined-styles.js';
import { OutlinedTextField } from '@material/web/textfield/internal/outlined-text-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

// MARK: Types
// ------------------------------------------------

import type { CSSResultOrNative } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-number-field': MdOutlinedNumberField;
  }
}

// MARK: Code
// ------------------------------------------------

@customElement('md-outlined-number-field')
export class MdOutlinedNumberField extends OutlinedTextField {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
  protected override readonly fieldTag = literal`md-outlined-field`;
}
