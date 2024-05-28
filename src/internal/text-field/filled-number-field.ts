import { customElement } from 'lit/decorators.js';
import { literal } from 'lit/static-html.js';

import { styles as filledStyles } from '@material/web/textfield/internal/filled-styles.js';
import { FilledTextField } from '@material/web/textfield/internal/filled-text-field.js';

import { styles as sharedStyles } from './internal/shared-styles.js';

// MARK: Types
import type { CSSResultOrNative } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-number-field': MdFilledNumberField;
  }
}

// MARK: Code

@customElement('md-filled-number-field')
export class MdFilledNumberField extends FilledTextField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
  protected override readonly fieldTag = literal`md-filled-field`;
}
