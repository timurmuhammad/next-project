import { HeaderAuth } from "@/components/headerAuth";
import { Sidebar } from "@/components/sidebar";
import cn from 'classnames'


export const metadata = {
  title: "Projec",
  description: "",
};

export default function MainLayout({ children }) {
  return (
		<div className={cn('wrapper', 'bg-[#FBFFFF]')}>
			<div className="inner_auth">
				<div className="bg"></div>
				<Sidebar></Sidebar>
				<div className="flex-1">
					<HeaderAuth></HeaderAuth>
					<main>{children}</main>
				</div>
			</div>
		</div>
  );
}
