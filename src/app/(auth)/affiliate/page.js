
'use client'

import styles from './affiliate.module.scss'
import cn from 'classnames'
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import {TranslatedLink} from '@/components/translatedLink';
import { tabs } from '@/types/auth';
import invested from "@/ui/icons/invested.svg";
import gift from '@/ui/icons/gift.svg'
import people from "@/ui/icons/people.svg";
import user_tick from "@/ui/icons/user_tick.svg";
import handshake from "@/ui/images/handshake.png";
import cup_blue from "@/ui/icons/cup_blue.svg";
import cup from "@/ui/icons/cup.svg";
import { ButtonBorder } from '@/components/buttonBorder';
import copy from "@/ui/icons/copy.svg";
import scanner from "@/ui/icons/scanner.svg";
import document_download from "@/ui/icons/document_download.svg";
import filter_square from "@/ui/icons/filter_square.svg";
import { PopupPresentation } from "@/components/popupPresentation";
import { PopupTurnover } from "@/components/popupTurnover";


import { useRef, useState, useEffect } from 'react';

const left = [
  {
    date: '04.04.24',
    login: 'useruseruser@gmail.com',
    amount: '50.00',
		bonus: '50.00',
		lvl: '1',
	},
	{
    date: '04.04.24',
    login: 'useruseruser@gmail.com',
    amount: '50.00',
		bonus: '50.00',
		lvl: '1',
	},
	{
    date: '04.04.24',
    login: 'useruseruser@gmail.com',
    amount: '50.00',
		bonus: '50.00',
		lvl: '1',
	},
	{
    date: '04.04.24',
    login: 'useruseruser@gmail.com',
    amount: '50.00',
		bonus: '50.00',
		lvl: '1',
	},
	{
    date: '04.04.24',
    login: 'useruseruser@gmail.com',
    amount: '50.00',
		bonus: '50.00',
		lvl: '1',
	},
]

const right = [
	{
		lvl: '1',
		percent: '0%',
		turnover: '3621',
		earned: '250.00',
		investors: '10',
	},
	{
		lvl: '2',
		percent: '0%',
		turnover: '3621',
		earned: '250.00',
		investors: '10',
	},
	{
		lvl: '3',
		percent: '0%',
		turnover: '3621',
		earned: '250.00',
		investors: '10',
	},
	{
		lvl: '4',
		percent: '0%',
		turnover: '3621',
		earned: '250.00',
		investors: '10',
	},
	{
		lvl: '5',
		percent: '0%',
		turnover: '3621',
		earned: '250.00',
		investors: '10',
	},
]


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
	TableFooter,
} from "@/shadcn/ui/table"


