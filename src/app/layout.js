import { Footer } from "@/components/footer";
import { sofiaPro, inter } from "../ui/fonts/index"
import "../ui/globals.scss";
import { Header } from "@/components/header";

export const metadata = {
  title: "Projec",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofiaPro.className}>
        <div className='wrapper'>
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
