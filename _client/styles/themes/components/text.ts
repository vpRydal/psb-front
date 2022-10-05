import { CSSProperties } from 'react';

import { IntentMap } from '@client/styles/specs';
import { Dictionary } from '@specs/_common/dictionary';
import TextName from '@specs/ui/text-name';
import ComponentThemeFactory from '@specs/ui/themes/component-factory';

export type Text = {
  weight: number;
  fontName: string;
  fontSize: string;
  uppercase: boolean;
  color: string;
  tagName: keyof HTMLElementTagNameMap;
  intent?: IntentMap;
  textAlign?: CSSProperties['textAlign']
}
export type TextTheme = Dictionary<TextName, Text>

type TextThemeFactory = ComponentThemeFactory<TextTheme>

export default TextThemeFactory;
