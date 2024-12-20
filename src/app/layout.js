

import { sofiaPro, inter } from "../ui/fonts/index"
import "@/ui/globals.scss";
import { LocaleProvider } from '@/global/locale';
import { Suspense } from "react";
import { Header } from "@/components/header";

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={sofiaPro.className}>
          <Suspense fallback={<Header></Header>}>
            <LocaleProvider>
              {children}
            </LocaleProvider>
          </Suspense>
          </body>
      </html>
  );
}
