import {createContext, useContext, type ReactNode} from 'react';
import {EN_DICTIONARY, type Dictionary, type SupportedLocale} from './en';

interface LocaleContextValue {
  locale: SupportedLocale;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  t: EN_DICTIONARY,
});

export function LocaleProvider({children}: {children: ReactNode}) {
  return (
    <LocaleContext.Provider value={{locale: 'en', t: EN_DICTIONARY}}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
