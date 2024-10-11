'use client'

import styles from './automatictrading.module.scss'
import cn from 'classnames'
import lookingglassCheck from "@/ui/icons/lookingglass_check.svg"
import marketMaking from "@/ui/icons/market_making.svg"
import arbitrage from "@/ui/icons/arbitrage.svg"
import scalping from "@/ui/icons/scalping.svg"
import Image from "next/image" 
import { Typography } from "@/components/typography"
import { ChecklistItem } from "@/components/checklistItem"
import { useState } from 'react'
import { usePathname } from "next/navigation";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from "next/link";

import triangle_blue from '@/ui/icons/triangle_blue.svg'
import ethereum_auth from '@/ui/icons/ethereum_auth.svg'
import binance_coin from '@/ui/icons/binance_coin.svg'
import usdt from '@/ui/icons/usdt.svg'
import { tabs } from '@/types/auth';
import dynamicImg from "@/ui/icons/dynamic.svg";
import staticImg from "@/ui/icons/static.svg";
import { Slider } from '@/shadcn/ui/slider'
import { Switch } from '@/shadcn/ui/switch'
import candle from "@/ui/icons/candle.svg";
import sell from "@/ui/icons/sell.svg";
import clockHistoryBlack from "@/ui/icons/clock-history-black.svg";
import dollarCrosshairBlack from "@/ui/icons/dollar-crosshair-black.svg";
import dollarSwirlBlack from "@/ui/icons/dollar-swirl-black.svg";
import bag from "@/ui/icons/bag.svg";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shadcn/ui/accordion.tsx"


import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/ui/popover"
import { ButtonBlue } from '@/components/buttonBlue'
import Chart from '@/components/chart'
import { Progress } from '@/shadcn/ui/progress'



const strategies = [
	{
		img: lookingglassCheck.src,
		key: 'item-1',
		title: 'Trend Following',
		text: 'Using technical indicators to identify and track market trends',
		list: ['Market Scanning', 'Automated Trading', 'Latency Management', 'Profit Calculation'],
		details: 'This strategy capitalize on price discrepancies of the same cryptocurrency across different exchanges. The software buys the cryptocurrency on one exchange where the price is lower and sells it on another where the price is higher, pocketing the difference as profit.'
	},
	{
		img: marketMaking.src,
		key: 'item-2',
		title: 'Market Making',
		text: 'Profit from the spread between the buy and sell prices.',
		list: ['Automated Trading', 'Latency Management', 'Profit Calculation', 'Market Scanning'],
		details: 'Profit from the spread between the buy and sell prices. The software buys the cryptocurrency on one exchange where the price is lower and sells it on another where the price is higher, pocketing the difference as profit.'
	},
	{
		img: arbitrage.src,
		key: 'item-3',
		title: 'Arbitrage',
		text: 'Earnings from price differences on exchanges',
		list: [ 'Profit Calculation', 'Market Scanning', 'Automated Trading', 'Latency Management'],
		details: 'Earnings from price differences on exchanges The software buys the cryptocurrency on one exchange where the price is lower and sells it on another where the price is higher, pocketing the difference as profit.'
	},
	{
		img: scalping.src,
		key: 'item-4',
		title: 'Scalping',
		text: 'High-frequency trading to profit from small price movements.',
		list: ['Latency Management', 'Profit Calculation', 'Market Scanning', 'Automated Trading'],
		details: 'High-frequency trading to profit from small price movements. The software buys the cryptocurrency on one exchange where the price is lower and sells it on another where the price is higher, pocketing the difference as profit.'	}
]

