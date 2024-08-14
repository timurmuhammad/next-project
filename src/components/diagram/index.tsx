'use client'

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts"
import {Card, CardContent} from "@/shadcn/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/shadcn/ui/chart"
import { useState } from 'react'
import styles from './diagram.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import marketMaking from "@/ui/icons/market-making.svg" 
import dollar from "@/ui/icons/dollar-swirl-black.svg" 
import clockHistory from "@/ui/icons/clock-history-black.svg" 
import candle from "@/ui/icons/candle.svg" 
import { ButtonBlue } from '../buttonBlue'
import { cryptoYeild12, cryptoMax24, cryptoPro36 } from '@/types/diagramType'
import { Switch } from "@/shadcn/ui/switch"
import { Slider } from "@/shadcn/ui/slider"

const groupPool = [cryptoYeild12, cryptoMax24, cryptoPro36]
const chartType = ['Week', 'Month', 'Total']

const chartData = [
  { month: "Sun", desktop: 186 },
  { month: "Mon", desktop: 305 },
  { month: "Tue", desktop: 186 },
  { month: "Wed", desktop: 300 },
  { month: "Thu", desktop: 500 },
  { month: "Fri", desktop: 250 },
	{ month: "Sat", desktop: 200 },
]

export const Diagram = () => {
	const [ pool, setPool ] = useState(cryptoYeild12)
	const [ chart, setChart ] = useState(chartType[2])

	const chartConfig = {
		desktop: {
			label: chart,
			color: "#00B2C8",
		},
	} satisfies ChartConfig

	return <div className=''>
		<div>
			<div className={styles.rectangle}>
			{
				groupPool.map((item, index) => {
					return <button className={cn({[styles.active]: pool === item})} onClick={() => setPool(item)}></button>
			})
			}
			</div>



			<div className={styles.top_bar}>
				<div className={styles.list_wrapper}>
					<div className={cn(styles.list, {[styles.active]: pool === cryptoYeild12})}>
						<div className={styles.company}>
							<Image src={marketMaking} width={92} height={92} alt='icon'></Image>
							<p>
								<span>Company</span> CryptoYield 12
							</p>
						</div>
			
						<div className="flex text-nowrap justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 p-1.5 rounded-md">
							<Image src={dollar} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Lock-in Period
								</p>
								<p className="text-[14px]">
									{cryptoYeild12.period} days
								</p>
							</div>
						</div>
			
						<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[207px] relative gap-3 p-1.5 rounded-md">
							<Image src={clockHistory} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Investment amount
								</p>
								<p className="text-sm text-[14px]">
									{cryptoYeild12.investment}
								</p>
							</div>
						</div>
			
						<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 p-1.5 rounded-md">
							<Image src={candle} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Daily Returns
								</p>
								<p className="text-sm text-[14px]">
									{cryptoYeild12.returns}
								</p>
							</div>
						</div>
			
					</div>  
			
			
			
					<div className={cn(styles.list, {[styles.active]: pool === cryptoMax24})}>
						
						<div className={styles.company}>
							<Image src={marketMaking} width={92} height={92} alt='icon'></Image>
							<p>
								<span>Company</span> CryptoMax 24
							</p>
						</div>
			
						<div className="flex text-nowrap justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 p-1.5 rounded-md">
							<Image src={dollar} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Lock-in Period
								</p>
								<p className="text-[14px]">
									{cryptoMax24.period} days
								</p>
							</div>
						</div>
			
						<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[207px] relative gap-3 p-1.5 rounded-md">
							<Image src={clockHistory} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Investment amount
								</p>
								<p className="text-sm text-[14px]">
									{cryptoMax24.investment}
								</p>
							</div>
						</div>
			
						<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 p-1.5 rounded-md">
							<Image src={candle} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Daily Returns
								</p>
								<p className="text-sm text-[14px]">
									{cryptoMax24.returns}
								</p>
							</div>
						</div>
			
					</div>  
			
			
			
					<div className={cn(styles.list, {[styles.active]: pool === cryptoPro36})}>
						
						<div className={styles.company}>
							<Image src={marketMaking} width={92} height={92} alt='icon'></Image>
							<p>
								<span>Company</span> CryptoPro 36
							</p>
						</div>
			
						<div className="flex text-nowrap justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 p-1.5 rounded-md">
							<Image src={dollar} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Lock-in Period
								</p>
								<p className="text-[14px]">
									{cryptoPro36.period} days
								</p>
							</div>
						</div>
			
						<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[207px] relative gap-3 p-1.5 rounded-md">
							<Image src={clockHistory} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Investment amount
								</p>
								<p className="text-sm text-[14px]">
									{cryptoPro36.investment}
								</p>
							</div>
						</div>
			
						<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 p-1.5 rounded-md">
							<Image src={candle} width={42} height={42} alt='icon'></Image>
							<div className="flex flex-col justify-center">
								<p className="text-[16px] text-nowrap">
									Daily Returns
								</p>
								<p className="text-sm text-[14px]">
									{cryptoPro36.returns}
								</p>
							</div>
						</div>
			
					</div>  
				</div>
			</div>
	

	
	
			<div className={styles.main}>
				<div className='flex flex-col justify-between flex-1  py-[32px]'>
					<div className="flex gap-[24px] justify-center">
						{chartType.map((item, index) => (
							<button key={index} onClick={() => setChart(item)} className={cn(styles.button, {[styles.active]: item === chart})}>{item}</button>
						))}
					</div>
	
					<Card>

						<CardContent>
							<ChartContainer config={chartConfig} className="max-h-[369px] w-full">
								<AreaChart
									accessibilityLayer
									data={chartData}
									margin={{
										left: 12,
										right: 12,
									}}
								>
									<CartesianGrid vertical={false} />
									<XAxis
										dataKey="month"
										tickLine={false}
										axisLine={false}
										tickMargin={10}
										tickFormatter={(value) => value.slice(0, 3)}
									/>
									<YAxis
										tickLine={false}
										axisLine={false}
										tickMargin={40}
										tickCount={6}
									/>
									<ChartTooltip
										cursor={false}
										content={<ChartTooltipContent indicator="line" />}
									/>
									<Area
										dataKey="desktop"
										type="natural"
										fill="var(--color-desktop)"
										fillOpacity={0.4}
										stroke="var(--color-desktop)"
									/>
								</AreaChart>
							</ChartContainer>
						</CardContent>

					</Card>
				</div>
	
				<div className="">
					<div className="flex flex-col gap-[24px] items-center px-[24px] py-[32px] rounded-br-md bg-[#fafafa] border-solid border-l-[1px] border-[#ebebeb]">
						<p className="text-[24px]">Statistic</p>
						<div className="flex flex-col justify-center items-center">
							<p className="text-[14px]">Net profit</p>
							<p className="text-[14px] text-[#2fc217]">
								18 245 341 USDT 654%
							</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-[14px]">
								Avg profit per Trade
							</p>
							<p className="text-[14px] text-[#2fc217]">+2.6%</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-[14px]">
								Best profit per trade
							</p>
							<p className="text-[14px] text-[#2fc217]">+3.021%</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-[14px]">
								Total Closed Trades
							</p>
							<p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#303030]">13245</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-[14px]">W/L Ratio</p>
							<p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#303030]">
								12156/1154
							</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-[14px]">Total bots in work</p>
							<p className="text-[14px]">16</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-[14px]">Uptime</p>
							<p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#303030]">
								132 days
							</p>
						</div>
						<ButtonBlue text='Activate'></ButtonBlue>
					</div> 
				</div>
			</div>
		</div>

		

		<div className={styles.calculate}>
			<h6 className="self-center font-[500] text-[16px] text-black">Calculate your profit</h6>
			<div>
				<p className='text-[14px] font-[400] text-[#605e5e] mb-[4px]'>$10000-250000</p>
				<p className='flex text-[20px] font-[400] w-full flex-auto items-center justify-center rounded-[6px] py-0  px-[16px]  h-[56px] bg-[#fafafa] border-[1px] border-solid border-[#cecece]'>$25000</p>
			</div>

			<Slider defaultValue={[2500]} max={10000} step={1}></Slider>
							
		
			<div className='flex items-center justify-between'>
				<p className='flex items-center gap-[6px] text-[14px] text-black'>Compounding<Switch></Switch></p>
				<p className='flex items-center gap-[6px] text-[14px] text-black'>Reactivation<Switch></Switch></p>
			</div>
		</div>
	</div>
}



