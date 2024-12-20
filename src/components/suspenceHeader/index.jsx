'use client'

import styles from './header.module.scss';
import { Logo } from '@/ui/logo';
import {productsType} from '../../types/products.ts';
import {useEffect, useState, useRef} from "react";
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
import { usePathname, useSearchParams } from 'next/navigation'


import { tabs } from '@/types/auth';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadcn/ui/accordion';
import arrow_up from '@/ui/icons/arrow_up.svg'
import Link from 'next/link';


const accordion = 'Products'

export const Header = () => {
	const [ value, setValue ] = useState('')
	const pathname = usePathname()
  const params = pathname.split('/')
  const activeLinks = params.filter((item, index) => index !== 0).join();
	const [ current, setCurrent ] = useState(menuMobileType.find((item) => item.path === activeLinks))

	const [ burgerActive, setBurgerActive ] = useState(false)
	const [ category, setCategory] = useState('')
	const [ open, setOpen ] =  useState(false)


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



	function onChangeCategory() { 
		category !== accordion ? setOpen(true) : setOpen(!open)
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

	const innerWidth = () => {
		return window.innerWidth
	}


	return <div className={cn(styles.body, {[styles.active]: burgerActive})}>
		<div className={styles.blurCover}></div> {/* Обложка размытия */}

		<div className={styles.container + ' _container'}>
			<div className={styles.burger} onClick={() => setBurgerActive(!burgerActive)}>
				{
					burgerActive ? <Image src={burgerClose} alt='icon' width={24} height={24}></Image>
					: <Image src={burgerOpen} alt='icon' width={24} height={24}></Image>
				}
			</div>

			<Logo></Logo>

			<ul className={styles.nav_desktop}>
				<Link  href='/about' className={styles.nav_desktop__item}>About</Link >
				<li className={cn(styles.nav_desktop__item, styles.popup_list)}>

					<p 
						className={cn(styles.popup_list__title, {[styles.active]: open})}>
						<a>Products</a>
						<Image src={polygon} alt='icon' width={10} height={8}></Image>
					</p>

					<ul className={cn(styles.popup_list__body, {[styles.active]: open}) }>
						{ productsType.map( (listItem, index) => (
							<Link  href={listItem.link} key={index} className="flex relative gap-[24px] px-[30px] py-[16px] rounded-[6px]">
								<Image src={listItem.icon} alt='icon' width={36} height={36}></Image>
								<div className="flex flex-col justify-center">
									<p className=" text-[16px]  text-black">
										{listItem.name}
									</p>
									<p className=" text-[12px]  ">
										{listItem.description}
									</p>
								</div>
							</Link >
						))}
					</ul>

				</li>
				<Link  href='/security' className={styles.nav_desktop__item}>Security</Link >
				<Link  href='/blog' className={styles.nav_desktop__item}>Blog</Link >
				<Link  href='/helpcenter' className={styles.nav_desktop__item}>Help Hub</Link >
			</ul>

<ul className={cn(styles.nav_mobile, {[styles.active]: burgerActive})}>

<Accordion type="single" collapsible value={value} onValueChange={setValue}>
	<div className={cn(styles.advantages)}>
		{menuMobileType.map((item, index) => {
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
					{item.childs && item.childs.map((child, childsIndex) => <Link href={child.path} className={cn(styles.child, { [styles.active]: child === current })} key={childsIndex} onClick={() => handleClick(child)}>
						<Image src={child.icon} alt='icon' width={24} height={24}></Image>
						<p className='text-[14px]'>{child.text}</p>
					</Link>)}
				</AccordionContent>
			</AccordionItem>
			: <Link href={item.path} onClick={() => handleClick(item)} key={item.key} className={cn(styles.box, {[styles.active]: item === current})}>
				<Image src={item.icon} alt='icon' width={24} height={24}></Image>
				<span className={styles.text}>{item.text}</span>
			</Link>
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
				<button className={styles.dashboard}><Image src={dashboard} alt='icon' width={21} height={20}></Image></button>
				<Link  href='/login' className={styles.login}><p>Login</p></Link >
				<Link  href='/registration' className={styles.sign_up}>Sign Up</Link >
			</div>
		</div>

		<div className={styles.progress}>
			<div style={{ width: `${width}px`, transform: `translateX(-${width}px)`, opacity: 0 }} className={styles.line}></div>
		</div>
	</div>
}



