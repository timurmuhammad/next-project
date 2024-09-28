'use client'

import styles from './activeplans.module.scss'
import cn from 'classnames'
import Image from 'next/image';
import { useState } from 'react'
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from "next/link";
import { tabs } from '@/types/auth';
import market_making from '@/ui/icons/market-making.svg'
import { Switch } from '@/shadcn/ui/switch'
import { ButtonBlue } from '@/components/buttonBlue';
import { Progress } from '@/shadcn/ui/progress';
import triangle_blue from '@/ui/icons/triangle_blue.svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadcn/ui/accordion';
import btc from '@/ui/icons/btc1.svg'


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/ui/table"
import { ButtonBorder } from '@/components/buttonBorder';

const accruals = [
  {
    date: "04.04.24",
    currency: btc.src,
    percent: "2.86%",
		amount: '50.00',
	},
  {
    date: "03.04.24",
    currency: btc.src,
    percent: "2.71%",
		amount: '50.00',
	},
  {
    date: "04.05.24",
		currency: btc.src,
    percent: "2.52%",
		amount: '2550.00',
	},
  {
    date: "02.04.24",
		currency: btc.src,
    percent: "2.90%",
		amount: '300.00',
	},
  {
    date: "02.04.24",
		currency: btc.src,
    percent: "2.60%",
		amount: '300.00',
	},
]




