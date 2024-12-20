'use client'

import styles from './suspenceHeader.module.scss';
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

export const SuspenceHeader = () => {

	return <div className={styles.body}>

		<div className={styles.container + ' _container'}>
			<div className={styles.burger}>
				{
					<Image src={burgerClose} alt='icon' width={24} height={24}></Image>
				}
			</div>

			<Logo></Logo>

			<ul className={styles.nav_desktop}>
				<Link  href='/about' className={styles.nav_desktop__item}>About</Link >
				<li className={cn(styles.nav_desktop__item, styles.popup_list)}>

					<p 
						className={styles.popup_list__title}>
						<a>Products</a>
						<Image src={polygon} alt='icon' width={10} height={8}></Image>
					</p>

					<ul className={styles.popup_list__body }>
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


			<div className={styles.auth}>
				<button className={styles.dashboard}><Image src={dashboard} alt='icon' width={21} height={20}></Image></button>
				<Link  href='/login' className={styles.login}><p>Login</p></Link >
				<Link  href='/registration' className={styles.sign_up}>Sign Up</Link >
			</div>
		</div>
	</div>
}



