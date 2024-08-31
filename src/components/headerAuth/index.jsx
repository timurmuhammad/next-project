'use client'

import styles from './header_auth.module.scss';
import {productsType} from '../../types/products.ts';
import { useEffect, useState } from "react";
import burgerClose from '@/ui/icons/burger_close.svg';
import burgerOpen from '@/ui/icons/burger_open.svg';
import Image from 'next/image';
import cn from 'classnames';
import {menuMobileType} from '../../types/menuMobile';
import arrow from '@/ui/icons/arrow_up.svg';
import { Languages } from '../languages';
import { SocialMedia } from '@/ui/socialMedia';
import person from "@/ui/icons//person.png";
import notify from "@/ui/icons/notify.svg";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tabs } from '@/types/auth';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadcn/ui/accordion';
import arrow_up from '@/ui/icons/arrow_up.svg'



export const HeaderAuth = () => {
	const [ value, setValue ] = useState('')
	const [ burgerActive, setBurgerActive ] = useState(false)
	const pathname = usePathname()
  const params = pathname.split('/').pop();
  const activeTab = tabs.find((item) => item.link === params);
	const [ current, setCurrent ] = useState(activeTab)

	function handleClick(item) {
		setCurrent(item)

		for(let i = 0; i < tabs.length; i++) {

			if (tabs[i].key === item.key) {
				setValue(tabs[i].key)
			}
			if(current && item.key === current.key && tabs[i].key === item.key) {
				setCurrent()
				setValue('')
			} 

			const child = tabs[i].childs
			if (child) {
				for(let j = 0; j < child.length; j++) {
					if (child[j] === item) {
						setValue(tabs[i].key)
					}
					if (current && child[j].key === current.key && item.key === tabs[i].key) {
						setCurrent()
						setValue('')
					}
				}
			}
		}
}



	useEffect(() => {
		if (typeof document !== 'undefined') {
				if (burgerActive) {
						document.body.style.overflow = 'hidden';
				} else {
						document.body.style.overflow = 'unset';
				}
		}   
	}, [burgerActive]);

	return <div className={cn(styles.body, {[styles.active]: burgerActive})}>
		<div className={styles.container + ' _container'}>
			<div className={styles.burger} onClick={() => setBurgerActive(!burgerActive)}>
				{
					burgerActive ? <Image src={burgerClose} alt='icon' width={24} height={24}></Image>
					: <Image src={burgerOpen} alt='icon' width={24} height={24}></Image>
				}
			</div>


			<ul className={styles.nav_icons}>
				<SocialMedia></SocialMedia>
			</ul>

			<div className={styles.breadcrumb}>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink>
								<Link href="/">Personal account</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<div className='font-[400] text-[#000]'><BreadcrumbPage className='flex gap-[4px] items-center'>{activeTab.text}</BreadcrumbPage></div>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>


			<ul className={cn(styles.nav_mobile, {[styles.active]: burgerActive})}>

				<Accordion type="single" collapsible value={value} onValueChange={setValue}>
					<div className={cn(styles.advantages)}>
						{tabs.map((item, index) => {
							return item.childs ? <AccordionItem className={styles.item} key={item.key} value={item.key}>
								<div onClick={() => handleClick(item)}>
									<AccordionTrigger className="px-0 pb-0 pt-0">
										<div className={styles.box}>
											<Image src={item.icon} alt='icon' width={24} height={24}></Image>
											<a className={styles.text}>{item.text}</a>
											<Image className={styles.arrov} src={arrow_up} alt='icon' width={14} height={8}></Image>
										</div>
									</AccordionTrigger>

								</div>
								<AccordionContent className='pb-0 px-0 pl-[32px]'>
									{item.childs && item.childs.map((child, childsIndex) => <div className={cn(styles.child, { [styles.active]: child === current })} key={childsIndex} onClick={() => handleClick(child)}>
										<Image src={child.icon} alt='icon' width={24} height={24}></Image>
										<p className='text-[14px]'>{child.text}</p>
									</div>)}
								</AccordionContent>
							</AccordionItem>
							: <p onClick={() => handleClick(item)} key={item.key} className={cn(styles.box, {[styles.active]: item === current})}>
								<Image src={item.icon} alt='icon' width={24} height={24}></Image>
								<span className={styles.text}>{item.text}</span>
							</p>
						})
						}
					</div>
				</Accordion>



				<div className={styles.nav_mobile__icons}>
					<Languages></Languages>
					
					<SocialMedia></SocialMedia>
				</div>
			</ul>

			<div className={styles.auth}>
				<div className='w-[36px] h-[36px] cursor-pointer overflow-hidden rounded-[10px] border-solid border border-[#e6e6e6]'><Image className='w-full h-full' src={person} alt='icon' width={36} height={36}></Image></div>
				<div className='w-[36px] h-[36px] cursor-pointer flex items-center justify-center overflow-hidden rounded-[10px] border-solid border border-[#e6e6e6]'><Image src={notify} alt='icon' width={16} height={20}></Image></div>
				<div className={styles.lang}><Languages></Languages></div>
			</div>
		</div>
	</div>
}



