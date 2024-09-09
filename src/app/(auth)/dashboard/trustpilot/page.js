'use client'

import { usePathname } from 'next/navigation';
import styles from './trustpilot.module.scss'
import cn from 'classnames'
import { useState } from 'react';
import { tabs } from '@/types/auth';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import change from '@/ui/icons/check_circle.svg'
import { ButtonBlue } from '@/components/buttonBlue';
import { ButtonBorder } from '@/components/buttonBorder';

export default function Trustpilot() {

	return <div className={cn('main_auth', '_container')}>

<div className={styles.breadcrumb}>
    	<Breadcrumb>
	      <BreadcrumbList>
	        <BreadcrumbItem>
	          <BreadcrumbLink>
	            <Link href="/">Personal account</Link>
	          </BreadcrumbLink>
	        </BreadcrumbItem>
	        <BreadcrumbSeparator />
	        <BreadcrumbItem>
	          <BreadcrumbLink>
	            <Link href="/copytrading">Copy Trading</Link>
	          </BreadcrumbLink>
	        </BreadcrumbItem>
	        <BreadcrumbSeparator />
	        <BreadcrumbItem>
	          <BreadcrumbPage className='font-[400] text-[#000]'>Bot list</BreadcrumbPage>
	        </BreadcrumbItem>
	      </BreadcrumbList>
	    </Breadcrumb>
    </div>


		<div className="flex flex-col  items-center     gap-[40px] p-[32px] rounded-[6px]  border border-solid border-[#e6e6e6]">


			<div className="flex flex-col gap-[24px] w-full">
				<p className={styles.title}>
					Trustpilot bonus
				</p>

				<div className={styles.list}>
					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={cn(styles.circle, styles.blue)}>
							1
						</div>
						<p className="  text-[14px] text-center ">Leave Review</p>
					</div>
					<div className= {cn(styles.line, 'bg-[#00b2c8]')} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={styles.circle}>
							2
						</div>
						<p className="  text-[14px] text-center ">Enter the link</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={styles.circle}>
							3
						</div>
						<p className="  text-[14px] text-center ">Verification</p>
					</div>
				</div>

			</div>




			<div className={styles.block}>
				<div className="flex flex-col items-center     gap-[24px] justify-between flex-1">
					<p className="    text-[16px]  text-start text-black">
						Copy the link or go to trustpilot using the button below and write a review
					</p>
					<div className={styles.trust_pilot}>
						<div className="flex justify-center items-center flex-grow h-[45px]  gap-[8px] px-[16px] rounded-tl-md rounded-bl-md bg-neutral-50 border-[1px] border-solid border-[#cecece] w-full">
							<p className="  text-[10px]  text-[#7b7b7b]">
								https://truspilot.com/Website
							</p>
						</div>
						<div className="flex flex-col cursor-pointer  items-center  gap-[8px] px-[16px] py-[8px] bg-neutral-50 border-[1px] border-solid border-[#cecece]">
							<svg
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="  w-6 h-6 "
								preserveAspectRatio="none"
							>
								<path
									d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
									fill="#00B2C8"
								/>
								<path
									opacity="0.4"
									d="M17.0998 2H12.8998C9.44976 2 8.04977 3.37 8.00977 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V15.99C20.6298 15.95 21.9998 14.55 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
									fill="#292D32"
								/>
							</svg>
						</div>
						<button className={styles.button}>
							<p>
								Go to trusTpilot
							</p>
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-center     w-full min-w-[300px] max-w-[530px] mx-auto gap-[16px] flex-1 p-[16px] rounded-[6px]  border border-solid border-[#e6e6e6]">
					<p className="  text-[14px] font-[400]  text-black">
						Requirement for reviews
					</p>
					<p className="    text-[12px]   ">
						<span className="    text-[12px]   ">
							1. Review must contain at least 100 characters
						</span>
						<br />
						<span className="    text-[12px]   ">
							2. The information in the review should contain your actual experience with the platform.
						</span>
						<br />
						<span className="    text-[12px]   ">
							3. The review must be published and publicly available
						</span>
					</p>
				</div>
			</div>

			<div className={styles.buttons}>
				<ButtonBlue
					text='Next'
				></ButtonBlue>
			</div>
		</div>



		<div className={styles.vertical}>
		<div className="flex flex-col gap-[24px] w-full">
				<p className={styles.title}>
					Trustpilot bonus
				</p>

				<div className={styles.list}>
					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className='flex-shrink-0 flex-grow-0 basis-[32px]'><Image src={change} width={32} height={32} alt='icon'></Image></div>
						<p className="  text-[14px] text-center ">Leave Review</p>
					</div>
					<div className= {cn(styles.line, 'bg-[#00b2c8]')} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={styles.circle}>
							2
						</div>
						<p className="  text-[14px] text-center ">Enter the link</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={styles.circle}>
							3
						</div>
						<p className="  text-[14px] text-center ">Verification</p>
					</div>
				</div>
			</div>

			<p className="max-w-[556px]  text-[16px]  text-start text-black">
			Make sure the review is published, copy the link to your trustpilot profile and paste it into the field below
			</p>
			<div className="flex max-w-[556px] justify-center items-center flex-grow h-[45px] px-[16px] rounded-md bg-neutral-50 border-[1px] border-solid border-[#cecece] w-full">
				<p className="  text-[10px]  text-[#7b7b7b]">
				https://truspilot.com/users/test
				</p>
			</div>
				
			<div className={styles.buttons}>
				<ButtonBorder
					text='Back'
				></ButtonBorder>
				<ButtonBlue
					text='Complete'
				></ButtonBlue>

			</div>
		</div>




		<div className={styles.vertical}>
		<div className="flex flex-col gap-[24px] w-full">
				<p className={styles.title}>
					Trustpilot bonus
				</p>

				<div className={styles.list}>
					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className='flex-shrink-0 flex-grow-0 basis-[32px]'><Image src={change} width={32} height={32} alt='icon'></Image></div>
						<p className="  text-[14px] text-center ">Leave Review</p>
					</div>
					<div className= {cn(styles.line, 'bg-[#00b2c8]')} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className='flex-shrink-0 flex-grow-0 basis-[32px]'><Image src={change} width={32} height={32} alt='icon'></Image></div>
						<p className="  text-[14px] text-center ">Enter the link</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className='flex-shrink-0 flex-grow-0 basis-[32px]'><Image src={change} width={32} height={32} alt='icon'></Image></div>
						<p className="  text-[14px] text-center ">Verification</p>
					</div>
				</div>
			</div>

			<p className="max-w-[556px] text-[16px]  text-center text-black">
				Thank you, your application has been accepted, review by moderators may take up to 48 hours
			</p>

			<p className="text-[16px] text-center flex items-center gap-[6px]">
				<span className="    text-[16px]  text-center text-black">
					Status:
				</span>
				<span className="    text-[16px] text-center text-[#f90]">
					Under Review
				</span>
			</p>
		</div>


	</div>
}