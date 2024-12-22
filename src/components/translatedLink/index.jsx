'use client'

import Link from 'next/link';
import { getLocalStorage } from '@/hooks/getLocalStorage'
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useLocale } from '@/global/locale';

export const TranslatedLink = ({ href, children, ...props}) => {
  const { locale } = useLocale();
  const baseUrl = 'https://react-project-zdxg.vercel.app';

  const translatedHref = `https://translate.google.com/translate?hl=${locale}&sl=en&tl=${locale}&u=${encodeURIComponent(
    `${baseUrl}${href}`
  )}`;

  const link = locale === 'en' || locale === 'EN' ? href : translatedHref

  return (
    <Link href={link} {...props}>
      {children}
    </Link>
  );
};