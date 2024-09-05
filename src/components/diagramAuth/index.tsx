'use client'


import { CartesianGrid, XAxis, YAxis, Line, LineChart } from "recharts"
import {Card, CardContent} from "@/shadcn/ui/card"
import { ChartConfig, ChartContainer } from "@/shadcn/ui/chart"
import { useState } from 'react'
import styles from './diagram_auth.module.scss'
import cn from 'classnames'
import Image from "next/image"
import mark from "@/ui/icons/mark.svg";
import invested from "@/ui/icons/invested.svg";
import withdrawn from "@/ui/icons/withdrawn.svg";
import balance from "@/ui/icons/balance.svg";
import Earned from "@/ui/icons/Earned.svg";

const chartType = ['Week', 'Month', 'All time']

const chartData = [
	{ month: "Sun", desktop: 73 },
  { month: "Mon", desktop: 100 },
  { month: "Tue", desktop: 55 },
  { month: "Wed", desktop: 305 },
  { month: "Thu", desktop: 200 },
  { month: "Fri", desktop: 250 },
	{ month: "Sat", desktop: 40 },
]

export const DiagramAuth = () => {
	const [ chart, setChart ] = useState(chartType[2])

	const chartConfig = {
		desktop: {
			label: chart,
			color: "#00B2C8",
		},
	} satisfies ChartConfig

	return <div className="flex gap-[24px]">
		<div className="flex flex-col gap-[24px] flex-1">
			<p className="text-[14px] font-medium uppercase text-[#828282]">
				Balance Graph
			</p>

			<div className={styles.main}>
				<div className="flex justify-between">
					<div className="flex flex-col gap-[16px]">
						<p className="text-[32px] font-medium">
							$ 5.987,37
						</p>
					</div>
					<Image src={mark} width={24} height={24} alt='icon'></Image>
				</div>
	
				<div className={styles.buttons}>
					{chartType.map((item, index) => (
						<button key={index} onClick={() => setChart(item)} className={cn(styles.button, { [styles.active]: item === chart })}>{item}</button>
					))}
				</div>
	
	
				<div className="bg-[#ECECEC] h-[1px] w-full"></div>

	
	
				<Card>
					<CardContent className={styles.chart_content}>
						<p className={styles.text}> Here will be your statistics </p>
						<ChartContainer config={chartConfig} className={styles.chart_container}>
							<LineChart
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
								<Line
									dataKey="desktop"
									type="linear"
									stroke="var(--color-desktop)"
									strokeWidth={2}
									dot={{
										fill: "var(--color-desktop)",
									}}
								/>
							</LineChart>
						</ChartContainer>
					</CardContent>
				</Card>
	
			</div>
		</div>



		<div className={styles.statistics}>
			<p className="   w-[181px] text-[14px] font-medium  uppercase text-[#828282]">
				Statistics
			</p>
			<div className="flex flex-col justify-center     gap-[16px] px-[16px] py-[18px] rounded-[6px] bg-white border border-solid border-[#e6e6e6]">
				<div className="flex  items-center     gap-[16px]">
					<Image src={invested} width={24} height={24} alt="icon"></Image>
					<p className="  text-[14px] font-medium  uppercase text-[#828282]">
						Invested
					</p>
				</div>
				<p className="   font-medium  ">$ 0.00</p>
			</div>
			<div className="flex flex-col justify-center     gap-[16px] px-[16px] py-[18px] rounded-[6px] bg-white border border-solid border-[#e6e6e6]">
				<div className="flex  items-center     gap-[8px]">
					<Image src={withdrawn} width={24} height={24} alt="icon"></Image>

					<p className="w-[117px] text-[12px] font-medium  uppercase text-[#828282]">
						Withdrawn
					</p>
				</div>
				<p className="   font-medium  ">$ 0.00</p>
			</div>
			<div className="flex flex-col justify-center     gap-[16px] px-[16px] py-[18px] rounded-[6px] bg-white border border-solid border-[#e6e6e6]">
				<div className="flex  items-center     gap-[8px]">
					<Image src={balance} width={24} height={24} alt="icon"></Image>

					<p className="w-[117px] text-[12px] font-medium  uppercase text-[#828282]">
						Available Balance
					</p>
				</div>
				<p className="   font-medium  ">$ 0.00</p>
			</div>
			<div className="flex flex-col justify-center     gap-[16px] px-[16px] py-[18px] rounded-[6px] bg-white border border-solid border-[#e6e6e6]">
				<div className="flex  items-center     gap-[8px]">
					<Image src={Earned} width={24} height={24} alt="icon"></Image>

					<p className="w-[117px] text-[12px] font-medium  uppercase text-[#828282]">
						Earned
					</p>
				</div>
				<p className="   font-medium  ">$ 0.00</p>
			</div>
		</div>
	</div>
}



