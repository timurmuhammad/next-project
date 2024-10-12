import styles from './popup_presentation.module.scss'
import cn from 'classnames'
import eth from "@/ui/icons/eth.svg";
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
import logo_icon from "@/ui/icons/logo_icon.svg";
import copy from "@/ui/icons/copy.svg";


import Image from 'next/image';

import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
	DialogClose,
} from "@/shadcn/ui/dialog"



export const PopupPresentation = () => {
	const [ plan, setPlan ] = useState('468x60')
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (typeof document !== 'undefined') {
			const bg = document.querySelector('.bg');
			const scrollPosition = window.scrollY; 

			if (bg) {
				if (open) {
					bg.style.zIndex = 500;
					bg.style.opacity = '1';
					bg.style.background = 'rgba(0, 0, 0, 0.3)';

						const preventScroll = (e) => {
							if (!e.target.closest('.popup_absolute')) {
								e.preventDefault();
							}
							
							console.log(scrollPosition - window.scrollY)

							if (window.scrollY - scrollPosition > 0) {
								setOpen(false)
							}
						}
						document.addEventListener('wheel', preventScroll, { passive: false });
						document.addEventListener('touchmove', preventScroll, { passive: false });
						return () => {
							document.removeEventListener('wheel', preventScroll);
							document.removeEventListener('touchmove', preventScroll);
						};
	
				} else {
					bg.style.zIndex = -100;
					bg.style.opacity = '0';
					bg.style.background = 'transparent';
				}
			}
		}
	}, [open]);



	return <Dialog modal={false} open={open} onOpenChange={setOpen}>
		<DialogTrigger asChild>
			<div className={styles.button_border}>
				<span className={styles.circle}>i</span>
				<p>Detailed info</p>
			</div>
		</DialogTrigger>
		<DialogContent className="max-w-[790px] flex-shrink popup_absolute">
			<div className={styles.body}>
				<div className="flex justify-between items-center self-stretch   relative">
					<p className="  text-sm  text-black font-[400]">PDF Presentation</p>
					<DialogClose className='cursor-pointer' asChild>
						<svg
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className=" w-6 h-6 "
							preserveAspectRatio="none"
						>
							<path
								opacity="0.4"
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								fill="#D9D9D9"
							/>
							<path
								d="M13.0594 12L15.3594 9.7C15.6494 9.41 15.6494 8.93 15.3594 8.64C15.0694 8.35 14.5894 8.35 14.2994 8.64L11.9994 10.94L9.69937 8.64C9.40937 8.35 8.92937 8.35 8.63938 8.64C8.34938 8.93 8.34938 9.41 8.63938 9.7L10.9394 12L8.63938 14.3C8.34938 14.59 8.34938 15.07 8.63938 15.36C8.78938 15.51 8.97937 15.58 9.16937 15.58C9.35937 15.58 9.54937 15.51 9.69937 15.36L11.9994 13.06L14.2994 15.36C14.4494 15.51 14.6394 15.58 14.8294 15.58C15.0194 15.58 15.2094 15.51 15.3594 15.36C15.6494 15.07 15.6494 14.59 15.3594 14.3L13.0594 12Z"
								fill="#292D32"
							/>
						</svg>
					</DialogClose>
				</div>
				<div className="flex   self-stretch flex-wrap  gap-[24px] px-[16px] py-6 rounded-[6px] bg-neutral-50 border border-solid border-[#e6e6e6]">
					
						<div className={styles.lang}>
							<Image
								src={en}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">EN</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={nl}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">NL</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={es}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">ES</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={de}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">DE</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={fr}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">FR</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={pg}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">PH</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={zh}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">ZH</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={jp}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">JP</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={id}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">ID</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={cz}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">CZ</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={hi}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">HI</p>
						</div>
						<div className={styles.lang}>
							<Image
								src={hu}
								width={25}
								height={17}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
							<p className=" text-[16px]  text-black">HU</p>
						</div>
			
				</div>
				<div className="w-full h-[1px] flex-shrink-0 bg-[#E6E6E6]"></div>
				<div className="flex  items-center self-stretch   relative gap-[24px]">
					<p className="  text-sm  text-black font-[400]">Logo</p>
				</div>
				<div className={styles.list}>
					<div className="flex flex-col  items-center   gap-[16px]">
						<div className="flex flex-col     gap-[10px] p-[16px]">
							<div className="flex   self-stretch   relative gap-[6px]">
								<Image
									src={logo_icon}
									height={40}
									width={39}
									alt='icon'
								/>
								<p className="  text-[40px] font-medium  text-[#2e2e2e]">
									Company
								</p>
							</div>
						</div>
						<div className="flex     gap-[15px]">
							<div className="flex justify-center items-center   w-[61px] relative gap-[8px] px-[8px] rounded  border border-solid border-[#e6e6e6] cursor-pointer">
								<svg
									width={17}
									height={16}
									viewBox="0 0 17 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="  w-4 h-4 relative"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										opacity="0.4"
										d="M14.168 6.79334H12.2413C10.6613 6.79334 9.37464 5.50667 9.37464 3.92667V2C9.37464 1.63334 9.07464 1.33334 8.70797 1.33334H5.8813C3.82797 1.33334 2.16797 2.66667 2.16797 5.04667V10.9533C2.16797 13.3333 3.82797 14.6667 5.8813 14.6667H11.1213C13.1746 14.6667 14.8346 13.3333 14.8346 10.9533V7.46C14.8346 7.09334 14.5346 6.79334 14.168 6.79334Z"
										fill="#292D32"
									/>
									<path
										d="M11.0318 1.47333C10.7585 1.2 10.2852 1.38667 10.2852 1.76667V4.09333C10.2852 5.06667 11.1118 5.87333 12.1185 5.87333C12.7518 5.88 13.6318 5.88 14.3852 5.88C14.7652 5.88 14.9652 5.43333 14.6985 5.16667C13.7385 4.2 12.0185 2.46 11.0318 1.47333Z"
										fill="#292D32"
									/>
									<path
										d="M8.6863 9.81333C8.49297 9.62 8.17297 9.62 7.97964 9.81333L7.49964 10.2933V7.5C7.49964 7.22667 7.27297 7 6.99964 7C6.7263 7 6.49964 7.22667 6.49964 7.5V10.2933L6.01964 9.81333C5.8263 9.62 5.5063 9.62 5.31297 9.81333C5.11964 10.0067 5.11964 10.3267 5.31297 10.52L6.6463 11.8533C6.65297 11.86 6.65964 11.86 6.65964 11.8667C6.69964 11.9067 6.75297 11.94 6.8063 11.9667C6.87297 11.9867 6.93297 12 6.99964 12C7.0663 12 7.1263 11.9867 7.1863 11.96C7.2463 11.9333 7.29964 11.9 7.35297 11.8533L8.6863 10.52C8.87964 10.3267 8.87964 10.0067 8.6863 9.81333Z"
										fill="#292D32"
									/>
								</svg>
								<p className="  text-[10px] ">
									PNG
								</p>
							</div>
							<div className="flex justify-center items-center   w-[61px] relative gap-[8px] px-[8px] rounded  border border-solid border-[#e6e6e6] cursor-pointer">
								<svg
									width={17}
									height={16}
									viewBox="0 0 17 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="  w-4 h-4 relative"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										opacity="0.4"
										d="M14.168 6.79334H12.2413C10.6613 6.79334 9.37464 5.50667 9.37464 3.92667V2C9.37464 1.63334 9.07464 1.33334 8.70797 1.33334H5.8813C3.82797 1.33334 2.16797 2.66667 2.16797 5.04667V10.9533C2.16797 13.3333 3.82797 14.6667 5.8813 14.6667H11.1213C13.1746 14.6667 14.8346 13.3333 14.8346 10.9533V7.46C14.8346 7.09334 14.5346 6.79334 14.168 6.79334Z"
										fill="#292D32"
									/>
									<path
										d="M11.0318 1.47333C10.7585 1.2 10.2852 1.38667 10.2852 1.76667V4.09333C10.2852 5.06667 11.1118 5.87333 12.1185 5.87333C12.7518 5.88 13.6318 5.88 14.3852 5.88C14.7652 5.88 14.9652 5.43333 14.6985 5.16667C13.7385 4.2 12.0185 2.46 11.0318 1.47333Z"
										fill="#292D32"
									/>
									<path
										d="M8.6863 9.81333C8.49297 9.62 8.17297 9.62 7.97964 9.81333L7.49964 10.2933V7.5C7.49964 7.22667 7.27297 7 6.99964 7C6.7263 7 6.49964 7.22667 6.49964 7.5V10.2933L6.01964 9.81333C5.8263 9.62 5.5063 9.62 5.31297 9.81333C5.11964 10.0067 5.11964 10.3267 5.31297 10.52L6.6463 11.8533C6.65297 11.86 6.65964 11.86 6.65964 11.8667C6.69964 11.9067 6.75297 11.94 6.8063 11.9667C6.87297 11.9867 6.93297 12 6.99964 12C7.0663 12 7.1263 11.9867 7.1863 11.96C7.2463 11.9333 7.29964 11.9 7.35297 11.8533L8.6863 10.52C8.87964 10.3267 8.87964 10.0067 8.6863 9.81333Z"
										fill="#292D32"
									/>
								</svg>
								<p className="  text-[10px] ">
									SVG
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col  items-center   gap-[16px]">
						<div className="flex flex-col     gap-[10px] p-[16px] bg-[#424242]">
							<div className="flex   self-stretch   relative gap-[6px]">
								<Image
									src={logo_icon}
									height={40}
									width={39}
									alt='icon'
								/>
								<p className="  text-[40px] font-medium  text-white">
									Company
								</p>
							</div>
						</div>
						<div className="flex     gap-[15px]">
							<div className="flex justify-center items-center   w-[61px] relative gap-[8px] px-[8px] rounded  border border-solid border-[#e6e6e6] cursor-pointer">
								<svg
									width={17}
									height={16}
									viewBox="0 0 17 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="  w-4 h-4 relative"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										opacity="0.4"
										d="M14.168 6.79334H12.2413C10.6613 6.79334 9.37464 5.50667 9.37464 3.92667V2C9.37464 1.63334 9.07464 1.33334 8.70797 1.33334H5.8813C3.82797 1.33334 2.16797 2.66667 2.16797 5.04667V10.9533C2.16797 13.3333 3.82797 14.6667 5.8813 14.6667H11.1213C13.1746 14.6667 14.8346 13.3333 14.8346 10.9533V7.46C14.8346 7.09334 14.5346 6.79334 14.168 6.79334Z"
										fill="#292D32"
									/>
									<path
										d="M11.0318 1.47333C10.7585 1.2 10.2852 1.38667 10.2852 1.76667V4.09333C10.2852 5.06667 11.1118 5.87333 12.1185 5.87333C12.7518 5.88 13.6318 5.88 14.3852 5.88C14.7652 5.88 14.9652 5.43333 14.6985 5.16667C13.7385 4.2 12.0185 2.46 11.0318 1.47333Z"
										fill="#292D32"
									/>
									<path
										d="M8.6863 9.81333C8.49297 9.62 8.17297 9.62 7.97964 9.81333L7.49964 10.2933V7.5C7.49964 7.22667 7.27297 7 6.99964 7C6.7263 7 6.49964 7.22667 6.49964 7.5V10.2933L6.01964 9.81333C5.8263 9.62 5.5063 9.62 5.31297 9.81333C5.11964 10.0067 5.11964 10.3267 5.31297 10.52L6.6463 11.8533C6.65297 11.86 6.65964 11.86 6.65964 11.8667C6.69964 11.9067 6.75297 11.94 6.8063 11.9667C6.87297 11.9867 6.93297 12 6.99964 12C7.0663 12 7.1263 11.9867 7.1863 11.96C7.2463 11.9333 7.29964 11.9 7.35297 11.8533L8.6863 10.52C8.87964 10.3267 8.87964 10.0067 8.6863 9.81333Z"
										fill="#292D32"
									/>
								</svg>
								<p className="  text-[10px] ">
									PNG
								</p>
							</div>
							<div className="flex justify-center items-center   w-[61px] relative gap-[8px] px-[8px] rounded  border border-solid border-[#e6e6e6] cursor-pointer">
								<svg
									width={17}
									height={16}
									viewBox="0 0 17 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="  w-4 h-4 relative"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										opacity="0.4"
										d="M14.168 6.79334H12.2413C10.6613 6.79334 9.37464 5.50667 9.37464 3.92667V2C9.37464 1.63334 9.07464 1.33334 8.70797 1.33334H5.8813C3.82797 1.33334 2.16797 2.66667 2.16797 5.04667V10.9533C2.16797 13.3333 3.82797 14.6667 5.8813 14.6667H11.1213C13.1746 14.6667 14.8346 13.3333 14.8346 10.9533V7.46C14.8346 7.09334 14.5346 6.79334 14.168 6.79334Z"
										fill="#292D32"
									/>
									<path
										d="M11.0318 1.47333C10.7585 1.2 10.2852 1.38667 10.2852 1.76667V4.09333C10.2852 5.06667 11.1118 5.87333 12.1185 5.87333C12.7518 5.88 13.6318 5.88 14.3852 5.88C14.7652 5.88 14.9652 5.43333 14.6985 5.16667C13.7385 4.2 12.0185 2.46 11.0318 1.47333Z"
										fill="#292D32"
									/>
									<path
										d="M8.6863 9.81333C8.49297 9.62 8.17297 9.62 7.97964 9.81333L7.49964 10.2933V7.5C7.49964 7.22667 7.27297 7 6.99964 7C6.7263 7 6.49964 7.22667 6.49964 7.5V10.2933L6.01964 9.81333C5.8263 9.62 5.5063 9.62 5.31297 9.81333C5.11964 10.0067 5.11964 10.3267 5.31297 10.52L6.6463 11.8533C6.65297 11.86 6.65964 11.86 6.65964 11.8667C6.69964 11.9067 6.75297 11.94 6.8063 11.9667C6.87297 11.9867 6.93297 12 6.99964 12C7.0663 12 7.1263 11.9867 7.1863 11.96C7.2463 11.9333 7.29964 11.9 7.35297 11.8533L8.6863 10.52C8.87964 10.3267 8.87964 10.0067 8.6863 9.81333Z"
										fill="#292D32"
									/>
								</svg>
								<p className="  text-[10px] ">
									SVG
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col  items-center   relative gap-[15px]">
						<Image src={logo_icon} width={72} height={73} alt='icon' />
						<div className="flex     gap-[15px]">
							<div className="flex justify-center items-center   w-[61px] relative gap-[8px] px-[8px] rounded  border border-solid border-[#e6e6e6] cursor-pointer">
								<svg
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="  w-4 h-4 relative"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										opacity="0.4"
										d="M13.668 6.79334H11.7413C10.1613 6.79334 8.87464 5.50667 8.87464 3.92667V2C8.87464 1.63334 8.57464 1.33334 8.20797 1.33334H5.3813C3.32797 1.33334 1.66797 2.66667 1.66797 5.04667V10.9533C1.66797 13.3333 3.32797 14.6667 5.3813 14.6667H10.6213C12.6746 14.6667 14.3346 13.3333 14.3346 10.9533V7.46C14.3346 7.09334 14.0346 6.79334 13.668 6.79334Z"
										fill="#292D32"
									/>
									<path
										d="M10.5318 1.47333C10.2585 1.2 9.78516 1.38667 9.78516 1.76667V4.09333C9.78516 5.06667 10.6118 5.87333 11.6185 5.87333C12.2518 5.88 13.1318 5.88 13.8852 5.88C14.2652 5.88 14.4652 5.43333 14.1985 5.16667C13.2385 4.2 11.5185 2.46 10.5318 1.47333Z"
										fill="#292D32"
									/>
									<path
										d="M8.1863 9.81333C7.99297 9.62 7.67297 9.62 7.47964 9.81333L6.99964 10.2933V7.5C6.99964 7.22667 6.77297 7 6.49964 7C6.2263 7 5.99964 7.22667 5.99964 7.5V10.2933L5.51964 9.81333C5.3263 9.62 5.0063 9.62 4.81297 9.81333C4.61964 10.0067 4.61964 10.3267 4.81297 10.52L6.1463 11.8533C6.15297 11.86 6.15964 11.86 6.15964 11.8667C6.19964 11.9067 6.25297 11.94 6.3063 11.9667C6.37297 11.9867 6.43297 12 6.49964 12C6.5663 12 6.6263 11.9867 6.6863 11.96C6.7463 11.9333 6.79964 11.9 6.85297 11.8533L8.1863 10.52C8.37964 10.3267 8.37964 10.0067 8.1863 9.81333Z"
										fill="#292D32"
									/>
								</svg>
								<p className="  text-[10px] ">
									PNG
								</p>
							</div>
							<div className="flex justify-center items-center   w-[61px] relative gap-[8px] px-[8px] rounded  border border-solid border-[#e6e6e6] cursor-pointer">
								<svg
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="  w-4 h-4 relative"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										opacity="0.4"
										d="M13.668 6.79334H11.7413C10.1613 6.79334 8.87464 5.50667 8.87464 3.92667V2C8.87464 1.63334 8.57464 1.33334 8.20797 1.33334H5.3813C3.32797 1.33334 1.66797 2.66667 1.66797 5.04667V10.9533C1.66797 13.3333 3.32797 14.6667 5.3813 14.6667H10.6213C12.6746 14.6667 14.3346 13.3333 14.3346 10.9533V7.46C14.3346 7.09334 14.0346 6.79334 13.668 6.79334Z"
										fill="#292D32"
									/>
									<path
										d="M10.5318 1.47333C10.2585 1.2 9.78516 1.38667 9.78516 1.76667V4.09333C9.78516 5.06667 10.6118 5.87333 11.6185 5.87333C12.2518 5.88 13.1318 5.88 13.8852 5.88C14.2652 5.88 14.4652 5.43333 14.1985 5.16667C13.2385 4.2 11.5185 2.46 10.5318 1.47333Z"
										fill="#292D32"
									/>
									<path
										d="M8.1863 9.81333C7.99297 9.62 7.67297 9.62 7.47964 9.81333L6.99964 10.2933V7.5C6.99964 7.22667 6.77297 7 6.49964 7C6.2263 7 5.99964 7.22667 5.99964 7.5V10.2933L5.51964 9.81333C5.3263 9.62 5.0063 9.62 4.81297 9.81333C4.61964 10.0067 4.61964 10.3267 4.81297 10.52L6.1463 11.8533C6.15297 11.86 6.15964 11.86 6.15964 11.8667C6.19964 11.9067 6.25297 11.94 6.3063 11.9667C6.37297 11.9867 6.43297 12 6.49964 12C6.5663 12 6.6263 11.9867 6.6863 11.96C6.7463 11.9333 6.79964 11.9 6.85297 11.8533L8.1863 10.52C8.37964 10.3267 8.37964 10.0067 8.1863 9.81333Z"
										fill="#292D32"
									/>
								</svg>
								<p className="  text-[10px] ">
									SVG
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-[1px] flex-shrink-0 bg-[#E6E6E6]" />
				<div className="flex justify-between items-center self-stretch   relative">
					<p className="  text-sm  text-black font-[400]">Banners</p>
					<svg
						width={24}
						height={24}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="cursor-pointer  w-6 h-6 relative"
						preserveAspectRatio="none"
					>
						<path
							opacity="0.4"
							d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
							fill="#D9D9D9"
						/>
						<path
							d="M13.0594 12L15.3594 9.7C15.6494 9.41 15.6494 8.93 15.3594 8.64C15.0694 8.35 14.5894 8.35 14.2994 8.64L11.9994 10.94L9.69937 8.64C9.40937 8.35 8.92937 8.35 8.63938 8.64C8.34938 8.93 8.34938 9.41 8.63938 9.7L10.9394 12L8.63938 14.3C8.34938 14.59 8.34938 15.07 8.63938 15.36C8.78938 15.51 8.97937 15.58 9.16937 15.58C9.35937 15.58 9.54937 15.51 9.69937 15.36L11.9994 13.06L14.2994 15.36C14.4494 15.51 14.6394 15.58 14.8294 15.58C15.0194 15.58 15.2094 15.51 15.3594 15.36C15.6494 15.07 15.6494 14.59 15.3594 14.3L13.0594 12Z"
							fill="#292D32"
						/>
					</svg>
				</div>
			

				<div className="flex flex-shrink-0 border-[#e6e6e6]  h-[40px]">
					<div onClick={() => setPlan('125x125')} className={cn(styles.plan, { [styles.active]: plan === '125x125' })}>
					125x125
					</div>
					<div onClick={() => setPlan('468x60')} className={cn(styles.plan, { [styles.active]: plan === '468x60' })}>
					468x60
					</div>
					<div onClick={() => setPlan('728x90')} className={cn(styles.plan, { [styles.active]: plan === '728x90' })}>
					728x90
					</div>
					<div onClick={() => setPlan('1200x150')} className={cn(styles.plan, { [styles.active]: plan === '1200x150' })}>
					1200x150
					</div>
				</div>

				<div className="self-stretch flex justify-center items-center gap-[6px] flex-shrink-0 h-[60px] bg-[#d9d9d9]">

						<Image src={logo_icon} width={39} height={40} alt='icon' />
						<p className="leading-[100%] text-[40px] font-medium  text-white">
							Company
						</p>
				</div>

				<div className={styles.copy}>
					<div className="flex justify-center h-hull self-stretch items-center flex-grow flex-shrink py-[8px] px-[16px] w-full">
						<p className=" leading-[100%] text-[10px] flex-grow flex-shrink  text-[#7b7b7b]">
						&lt;a href="https://website.com/ref/user" target="_blank"&gt; &lt;img
						src="https://website.com/assets/images/468en.gif"/&gt;&lt;/
						</p>
					</div>
					<div className="flex justify-center cursor-pointer flex-grow-0 flex-shrink-0 items-center self-stretch px-[16px] border-l border-solid border-[#cecece]">
						<Image className='flex-grow-0 basis-[24px] flex-shrink-0' src={copy} width={24} height={24} alt='icon'></Image>
					</div>
				</div>
			</div>
		</DialogContent>
	</Dialog>


	
	
	
	
	
	
	
	
	
	
	
}