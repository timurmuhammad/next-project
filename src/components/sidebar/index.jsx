'use client'

import Image from 'next/image'
import styles from './sidebar.module.scss'
import cn from 'classnames'

import logo_icon from "@/ui/icons/logo_icon.svg";
import dashboard from "@/ui/icons/dashboard.svg";
import wallets from "@/ui/icons/wallets.svg";
import investments from "@/ui/icons/investments.svg";
import statistics_aush from "@/ui/icons/statistics_aush.svg";
import affiliate from "@/ui/icons/affiliate.svg";
import help_center from "@/ui/icons/help_center.svg";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const tabs = [
	{link: 'dashboard', icon: dashboard.src, text: ['Dashboard']},
	{link: 'wallets', icon: wallets.src, text: ['Wallets']},
	{link: 'investments', icon: investments.src, text: ['Investments']},
	{link: 'statistics_aush', icon: statistics_aush.src, text: ['Statistics']},
	{link: 'affiliate', icon: affiliate.src, text: ['Affiliate', 'Program']},
	{link: 'help', icon: help_center.src, text: ['Help Center']},
]

// type Props = {
// 	setActiveTab: (activeTab: string[]) => void
// }

export const Sidebar = () => {

	const pathname = usePathname()
	// const { query } = router. query;


  const params = pathname.split('/').pop();
  const activeTab = tabs.find((item) => item.link === params);
	console.log(activeTab);


	return <div className={styles.body}>
		<Image src={logo_icon} width={76} height={64} alt='logo'></Image>

		{tabs.map((item, index) => <Link href={'/' + item.link} key={index} className={cn(styles.tab, {[styles.active]: item.link === activeTab.link})}>
			<Image src={item.icon} width={24} height={25} alt='icon'></Image>
				<div>
					{item.text.map((text, indexText) => <p key={indexText} className="text-[13px] text-center uppercase">
						{text}
					</p>)}
				</div>
		</Link>)}
	</div>
}