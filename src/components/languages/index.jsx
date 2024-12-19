'use client'

import styles from './languages.module.scss';

import Image from 'next/image';
// import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getLocalStorage } from "@/hooks/getLocalStorage";
import cn from 'classnames'
import {localeType} from '@/types/locale'
import { useLocale } from '@/global/locale';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"


import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation'


export function Languages() {
	const pathname = usePathname();
  // const [locale, setLocale] = useLocalStorage('locale', 'en');
  const [isHydrated, setIsHydrated] = useState(false); // Для отслеживания гидратации
  const changeLangRef = useRef(false);
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    setIsHydrated(true); // Устанавливаем флаг гидратации после монтирования
  }, []);

  const onChangeToLocale = (lang) => {
    localStorage.setItem('prevLocale', locale);
    setLocale(lang);
    changeLangRef.current = true;
  };

  const translatePage = (prevLocaleRef) => {
    console.log(locale)
    console.log(prevLocaleRef)

    const baseURL = 'https://react-project-zdxg.vercel.app';
    console.log(baseURL)
    const translateUrl = `https://translate.google.com/translate?hl=${locale}&sl=${prevLocaleRef}&tl=${locale}&u=${encodeURIComponent(
    `${baseURL}${pathname}`
  )}`;
    console.log(translateUrl)
    
    if ((window.location.href.includes('_x_tr_hist=true') && !changeLangRef.current) || locale === prevLocaleRef) {
      return;
    }

    changeLangRef.current = false;
    window.location.replace(translateUrl);
  };

  useEffect(() => {
    if (isHydrated) {
      const prevLocaleRef = localStorage.getItem('prevLocale') || 'en';
      translatePage(prevLocaleRef);
    }
  }, [pathname, locale, isHydrated]);

  // if (!isHydrated) {
  //   return null;
  // }



  return (
				<div>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<div className={styles.body}>
								<Image src={isHydrated ? (localeType.find((item) => item.lang === locale.toUpperCase())).img : localeType[0].img} alt='icon' width={25} height={18}></Image>
								<p translate="no">{isHydrated ? locale : localeType[0].lang}</p>
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