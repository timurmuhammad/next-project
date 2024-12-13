import Link from 'next/link';
import { getLocalStorage } from '@/hooks/getLocalStorage'

export const TranslatedLink = ({ href, children, locale = getLocalStorage('locale') || 'en', ...props }) => {
  const baseUrl = 'https://react-project-zdxg.vercel.app';

  const translatedHref = `https://translate.google.com/translate?hl=${locale}&sl=en&tl=${locale}&u=${encodeURIComponent(
    `${baseUrl}${href}`
  )}`;

  return (
    <Link href={translatedHref} {...props}>
      {children}
    </Link>
  );
};