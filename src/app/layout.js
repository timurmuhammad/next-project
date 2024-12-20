import { sofiaPro } from "../ui/fonts/index";
import "@/ui/globals.scss";
// import { LocaleProvider } from '@/global/locale';
// import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofiaPro.className}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* <LocaleProvider> */}
            {children}
          {/* </LocaleProvider> */}
        {/* </Suspense> */}
      </body>
    </html>
  );
}
