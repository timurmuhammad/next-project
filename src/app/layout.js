

import { sofiaPro, inter } from "../ui/fonts/index"
import "@/ui/globals.scss";
import { LocaleProvider } from '@/global/locale';
import { Suspense } from "react";
import { SuspenceHeader } from "@/components/suspenceHeader";

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={sofiaPro.className}>
          <Suspense fallback={<SuspenceHeader></SuspenceHeader>}>
            <LocaleProvider>
              {children}
            </LocaleProvider>
          </Suspense>
          </body>
      </html>
  );
}
