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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"


import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'


export function Languages() {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	// const locale = getLocalStorage('locale') || 'EN'
	// const [localStorage, setLocalStorage] = useLocalStorage('locale', 'EN');
	const [locale, setLocale] = useLocalStorage('locale', 'EN');
	const [prevLocale, setPrevLocale] = useLocalStorage('prevLocale', 'EN');

	useEffect(() => {
		// if (locale !== prevLocaleRef.current) {
			console.log(prevLocale, 'prevLocale')
			console.log(locale, 'locale')

      translatePage();
			
      setPrevLocale(locale) // Обновляем предыдущее значение
    // }

	}, [pathname, locale]);

const translatePage = () => {
	if ((window.location.href.includes('_x_tr_hist=true') || locale === 'EN') && prevLocale === locale) {
		return
	}

	const baseURL = new URL('/', `${'http://react-project-zdxg.vercel.app'}`).origin;
	const translateUrl = `https://translate.google.com/translate?hl=${locale}&sl=${prevLocale}&u=${encodeURIComponent(
		`${baseURL}${pathname}`
	)}`;

	window.location.assign(translateUrl);
}


  return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<div className={styles.body}>
							<Image src={en} alt='icon' width={25} height={18}></Image>
							<p>EN</p>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-[186px] my-[8px] mr-[16px]'>
						<div className="flex  flex-wrap  justify-between gap-[16px] p-[16px] rounded-[6px] bg-neutral-50 border border-solid border-[#d9d9d9]">
							<DropdownMenuItem onClick={() => setLocale('EN')} className={styles.lang}>
								<Image
									src={en}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">EN</p>
							</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setLocale('NL')} className={styles.lang}>
									<Image
										src={nl}
										width={25}
										height={17}
										alt='icon'
										className="flex-grow-0 flex-shrink-0"
									></Image>
									<p className=" text-[16px]  text-black">NL</p>
								</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('ES')} className={styles.lang}>
								<Image
									src={es}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">ES</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('DE')} className={styles.lang}>
								<Image
									src={de}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">DE</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('FR')} className={styles.lang}>
								<Image
									src={fr}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">FR</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('PH')} className={styles.lang}>
								<Image
									src={pg}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">PH</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('ZH')} className={styles.lang}>
								<Image
									src={zh}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">ZH</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('JP')} className={styles.lang}>
								<Image
									src={jp}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">JP</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('ID')} className={styles.lang}>
								<Image
									src={id}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">ID</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('CZ')} className={styles.lang}>
								<Image
									src={cz}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">CZ</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('HI')} className={styles.lang}>
								<Image
									src={hi}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">HI</p>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLocale('HU')} className={styles.lang}>
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
  )
}