export default function Affiliate() {
	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);


	return <div className="main_auth _container">
		<div className={styles.breadcrumb}>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink>
							<TranslatedLink  href="">Personal account</TranslatedLink >
						</BreadcrumbLink>
					</BreadcrumbItem>
					{activeLinks.map((item, index) => {
						const currentItem = tabs.find((el) => pathname.includes(el.path) && el.path === item);
						console.log(currentItem)
						return <span className='flex gap-1.5 items-center'>
							<BreadcrumbSeparator />
							{
								activeLinks.length - 1 === index
									? <BreadcrumbItem>
										<div className='font-[400] text-[#000]'><BreadcrumbPage className='flex gap-[4px] items-center capitalize'>{currentItem ? currentItem.text : item}</BreadcrumbPage></div>
									</BreadcrumbItem>
									: <BreadcrumbItem>
										<BreadcrumbLink>
											<TranslatedLink  className='capitalize' href={currentItem ? `/${currentItem.path}` : `/${item}`}>{currentItem ? currentItem.text : item}</TranslatedLink >
										</BreadcrumbLink>
									</BreadcrumbItem>
							}
						</span>
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>




		<h2 className='text-[16px] uppercase text-[#828282] font-[400]'>Summary infrormation</h2>




		<div className={styles.statistics}>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[16px]">
					<Image src={invested} width={24} height={24} alt="icon"></Image>
					<p className="  text-[14px] font-medium  uppercase text-[#828282]">
					Network Turnover
					</p>
				</div>
				<p className="   font-medium  text-[18px]">$ 100.00</p>
			</div>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[8px]">
					<Image src={gift} width={24} height={24} alt="icon"></Image>

					<p className=" text-[12px] font-medium  uppercase text-[#828282]">
					Referral Income
					</p>
				</div>
				<p className="   font-medium  text-[18px]">$ 150</p>
			</div>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[8px]">
					<Image src={people} width={24} height={24} alt="icon"></Image>

					<p className=" text-[12px] font-medium  uppercase text-[#828282]">
					Total Partners
					</p>
				</div>
				<p className="   font-medium  text-[18px]">10</p>
			</div>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[8px]">
					<Image src={user_tick} width={24} height={24} alt="icon"></Image>

					<p className=" text-[12px] font-medium  uppercase text-[#828282]">
					Active Partners
					</p>
				</div>
				<p className="font-medium  text-[18px]">5</p>
			</div>
		</div>




		<div className={styles.block}>
			<div className={styles.card}>
				<div className="flex flex-col font-[400] items-center self-stretch  ">
					<p className="text-[14px]  ">
						Rewards for turnover
					</p>
					<div className="flex justify-center gap-[8px]">
						<p className="  text-[12px]   ">
							Current progress:
						</p>
						<p className=" ml-[4px] text-[12px] font-semibold  ">
							$ 0 / 1000
						</p>
					</div>
				</div>



				<div className={styles.list}>
					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup_blue} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">10</p>
					</div>
					<div className= {cn(styles.line, 'bg-[#00b2c8]')} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">75</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">150</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">300</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">750</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">1500</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">3000</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">7500</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">15000</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex flex-col justify-center items-center gap-[4px]">
						<Image src={cup} width={25} height={25} alt="icon"></Image>
						<p className=" text-[10px]  font-[400] text-black leading-[1.5]">
							USDT
						</p>
						<p className="  text-[12px]  text-black">30000</p>
					</div>
				</div>

				<PopupTurnover></PopupTurnover>
			</div>



			<div className="flex flex-col justify-center items-center self-stretch  overflow-hidden gap-[32px] px-[24px] py-[32px] rounded-[6px] border-solid border border-[#cecece] min-w-[315px]">
				<div className="flex flex-col  items-center self-stretch gap-[8px]">
					<p className="  text-[14px] font-[400] text-center">
						Your referral Link
					</p>
					<p className="text-[12px]  text-center ">
						Earn lifetime commissions on every Company product activated by your referrals.
					</p>
				</div>
				<PopupPresentation></PopupPresentation>


				<div className={styles.copy}>
					<div className="flex justify-center items-center flex-grow flex-shrink py-[8px] px-[16px] w-full">
						<p className="  text-[10px] flex-grow flex-shrink  text-[#7b7b7b]">
						https://website.com/registration/ref?3f09GR29GR2
						</p>
					</div>
					<div className="flex justify-center cursor-pointer flex-grow-0 flex-shrink-0 items-center self-stretch px-[16px] border-l border-r border-solid border-[#cecece]">
						<Image className='flex-grow-0 basis-[24px] flex-shrink-0' src={copy} width={24} height={24} alt='icon'></Image>
					</div>
					<div className="flex flex-grow-0 cursor-pointer flex-shrink-0 justify-center items-center self-stretch px-[16px]">
						<Image className='flex-grow-0 basis-[24px] flex-shrink-0' src={scanner} width={24} height={24} alt='icon'></Image>
					</div>
				</div>
				
				<p className="  text-[12px] text-center ">
					<span className="  text-[12px]  text-center ">
						You were invited by:
					</span>
					<span className="ml-[4px] font-[400] text-[12px] text-center ">Username</span>
				</p>
			</div>
		</div>



		<h2 className={styles.title}>Referral Statistics</h2>




		<div className={styles.table}>
			<div className='flex-grow'>
				
				<div className="overflow-x-auto">
					<Table>
					{/* <TableCaption><p className={styles.available}>No Available Data</p></TableCaption> */}
		
						<TableHeader>
							<TableRow>
								<TableHead>Date</TableHead>
								<TableHead>Login</TableHead>
								<TableHead>Amount invested $</TableHead>
								<TableHead>Bonus $</TableHead>
								<TableHead>
								<div className="flex justify-center items-center self-stretch gap-[16px]">
		  						<p>LVL</p>
									<Image src={filter_square} width={25} height={25} alt='icon'></Image>
								</div>
								</TableHead>
							</TableRow>
						</TableHeader>
	
						<TableBody>
						{left.map((item, index) => (
							<TableRow className={styles.tablerow} key={index}>
								<TableCell>{item.date}</TableCell>
								<TableCell>{item.login}</TableCell>
								<TableCell>{item.amount}</TableCell>
								<TableCell>{item.bonus}</TableCell>
								<TableCell>{item.lvl}</TableCell>
								</TableRow>
						))}
						</TableBody>
					</Table>
				</div>


				<div className={styles.buttons_border}>
					<ButtonBorder
						text='Prev'
					></ButtonBorder>
					<ButtonBorder
						text='Next'
					></ButtonBorder>
				</div>
			</div>

			<div className='flex-grow max-w-[486px]'>
			<div className={styles.right}>
				<Table>
					{/* <TableCaption><p className={styles.available}>No Available Data</p></TableCaption> */}
		
						<TableHeader>
							<TableRow>
								<TableHead>LVL</TableHead>
								<TableHead>%</TableHead>
								<TableHead>$ Turnover</TableHead>
								<TableHead>$ Earned</TableHead>
								<TableHead>Investors</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
						{right.map((item, index) => (
							<TableRow className={styles.tablerow} key={index}>
								<TableCell>{item.lvl}</TableCell>
								<TableCell>{item.percent}</TableCell>
								<TableCell>{item.turnover}</TableCell>
								<TableCell>{item.earned}</TableCell>
								<TableCell>{item.investors}</TableCell>
							</TableRow>
						))}
						</TableBody>
					</Table>
			</div>
			</div>
		</div>
			


		<div className={styles.upliner}>
			<div className="flex flex-col justify-center items-center self-stretch flex-grow gap-[32px]">
				<div className="flex flex-col  items-center self-stretch  gap-[8px]">
					<p className="  text-[14px] font-[400] ">
						Do you have an upliner?
					</p>
					<p className="self-stretch    text-[12px]  text-center ">
						<span className="self-stretch    text-[12px]  text-center ">
							Enter his username and receive an additional first deposit bonus of 2% of the invested
							amount.
						</span>
						<br />
						<span className="self-stretch    text-[12px]  text-center ">
							(Can be changed 1 time)
						</span>
					</p>
				</div>

				<div className={styles.save}>
					<p className="text-[10px] text-wrap break-words text-[#7b7b7b]">
					Enter Username
					</p>
					<button className={styles.button_blue}>
						<p>
							Save
						</p>
					</button>
				</div>
			</div>
			<Image src={handshake} width={259} height={259} alt='img'></Image>
		</div>
	</div>
}