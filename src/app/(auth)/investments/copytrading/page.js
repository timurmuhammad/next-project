'use client'

import styles from './copytrading.module.scss'
import cn from 'classnames'
import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from "next/link";
import { tabs } from '@/types/auth';
import exchange_arbitrage from '@/ui/icons/exchange_arbitrage.svg'
import market_making from '@/ui/icons/market-making.svg'
import cryptomax from '@/ui/icons/cryptomax.svg'
import { Carousel, CarouselContent, CarouselItem } from '@/shadcn/ui/carousel'

import { Product } from "@/components/product"
import { goods } from "@/types/products";



import triangle_blue from '@/ui/icons/triangle_blue.svg'
import ethereum_auth from '@/ui/icons/ethereum_auth.svg'
import binance_coin from '@/ui/icons/binance_coin.svg'
import usdt from '@/ui/icons/usdt.svg'
import { Slider } from '@/shadcn/ui/slider'
import { Switch } from '@/shadcn/ui/switch'
import candle from "@/ui/icons/candle.svg";
import sell from "@/ui/icons/sell.svg";
import clockHistoryBlack from "@/ui/icons/clock-history-black.svg";
import dollarCrosshairBlack from "@/ui/icons/dollar-crosshair-black.svg";
import dollarSwirlBlack from "@/ui/icons/dollar-swirl-black.svg";
import bag from "@/ui/icons/bag.svg";

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
import Image from 'next/image';
import { AllTooltip } from '@/components/allTooltip';


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
		{days: 15, percent: '0.7-0.9', interest: 0, usd: 10, eth: 100, amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 25, percent: '0.9-1.2', interest: 1, usd: 20, eth: 200, amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 35, percent: '1.2-1.5', interest: 2, usd: 30, eth: 300, amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 45, percent: '1.5-1.8', interest: 3, usd: 40, eth: 400, amount: '~0.1250', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
	]
}




export default function Copytrading() {
	const [ plan, setPlan ] = useState('Activate new Plan')
	const [ planDynamic, setPlanDynamic ] = useState(dynamicStrategy.plan[0])
	const [ crypto, setCrypto ] = useState('12')

	const [openFrom, setOpenFrom] = useState(false)
	const [ openTo, setOpenTo ] = useState(false)
  const [valueFrom, setValueFrom] = useState("etherc-20")

	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);

	function onClick(item) {
		item === 'from' ? setOpenFrom(!openFrom)
		: setOpenTo(!openTo)
	}
	
	const [ profitDinamic, setProfitDinamic ] = useState(planDynamic.interest)
	const [ profit, setProfit ] = useState('interest')

	useEffect(() => {
		setProfitDinamic(planDynamic[profit]);
	}, [planDynamic, profit]);

	function onChangeProfit(item, value) {
		setProfitDinamic(item[value]);
		setProfit(value)
	}

	const bots = goods.filter((item, index) => index < 6)
	const pagination = Math.ceil(bots.length / 3)
  const paginationLg = Math.ceil(bots.length / 2)
  const paginationMd = Math.ceil(bots.length / 1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlidesshow, setCurrentSlidesshow] = useState(0)

  const [md, setMd] = useState(false)
  const [lg, setLg] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mdMatch = window.matchMedia("(max-width: 830px)")
      const lgMatch = window.matchMedia("(max-width: 1360px)")

      setMd(mdMatch.matches)
      setLg(lgMatch.matches)

      mdMatch.addEventListener('change', e => setMd(e.matches))
      lgMatch.addEventListener('change', e => setLg(e.matches))
    }
  }, [])
	
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





		<div className={styles.body}>
			<div className={styles.inner}>



				<div className={styles.main}>
					<div className={styles.plans}>
						<h5 className='text-[16px] uppercase text-[#828282] font-[400]'>Choose investment options</h5>

