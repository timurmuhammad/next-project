'use client'

import Link from 'next/link';
import { getLocalStorage } from '@/hooks/getLocalStorage'
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useLocale } from '@/global/locale';

export const TranslatedLink = ({ href, children, ...props}) => {
  // const [locale, setLocale] = useLocalStorage('locale', 'en');
  const { locale } = useLocale();
  const baseUrl = 'https://react-project-zdxg.vercel.app';

  // console.log(locale)

  const translatedHref = `https://translate.google.com/translate?hl=${locale}&sl=en&tl=${locale}&u=${encodeURIComponent(
    `${baseUrl}${href}`
  )}`;

  const link = locale.toLowerCase() === 'en' ? href : translatedHref

  // console.log(link)

  return (
    <Link href={link} {...props}>
      {children}
    </Link>
  );
};