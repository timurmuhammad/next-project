'use client'

// import React, { createContext, useContext, useState } from 'react';

// const LocaleContext = createContext();

// export const LocaleProvider = ({ children }) => {
//   const [locale, setLocale] = useState('en');

//   return (
//     <LocaleContext.Provider value={{ locale, setLocale }}>
//       {children}
//     </LocaleContext.Provider>
//   );
// };

// export const useLocale = () => useContext(LocaleContext);


import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import {getLocalStorage} from '@/hooks/getLocalStorage'
import { useSearchParams } from 'next/navigation'

// Создаем контекст
const LocaleContext = createContext();

// Провайдер контекста
export const LocaleProvider = ({ children }) => {
  const searchParams = () => {
    return window.location.search
  }
  const params = new URLSearchParams(searchParams());
  const search = params?.get('_x_tr_tl');
  // const params = useSearchParams()
  // const search = params?.get('_x_tr_tl');
  const [locale, setLocale] = useState(/*localStorage.getItem("locale") || "en"*/ getLocalStorage('locale') || search || 'EN');

  // useEffect(() => {
  //   const storedLocale = localStorage.getItem("locale") || "en";
  //   setLocale(storedLocale);
  // }, []);

  const updateLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  console.log(search)
  console.log(locale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale: updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

// export const useLocale = () => {
//   const context = useContext(LocaleContext);
//   if (!context) {
//     throw new Error("useLocale must be used within a LocaleProvider");
//   }
//   return context;
// };
