'use client'

import styles from './languages.module.scss';
import en from '@/ui/icons/en.svg';
import nl from "@/ui/icons/nl.png";
import es from "@/ui/icons/es.png";
import de from "@/ui/icons/de.png";
import fr from "@/ui/icons/fr.png";
import pg from "@/ui/icons/pg.png";
import zh from "@/ui/icons/zh.png";
import jp from "@/ui/icons/jp.png";
import id from "@/ui/icons/id.png";
import cz from "@/ui/icons/cz.png";
import hi from "@/ui/icons/hi.png";
import hu from "@/ui/icons/hu.png";

import Image from 'next/image';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getLocalStorage } from "@/hooks/getLocalStorage";
import cn from 'classnames'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"


import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'


export function Languages() {
	const pathname = usePathname()
	// const searchParams = useSearchParams()
	const [locale, setLocale] = useLocalStorage('locale', 'EN');
	const changeLangRef = useRef(false)

	const onChangeToLocale = (lang) => {
		localStorage.setItem('prevLocale', locale);
		setLocale(lang)
		changeLangRef.current = true
	}

	useEffect(() => {
		// if (!window.location.href.includes('_x_tr_sl')) {
		// 	localStorage.removeItem('scrollPosition');
		// }

		const prevLocaleRef = localStorage.getItem('prevLocale') || 'en'
		// localStorage.setItem('prevLocale', !window.location.href.includes('_x_tr_sl') ? 'en' : locale)

		console.log('prevLocale - ' + prevLocaleRef)
		console.log('locale - ' + locale)

		translatePage(prevLocaleRef);
	}, [pathname, locale]);


const translatePage = (prevLocaleRef) => {
	if (window.location.href.includes('_x_tr_hist=true') && !changeLangRef.current) {
		return
	}

	// const scrollPosition = { x: window.scrollX, y: window.scrollY };
  // localStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
	const baseURL = new URL('/', `${'http://react-project-zdxg.vercel.app'}`).origin;
	const translateUrl = `https://translate.google.com/translate?hl=${locale}&sl=${prevLocaleRef || 'en'}&u=${encodeURIComponent(
		`${baseURL}${pathname}`
	)}`;
	// localStorage.setItem('prevLocale', locale);
	changeLangRef.current = false
	window.location.replace(translateUrl);
}


  return (
				<div>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<div className={styles.body}>
								<Image src={en} alt='icon' width={25} height={18}></Image>
								<p>EN</p>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-[186px] my-[8px] mr-[16px]'>
							<div className="flex  flex-wrap  justify-between gap-[16px] p-[16px] rounded-[6px] bg-neutral-50 border border-solid border-[#d9d9d9]">
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('EN')} className={styles.lang}>
									<Image
										src={en}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">EN</p>
								</DropdownMenuItem>
									<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('NL')} className={styles.lang}>
										<Image
											src={nl}
											width={25}
											height={17}
											alt='icon'
											className="flex-grow-0 flex-shrink-0"
										></Image>
										<p className=" text-[16px]  text-black">NL</p>
									</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('ES')} className={styles.lang}>
									<Image
										src={es}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">ES</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('DE')} className={styles.lang}>
									<Image
										src={de}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">DE</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('FR')} className={styles.lang}>
									<Image
										src={fr}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">FR</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('PH')} className={styles.lang}>
									<Image
										src={pg}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">PH</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('ZH')} className={styles.lang}>
									<Image
										src={zh}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">ZH</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('JP')} className={styles.lang}>
									<Image
										src={jp}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">JP</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('ID')} className={styles.lang}>
									<Image
										src={id}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">ID</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('CZ')} className={styles.lang}>
									<Image
										src={cz}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">CZ</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('HI')} className={styles.lang}>
									<Image
										src={hi}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">HI</p>
								</DropdownMenuItem>
								<DropdownMenuItem translate="no" onClick={() => onChangeToLocale('HU')} className={styles.lang}>
									<Image
										src={hu}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">HU</p>
								</DropdownMenuItem>
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
  )
}