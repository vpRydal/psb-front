import { Dictionary } from '@specs/_common/dictionary';
import Size from '@specs/_common/size';
import Intent from '@specs/ui/intent';

export interface SizedProps {
  size: Size
}

export interface IntendedProps {
  intent: Intent
}

export type SizeMap <T = string> = Dictionary<Size, T>
