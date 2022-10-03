import { reaction } from 'mobx';
import { useEffect } from 'react';

import appContainer from '@data/misc/base-container';
import { FieldStore } from '@stores/_misc/field';
import { FormStore } from '@stores/_misc/form';
import LocaleStore from '@stores/_misc/locale';

const useForm = <T extends {[key:string]: FieldStore<any> | Array<FieldStore<any>> | T}> (form: FormStore<T>) => {
  useEffect(() => {
    const localeStore = appContainer.get(LocaleStore);

    const disposer = reaction(() => localeStore.locale, locale => {
      form.applyLocale(locale);
    });

    return () => {
      disposer();
    };
  }, []);

  return form.fields;
};

export default useForm;
