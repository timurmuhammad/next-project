'use client'

import React, { createContext, useContext, useState } from "react";
import {getLocalStorage} from '@/hooks/getLocalStorage'
import { useSearchParams } from 'next/navigation'

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const params = useSearchParams()
  const search = params?.get('_x_tr_tl');
  const [locale, setLocale] = useState(getLocalStorage('locale') || search || 'EN');
  const updateLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
