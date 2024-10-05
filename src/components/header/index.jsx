'use client'

import styles from './header.module.scss';
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

const accordion = 'Products'

export const Header = () => {
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
				<li className={styles.nav_desktop__item}>About</li>
				<li className={cn(styles.nav_desktop__item, styles.popup_list)}>

					<p 
						className={cn(styles.popup_list__title, {[styles.active]: open})}>
						<a>Products</a>
						<Image src={polygon} alt='icon' width={10} height={8}></Image>
					</p>

					<ul className={cn(styles.popup_list__body, {[styles.active]: open}) }>
						{ productsType.map( (listItem, index) => (
							<div key={index} className="flex relative gap-[24px] px-[16px] py-[16px] rounded-[6px]">
								<Image src={listItem.icon} alt='icon' width={36} height={36}></Image>
								<div className="flex flex-col justify-center">
									<p className=" text-[16px]  text-black">
										{listItem.name}
									</p>
									<p className=" text-[12px]  ">
										{listItem.description}
									</p>
								</div>
							</div>
						))}
					</ul>

				</li>
				<li className={styles.nav_desktop__item}>Security</li>
				<li className={styles.nav_desktop__item}>Security</li>
				<li className={styles.nav_desktop__item}>Help Hub</li>
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
					<Languages></Languages>
					
					<SocialMedia></SocialMedia>
				</div>
			</ul>

			<div className={styles.auth}>
				<button className={styles.dashboard}><Image src={dashboard} alt='icon' width={21} height={20}></Image></button>
				<button className={styles.login}><p>Login</p></button>
				<button className={styles.sign_up}>Sign Up</button>
			</div>
		</div>
	</div>
}