<div className={styles.card_list}>
							<div onClick={() => setCrypto('12')} className={cn(styles.crypto, {[styles.active]: crypto === '12'})}>
								<div className="flex  items-center self-stretch    gap-[16px]">
									<Image src={market_making} width={40} height={40} alt='icon'></Image>
									<div className="flex flex-col justify-center    ">
										<p className="  text-[18px] text-center text-nowrap">CryptoYeild 12</p>
										<p className="  text-[14px] text-center uppercase ">
											<span className="  text-[14px] font-medium text-center uppercase ">
											2.5 - 2.9%
											</span>
											<span className="  text-[14px] font-light text-center uppercase ml-[4px]">
	
												daily
											</span>
										</p>
									</div>
								</div>
								<div className="flex flex-col   self-stretch    gap-[16px]">
									<p className="self-stretch    text-[12px]  ">
										<span className="self-stretch    text-[12px] font-medium  ">
											Lock-in period:
										</span>
										<span className="self-stretch    text-[12px] font-light ml-[4px] ">
	
											90 days
										</span>
									</p>
									<p className="self-stretch    text-[12px]  ">
										<span className="self-stretch    text-[12px] font-medium  ">
											Deposit returning:
										</span>
										<span className="self-stretch  relative  text-[12px] font-light ml-[4px] ">
	
											After Closing
										</span>
									</p>
									<p className="self-stretch    text-[12px]  ">
										<span className="self-stretch    text-[12px] font-medium  ">
											Bots in work:
										</span>
										<span className="self-stretch    text-[12px] font-light ml-[4px] ">
	
											12
										</span>
									</p>
									<p className="self-stretch    text-[12px]  ">
										<span className="self-stretch    text-[12px] font-medium  ">
											Amount:
										</span>
										<span className="self-stretch    text-[12px] font-light ml-[4px] ">
	
										10000-25000
										</span>
									</p>
								</div>
							</div>
	
	
	
								<div onClick={() => setCrypto('24')} className={cn(styles.crypto, {[styles.active]: crypto === '24'})}>
									<div className="flex  items-center self-stretch    gap-[16px]">
										<Image src={exchange_arbitrage} width={40} height={40} alt='icon'></Image>
										<div className="flex flex-col justify-center    ">
											<p className="  text-[18px] text-center text-nowrap">CryptoPro 24</p>
											<p className="  text-[14px] text-center uppercase ">
												<span className="  text-[14px] font-medium text-center uppercase ">
												3.0 - 3.5%
												</span>
												<span className="  text-[14px] font-light text-center uppercase ml-[4px]">
		
													daily
												</span>
											</p>
										</div>
									</div>
									<div className="flex flex-col   self-stretch    gap-[16px]">
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Lock-in period:
											</span>
											<span className="self-stretch    text-[12px] font-light ml-[4px] ">
		
												90 days
											</span>
										</p>
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Deposit returning:
											</span>
											<span className="self-stretch  relative  text-[12px] font-light ml-[4px] ">
		
												After Closing
											</span>
										</p>
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Bots in work:
											</span>
											<span className="self-stretch    text-[12px] font-light ml-[4px] ">
		
												24
											</span>
										</p>
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Amount:
											</span>
											<span className="self-stretch    text-[12px] font-light ml-[4px] ">
		
											10000-25000
											</span>
										</p>
									</div>
								</div>
		
		
								<div onClick={() => setCrypto('36')} className={cn(styles.crypto, {[styles.active]: crypto === '36'})}>
									<div className="flex  items-center self-stretch    gap-[16px]">
										<Image src={cryptomax} width={40} height={40} alt='icon'></Image>
										<div className="flex flex-col justify-center    ">
											<p className="  text-[18px] text-center text-nowrap">CryptoMax 36</p>
											<p className="  text-[14px] text-center uppercase ">
												<span className="  text-[14px] font-medium text-center uppercase ">
													3.6 - 3.9%
												</span>
												<span className="  text-[14px] font-light text-center uppercase ml-[4px]">
		
													daily
												</span>
											</p>
										</div>
									</div>
									<div className="flex flex-col   self-stretch    gap-[16px]">
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Lock-in period:
											</span>
											<span className="self-stretch    text-[12px] font-light ml-[4px] ">
		
												90 days
											</span>
										</p>
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Deposit returning:
											</span>
											<span className="self-stretch  relative  text-[12px] font-light ml-[4px] ">
		
												After Closing
											</span>
										</p>
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Bots in work:
											</span>
											<span className="self-stretch    text-[12px] font-light ml-[4px] ">
		
												36
											</span>
										</p>
										<p className="self-stretch    text-[12px]  ">
											<span className="self-stretch    text-[12px] font-medium  ">
												Amount:
											</span>
											<span className="self-stretch    text-[12px] font-light ml-[4px] ">
		
												10000-25000
											</span>
										</p>
									</div>
								</div>
