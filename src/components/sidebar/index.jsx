'use client'

import Image from 'next/image'
import styles from './sidebar.module.scss'
import cn from 'classnames'
import logo_icon from "@/ui/icons/logo_icon.svg";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tabs } from '@/types/auth';




export const Sidebar = () => {
	const pathname = usePathname()

  const params = pathname.split('/').pop();
  const activeTab = tabs.find((item) => item.link === params);


	return <div className={styles.body}>
		<Image src={logo_icon} width={76} height={64} alt='logo'></Image>

		{tabs.map((item, index) => <Link href={'/' + item.link} key={index} className={cn(styles.tab, {[styles.active]: item.link === activeTab.link})}>
			<Image src={item.icon} width={24} height={25} alt='icon'></Image>
				<div>
					<p className="text-[13px] text-center uppercase">{item.text}</p>
				</div>
		</Link>)}
	</div>
}