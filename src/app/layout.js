import { sofiaPro, inter } from "../ui/fonts/index"
import "@/ui/globals.scss";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofiaPro.className}>{children}</body>
    </html>
  );
}
