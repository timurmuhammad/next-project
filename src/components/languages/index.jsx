'use client'

import styles from './languages.module.scss';

import Image from 'next/image';
import {localeType} from '@/types/locale'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"


import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation'
import { useLocale } from '@/global/locale';

export function Languages() {
	const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  
  const [isHydrated, setIsHydrated] = useState(false); 
  const changeLangRef = useRef(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const onChangeToLocale = (lang) => {
    localStorage.setItem('prevLocale', locale);
    setLocale(lang);
    changeLangRef.current = true;
  };

  const translatePage = (prevLocaleRef) => {

    const baseURL = 'https://danish-mukhammad.vercel.app';
    const translateUrl = `https://translate.google.com/translate?hl=${locale}&sl=${prevLocaleRef}&tl=${locale}&u=${encodeURIComponent(
    `${baseURL}${pathname}`
  )}`;
    
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


  return (
				<div>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<div className={styles.body}>
								<Image src={isHydrated ? (localeType.find((item) => item.lang.toUpperCase() === locale.toUpperCase())).img : localeType[0].img} alt='icon' width={25} height={18}></Image>
								<p translate="no">{isHydrated ? locale : localeType[0].lang}</p>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-[186px] my-[8px] mr-[16px]'>
							<div className="flex  flex-wrap  justify-between gap-[16px] p-[16px] rounded-[6px] bg-neutral-50 border border-solid border-[#d9d9d9]">
								{localeType.map((item, index) => (
									<DropdownMenuItem translate="no" key={index} onClick={() => onChangeToLocale(item.lang)} className={cn(styles.lang, {[styles.active]: locale === item.lang})}>
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