'use client'

import styles from './languages.module.scss';

import Image from 'next/image';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getLocalStorage } from "@/hooks/getLocalStorage";
import cn from 'classnames'
import {localeType} from '@/types/locale'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"


import { useEffect, useLayoutEffect, useRef } from 'react';
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

	useLayoutEffect(() => {
		// if (!window.location.href.includes('_x_tr_sl')) {
		// 	localStorage.removeItem('scrollPosition');
		// }

		const prevLocaleRef = localStorage.getItem('prevLocale') || 'en'
		// localStorage.setItem('prevLocale', !window.location.href.includes('_x_tr_sl') ? 'en' : locale)

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
	// window.location.replace(translateUrl);
}


  return (
				<div>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<div className={styles.body}>
								<Image src={(localeType.find((item) => item.lang === locale.toUpperCase())).img} alt='icon' width={25} height={18}></Image>
								<p translate="no">{locale}</p>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-[186px] my-[8px] mr-[16px]'>
							<div className="flex  flex-wrap  justify-between gap-[16px] p-[16px] rounded-[6px] bg-neutral-50 border border-solid border-[#d9d9d9]">
								{localeType.map((item) => (
									<DropdownMenuItem translate="no" onClick={() => onChangeToLocale(item.lang)} className={cn(styles.lang, {[styles.active]: locale === item.lang})}>
										<Image
											src={item.img}
											width={25}
											height={17}
											alt='icon'
											className="flex-grow-0 flex-shrink-0"
										></Image>
										<p className='text-[16px] text-black'>{item.lang}</p>
									</DropdownMenuItem>
								))}
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
  )
}