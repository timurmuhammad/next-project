'use client'

import styles from './header.module.scss';
import { Logo } from '@/ui/logo';
import {productsType} from '../../types/products.ts';
import { Suspense, useEffect, useState, useRef } from "react";
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
import {TranslatedLink} from '@/components/translatedLink';
import { usePathname, useSearchParams } from 'next/navigation'



const accordion = 'Products'

export const Header = () => {
	const pathname = usePathname()
	const lineRef = useRef(null);

	function runAnim(obj, data) {
		const fpsdelay = 1000 / data.fps;
		const { x_start: from, x_end: to, duration } = data;

		const start = new Date().getTime();

		function animate() {
			const now = new Date().getTime() - start;
			let progress = now / duration;

			if (progress > 1.0) progress = 1;

			const newval = (to - from) * progress * progress + from;

			obj.style.transform = `translate(${Math.round(newval)}px, 0)`;
			obj.style.width = `${+ from}`;

			console.log('Progress:', progress);

			if (progress < 1) {
				setTimeout(animate, fpsdelay); // Используем именованную функцию
			}
		}
	
		animate(); // Запускаем анимацию
	}

	useEffect(() => {
		if (lineRef.current) {
			// if (window.location.href.includes('_x_tr_sl') && !window.location.href.includes('_x_tr_hist=true')) {
				const screenWidth = window.innerWidth;
				const objWidth = screenWidth * 0.3
				
				runAnim(lineRef.current, {
					fps: 25, 
					x_start: -objWidth,
					x_end: screenWidth + objWidth, 
					duration: 1000
				})
			// }
		}
	}, [/*pathname*/])


	const [ burgerActive, setBurgerActive ] = useState(false)
	const [ category, setCategory] = useState('')
	const [ open, setOpen ] =  useState(false)

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
		<div className={styles.container + ' _container'}>
			<div className={styles.burger} onClick={() => setBurgerActive(!burgerActive)}>
				{
					burgerActive ? <Image src={burgerClose} alt='icon' width={24} height={24}></Image>
					: <Image src={burgerOpen} alt='icon' width={24} height={24}></Image>
				}
			</div>

			<Logo></Logo>

			<ul className={styles.nav_desktop}>
				<TranslatedLink  href='/about' className={styles.nav_desktop__item}>About</TranslatedLink >
				<li className={cn(styles.nav_desktop__item, styles.popup_list)}>

					<p 
						className={cn(styles.popup_list__title, {[styles.active]: open})}>
						<a>Products</a>
						<Image src={polygon} alt='icon' width={10} height={8}></Image>
					</p>

					<ul className={cn(styles.popup_list__body, {[styles.active]: open}) }>
						{ productsType.map( (listItem, index) => (
							<TranslatedLink  href={listItem.link} key={index} className="flex relative gap-[24px] px-[30px] py-[16px] rounded-[6px]">
								<Image src={listItem.icon} alt='icon' width={36} height={36}></Image>
								<div className="flex flex-col justify-center">
									<p className=" text-[16px]  text-black">
										{listItem.name}
									</p>
									<p className=" text-[12px]  ">
										{listItem.description}
									</p>
								</div>
							</TranslatedLink >
						))}
					</ul>

				</li>
				<TranslatedLink  href='/security' className={styles.nav_desktop__item}>Security</TranslatedLink >
				<TranslatedLink  href='/blog' className={styles.nav_desktop__item}>Blog</TranslatedLink >
				<TranslatedLink  href='/helpcenter' className={styles.nav_desktop__item}>Help Hub</TranslatedLink >
			</ul>

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
				<Suspense fallback={<div>Загрузка...</div>}>
				<Languages></Languages>
			</Suspense>
					
					<SocialMedia></SocialMedia>
				</div>
			</ul>

			<div className={styles.auth}>
				<button className={styles.dashboard}><Image src={dashboard} alt='icon' width={21} height={20}></Image></button>
				<TranslatedLink  href='/login' className={styles.login}><p>Login</p></TranslatedLink >
				<TranslatedLink  href='/registration' className={styles.sign_up}>Sign Up</TranslatedLink >
			</div>
		</div>

		<div className={styles.progress}>
			<div ref={lineRef} className={styles.line}></div>
		</div>
	</div>
}



