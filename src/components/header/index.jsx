'use client'

import styles from './header.module.scss';
import { Logo } from '@/ui/logo';
import {productsType} from '../../types/products.ts';
import { Suspense, useEffect, useState, useRef, useLayoutEffect } from "react";
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
import { useLocalStorage } from '@/hooks/useLocalStorage';


import { tabs } from '@/types/auth';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadcn/ui/accordion';
import arrow_up from '@/ui/icons/arrow_up.svg'


const accordion = 'Products'


export const Header = () => {
	const [ value, setValue ] = useState('')
	const pathname = usePathname()
  const params = pathname.split('/')
  //const activeLinks = params.filter((item, index) => index !== 0).join();
	const [ current, setCurrent ] = useState(menuMobileType.find((item) => item.path === pathname))

	
	const [ burgerActive, setBurgerActive ] = useState(false)
	//const [ category, setCategory] = useState('')
	const [ open, setOpen ] =  useState(false)


	// const [locale, setLocale] = useLocalStorage('locale', 'en');
	// const lineRef = useRef(null);
	const blurCoverRef = useRef(null)
	// const isFirstRender = useRef(true);
	// let width

	// function runAnim(obj, data) {
  //   const fpsdelay = 1000 / data.fps;
  //   const { x_start: from, x_end: to, duration } = data;
	// 	const elements = document.querySelectorAll("a, p, span, h1, h2, h3, h4, h5, h6, button");

	// 	let start = new Date().getTime(); 

  //   function animate() {
  //       const now = new Date().getTime() - start;
  //       let progress = now / duration;

  //       if (progress > 1.0) progress = 1;

  //       const newval = (to - from) * progress * progress + from;

  //       obj.style.transform = `translate(${Math.round(newval)}px, 0)`;
	// 			obj.style.opacity = 1;


        // if (progress < 1) {
        //     setTimeout(animate, fpsdelay);
        // } else {
            // Проверяем условие после завершения круга
						
						
            // if (window.location.href.includes('_x_tr_hist=true')) {
                // Снимаем blur, если условие выполнено
								// obj.style.opacity = 0;
								// const elements = document.querySelectorAll("a, p, span, h1, h2, h3, h4, h5, h6");
                // elements.forEach((el) => {
                //     if (
                //         el.textContent.trim().length > 0 &&
                //         !el.hasAttribute("no-translate")
                //     ) {
                //         el.style.filter = "none";
                //     }
                // });
            // } else {
						// 		obj.style.opacity = 0;
						// 		obj.style.transform = `translate(${from}px, 0)`;
            //     start = new Date().getTime();
            //     animate();
            // }
					
    //     }
    // }

		// if (isFirstRender.current) {
		// 	if (blurCoverRef.current) {
		// 		blurCoverRef.current.classList.add("hidden"); // Скрываем обложку
		// 	}

		// 	isFirstRender.current = false;
		// }

			// if (blurCoverRef.current) {
			// 	blurAction(elements)
			// 	blurCoverRef.current.classList.add("hidden"); 
			// 	obj.style.opacity = 0;
								// const elements = document.querySelectorAll("a, p, span, h1, h2, h3, h4, h5, h6");
//                 elements.forEach((el) => {
//                     if (
//                         el.textContent.trim().length > 0 &&
//                         !el.hasAttribute("no-translate")
//                     ) {
//                         el.style.filter = "none";
//                     }
//                 });
// 			}

// 		if (window.location.href.includes('_x_tr_sl')) {
// 			blurAction(elements)

// 			animate(); 
// 		}
// }



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



// const blurAction = (elements) => {
// 	if (typeof document !== 'undefined') {
// 		// const elements = document.querySelectorAll("a, p, span, h1, h2, h3, h4, h5, h6");
// 					elements.forEach((el) => {
// 							if (
// 									el.textContent.trim().length > 0 &&
// 									!el.hasAttribute("no-translate")
// 							) {
// 									el.style.filter = `blur(5px)`;
// 									el.style.transition = "filter 0s, all 0.2s";
// 							}
// 					});
// 	}
// };



	useEffect(() => {
		setBurgerActive(false)
		// const prevLocale = localStorage.getItem('prevLocale') || 'en'
		// width = innerWidth()
		// if (prevLocale === locale) {
		// 	blurCoverRef.current.classList.add("hidden"); // Скрываем обложку
		// }

		// if (lineRef.current && prevLocale !== locale) {
			// if ((prevLocale === locale && (prevLocale.toLowerCase() !== 'en' || locale.toLowerCase() !== 'en')) ||
			// (prevLocale !== locale)) {
				// if (window.location.href.includes('_x_tr_sl') && !window.location.href.includes('_x_tr_hist=true')) {
					// const screenWidth = window.innerWidth;
					// 	runAnim(lineRef.current, {
					// 		fps: 50, 
					// 		x_start: -screenWidth,
					// 		x_end: screenWidth * 2, 
					// 		duration: 1000
					// 	})
				// }

			// }
		// }
	}, [pathname/*, locale*/])


	// function onChangeCategory() { 
	// 	category !== accordion ? setOpen(true) : setOpen(!open)
	// }

	useEffect(() => {
		if (typeof document !== 'undefined') {
				if (burgerActive) {
						document.body.style.overflow = 'hidden';
				} else {
						document.body.style.overflow = 'unset';
				}
		}   
	}, [burgerActive]);

	// const innerWidth = () => {
	// 	return window.innerWidth
	// }


	return <div className={cn(styles.body, {[styles.active]: burgerActive})}>
		<div className={styles.blurCover} ref={blurCoverRef}></div> {/* Обложка размытия */}

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

			{/* <ul className={cn(styles.nav_mobile, {[styles.active]: burgerActive})}>

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
			</ul> */}


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
					{item.childs && item.childs.map((child, childsIndex) => <TranslatedLink href={child.path} className={cn(styles.child, { [styles.active]: child === current })} key={childsIndex} onClick={() => handleClick(child)}>
						<Image src={child.icon} alt='icon' width={24} height={24}></Image>
						<p className='text-[14px]'>{child.text}</p>
					</TranslatedLink>)}
				</AccordionContent>
			</AccordionItem>
			: <TranslatedLink href={item.path} onClick={() => handleClick(item)} key={item.key} className={cn(styles.box, {[styles.active]: item === current})}>
				<Image src={item.icon} alt='icon' width={24} height={24}></Image>
				<span className={styles.text}>{item.text}</span>
			</TranslatedLink>
		})
		}
	</div>
</Accordion>



<div className={styles.nav_mobile__icons}>
<Languages></Languages>
	
	{/* <SocialMedia></SocialMedia> */}
</div>
</ul>

			<div className={styles.auth}>
				<button className={styles.dashboard}><Image src={dashboard} alt='icon' width={21} height={20}></Image></button>
				<TranslatedLink  href='/login' className={styles.login}><p>Login</p></TranslatedLink >
				<TranslatedLink  href='/registration' className={styles.sign_up}>Sign Up</TranslatedLink >
			</div>
		</div>

		{/* <div className={styles.progress}>
			<div ref={lineRef} style={{ width: `${width}px`, transform: `translateX(-${width}px)`, opacity: 0 }} className={styles.line}></div>
		</div> */}
	</div>
}



