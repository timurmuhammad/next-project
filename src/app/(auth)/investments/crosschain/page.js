'use client'

import { AllTooltip } from '@/components/allTooltip'
import styles from './crosschain.module.scss'
import cn from 'classnames'

import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import {TranslatedLink} from '@/components/translatedLink';
import { tabs } from '@/types/auth';
import exchange_arbitrage from '@/ui/icons/exchange_arbitrage.svg'
import market_making from '@/ui/icons/market-making.svg'
import cryptomax from '@/ui/icons/cryptomax.svg'
import { Carousel, CarouselContent, CarouselItem } from '@/shadcn/ui/carousel'

import { Product } from "@/components/product"
import { goods } from "@/types/products";

import { Typography } from '@/components/typography'
import chain from "@/ui/images/chain.svg";



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



const dynamicStrategy = {
	name: 'Dynamic Strategy',
	description: 'A strategy with a wide range of investment amounts and short investment periods',
	plan: [
		{days: 30, percent: '4.4', interest: 0, usd: 10, eth: 100, amount: '100', sum: '$100-10000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 40, percent: '4.6', interest: 1, usd: 20, eth: 200, amount: '100', sum: '$10000-50000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 35, percent: '1.2-1.5', interest: 2, usd: 30, eth: 300, amount: '100', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 45, percent: '1.5-1.8', interest: 3, usd: 40, eth: 400, amount: '100', sum: '$100-1000', daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
	]
}

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





export default function Crossсhain() {
	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);
	const [ plan, setPlan ] = useState('Activate new Plan')
	const [ planDynamic, setPlanDynamic ] = useState(dynamicStrategy.plan[0])
	const [openFrom, setOpenFrom] = useState(false)
	const [ openTo, setOpenTo ] = useState(false)
	const [valueFrom, setValueFrom] = useState("etherc-20")

	const [ profitDinamic, setProfitDinamic ] = useState(planDynamic.interest)
	const [ profit, setProfit ] = useState('interest')

	useEffect(() => {
		setProfitDinamic(planDynamic[profit]);
	}, [planDynamic, profit]);

	function onChangeProfit(item, value) {
		setProfitDinamic(item[value]);
		setProfit(value)
	}

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
				<div className='rounded-[6px] border border-solid border-[#cecece] overflow-hidden'>
					<div className={styles.list}>
						<div className={styles.box}>
							<Image src={bag} width={42} height={42} alt='icon'></Image>
							<div>
								<h6>Deposit returning</h6>
								<p>After Lock-in Period</p>
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
							<Image src={clockHistoryBlack} width={42} height={42} alt='icon'></Image>
							<div>
								<h6>Lock-in Period</h6>
								<p>15-45 days</p>
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


					<div className={styles.main}>
						<div className={styles.plans}>
							<h5 className='text-[16px] text-[#828282] font-[400]'>Choose investment options</h5>
			
							<div className={styles.plan__list}>
								{
									dynamicStrategy.plan.map((item, index) => (
										index < 2 && <div key={index} onClick={() => setPlanDynamic(item)} className={cn(styles.plan__box, {[styles.active]: item.days === planDynamic.days})}>
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
											amount: $250-$250000
										</p>
										<p className="text-[10px] uppercase text-[#00b2c8]">
											use max
										</p>
									</div>
	
									<div className="flex flex-grow border-[1px] border-solid bg-neutral-50 rounded-[6px] border-[#cecece] overflow-hidden">
										<div className="flex justify-center items-center flex-grow gap-[8px] px-[16px]">
											<p className="flex-grow text-[14px] text-center">0.015</p>
											<div className="flex justify-end items-center gap-[10px]">
												<p className="text-[14px]">ETH</p>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[79px] relative px-[16px] border-l-[1px] border-[#cecece] border-solid ">
											<p className="text-[14px] text-[#8a8181]">$ 11.52</p>
										</div>
									</div>
	
								</div>
							</div>
			
							<Slider defaultValue={[planDynamic.amount]} max={100} step={1}></Slider>
	
						</div>
			
						<div className='flex flex-col gap-[30px]'>
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
										<span> {profitDinamic}<span className='ml-[4px]'>$</span></span>
									</p>
			
									<p className={styles.calc}>
										<span>Weekly
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>$</span></span>
									</p>
			
									<p className={styles.calc}>
										<span>Total Profit
											{/* <span className={styles.span}>?</span> */}
											<AllTooltip
										text='Adds profit to the invested amount, increasing profits for subsequent days. Can be changed at any time'
									></AllTooltip>
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>$</span></span>
									</p>
			
									<p className={styles.calc}>
										<span>Total with investment amount
											<AllTooltip
										text='Adds profit to the invested amount, increasing profits for subsequent days. Can be changed at any time'
									></AllTooltip>
										</span>
										<span> {profitDinamic}<span className='ml-[4px]'>$</span></span>
									</p>
	
								</div>
							</div>
						</div>
					</div>
				</div>
		
			</div>
		</div>



		<div className={styles.button}>
			<ButtonBlue
				text='Activate'
			></ButtonBlue>
		</div>



		<p className={styles.title}>
			Features Cross Chain DEX-Trading
		</p>



		<div className={styles.list_media}>
			<div className={styles.box}>
				<Image src={bag} width={42} height={42} alt='icon'></Image>
				<div>
					<h6>Deposit returning</h6>
					<p>After Lock-in Period</p>
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
				<Image src={clockHistoryBlack} width={42} height={42} alt='icon'></Image>
				<div>
					<h6>Lock-in Period</h6>
					<p>15-45 days</p>
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




		<div className={styles.cross}>
			<p className="text-[14px] font-medium uppercase mb-[20px] text-[#828282]">
			Cross-chain dex Trading Statistics
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
							30 days offer
							</p>
						</div>
						<div className="flex  items-center  flex-shrink-0 relative gap-[24px]">
							<div className=" flex-shrink-0 w-[20px] h-[8px] bg-[#b7f2f8]" />
							<p className=" flex-shrink-0 text-[12px]   text-black">
							40 days offer
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
				<div className="flex flex-col justify-between bg-[#f3fbfc] self-stretch flex-grow gap-[24px]">





					<div className={styles.list_statistic}>
						<div className="flex flex-col">
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
								<p className="  text-[14px] text-nowrap ">
								Runtime
								</p>
								<p className="font-[500] text-[16px] ">13 Days</p>
							</div>
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] ">
								<p className="  text-[14px] text-nowrap ">
								Crosschain Swaps
								</p>
								<p className="font-[500] text-[16px] ">12434</p>
							</div>
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] ">
								<p className="  text-[14px] text-nowrap ">
								Direct exchanges
								</p>
								<p className="font-[500] text-[16px] ">342</p>
							</div>
						</div>


						<div className="flex flex-col">
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] ">
								<p className="  text-[14px] text-nowrap ">
								Smart contracts
								</p>
								<p className="font-[500] text-[16px] ">19664</p>
							</div>
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
								<p className="  text-[14px] text-nowrap ">
								Direct Swaps
								</p>
								<p className="font-[500] text-[16px] ">2162</p>
							</div>
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
								<p className="  text-[14px] text-nowrap ">
								Liquidity Privided
								</p>
								<p className="font-[500] text-[16px] ">$ 141241</p>
							</div>
						</div>


						<div className="flex flex-col">
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] ">
								<p className="  text-[14px] text-nowrap ">
								Tokens
								</p>
								<p className="font-[500] text-[16px] ">41</p>
							</div>
							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
								<p className="  text-[14px] text-nowrap ">
								Bridges
								</p>
								<p className="font-[500] text-[16px] ">6</p>
							</div>

							<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px]">
								<p className="  text-[14px] text-nowrap ">
								Protocols connected
								</p>
								<p className="font-[500] text-[16px] ">23</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>



		<div className={styles.blue}>
		<Typography
				size="h2"
				title="What is Cross Chain DEX-Trading"
				text="Cross-chain DEX (Decentralized Exchange) trading refers to the ability to trade cryptocurrencies and other digital assets across different blockchain networks without relying on a centralized intermediary. This type of trading leverages decentralized technologies to facilitate seamless exchanges between assets on separate blockchains."
			></Typography>
			<div className={styles.chain}><Image src={chain} width={422} height={403} alt='img'></Image></div>
		</div>


	</div>
}