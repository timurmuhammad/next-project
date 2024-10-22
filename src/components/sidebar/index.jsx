'use client'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import Image from 'next/image'
import styles from './sidebar.module.scss'
import cn from 'classnames'
import logo_icon from "@/ui/icons/logo_icon.svg";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tabs, tabsRoot } from '@/types/auth';
import {productsType} from '../../types/products.ts';
import { useState } from 'react';


export const Sidebar = () => {
	const pathname = usePathname()
	const [ open, setOpen ] =  useState(false)

	const activeTab = tabsRoot.find((item) => pathname.includes(item.path));

	return <div className={styles.wrapper}>
		<div className={styles.body}>
			<Image src={logo_icon} width={76} height={64} alt='logo'></Image>
	
			{tabs.map((item, index) => 
			<HoverCard key={index} openDelay={0} closeDelay={150}>
			
				<HoverCardTrigger asChild>
					
				<Link href={'/' + item.path} className={cn(styles.tab, { [styles.active]: item.icon === activeTab.icon })}>
						<Image src={item.icon} width={24} height={25} alt='icon'></Image>
						<div>
							<p className="text-[13px] text-center uppercase">{item.text}</p>

						</div>
						</Link>
				</HoverCardTrigger>


				{item.path === 'wallets' || item.path === 'investments' ?  <HoverCardContent  sideOffset={-91} alignOffset={200} asChild className={cn(styles.popup_list__body, {[styles.active]: open}) }>
								<div>
									{ productsType.map( (listItem, index) => (
										<Link href='' key={index} className="flex relative gap-[24px] px-[30px] py-[16px] rounded-[6px]">
											<Image className="flex-shrink-0 flex-grow-0 basis-[36px]" src={listItem.icon} alt='icon' width={36} height={36}></Image>
											<div className="flex flex-col justify-center">
												<p className=" text-[16px]  text-black">
													{listItem.name}
												</p>
												<p className=" text-[12px] text-[#303030]">
													{listItem.description}
												</p>
											</div>
										</Link>
									))}
								</div>
      </HoverCardContent> : null
			}

				
				
			</HoverCard>
		)}
		</div>
	</div>
}