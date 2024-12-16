import Link from 'next/link';
import { getLocalStorage } from '@/hooks/getLocalStorage'
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const TranslatedLink = ({ href, children, ...props }) => {
  const [locale, setLocale] = useLocalStorage('locale', 'en');
  const baseUrl = 'https://react-project-zdxg.vercel.app';

  const translatedHref = `https://translate.google.com/translate?hl=${locale}&sl=en&tl=${locale}&u=${encodeURIComponent(
    `${baseUrl}${href}`
  )}`;

  console.log(locale)

  return (
    <Link href={locale.toLowerCase() === 'en' ? href : translatedHref} {...props}>
      {children}
    </Link>
  );
};