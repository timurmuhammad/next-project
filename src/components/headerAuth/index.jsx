'use client'

import styles from './header_auth.module.scss';
import { Logo } from '@/ui/logo';
import {productsType} from '../../types/products.ts';
import { useEffect, useState } from "react";
import burgerClose from '@/ui/icons/burger_close.svg';
import burgerOpen from '@/ui/icons/burger_open.svg';
import Image from 'next/image';
import cn from 'classnames';
import dashboard from '@/ui/icons/dashboard.svg';
import {menuMobileType} from '../../types/menuMobile';
import arrow from '@/ui/icons/arrow_up.svg';
import polygon from '@/ui/icons/polygon.svg';
import { Languages } from '../languages';
import { SocialMedia } from '@/ui/socialMedia';

import person from "@/ui/icons//person.png";
import notify from "@/ui/icons/notify.svg";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from 'next/link';
import { Sidebar } from '@/components/sidebar';

const accordion = 'Products'

export const HeaderAuth = () => {
	const [ burgerActive, setBurgerActive ] = useState(false)
	const [ category, setCategory] = useState('')
	const [ open, setOpen ] =  useState(false)
	const [ activeTab, setActiveTab ] = useState('dashboard')

	function onChangeCategory() { 
		category !== accordion ? setOpen(true) : setOpen(!open)
		console.log(category)
		console.log(open)
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
		{/* <Sidebar
			activeTab={activeTab}
			setActiveTab={setActiveTab}
		></Sidebar> */}

		<div className={styles.container + ' _container'}>
			<div className={styles.burger} onClick={() => setBurgerActive(!burgerActive)}>
				{
					burgerActive ? <Image src={burgerClose} alt='icon' width={24} height={24}></Image>
					: <Image src={burgerOpen} alt='icon' width={24} height={24}></Image>
				}
			</div>

			{/* <Logo></Logo> */}

			<ul className={styles.nav_icons}>
				<SocialMedia></SocialMedia>
			</ul>

			<div className={styles.breadcrumb}>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink>
								<Link href="/">Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink>
								<Link href="/copytrading">Copy Trading</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<div className='font-[400] text-[#000]'><BreadcrumbPage>Bot list</BreadcrumbPage></div>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>


			<ul className={cn(styles.nav_mobile, {[styles.active]: burgerActive})}>

				<div>
					{menuMobileType.map((item, index) => (
						<div onClick={() => {
							burgerActive && setCategory(item)
						}}
							key={index} 
							className={(item === accordion ? styles.nav__accordion : styles.nav_mobile__item)}>
								{item === accordion ? <div className={cn(styles.nav_accordion__body, {[styles.active]: category === item && open})}>
									
									<p onClick={() => onChangeCategory()} className={styles.nav_accordion__title}>
										<a>{item}</a>
										<Image src={arrow} alt='icon' width={14} height={8}></Image>
									</p>
	
									<ul className={styles.nav_accordion__list}>
										{productsType.map((item, index) => (
											<p className={styles.nav_accordion__item} key={index}>{item.name}</p>
										))}
									</ul>
	
								</div> : <p onClick={() => onChangeCategory()} className={cn(styles.nav_mobile__text, {[styles.active]: category === item})}>{item}</p>}
						</div>
					))}
				</div>

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



