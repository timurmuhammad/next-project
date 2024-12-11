import Link from 'next/link';
import { useEffect } from 'react';
import { getLocalStorage } from '@/hooks/getLocalStorage'

export const TranslatedLink = ({ href, children, locale = getLocalStorage('locale') || 'uk', ...props }) => {
  const baseUrl = 'https://react-project-zdxg.vercel.app';

  // Создаём переведённый URL
  const translatedHref = `https://translate.google.com/translate?hl=${locale}&sl=en&tl=${locale}&u=${encodeURIComponent(
    `${baseUrl}${href}`
  )}`;

  // Предварительная загрузка данных
  // useEffect(() => {
    
  // }, [href]);

  return (
    <Link href={translatedHref} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};