const from = [
  {
    value: "usdttrc20",
    label: "USDT TRC20",
		logo: usdt,
  },
  {
    value: "etherc-20",
    label: "ETH ERC-20",
		logo: ethereum_auth,
  },
  {
    value: "bnbbep-20",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
  {
    value: "r6kmhht",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
  {
    value: "rjmykjd",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
	{
    value: "srkyerhj",
    label: "BNB BEP-20",
		logo: binance_coin,
  }
]


const to = [
  {
    value: "usdttrc20",
    label: "USDT TRC20",
		logo: usdt,
  },
  {
    value: "etherc-20",
    label: "ETHERC-20",
		logo: ethereum_auth,
  },
  {
    value: "bnbbep-20",
    label: "BNBBEP-20",
		logo: binance_coin,
  },
  {
    value: "r6kmhht",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
  {
    value: "rjmykjd",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
	{
    value: "srkyerhj",
    label: "BNB BEP-20",
		logo: binance_coin,
  }
]


const dynamicStrategy = {
	name: 'Dynamic Strategy',
	description: 'A strategy with a wide range of investment amounts and short investment periods',
	plan: [
		{days: 15, percent: '0.7-0.9', amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 25, percent: '0.9-1.2', amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 35, percent: '1.2-1.5', amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 45, percent: '1.5-1.8', amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
	]
}

const staticStrategy = {
	name: 'Static Strategy',
	description: 'Profitable medium-term strategy with fixed income and investment amount',
	plan: [
		{days: 50, percent: '1.4', amount: '~0.1250', sum: '$100-1000', daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
		{days: 60, percent: '1.7', amount: '~0.1250', sum: '$100-1000', daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
		{days: 70, percent: '1.9', amount: '~0.1250', sum: '$100-1000', daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
		{days: 80, percent: '2.1', amount: '~0.1250', sum: '$100-1000', daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
	]
}





export default function Automatictrading() {
	const [strategiesUsed, setStrategiesUsed] = useState(strategies[0])
	const [ plan, setPlan ] = useState('Activate new Plan')

	const [ strategy, setStrategy ] = useState(dynamicStrategy || '')
	const [ compounding, setCompounding ] = useState(false)
	const [ reactivation, setReactivation ] = useState(false)
	const [ planDynamic, setPlanDynamic ] = useState(dynamicStrategy.plan[0])
	const [ planStatic, setPlanStatic ] = useState(staticStrategy.plan[0])

	const [openFrom, setOpenFrom] = useState(false)
	const [ openTo, setOpenTo ] = useState(false)
  const [valueFrom, setValueFrom] = useState("etherc-20")
	const [valueTo, setValueTo] = useState("usdttrc20")

	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);
	const [ wallet, setWallet ] = useState('replenishment')


	function onClick(item) {
		item === 'from' ? setOpenFrom(!openFrom)
		: setOpenTo(!openTo)
	}

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



				<h5 className='text-[16px] uppercase text-[#828282] font-[400]'>Choose strategy</h5>





				<div className={styles.body}>
			<div className={styles.inner}>
				<div className={styles.title}>
					<div onClick={() => setStrategy(dynamicStrategy)} className={cn(styles.item, {[styles.active]: dynamicStrategy === strategy})}>
						<Image src={dynamicImg} alt='' width={90} height={90}></Image>
						<Typography
							size='h4'
							title={dynamicStrategy.name}
							text={dynamicStrategy.description}
						></Typography>
					</div>
	
	
	
					<div onClick={() => setStrategy(staticStrategy)} className={cn(styles.item, {[styles.active]: staticStrategy === strategy})}>
						<Image src={staticImg} alt='' width={90} height={90}></Image>
						<Typography
							size='h4'
							title={staticStrategy.name}
							text={staticStrategy.description}
						></Typography>
					</div>
				</div>
		
		
		
				<div className={styles.main}>
					<div className={styles.plans}>
						<h5 className='text-[16px] uppercase text-[#828282] font-[400]'>Choose investment options</h5>
		
						<div className={styles.plan__list}>
							{
								dynamicStrategy.plan.map((item, index) => (
									<div key={index} onClick={() => setPlanDynamic(item)} className={cn(styles.plan__box, {[styles.active]: item.days === planDynamic.days})}>
										<div className='flex justify-center flex-col '>
											<p className=' text-[#000] text-[20px] font-[400]'> {item.percent}%</p>
											<p className='text-[#303030] pl-[2px] font-[300] text-[16px]'> DAILY</p >
										</div>
										<div className='flex flex-col justify-center items-end'>
											<p className='text-[14px]'>{item.days} days</p>
											<p className='text-[12px]'>{item.sum}</p>
											</div>
									</div>
								))
							}
						</div>
		
						<h5 className='flex justify-between text-[16px] font-[400] translate-y-[10px]'>Currency and investment amount</h5>
		
						<div className={styles.block}>
						<div className='flex flex-col'>
								<p className="text-[10px] uppercase text-[#605e5e]">
									Currency
								</p>
							<Popover className={styles.popover} open={openFrom} onOpenChange={setOpenFrom}>
							<PopoverTrigger asChild>
							<div onClick={() => onClick('from')} className={cn(styles.counter, {[styles.active]: openFrom})}>
							<div className="flex flex-col justify-between gap-[16px] self-stretch">
								<div className="flex flex-col justify-center">
									<div className="flex  items-center    gap-[16px]">
										<Image src={valueFrom
										? from.find((coin) => coin.value === valueFrom)?.logo
										: null} width={25} height={25} alt='icon'></Image>
										<div className="flex flex-col justify-center items-center">
											<p className="  text-[14px] text-nowrap ">{valueFrom
										? from.find((coin) => coin.value === valueFrom)?.label
										: 'Select coin...'}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-between items-end self-stretch">
								<div className={styles.arrow}><Image src={triangle_blue} width={25} height={25} alt='icon'></Image></div>
							</div>
						</div>
							
								</PopoverTrigger>
								<PopoverContent className="w-[308px] rounded-md bg-white border-solid border-[0.5px] border-[#cecece]">
									<Command>
										<CommandInput placeholder="Search coins..." />
										<CommandList>
											<CommandEmpty>No coins found.</CommandEmpty>
											<CommandGroup>
												{to.map((coin) => (
													<CommandItem
														key={coin.value}
														value={coin.value}
														onSelect={(currentValue) => {
															setValueFrom(currentValue)
															setOpenFrom(false)
														}}
													>
														<div className='flex items-center gap-[16px]'>
															<Image src={coin.logo} width={25} height={25} alt='icon'></Image>
															{coin.label}
														</div>
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
						</div>
							<div className='flex flex-col flex-grow'>
								<div className="flex justify-between">
									<p className="text-[10px] uppercase text-[#605e5e]">
										amount: $100-1000
									</p>
									<p className="text-[10px] uppercase text-[#00b2c8]">
										use max
									</p>
								</div>

								<div className="flex flex-grow border-[1px] border-solid bg-neutral-50 rounded-[6px] border-[#cecece] overflow-hidden">
									<div className="flex justify-center items-center flex-grow gap-[8px] px-[16px]">
										<p className="flex-grow text-[14px] text-center">0.42</p>
										<div className="flex justify-end items-center gap-[10px]">
											<p className="text-[14px]">ETH</p>
										</div>
									</div>
									<div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[79px] relative px-[16px] border-l-[1px] border-[#cecece] border-solid ">
										<p className="text-[14px] text-[#8a8181]">$ 1000</p>
									</div>
								</div>

							</div>
						</div>
		
						<Slider defaultValue={[planDynamic.amount]} max={100} step={1}></Slider>

						<div className={styles.switch}>
							<div className='flex items-center gap-[10px] relative'>
								<p className="text-[16px] text-center">
									Compounding
								</p>
								<Switch></Switch>
								<span className={styles.span}>?</span>
							</div>
							
							<div className='flex items-center gap-[10px] relative mr-[20px]'>
								<p className="text-[16px] text-center">
								Reactivation
								</p>
								<Switch></Switch>
								<span className={styles.span}>?</span>
							</div>
						</div>
						
					</div>
		
					<div className='flex flex-col gap-[30px]'>
						<h5 className={styles.h}>summary information
							<div className="overflow-hidden border-[1px] border-solid border-[#e6e6e6] rounded-[6px] flex items-center h-[40px] flex-shrink-0 flex-grow-0">
								<p className='px-[16px] flex gap-[4px] items-center font-[300] h-full text-[#4a4a4a] text-[14px]' ><span className='' >% </span> ETH</p>
		
								<p className='bg-[#00B2C8] px-[16px] flex items-center font-[500] h-full text-[#fff] text-[14px] text-nowrap' >$ USD</p>		

								<p className='px-[16px] flex gap-[4px] items-center font-[300] h-full text-[#4a4a4a] text-[14px]' ><span className='' >% </span> INTEREST</p>				
							</div>
						</h5>
		
						<div className={styles.plan__calculation}>
							<div>
								<p className={styles.calc}>
									<span>Daily
									</span>
									<span> {planDynamic.amount}<span className='ml-[4px]'>ETH</span></span>
								</p>
		
								<p className={styles.calc}>
									<span>Weekly
									</span>
									<span> {planDynamic.amount}<span className='ml-[4px]'>ETH</span></span>
								</p>

								<p className={styles.calc}>
									<span>Monthly
									</span>
									<span> {planDynamic.amount}<span className='ml-[4px]'>ETH</span></span>
								</p>
		
								<p className={styles.calc}>
									<span>Total Profit
										<span className={styles.span}>?</span>
									</span>
									<span> {planDynamic.amount}<span className='ml-[4px]'>ETH</span></span>
								</p>
		
								<p className={styles.calc}>
									<span>Total with deposited amount
										<span className={styles.span}>?</span>
									</span>
									<span> {planDynamic.amount}<span className='ml-[4px]'>ETH</span></span>
								</p>

								<p className={styles.calc}>
									<span className='relative flex flex-wrap'>
										<span className="text-[16px] font-[400] text-center text-black">Duration:</span>
										<span className="text-[16px] text-nowrap ml-[4px] relative font-light text-center text-black">
											{planDynamic.days} days
											<span className={styles.span}>?</span>
										</span>
									</span>

									<span className='relative flex flex-wrap justify-end'>
										<span className="text-[16px] font-[400] text-center text-black">Strategy:</span>
										<span className="text-[16px] text-nowrap ml-[4px] relative font-light text-center text-black">
											Dynamic
											<span className={styles.span}>?</span>
										</span>
									</span>
								</p>
								
							</div>
						</div>

						<div className={styles.button}>
							<ButtonBlue
								text='Exchange'
							></ButtonBlue>
						</div>
		
					</div>
				</div>
		
			</div>
		</div>




		<div className={styles.stat}>
			<div>
				<p className="text-[14px] font-[400] uppercase mb-[20px] text-[#828282]">
					Features of Dynamic Strategy
				</p>
	
				<div className={styles.list_strategy}>
						<div className={styles.box}>
							<Image src={bag} width={42} height={42} alt='icon'></Image>		
							<div>
								<h6>Deposit returning</h6>
								<p>After Lock-in Period</p>
							</div>
						</div>

						<div className={styles.box}>
							<Image src={clockHistoryBlack} width={42} height={42} alt='icon'></Image>		
							<div>
								<h6>Lock-in Period</h6>
								<p>15-45 days</p>
							</div>
						</div>
		
						<div className={styles.box}>
							<Image src={dollarSwirlBlack} width={42} height={42} alt='icon'></Image>		
							<div>
								<h6>Investment amount</h6>
								<p>Flexible</p>
							</div>
						</div>
		
						<div className={styles.box}>
							<Image src={candle} width={42} height={42} alt='icon'></Image>		
							<div>
								<h6>Daily Returns</h6>
								<p>Flexible</p>
							</div>
						</div>
		
						<div className={styles.box}>
							<Image src={sell} width={42} height={42} alt='icon'></Image>		
							<div>
								<h6>Accruals</h6>
								<p>Invested currency</p>
							</div>
						</div>
		
						<div className={styles.box}>
							<Image src={dollarCrosshairBlack} width={42} height={42} alt='icon'></Image>		
							<div>
								<h6>Profitability</h6>
								<p>Minimal</p>
							</div>
						</div>
					</div>
			</div>
	
	
	
			<div className='max-w-[792px]'>
				<p className="text-[14px] font-[400] uppercase mb-[20px] text-[#828282]">
					Trading Statistics
				</p>
				<div className={styles.card_statistics}>
							<div className="flex flex-col justify-between items-center  flex-shrink-0 w-[188px] relative gap-[24px]">
								<p className=" flex-shrink-0 text-[14px]   ">
									Assets Allocation
								</p>
								<Chart></Chart>
		
								<div className="flex flex-col justify-center items-center self-stretch  flex-shrink-0">
									<div className="flex  items-center  flex-shrink-0 relative gap-[24px]">
										<div className=" flex-shrink-0 w-[20px] h-[8px] bg-[#00b2c8]" />
										<p className=" flex-shrink-0 text-[12px]   text-black">
											Static strategy
										</p>
									</div>
									<div className="flex  items-center  flex-shrink-0 relative gap-[24px]">
										<div className=" flex-shrink-0 w-[20px] h-[8px] bg-[#b7f2f8]" />
										<p className=" flex-shrink-0 text-[12px]   text-black">
											Dynamic strategy
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-between self-stretch gap-[40px] min-w-[160px]">
								<div className="flex flex-col px-[24px] relative gap-[8px] rounded-[6px]">
									<p className="text-[14px]   ">
										Invested
									</p>
									<p className="text-[16px]">$345 942</p>
								</div>
									<div className="flex flex-col px-[24px] relative gap-[8px]">
										<p className="text-[14px]   ">
											Pool Load
										</p>
											<p className="text-[16px]  ">35%</p>
										<div className={cn(styles.progress, 'max-w-[100%] w-full')}><Progress value={35}></Progress></div>
									</div>
								<div className="flex flex-col px-[24px] relative gap-[8px] rounded-[6px]">
									<p className="text-[14px] ">
										Total Profit
									</p>
										<p className="text-[16px]  ">456% / 100 000</p>
									</div>
							</div>
							<div className="flex flex-col justify-between bg-[#f3fbfc] self-stretch  gap-[24px]">
		
		
		
		
		
								<div className={styles.list}>
									<div className="flex flex-col">
										<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] ">
											<p className="  text-[14px] text-nowrap ">
												Strategies
											</p>
											<p className="font-[500] text-[16px] ">6</p>
										</div>
										<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
											<p className="  text-[14px] text-nowrap ">
												Runtime
											</p>
											<p className="font-[500] text-[16px] ">132 Days</p>
										</div>
									</div>
		
		
									<div className="flex flex-col">
										<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] ">
											<p className="  text-[14px] text-nowrap ">
											Last day Profit
											</p>
											<p className="font-[500] text-[16px] ">2.3%</p>
										</div>
										<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
											<p className="  text-[14px] text-nowrap ">
											W/L Ratio
											</p>
											<p className="font-[500] text-[16px] ">19423 / 241</p>
										</div>
									</div>
		
		
									<div className="flex flex-col">
										<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] ">
											<p className="  text-[14px] text-nowrap ">
											Total Trades
											</p>
											<p className="font-[500] text-[16px] ">19664</p>
										</div>
										<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
											<p className="  text-[14px] text-nowrap ">
											Total Users
											</p>
											<p className="font-[500] text-[16px] ">2162</p>
										</div>
									</div>
								</div>
							</div>
						</div>
			</div>
		</div>




		<div className={styles.strategies_used}>
			{strategies.map((item, index) => (
				<div key={index} onClick={() => setStrategiesUsed(item)} className={cn(styles.card, { [styles.active]: item.title === strategiesUsed.title })}>
					<Image src={item.img} width={84} height={84} alt="icon"></Image>

					<Typography
						size="h4"
						title={item.title}
						text={item.text}
					></Typography>
				</div>
			))}

			<div className={styles.trend}>
				<h6 className="text-[16px] text-[#00b2c8]">
					{strategiesUsed.title}
				</h6>
				<p className="text-[12px] text-[#303030]">
					{strategiesUsed.details}
				</p>

				<div className={styles.check_list}>
					{strategiesUsed.list.map((item, index) => (
						<div key={index}>
							<ChecklistItem
								text={item}
							></ChecklistItem>
						</div>
					))}
				</div>
			</div>
		</div>


		<div className={styles.accordion_lg}>
			<Accordion defaultValue={strategiesUsed.key} type="single" collapsible>
				{strategies.map((item, index) => (
					<AccordionItem key={item.key} value={item.key}>
						<AccordionTrigger>
							<div className={styles.card}>
								<Image src={item.img} width={84} height={84} alt="icon"></Image>

								<Typography
									size="h4"
									title={item.title}
									text={item.text}
								></Typography>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<div className={styles.trend}>
								<h6 className="text-[16px] text-[#00b2c8]">
									{item.title}
								</h6>
								<p className="text-[12px] text-[#303030]">
									{item.details}
								</p>

								<div className={styles.check_list}>
									{item.list.map((item, index) => (
										<div key={index}>
											<ChecklistItem
												text={item}
											></ChecklistItem>
										</div>
									))}
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	</div>
}