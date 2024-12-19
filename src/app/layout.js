import { sofiaPro, inter } from "../ui/fonts/index"
import "@/ui/globals.scss";
import { LocaleProvider } from '@/global/locale';

export default function RootLayout({ children }) {
  return (
    <LocaleProvider>
      <html lang="en">
        <body className={sofiaPro.className}>{children}</body>
      </html>
    </LocaleProvider>
  );
}
