'use client'

import styles from './profile_menu.module.scss'
import cn from 'classnames'
import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"
import { useEffect, useState } from 'react';
import person from "@/ui/icons/person.png";


export const ProfileMenu = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (typeof document !== 'undefined') {
			const bg = document.querySelector('.bg');

			if (bg) {
				if (open) {
					bg.style.zIndex = 100;
					bg.style.opacity = '1';
					bg.style.background = 'rgba(0, 0, 0, 0.3)';

					const preventScroll = (e) => e.preventDefault(); // Блокируем скролл

					window.addEventListener('wheel', preventScroll, { passive: false });
					window.addEventListener('touchmove', preventScroll, { passive: false });
	
					return () => {
						window.removeEventListener('wheel', preventScroll);
						window.removeEventListener('touchmove', preventScroll);
					};
				} else {
					bg.style.zIndex = -100;
					bg.style.opacity = '0';
					bg.style.background = 'transparent';
				}
			}
		}
	}, [open]);

	console.log(open)

	return <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
		<DropdownMenuTrigger asChild>
				<div className={cn(styles.trigger, {[styles.active]: open})}><Image className='w-full h-full' src={person} alt='icon' width={36} height={36}></Image></div>
		</DropdownMenuTrigger>
		<DropdownMenuContent className='w-[268px] my-[8px] mr-[16px]'>
			<div className="flex flex-col  items-center relative overflow-hidden gap-[24px] px-[16px] pt-[16px] pb-[32px] rounded-[6px] bg-white border-solid border border-[#d9d9d9]">


				<div className="flex flex-col   self-stretch flex-grow-0 flex-shrink-0">
					<div className="flex justify-end  self-stretch flex-grow-0 flex-shrink-0 gap-[16px]">
						<DropdownMenuItem>
							<div className="flex cursor-pointer justify-end items-center flex-grow-0 flex-shrink-0 p-[4px] relative rounded-[6px]">
								<svg
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
									preserveAspectRatio="none"
								>
									<path
										d="M12 19.9998C7.59 19.9998 4 16.4098 4 11.9998C4 7.58979 7.59 3.99979 12 3.99979C16.41 3.99979 20 7.58979 20 11.9998C20 16.4098 16.41 19.9998 12 19.9998ZM12 1.99979C6.47 1.99979 2 6.46979 2 11.9998C2 17.5298 6.47 21.9998 12 21.9998C17.53 21.9998 22 17.5298 22 11.9998C22 6.46979 17.53 1.99979 12 1.99979ZM14.59 7.99979L12 10.5898L9.41 7.99979L8 9.40979L10.59 11.9998L8 14.5898L9.41 15.9998L12 13.4098L14.59 15.9998L16 14.5898L13.41 11.9998L16 9.40979L14.59 7.99979Z"
										fill="#717171"
									/>
								</svg>
							</div>
						</DropdownMenuItem>
					</div>
					<div className="flex flex-col  items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-4 rounded-[6px]">
						<div className="flex-grow-0 flex-shrink-0 w-[100.8px] h-[100.8px] rounded-[6px] relative overflow-hidden">
							<Image
								src={person}
								width={100}
								height={100}
								alt='icon'
								className="flex-grow-0 flex-shrink-0"
							></Image>
						</div>
						<div className="flex flex-col  items-center  relative">
							<p className="self-stretch  text-[18px] text-center text-[#303030]">
								Hello, User
							</p>
							<p className="self-stretch  text-[12px] text-center text-[#717171]">
								testuser@mail.com
							</p>
						</div>
					</div>
				</div>
				<svg
					width={236}
					height={2}
					viewBox="0 0 236 2"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="self-stretch flex-grow-0 flex-shrink-0 opacity-60"
					preserveAspectRatio="none"
				>
					<line opacity="0.6" y1="1.3" x2={236} y2="1.3" stroke="#E6E6E6" />
				</svg>
				<DropdownMenuItem className='self-stretch w-full'>
					<div className="flex  items-center w-full self-stretch gap-[24px] px-[24px] py-[8px] rounded-[6px]">
						<svg
							width={35}
							height={36}
							viewBox="0 0 35 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-[35px] h-[35px] relative"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M17.5007 17.8C21.5277 17.8 24.7923 14.5354 24.7923 10.5083C24.7923 6.48125 21.5277 3.21666 17.5007 3.21666C13.4736 3.21666 10.209 6.48125 10.209 10.5083C10.209 14.5354 13.4736 17.8 17.5007 17.8Z"
								stroke="#292D32"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M28.0154 23.2542L22.8529 28.4167C22.6487 28.6209 22.4592 29 22.4154 29.2771L22.1383 31.2458C22.0362 31.9604 22.5321 32.4563 23.2467 32.3542L25.2154 32.0771C25.4925 32.0333 25.8863 31.8438 26.0758 31.6396L31.2383 26.4771C32.1279 25.5875 32.5508 24.5521 31.2383 23.2396C29.9404 21.9417 28.905 22.3646 28.0154 23.2542Z"
								stroke="#00B2C8"
								stroke-width="1.5"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M27.2715 23.9979C27.709 25.5729 28.9339 26.7979 30.5089 27.2354"
								stroke="#00B2C8"
								stroke-width="1.5"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M4.97266 32.3833C4.97266 26.7396 10.5873 22.175 17.4998 22.175C19.0164 22.175 20.4747 22.3937 21.831 22.8021"
								stroke="#292D32"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<div className="flex flex-col justify-center flex-grow">
							<p className="text-[16px] text-black">Profile</p>
							<p className="self-stretch text-[12px] ">
								Set up your profile
							</p>
						</div>
					</div>
				</DropdownMenuItem>
				<DropdownMenuItem className='self-stretch w-full'>
					<div className="flex  items-center w-full self-stretch gap-[24px] px-[24px] py-[8px] rounded-[6px]">
						<svg
							width={35}
							height={36}
							viewBox="0 0 35 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-[35px] h-[35px] relative"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M12.9785 11.325C13.4306 6.07499 16.1285 3.93124 22.0348 3.93124H22.2243C28.7431 3.93124 31.3535 6.54165 31.3535 13.0604V22.5687C31.3535 29.0875 28.7431 31.6979 22.2243 31.6979H22.0348C16.1723 31.6979 13.4743 29.5833 12.9931 24.4208"
								stroke="#292D32"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M21.8751 17.8H5.2793"
								stroke="#00B2C8"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M8.5319 12.9146L3.64648 17.8L8.5319 22.6854"
								stroke="#00B2C8"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<div className="flex flex-col justify-center ">
							<p className="text-[16px] text-black">
								Logout
							</p>
							<p className="text-[12px]">
								End current session
							</p>
						</div>
					</div>
				</DropdownMenuItem>

			</div>
		</DropdownMenuContent>
	</DropdownMenu>
}