</div>

						<div className={styles.currency}>
							<h5 className='flex justify-between text-[16px] font-[400] translate-y-[10px]'>Currency and investment amount</h5>
	
							<div className={styles.block}>
								<div className='flex flex-col'>
									<p className="text-[12px] uppercase text-[#605e5e]">
										Currency
									</p>
									<Popover className={styles.popover} open={openFrom} onOpenChange={setOpenFrom}>
										<PopoverTrigger asChild>
											<div onClick={() => onClick('from')} className={cn(styles.counter, { [styles.active]: openFrom })}>
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
										<p className="text-[12px] uppercase text-[#605e5e]">
											amount: $100-1000
										</p>
										<p className="text-[12px] uppercase text-[#00b2c8]">
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
									{/* <span className={styles.span}>?</span> */}
									<AllTooltip
										text='Adds profit to the invested amount, increasing profits for subsequent days. Can be changed at any time'
									></AllTooltip>
								</div>
	
								<div className='flex items-center gap-[10px] relative mr-[20px]'>
									<p className="text-[16px] text-center">
										Reactivation
									</p>
									<Switch></Switch>
									{/* <span className={styles.span}>?</span> */}
									<AllTooltip
										text='Automatically reactivates the plan for the next term. As a bonus you get +0.1% to your daily profit. Cannot be disabled once activated'
									></AllTooltip>
								</div>
							</div>
	
						</div>
						</div>

					<div className='flex flex-col gap-[30px]'>
						<h4 className='text-[16px] text-[#828282] font-[400] flex justify-between uppercase items-center gap-[12px]'>summary information</h4>


						<div className={styles.profit}>
							<h5 className={styles.h}>Profit calculation
								<div className="overflow-hidden border-[1px] border-solid border-[#e6e6e6] rounded-[6px] flex items-center h-[40px] flex-shrink-0 flex-grow-0">
								<p onClick={() => onChangeProfit(planDynamic.eth, 'eth')} className={cn(styles.tab, { [styles.active]: profit === 'eth' })} ><span className='' >% </span> ETH</p>

								<p onClick={() => onChangeProfit(planDynamic.usd, 'usd')} className={cn(styles.tab, { [styles.active]: profit === 'usd' })} >$ USD</p>	

<p onClick={() => onChangeProfit(planDynamic.interest, 'interest')} className={cn(styles.tab, { [styles.active]: profit === 'interest' })} ><span className='' >% </span> INTEREST</p>
								</div>
							</h5>
	
							<div className={styles.plan__calculation}>
								<div>
									<p className={styles.calc}>
										<span>Daily
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>ETH</span></span>
									</p>
	
									<p className={styles.calc}>
										<span>Weekly
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>ETH</span></span>
									</p>
	
									<p className={styles.calc}>
										<span>Monthly
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>ETH</span></span>
									</p>
	
									<p className={styles.calc}>
										<span>Total Profit
											<span className={styles.span}>?</span>
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>ETH</span></span>
									</p>
	
									<p className={styles.calc}>
										<span>Total with investment amount
											<span className={styles.span}>?</span>
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>ETH</span></span>
									</p>
	
								</div>
							</div>
						</div>

						<div className={styles.button}>
							<ButtonBlue
								text='Activate'
							></ButtonBlue>
						</div>

					</div>
				</div>

			</div>
		</div>




		<div className={styles.stat}>
			<div className='flex flex-col'>
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
	
	
	
			<div className='max-w-[750px]'>
				<p className="text-[14px] font-[400] uppercase mb-[20px] text-[#828282]">
					Trading Statistics
				</p>
				<div className={styles.card_statistics}>
							<div className="flex flex-col justify-between items-center min-h-[250px] flex-shrink-0 w-[188px] relative gap-[24px]">
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




		<div className='flex items-center justify-center flex-col gap-[24px]'>
			<div className={styles.pagination_wrapper}>
				<p className="flex-grow-0 flex-shrink-0 text-[14px] font-[400]  uppercase text-[#828282]">
					List of bots used for copying
				</p>

				{goods.length > 3 && (
        <div className="flex justify-center h-[10px] gap-[8px]">
          {Array.from({ length: md ? paginationMd : lg ? paginationLg : pagination }, (_, index) => (
            <button
              onClick={() => {
                setCurrentSlide(index)
                setCurrentSlidesshow(index)
              }}
              key={index}
              className={cn(styles.pagination, { [styles.active]: index === currentSlidesshow })}
            />
          ))}
        </div>
      )}
			</div>

      <Carousel
        opts={{
          align: "center",
          slidesToScroll: md ? 1 : lg ? 2 : 3,
          watchDrag: false,
        }}
        pagination={currentSlide}
				className={styles.carousel_container}
      >
        <CarouselContent>
          {goods.map((item, index) => (
						<CarouselItem key={index} className={styles.carousel}>

									<Product item={item} key={index}>

									</Product>

						</CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

			<div className={styles.progress_bot}>
					<Progress value={20}></Progress>
				</div>

			<div className={styles.button}>
				<ButtonBlue
					text='Watch Full List'
				></ButtonBlue>
			</div>


    </div>
	</div>
}