import { HeaderAuth } from "@/components/headerAuth";
import { Sidebar } from "@/components/sidebar";

export const metadata = {
  title: "Projec",
  description: "",
};

export default function MainLayout({ children }) {
  return (
		<div className='wrapper'>
			<div className="inner_auth">
				<Sidebar></Sidebar>
				<div className="flex-1">
					<HeaderAuth></HeaderAuth>
					<main>{children}</main>
				</div>
			</div>
		</div>
  );
}
