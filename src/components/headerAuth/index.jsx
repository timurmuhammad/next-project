'use client'

import styles from './header_auth.module.scss';
import { Suspense, useEffect, useState } from "react";
import burgerClose from '@/ui/icons/burger_close.svg';
import burgerOpen from '@/ui/icons/burger_open.svg';
import Image from 'next/image';
import cn from 'classnames';
import { Languages } from '../languages';
import { SocialMedia } from '@/ui/socialMedia';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import {TranslatedLink} from '@/components/translatedLink';
import { usePathname } from 'next/navigation';
import { tabs } from '@/types/auth';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadcn/ui/accordion';
import arrow_up from '@/ui/icons/arrow_up.svg'
import { ProfileMenu } from "@/components/profileMenu";
import { Notifications } from "@/components/notifications";


export const HeaderAuth = () => {
	const [ value, setValue ] = useState('')
	const [ burgerActive, setBurgerActive ] = useState(false)
	const pathname = usePathname()
  const params = pathname.split('/')
  const activeLinks = params.filter((item, index) => index !== 0);
	const [ current, setCurrent ] = useState(activeLinks)
	

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
								<TranslatedLink  href="">Personal account</TranslatedLink >
							</BreadcrumbLink>
						</BreadcrumbItem>
						{activeLinks.map((item, index) => {
							const currentItem = tabs.find((el) => pathname.includes(el.path) && el.path === item);
							console.log(currentItem)
						return <span className='flex gap-1.5 items-center'>
							<BreadcrumbSeparator />
							{
								activeLinks.length - 1 === index 
								? <BreadcrumbItem>
									<div className='font-[400] text-[#000]'><BreadcrumbPage className='flex gap-[4px] items-center capitalize'>{currentItem ? currentItem.text : item}</BreadcrumbPage></div>
								</BreadcrumbItem>
								: <BreadcrumbItem>
									<BreadcrumbLink>
										<TranslatedLink  className='capitalize' href={currentItem ? `/${currentItem.path}` : `/${item}`}>{currentItem ? currentItem.text : item}</TranslatedLink >
									</BreadcrumbLink>
								</BreadcrumbItem>
							}
						</span>
						})}
					</BreadcrumbList>
				</Breadcrumb>
			</div>


			<ul className={cn(styles.nav_mobile, {[styles.active]: burgerActive})}>

				<Accordion type="single" collapsible value={value} onValueChange={setValue}>
					<div className={cn(styles.advantages)}>
						{tabs.map((item, index) => {
							return item.childs ? <AccordionItem className={styles.item} key={item.key} value={item.key}>
								<div onClick={() => handleClick(item)}>
									<AccordionTrigger className="pb-0 pt-0 pl-0 pr-0">
										<div className={styles.box}>
											<Image src={item.icon} alt='icon' width={24} height={24}></Image>
											<a className={styles.text}>{item.text}</a>
											<Image className={styles.arrov} src={arrow_up} alt='icon' width={14} height={8}></Image>
										</div>
									</AccordionTrigger>

								</div>
								<AccordionContent className={styles.content}>
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
				<ProfileMenu></ProfileMenu>
				<Notifications></Notifications>
				<div className={styles.lang}>
				<Languages></Languages>
			</div>
			</div>
		</div>
	</div>
}



