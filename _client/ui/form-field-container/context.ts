import { createContext } from 'react';

export type IFormFieldContext = {
  id: string;
  onBlur: () => void;
  onFocus: () => void;
}

const FormFieldContext = createContext<IFormFieldContext | undefined>({
  id: '',
  onBlur: () => ({}),
  onFocus: () => ({}),
});

export default FormFieldContext;
