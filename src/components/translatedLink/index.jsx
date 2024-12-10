import Link from 'next/link';
import { useEffect } from 'react';

export const TranslatedLink = ({ href, children, locale = 'uk', ...props }) => {
  const baseUrl = 'https://react-project-zdxg.vercel.app';

  // Создаём переведённый URL
  const translatedHref = `https://translate.google.com/translate?hl=${locale}&sl=en&tl=${locale}&u=${encodeURIComponent(
    `${baseUrl}${href}`
  )}`;

  // Предварительная загрузка данных
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `${baseUrl}${href}`;
      link.as = 'document';
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [href]);

  return (
    <Link href={translatedHref} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};