export default function ActivePlans() {
	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);
	const [ plan, setPlan ] = useState('List of active Plans')
	const [ value, setValue ] = useState('')

	return <div className="main_auth _container">
		<div className={styles.breadcrumb}>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink>
							<Link href="">Personal account</Link>
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
											<Link className='capitalize' href={currentItem ? `/${currentItem.path}` : `/${item}`}>{currentItem ? currentItem.text : item}</Link>
										</BreadcrumbLink>
									</BreadcrumbItem>
							}
						</span>
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>



		<div className="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[56px]">
			<div onClick={() => setPlan('Activate new Plan')} className={cn(styles.plan, { [styles.active]: plan === 'Activate new Plan' })}>
				Activate new Plan
			</div>
			<div onClick={() => setPlan('List of active Plans')} className={cn(styles.plan, { [styles.active]: plan === 'List of active Plans' })}>
				List of active Plans
			</div>
		</div>




		<Accordion type="single" collapsible>
			<div className={cn(styles.cards)}>
				<AccordionItem className={styles.item} value='copytrading'>
					<div className={styles.card}>
						<div className={styles.list_top}>
							<div>
								<div className="flex">
									<div className="flex  items-center    gap-[16px]">
										<Image src={market_making} width={60} height={60} alt=''></Image>
										<div className="flex flex-col justify-center    ">
											<p className="  text-[16px] font-medium">
												Copy Trading
											</p>
											<p className="  text-[14px] ">
												CryptoYeild 12
											</p>
											<p className="  text-[14px] uppercase ">
												<span className="  text-[14px] font-medium uppercase ">
													2.5 - 2.9%
												</span>
												<span className=" ml-[4px] text-[14px] uppercase ">
													daily
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>


								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Invested</p>
									<p className="  text-[14px] uppercase ">
										ETH 12.1470
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Total Earned</p>
									<p className="  text-[14px] uppercase ">
										98.2%
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Last day Profit</p>
									<p className="  text-[14px] uppercase ">
										2.8%
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Compounding</p>
									<p className="  text-[14px] uppercase ">
										<Switch></Switch>
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Reactivation</p>
									<p className="  text-[14px] uppercase ">
										<Switch></Switch>
									</p>
								</div>

						</div>

						<div className={styles.line}></div>

						<div className={styles.list_bottom}>
							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Activation date</p>
								<p className="  text-[12px]">
									04.04.24
								</p>
							</div>

							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Expiration date</p>
								<p className="  text-[12px] ">
									21.05.24
								</p>
							</div>

							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Next Accrual</p>
								<p className="  text-[12px]">
									14:24:59
								</p>
							</div>

							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Progress: 93%</p>
								<div className={cn(styles.progress, 'max-w-[100%] w-full')}><Progress value={93}></Progress></div>
							</div>

							<div className={styles.trigger}>
								<AccordionTrigger className="pb-0 pt-0 pl-0 pr-0">
									<p className="  text-[14px] ">Accrual statistics</p>
									<div className={styles.arrow}><Image src={triangle_blue} width={20} height={20} alt='icon'></Image></div>
								</AccordionTrigger>
							</div>
						</div>
					</div>
					<AccordionContent className={styles.content}>
						<Table>
							<TableCaption>
								<div className={styles.button_border}>
									<ButtonBorder
										text='Prev'
									></ButtonBorder>
										<ButtonBorder
										text='Next'
									></ButtonBorder>
								</div>
							</TableCaption>
							<TableHeader>
								<TableRow>
									<TableHead>Date</TableHead>
									<TableHead>Currency</TableHead>
									<TableHead>Percent</TableHead>
									<TableHead>$ Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{accruals.map((accrual, index) => (
									<TableRow className={styles.tablerow} key={index}>
										<TableCell>{accrual.date}</TableCell>
										<TableCell>
											<div className='flex items-center justify-center'><Image src={accrual.currency} width={20} height={20} alt='icon'></Image></div>
										</TableCell>
										<TableCell>{accrual.percent}</TableCell>
										<TableCell>{accrual.amount}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</AccordionContent>
				</AccordionItem>




				<AccordionItem className={styles.item} value='copytrading'>
					<div className={styles.card}>
						<div className={styles.list_top}>
							<div>
								<div className="flex">
									<div className="flex  items-center    gap-[16px]">
										<Image src={market_making} width={60} height={60} alt=''></Image>
										<div className="flex flex-col justify-center    ">
											<p className="  text-[16px] font-medium">
											Automatic Trading
											</p>
											<p className="  text-[14px] ">
											Dynamic
											</p>
											<p className="  text-[14px] uppercase ">
												<span className="  text-[14px] font-medium uppercase ">
												0.7 - 0.9%
												</span>
												<span className=" ml-[4px] text-[14px] uppercase ">
													daily
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>


								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Invested</p>
									<p className="  text-[14px] uppercase ">
									ETH 1.100
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Total Earned</p>
									<p className="  text-[14px] uppercase ">
									8.2%
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Last day Profit</p>
									<p className="  text-[14px] uppercase ">
									0.8%
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Compounding</p>
									<p className="  text-[14px] uppercase ">
										<Switch></Switch>
									</p>
								</div>



								<div className="flex flex-col justify-between  self-stretch   ">
									<p className="  text-[16px]">Reactivation</p>
									<p className="  text-[14px] uppercase ">
										<Switch></Switch>
									</p>
								</div>

						</div>

						<div className={styles.line}></div>

						<div className={styles.list_bottom}>
							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Activation date</p>
								<p className="  text-[12px]">
								0.8%
								</p>
							</div>

							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Expiration date</p>
								<p className="  text-[12px] ">
								21.06.24
								</p>
							</div>

							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Next Accrual</p>
								<p className="  text-[12px]">
								04:24:59
								</p>
							</div>

							<div className="flex flex-col gap-[8px]">
								<p className="  text-[14px] ">Progress: 20%</p>
								<div className={cn(styles.progress, 'max-w-[100%] w-full')}><Progress value={20}></Progress></div>
							</div>

							<div className={styles.trigger}>
								<AccordionTrigger className="pb-0 pt-0 pl-0 pr-0">
									<p className="  text-[14px] ">Accrual statistics</p>
									<div className={styles.arrow}><Image src={triangle_blue} width={20} height={20} alt='icon'></Image></div>
								</AccordionTrigger>
							</div>
						</div>
					</div>
					<AccordionContent className={styles.content}>
						<Table>
							<TableCaption>
								<div className={styles.button_border}>
									<ButtonBorder
										text='Prev'
									></ButtonBorder>
										<ButtonBorder
										text='Next'
									></ButtonBorder>
								</div>
							</TableCaption>
							<TableHeader>
								<TableRow>
									<TableHead>Date</TableHead>
									<TableHead>Currency</TableHead>
									<TableHead>Percent</TableHead>
									<TableHead>$ Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{accruals.map((accrual, index) => (
									<TableRow className={styles.tablerow} key={index}>
										<TableCell>{accrual.date}</TableCell>
										<TableCell>
											<div className='flex items-center justify-center'><Image src={accrual.currency} width={20} height={20} alt='icon'></Image></div>
										</TableCell>
										<TableCell>{accrual.percent}</TableCell>
										<TableCell>{accrual.amount}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</AccordionContent>
				</AccordionItem>
			</div>
		</Accordion>






		<div className="flex flex-col justify-center items-center self-stretch    gap-[24px] px-[24px] h-[324px] rounded-[6px] border-solid border border-[#e6e6e6]">
			<p className="  text-[20px] text-center text-black">
				No active plans
			</p>
			<div className={styles.button}>
				<ButtonBlue
					text='Activate new'
				></ButtonBlue>
			</div>
		</div>
	</div>
}