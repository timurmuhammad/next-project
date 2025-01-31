'use client'

import Link from 'next/link';
// import { getLocalStorage } from '@/hooks/getLocalStorage'
// import { useLocalStorage } from '@/hooks/useLocalStorage';
// import { useLocale } from '@/global/locale';

export const TranslatedLink = ({ href, children, ...props}) => {
  // const { locale } = useLocale();
  // const baseUrl = 'https://danish-mukhammad.vercel.app';

  // const translatedHref = `https://translate.google.com/translate?hl=${locale}&sl=en&tl=${locale}&u=${encodeURIComponent(
  //   `${baseUrl}${href}`
  // )}`;

  //const link = locale === 'en' ? href : translatedHref

  return (
    <Link href={/*link*/href} {...props}>
      {children}
    </Link>
  );
};