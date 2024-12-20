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

// Создаем контекст
const LocaleContext = createContext();

// Провайдер контекста
export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(/*localStorage.getItem("locale") || "en"*/ /*getLocalStorage('locale') || 'EN'*/);

  // useEffect(() => {
  //   const storedLocale = localStorage.getItem("locale") || "en";
  //   setLocale(storedLocale);
  // }, []);

  useLayoutEffect(() => {
    const storedLocale = localStorage.getItem('locale') || 'EN';
    setLocale(storedLocale);
  }, []);

  const updateLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

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
