'use client'

import styles from './notifications.module.scss'
import cn from 'classnames'
import Image from 'next/image';
import notify from "@/ui/icons/notify.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"
import { useEffect, useState } from 'react';
import person from "@/ui/icons/person.png";


export const Notifications = () => {
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

	return <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
		<DropdownMenuTrigger asChild>
		<div className={cn(styles.trigger, {[styles.active]: open})}><Image src={notify} alt='icon' width={24} height={24}></Image></div>
		</DropdownMenuTrigger>
		<DropdownMenuContent className={cn(styles.content, 'popup_absolute')}>
			<div className="flex flex-col relative gap-[32px] px-[32px] pt-[16px] flex-shrink pb-[32px]">
		
					<div className="flex justify-between items-center self-stretch   ">
						<p className="text-[24px] text-center ">
							Notifications
						</p>
						<p className="text-[14px] cursor-pointer underline text-center ">
							Read all
						</p>
						<DropdownMenuItem>
							<div className="  flex-shrink flex cursor-pointer justify-end items-center flex-grow-0  p-[4px] relative rounded-[6px]">
								<svg
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="flex-grow-0  w-6 h-6 relative"
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

					<div className="h-[1px] w-full self-stretch bg-[#e6e6e6]"></div>
		
					<DropdownMenuItem>
						<div className="  flex-shrink flex flex-col  items-center w-full self-stretch    overflow-hidden gap[16px] px-[32px] py-[16px] rounded-[6px] border border-solid border-[#e6e6e6]">
							<svg
								width={102}
								height={101}
								viewBox="0 0 102 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="  w-[100.8px] h-[100.8px] "
								preserveAspectRatio="none"
							>
								<path
									d="M77.2988 19.7H23.6988C21.7988 19.7 20.2988 21.2 20.2988 23.1V56.7C20.2988 58.6 21.7988 60.0999 23.6988 60.0999H39.3988C38.3988 62 37.8988 64.0999 37.8988 66.5C37.8988 74.2 44.1988 80.4 51.7988 80.4C59.4988 80.4 65.6988 74.0999 65.6988 66.5C65.6988 64.2999 65.1988 62.1999 64.1988 60.0999H77.3988C79.2988 60.0999 80.7988 58.6 80.7988 56.7V23.1C80.7988 21.2 79.1988 19.7 77.2988 19.7ZM40.9988 57.5H24.5988L40.8988 41.2L44.6988 44.9C47.8988 48 53.0988 48 56.2988 44.9L60.0988 41.2L76.2988 57.5H62.4988C56.9988 50.7 46.5988 50.7 40.9988 57.5ZM22.7988 23.9L38.9988 39.4L22.7988 55.7V23.9ZM54.4988 43.0999C52.2988 45.1999 48.6988 45.1999 46.3988 43.0999L24.5988 22.2H76.3988L54.4988 43.0999ZM61.9988 39.4L78.1988 23.9V55.7L61.9988 39.4ZM51.7988 77.5999C45.4988 77.5999 40.3988 72.5999 40.3988 66.1999C40.3988 63.6999 41.1988 61.4 42.5988 59.4C47.0988 53.4 56.1988 53.4 60.6988 59.4C62.1988 61.4 62.8988 63.6999 62.8988 66.1999C63.0988 72.5999 58.0988 77.5999 51.7988 77.5999Z"
									fill="#717171"
								/>
								<path
									d="M57.5988 60.2999C56.9988 59.8999 56.2988 59.9999 55.7988 60.5999L49.0988 69.4999L47.5988 67.9999C47.0988 67.4999 46.2988 67.4999 45.7988 67.9999C45.2988 68.4999 45.2988 69.2999 45.7988 69.7999L48.2988 72.2999C48.7988 72.7999 49.6988 72.7999 50.1988 72.1999L57.7988 62.0999C58.2988 61.3999 58.1988 60.6999 57.5988 60.2999Z"
									fill="#00B2C8"
								/>
							</svg>
							<p className="  text-[14px]  text-center ">
								You have no unread notifications
							</p>
						</div>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<div className="  flex-shrink flex flex-col  items-end self-stretch   overflow-hidden gap-[8px] p-[24px] rounded-[6px] border border-solid border-[#e6e6e6]">
							<div className="flex flex-col  items-end self-stretch    gap-[8px]">
								<p className="self-stretch   font-[400] text-[16px] text-right ">
									New login
								</p>
								<p className="self-stretch    text-[12px] text-right ">
									<span className="self-stretch    text-[12px]  text-right ">
										New login into your client account from{" "}
									</span>
									<span className="self-stretch    text-[12px] font-bold text-right ">
										IP&nbsp;37.111.154.201
									</span>
								</p>
							</div>
							<div className="flex justify-between items-center self-stretch   ">
								<p className="  text-[12px] underline cursor-pointer text-center ">
									Read
								</p>
								<p className="  text-[12px]  text-center ">
									04.04.24
								</p>
							</div>
						</div>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<div className="  flex-shrink flex flex-col  items-end self-stretch   overflow-hidden gap[16px] px-[32px] py-[8px] rounded-[6px] border border-solid border-[#e6e6e6]">
							<div className="flex flex-col  items-end self-stretch    gap[16px]">
								<p className="self-stretch   font-[400] text-[16px] text-right ">
									New login
								</p>
								<p className="self-stretch    text-[12px] text-right ">
									<span className="self-stretch    text-[12px]  text-right ">
										New login into your client account from{" "}
									</span>
									<span className="self-stretch    text-[12px] font-bold text-right ">
										IP&nbsp;37.111.154.201
									</span>
								</p>
							</div>
							<div className="flex justify-end items-center self-stretch    gap[16px]">
								<p className="  text-[12px]  text-center ">
									04.04.24
								</p>
							</div>
						</div>
					</DropdownMenuItem>
	
					<DropdownMenuItem>
						<div className="  flex-shrink flex flex-col  items-end self-stretch   overflow-hidden gap[16px] px-[32px] py-[8px] rounded-[6px] border border-solid border-[#e6e6e6]">
							<div className="flex flex-col  items-end self-stretch    gap[16px]">
								<p className="self-stretch   font-[400] text-[16px] text-right ">
									New login
								</p>
								<p className="self-stretch    text-[12px] text-right ">
									<span className="self-stretch    text-[12px]  text-right ">
										New login into your client account from{" "}
									</span>
									<span className="self-stretch    text-[12px] font-bold text-right ">
										IP&nbsp;37.111.154.201
									</span>
								</p>
							</div>
							<div className="flex justify-end items-center self-stretch    gap[16px]">
								<p className="  text-[12px]  text-center ">
									04.04.24
								</p>
							</div>
						</div>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<div className="  flex-shrink flex flex-col  items-end self-stretch   overflow-hidden gap[16px] px-[32px] py-[8px] rounded-[6px] border border-solid border-[#e6e6e6]">
							<div className="flex flex-col  items-end self-stretch    gap[16px]">
								<p className="self-stretch   font-[400] text-[16px] text-right ">
									New login
								</p>
								<p className="self-stretch    text-[12px] text-right ">
									<span className="self-stretch    text-[12px]  text-right ">
										New login into your client account from{" "}
									</span>
									<span className="self-stretch    text-[12px] font-bold text-right ">
										IP&nbsp;37.111.154.201
									</span>
								</p>
							</div>
							<div className="flex justify-end items-center self-stretch    gap[16px]">
								<p className="  text-[12px]  text-center ">
									04.04.24
								</p>
							</div>
						</div>
					</DropdownMenuItem>
			</div>
		</DropdownMenuContent>
	</DropdownMenu>
}