import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Projec",
  description: "",
};

export default function MainLayout({ children }) {
  return (
		<div className='wrapper'>
			<Header></Header>
			<main>{children}</main>
			<Footer></Footer>
		</div>
  );
}
