'use client'

import { Progress } from '@/shadcn/ui/progress'
import styles from './dashboard.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import btc from "@/ui/icons/btc.svg";
import usdt from "@/ui/icons/usdt.svg";
import eth from "@/ui/icons/eth.svg";
import { DiagramAuth } from '@/components/diagramAuth';
import rocket from "@/ui/icons/rocket.png";
import { Carousel, CarouselContent, CarouselItem } from '@/shadcn/ui/carousel';
import Link from 'next/link';
import { media } from '@/types/blogType';
import { useState } from 'react';
import automatic_trading from "@/ui/icons/automatic_trading.svg";
import copy_trading_auth from "@/ui/icons/copy_trading_auth.svg";
import { UnderlineButton } from '@/components/underlineButton'
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/ui/card"
import {
  ChartConfig,
  ChartContainer,
	ChartLegend,
	ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn/ui/chart"

export const description = "A donut chart"

const chartData = [
  { browser: "static", visitors: 275, fill: "#00b2c8" },
  { browser: "dinamic", visitors: 200, fill: "#b7f2f8" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  static: {
    label: "Static",
    color: "hsl(var(--chart-1))",
  },
  dinamic: {
    label: "Dinamic",
    color: "hsl(var(--chart-2))",
  },
}


const tabs = [
	{name: 'Automatic Trading'},
	{name: ' Copy Trading'},
]


export default function Dashboard() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [currentSlidesshow, setCurrentSlidesshow] = useState(0)
	const [ tab, setTab ] = useState(tabs[0])

	return <div className={cn(styles.inner, '_container')}>
		<div className={styles.main}>
			<div className="flex justify-between items-center gap-[32px]">
				<p className="  text-[14px] font-[500]  uppercase text-[#828282]">
					Wallets
				</p>
				<div className={styles.progress}>
					<Progress value={33}></Progress>
				</div>
			</div>




			<div className={styles.counters}>
				<div className={styles.counter}>
					<div className="flex  items-center   gap-[16px] px-[16px]">
						<Image src={btc} width={50} height={50} alt='icon'></Image>
						<div className="flex flex-col justify-center gap-[8px]">
							<p className="text-[14px] font-[400]">Bitcoin </p>
							<p className='text-[16px]'>
								BTC 0.000000
							</p>
						</div>
					</div>
					<div className="flex flex-col h-full">
						<div className="border-l-[1px] border-b-[1px] border-solid border-[#d9d9d9] h-[50%] aspect-[1/1] flex items-center justify-center cursor-pointer">
							<p className="text-[20px]">+</p>
						</div>
						<div className="border-l-[1px] border-solid border-[#d9d9d9] h-[50%] aspect-[1/1] flex items-center justify-center cursor-pointer">
							<p className="text-[20px]">-</p>
						</div>
					</div>
				</div>
	
				<div className={styles.counter}>
					<div className="flex  items-center   gap-[16px] px-[16px]">
						<Image src={usdt} width={50} height={50} alt='icon'></Image>
						<div className="flex flex-col justify-center gap-[8px]">
							<p className="text-[14px] font-[400]">Tether TRC20 </p>
							<p className='text-[16px]'>
							$ 0.00
							</p>
						</div>
					</div>
					<div className="flex flex-col h-full">
						<div className="border-l-[1px] border-b-[1px] border-solid border-[#d9d9d9] h-[50%] aspect-[1/1] flex items-center justify-center cursor-pointer">
							<p className="text-[20px]">+</p>
						</div>
						<div className="border-l-[1px] border-solid border-[#d9d9d9] h-[50%] aspect-[1/1] flex items-center justify-center cursor-pointer">
							<p className="text-[20px]">-</p>
						</div>
					</div>
				</div>
	
				<div className={styles.add}>
					<Image src={eth} width={50} height={50} alt='icon'></Image>
				</div>
			</div>




				<DiagramAuth></DiagramAuth>




				<p className="flex-grow-0 flex-shrink-0 text-[14px] font-medium  uppercase text-[#828282]"> Investment Activation </p>




				<div className="flex justify-between flex-wrap gap-[24px]">
  <div className="flex  items-center    gap-[24px] flex-grow-0 flex-shrink-0 p-[22px] rounded-[6px] bg-white border border-solid border-[#e6e6e6]">
    <div className="flex flex-col justify-center    gap-[20px]">
      <p className="  text-[20px]  ">
        Automatic Trading
      </p>
      <p className="   w-[265px] text-[16px]  ">
        Short term strategies with fixed or flexible returns
      </p>
      <div className='text-[16px]'>
      	<UnderlineButton
					text='Choose'
				></UnderlineButton>
      </div>
    </div>
    <Image src={automatic_trading} width={83} height={78} alt='icon'></Image>
  </div>
  <div className="flex  items-center    gap-[24px] flex-grow-0 flex-shrink-0 p-[22px] rounded-[6px] bg-white border border-solid border-[#e6e6e6]">
    <div className="flex flex-col justify-center    gap-[20px]">
      <p className="  text-[20px]  ">Copy Trading</p>
      <p className="   w-[265px] text-[16px]  ">
        Long-term strategies with flexible and highest returns
      </p>
      <div className="  w-[156px] h-[27px] ">
			<div className='text-[16px]'>
      	<UnderlineButton
					text='Choose'
				></UnderlineButton>
      </div>
      </div>
    </div>
    <Image src={copy_trading_auth} width={83} height={78} alt='icon'></Image>
  </div>
</div>



			<div className="flex flex-col overflow-hidden px-[24px] gap-[24px] py-[40px] rounded-[6px] border-solid bg-white border border-[#e6e6e6]">

				<div className={styles.buttons}>
				<div className="flex items-center justify-center flex-grow-0 flex-shrink-0 relative gap-[16px]">
						{tabs.map((item, index) => (
							<p onClick={() => setTab(item)} key={index} className={cn(styles.tab, { [styles.active]: item.name === tab.name })}>
								{item.name}
							</p>
						))}
					</div>
				</div>


				<div className={styles.card}>
					<div className="flex flex-col justify-between items-center flex-grow-0 flex-shrink-0 w-[188px] relative gap-[24px]">
						<p className="flex-grow-0 flex-shrink-0 text-[14px]   ">
							Assets Allocation
						</p>
						<Card className="w-full">
      <CardContent className={styles.chart}>
        <ChartContainer
          config={chartConfig}
          className="mx-[-50%] my-[-12%] aspect-square max-h-[100%]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={65}
            />
						{/* <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            /> */}
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
						<div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
							<div className="flex  items-center flex-grow-0 flex-shrink-0 relative gap-[24px]">
								<div className="flex-grow-0 flex-shrink-0 w-[20px] h-[8px] bg-[#00b2c8]" />
								<p className="flex-grow-0 flex-shrink-0 text-[12px]   text-black">
									Static strategy
								</p>
							</div>
							<div className="flex  items-center flex-grow-0 flex-shrink-0 relative gap-[24px]">
								<div className="flex-grow-0 flex-shrink-0 w-[20px] h-[8px] bg-[#b7f2f8]" />
								<p className="flex-grow-0 flex-shrink-0 text-[12px]   text-black">
									Dynamic strategy
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-between items-center self-stretch">
						<div className="flex flex-col justify-center relative gap-[8px] px-[24px] pb-[16px] rounded-[6px]">
							<p className="text-[14px]   ">
								Invested
							</p>
							<div className="flex w-[132px] h-[24px] relative">
								<p className="absolute left-0 top-0 text-[16px]  ">$345 942</p>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center h-[88px] gap-[8px] px-[24px] [16px] rounded-[6px]">
							<div className="flex flex-col justify-center relative gap-[8px]">
								<p className="text-[14px]   ">
									Pool Load{" "}
								</p>
								<div className="flex w-[132px] h-[24px] relative">
									<p className="absolute left-0 top-0 text-[16px]  ">35%</p>
								</div>
								<div className={cn(styles.progress, 'max-w-[100%] w-full')}><Progress value={35}></Progress></div>
							</div>
						</div>
						<div className="flex flex-col justify-centeк relative gap-[8px] px-[24px] pt-[16px] rounded-[6px]">
							<p className="text-[14px]   ">
								Total Profit
							</p>
							<div className="flex w-[132px] h-[24px] relative">
								<p className="absolute left-0 top-0 text-[16px]  ">456% / 100 000</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-between  self-stretch flex-grow gap-[24px]">
						<div className={styles.buttons_list}>
							<div className="flex items-center flex-grow-0 flex-shrink-0 relative gap-[16px]">
								{tabs.map((item, index) => (
									<p onClick={() => setTab(item)} key={index} className={cn(styles.tab, {[styles.active]: item.name === tab.name})}>
										{item.name}
									</p>
								))}
							</div>
						</div>




						<div className={styles.list}>
							<div className="flex flex-col">
								<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] rounded-[6px] ">
									<p className="  text-[14px] text-nowrap ">
										Strategies
									</p>
									<p className="  text-[16px] ">6</p>
								</div>
								<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] rounded-[6px]">
									<p className="  text-[14px] text-nowrap ">
										Runtime
									</p>
									<p className=" text-[16px] ">132 Days</p>
								</div>
							</div>


							<div className="flex flex-col">
								<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] rounded-[6px] ">
									<p className="  text-[14px] text-nowrap ">
									Last day Profit
									</p>
									<p className="  text-[16px] ">2.3%</p>
								</div>
								<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] rounded-[6px]">
									<p className="  text-[14px] text-nowrap ">
									W/L Ratio
									</p>
									<p className=" text-[16px] ">19423 / 241</p>
								</div>
							</div>


							<div className="flex flex-col">
								<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] rounded-[6px] ">
									<p className="  text-[14px] text-nowrap ">
									Total Trades
									</p>
									<p className="  text-[16px] ">19664</p>
								</div>
								<div className="flex flex-col justify-center gap-[8px] px-[22px] py-[16px] rounded-[6px]">
									<p className="  text-[14px] text-nowrap ">
									Total Users
									</p>
									<p className=" text-[16px] ">2162</p>
								</div>
							</div>
						</div>




					</div>
				</div>
			</div>
		</div>




		<div className="flex flex-col  items-start flex-grow-0 flex-shrink-0 w-[282px] gap-[24px]">
			<div className="flex flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0 h-[219px] relative overflow-hidden p-[24px] rounded-[6px] bg-white border-2 border-solid border-[#e4fafc] gap-[16px]">
				<p className="flex-grow-0 flex-shrink-0 text-[14px] font-medium  uppercase text-[#828282]">
					Need help?
				</p>
				<p className="self-stretch flex-grow-0 flex-shrink-0 w-[234px] text-[12px]   ">
					Visit our Help Center or start our Site Guide to get started with Company.
				</p>
				<div className="flex  items-start flex-grow-0 flex-shrink-0 w-[234px]">
					<div className="flex justify-center items-center flex-grow relative gap-[8px] px-2 py-1 rounded-tl rounded-bl bg-white border-t border-solid border-r-0 border-b border-l border-[#00b2c8]">
						<svg
							width={18}
							height={17}
							viewBox="0 0 18 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-4 h-4"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M17 1.60345V15.3966C17 16.0034 16.5034 16.5 15.8966 16.5H2.10345C1.49655 16.5 1 16.0034 1 15.3966V1.60345C1 0.996552 1.49655 0.5 2.10345 0.5H15.8966C16.5034 0.5 17 0.996552 17 1.60345Z"
								stroke="#303030"
								stroke-width="0.8"
								stroke-miterlimit={10}
							/>
							<path
								d="M8.99894 9.93421V8.94111C9.77135 8.94111 10.4334 8.27904 10.4334 7.50663C10.4334 6.73421 9.77135 6.07214 8.99894 6.07214C8.22652 6.07214 7.56445 6.73421 7.56445 7.50663"
								stroke="#00B2C8"
								stroke-width="0.8"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9.00046 11.5345C9.27472 11.5345 9.49701 11.3122 9.49701 11.038C9.49701 10.7637 9.27472 10.5414 9.00046 10.5414C8.72625 10.5414 8.50391 10.7637 8.50391 11.038C8.50391 11.3122 8.72625 11.5345 9.00046 11.5345Z"
								fill="#00B2C8"
							/>
							<path
								d="M8.99919 13.7414C11.8939 13.7414 14.2406 11.3948 14.2406 8.50005C14.2406 5.60532 11.8939 3.25867 8.99919 3.25867C6.10446 3.25867 3.75781 5.60532 3.75781 8.50005C3.75781 11.3948 6.10446 13.7414 8.99919 13.7414Z"
								stroke="#303030"
								stroke-width="0.8"
								stroke-miterlimit={10}
							/>
						</svg>
						<div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
							<p className="flex-grow-0 flex-shrink-0 text-[12px]  text-center ">
								Helpdesk
							</p>
						</div>
					</div>
					<div className="flex justify-center items-center flex-grow relative gap-[8px] px-2 py-1 border-solid rounded-tr rounded-br bg-white border border-[#00b2c8]">
						<svg
							width={21}
							height={21}
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-[20px] h-5 relative"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M15.4127 17.9976H9.05859V19.5861H15.4127V17.9976Z"
								stroke="black"
								stroke-width="0.8"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9.74609 5.3042V2.18011"
								stroke="#00B2C8"
								stroke-width="0.8"
								stroke-miterlimit={10}
								stroke-linecap="round"
							/>
							<path
								d="M7.63497 1.41376C5.91511 2.21325 4.72266 3.95626 4.72266 5.97778C4.72266 8.48569 6.55797 10.565 8.95873 10.9458M11.871 1.41376C13.5909 2.21325 14.7834 3.95626 14.7834 5.97778C14.7834 7.89388 13.7121 9.55973 12.1358 10.4091"
								stroke="#00B2C8"
								stroke-width="0.8"
								stroke-miterlimit={10}
								stroke-linecap="round"
							/>
							<path
								d="M8.52589 3.58453C7.53018 4.02577 6.83984 4.98773 6.83984 6.10342C6.83984 7.37418 7.73551 8.44556 8.95789 8.77513M10.9784 3.58453C11.9741 4.02577 12.6645 4.98773 12.6645 6.10342C12.6645 7.32813 11.8326 8.36761 10.678 8.73637"
								stroke="#00B2C8"
								stroke-width="0.8"
								stroke-miterlimit={10}
								stroke-linecap="round"
							/>
							<path
								d="M9.05839 12.6498L8.84658 12.2261C8.63482 11.8555 8.15825 11.6967 7.78758 11.9614C7.41692 12.1732 7.25806 12.6498 7.46987 13.0204C7.46987 13.0204 9.11154 15.4785 9.11135 15.8268C9.11116 16.1752 9.05839 12.6498 9.05839 12.6498Z"
								stroke="black"
								stroke-width="0.8"
								stroke-miterlimit={10}
							/>
							<path
								d="M14.6185 11.1139C14.1949 11.1139 13.8242 11.4846 13.8242 11.9082V11.3787C13.8242 10.9551 13.4535 10.5844 13.0299 10.5844C12.6063 10.5844 12.2357 10.9551 12.2357 11.3787V10.8492C12.2357 10.6373 12.1827 10.4785 12.0239 10.3197C11.865 10.1608 11.6532 10.0549 11.4414 10.0549C11.0178 10.0549 10.6472 10.4256 10.6472 10.8492V7.67211C10.6472 7.24849 10.2765 6.87787 9.85288 6.87787C9.42926 6.87787 9.05859 7.24849 9.05859 7.67211V15.35C9.05859 15.8265 9.37631 16.1972 9.79993 16.3561C10.0117 16.462 10.1706 16.6738 10.1176 16.8856V17.9975H14.3537V16.8326C14.3537 16.6208 14.4596 16.409 14.6714 16.3031C15.095 16.1442 15.3598 15.7736 15.4127 15.35V11.9082C15.4127 11.4846 15.0421 11.1139 14.6185 11.1139Z"
								stroke="black"
								stroke-width="0.8"
								stroke-miterlimit={10}
							/>
							<path
								d="M10.6484 10.8492V12.4377"
								stroke="black"
								stroke-width="0.8"
								stroke-miterlimit={10}
							/>
							<path
								d="M12.2363 11.3789V12.4379"
								stroke="black"
								stroke-width="0.8"
								stroke-miterlimit={10}
							/>
							<path
								d="M13.8242 11.9081V12.4376"
								stroke="black"
								stroke-width="0.8"
								stroke-miterlimit={10}
							/>
						</svg>
						<p className="flex-grow-0 flex-shrink-0 text-[12px]  text-center ">
							Start Guide
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col  items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-[16px] p-[24px] rounded-[6px] bg-white border border-[#e6e6e6] border-solid">
				<div className="flex  items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[16px]">
					<p className="flex-grow-0 flex-shrink-0 text-[14px] font-medium  uppercase text-[#828282]">
						Getting started
					</p>
				</div>
				<div className="flex flex-col justify-center relative gap-[8px]">
					<div className="flex  items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[8px] px-[16px] py-[8px] rounded-[6px]">
						<svg
							width={32}
							height={32}
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-[32px] h-[32px] relative"
							preserveAspectRatio="none"
						>
							<g clip-path="url(#clip0_2183_2060)">
								<circle cx={16} cy={16} r={15} fill="#00B2C8" stroke="#00B2C8" stroke-width={2} />
							</g>
							<path
								d="M12.5782 19.642L22.2202 10L23.5005 11.2802L12.5782 22.2025L7.5 17.1257L8.78025 15.8455L12.5782 19.642Z"
								fill="white"
							/>
							<defs>
								<clippath id="clip0_2183_2060">
									<rect width={32} height={32} fill="white" />
								</clippath>
							</defs>
						</svg>
						<div className="flex flex-col justify-center items-start flex-grow relative">
							<p className="flex-grow-0 flex-shrink-0 text-[14px] text-center  font-[400]">
								Activate Account
							</p>
							<p className="self-stretch flex-grow-0 flex-shrink-0 w-[162px] text-[12px]   ">
								Follow the link sent to the email specified during registration to activate your
								account.
							</p>
						</div>
					</div>
					<div className="flex-grow-0 flex-shrink-0 w-[2px] h-[63px] relative bg-[#00b2c8] left-[33px]"></div>
					<div className="flex  items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[8px] px-[16px] py-[8px] rounded-[6px]">
						<svg
							width={32}
							height={32}
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-[32px] h-[32px] relative"
							preserveAspectRatio="none"
						>
							<g clip-path="url(#clip0_2183_2071)">
								<circle cx={16} cy={16} r={15} fill="#00B2C8" stroke="#00B2C8" stroke-width={2} />
							</g>
							<path
								d="M12.5782 19.642L22.2202 10L23.5005 11.2802L12.5782 22.2025L7.5 17.1257L8.78025 15.8455L12.5782 19.642Z"
								fill="white"
							/>
							<defs>
								<clippath id="clip0_2183_2071">
									<rect width={32} height={32} fill="white" />
								</clippath>
							</defs>
						</svg>
						<div className="flex flex-col justify-center items-start flex-grow relative">
							<p className="flex-grow-0 flex-shrink-0 text-[14px] text-center  font-[400]">
								Top up Your Balance
							</p>
							<p className="self-stretch flex-grow-0 flex-shrink-0 w-[162px] text-[12px]   ">
								Open the “Wallets” page and top up any available cryptocurrency.
							</p>
						</div>
					</div>
					<div className="flex-grow-0 flex-shrink-0 w-[2px] h-[63px] relative bg-[#00b2c8] left-[33px]"></div>
					<div className="flex  items-center flex-grow-0 flex-shrink-0 w-[234px] relative gap-[8px] px-[16px] py-[8px] rounded-[6px]">
						<div className={styles.number}>
							<p className="text-[14px] text-center text-[#242e39]">3</p>
						</div>
						<div className="flex flex-col justify-center items-start flex-grow relative">
							<p className="flex-grow-0 flex-shrink-0 text-[14px] text-center  font-[400]">
								Activate Investment
							</p>
							<p className="self-stretch flex-grow-0 flex-shrink-0 w-[162px] text-[12px]   ">
								Select a suitable investment offer and activate your investment
							</p>
						</div>
					</div>
					<div className="flex-grow-0 flex-shrink-0 w-[2px] h-[63px] relative bg-[#a1aebe] left-[33px]"></div>
					<div className="flex  items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[8px] px-[16px] py-[8px] rounded-[6px]">
						<div className={styles.number}>
							<p className="text-[14px] text-center text-[#242e39]">4</p>
						</div>
						<div className="flex flex-col justify-center items-start flex-grow relative">
							<p className="flex-grow-0 flex-shrink-0 text-[14px] text-center  font-[400]">
								Secure your Account
							</p>
							<p className="self-stretch flex-grow-0 flex-shrink-0 w-[162px] text-[12px]   ">
								Open your profile settings to set 2FA and PIN Code
							</p>
						</div>
					</div>
					<div className="flex-grow-0 flex-shrink-0 w-[2px] h-[63px] relative bg-[#a1aebe] left-[33px]"></div>
					<div className="flex  items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[8px] px-[16px] py-[8px] rounded-[6px]">
						<div className={styles.number}>
							<p className="text-[14px] text-center text-[#242e39]">5</p>
						</div>
						<div className="flex flex-col justify-center items-start flex-grow relative">
							<p className="flex-grow-0 flex-shrink-0 text-[14px] text-center  font-[400]">
								Withdraw Profit
							</p>
							<p className="self-stretch flex-grow-0 flex-shrink-0 w-[162px] text-[12px]   ">
								After accrual, go to “Wallets” to withdraw profit
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[234px] relative py-[8px]">
					<p className="flex-grow-0 flex-shrink-0 text-[16px]   uppercase text-[#828282]">
						Collapse
					</p>
					<svg
						width={18}
						height={15}
						viewBox="0 0 18 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="flex-grow-0 flex-shrink-0"
						preserveAspectRatio="xMidYMid meet"
					>
						<path d="M9 -1.74846e-06L17.6603 15L0.339748 15L9 -1.74846e-06Z" fill="#919191" />
					</svg>
				</div>
			</div>
			<div
				className="flex flex-col  items-end self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[16px] p-[24px] rounded-[6px] border border-[#e6e6e6]"
				style={{ background: "linear-gradient(-48.33deg, #01b091 5.18%, #00b2c8 100%)" }}
			>
				<p className="self-stretch flex-grow-0 flex-shrink-0 w-[234px] text-[14px] font-medium  uppercase text-white">
					Trustpilot Review
				</p>
				<div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-[16px]">
					<div className="flex flex-col justify-between items-start self-stretch flex-grow relative">
						<p className="self-stretch flex-grow-0 flex-shrink-0 w-[103px] text-[12px]   text-white">
							Already using Company? Tell everyone about your experience and get 5 USDT to your wallet.
						</p>
					</div>
					<div className="flex flex-col justify-between items-center self-stretch flex-grow-0 flex-shrink-0 w-[115px] relative">
						<svg
							width={81}
							height={75}
							viewBox="0 0 81 75"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-[81px] h-[75px] relative"
							preserveAspectRatio="xMidYMid meet"
						>
							<g clip-path="url(#clip0_241_2258)">
								<path
									d="M80.9924 28.6626H50.0672L40.5148 0L30.933 28.6626L0.0078125 28.634L25.0527 46.366L15.4699 75L40.5148 57.2966L65.5293 75L55.9769 46.366L80.9924 28.6626Z"
									fill="white"
								/>
								<path
									d="M58.1271 52.8489L55.9777 46.366L40.5156 57.2966L58.1271 52.8489Z"
									fill="#005128"
								/>
							</g>
							<defs>
								<clippath id="clip0_241_2258">
									<rect width={81} height={75} fill="white" />
								</clippath>
							</defs>
						</svg>
						<div className="flex justify-center items-center flex-grow-0 flex-shrink-0 px-2 py-1 rounded border-2 border-solid border-white">
							<div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
								<p className="flex-grow-0 flex-shrink-0 text-[14px] text-center text-white">Get Bonus</p>
							</div>
						</div>
					</div>
				</div>
				<svg className='flex-grow-0 flex-shrink-0 absolute bottom-0 right-0' width="265" height="232" viewBox="0 0 265 232" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.0788889" d="M538.894 -120.498L241.619 129.617L538.894 259.885L27.9531 770.537" stroke="#E4FAFC" />
					<path opacity="0.157778" d="M508.788 -70.9961L245.199 151.328L508.788 267.122L55.7441 721.035" stroke="#E4FAFC" />
					<path opacity="0.236667" d="M478.68 -21.4943L248.776 173.04L478.68 274.359L83.5332 671.533" stroke="#E4FAFC" />
					<path opacity="0.315556" d="M448.574 28.0077L252.356 194.751L448.574 281.596L111.324 622.031" stroke="#E4FAFC" />
					<path opacity="0.394444" d="M418.468 77.5096L255.936 216.462L418.468 288.834L139.115 572.529" stroke="#E4FAFC" />
					<path opacity="0.473333" d="M388.362 127.011L259.515 238.174L388.362 296.071L166.906 523.027" stroke="#E4FAFC" />
					<path opacity="0.552222" d="M358.254 176.513L263.093 259.885L358.254 303.308L194.695 473.525" stroke="#E4FAFC" />
					<path opacity="0.631111" d="M328.148 226.015L266.672 281.596L328.148 310.545L222.486 424.023" stroke="#E4FAFC" />
				</svg>
			</div>
			<div className="flex flex-col border-solid justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[24px] p-[24px] rounded-[6px] bg-white border border-[#e6e6e6]">
				<p className="self-stretch flex-grow-0 flex-shrink-0 w-[234px] text-[14px] font-medium  uppercase text-[#828282]">
					Affiliate rewards
				</p>
				<div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[16px]">
					<div className="flex flex-col  items-start flex-grow relative gap-[24px]">
						<p className="self-stretch flex-grow-0 flex-shrink-0 w-[118px] text-[12px]   ">
							Earn up to $ 100 000 by inviting friends. achieve turnover and receive instant bonuses
						</p>
					</div>
					<Image className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] object-cover" src={rocket} width={100} height={100} alt='icon'></Image>
				</div>
				<div className="flex-grow-0 flex-shrink-0 w-[156px] h-[27px] relative">
					<svg
						width={27}
						height={27}
						viewBox="0 0 27 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[27px] h-[27px]"
						preserveAspectRatio="xMidYMid meet"
					>
						<circle cx="13.5" cy="13.5" r="13.5" fill="#00B2C8" />
						<path
							d="M18.4049 13.5662C18.6002 13.3709 18.6002 13.0544 18.4049 12.8591L15.2229 9.67711C15.0277 9.48185 14.7111 9.48185 14.5158 9.67711C14.3206 9.87237 14.3206 10.189 14.5158 10.3842L17.3443 13.2126L14.5158 16.0411C14.3206 16.2363 14.3206 16.5529 14.5158 16.7482C14.7111 16.9434 15.0277 16.9434 15.2229 16.7482L18.4049 13.5662ZM7.71094 13.7126H18.0514V12.7126H7.71094V13.7126Z"
							fill="white"
						/>
					</svg>
					<p className="absolute left-[39px] top-[1.5px] text-[14px]   ">
						Invite friends
					</p>
					<svg
						width={30}
						height={1}
						viewBox="0 0 30 1"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-[39px] top-[23px]"
						preserveAspectRatio="xMidYMid meet"
					>
						<line y1="0.5" x2={30} y2="0.5" stroke="url(#paint0_linear_297_1955)" />
						<defs>
							<lineargradient
								id="paint0_linear_297_1955"
								x1={30}
								y1="1.89"
								x2="29.2111"
								y2="-3.37619"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#01B091" />
								<stop offset={1} stop-color="#00B2C8" />
							</lineargradient>
						</defs>
					</svg>
				</div>
			</div>
			<div className="flex flex-col  items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[16px] p-[24px] rounded-[6px] bg-white border border-solid border-[#e6e6e6]">
				<div className="flex  items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[16px]">
					<p className="flex-grow-0 flex-shrink-0 text-[14px] font-medium  uppercase text-[#828282]">
						Featured news
					</p>
					<div className="flex  items-start flex-grow-0 flex-shrink-0 relative gap-[8px].5">
						<div className="flex justify-center h-[10px] gap-[10px]">
							{Array.from({ length: 5 }, (_, index) => (
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
					</div>
				</div>
				<Carousel
					opts={{
						align: "center",
						slidesToScroll: 1,
						watchDrag: false,
					}}
					pagination={currentSlide}
					className="w-full"
				>
					<CarouselContent>
						{media.map((item, index) => (
							<CarouselItem key={index} className="">
								<Link href={`/blog/${encodeURIComponent(item.id)}`} className="flex flex-col gap-[16px] cursor-pointer">
									<div className={styles.image} />
									<div className="flex flex-col gap-[8px]">
										<p className="text-[12px]">
											<span>
												Lorem ipsum dolor sit amet consectetur. Tempus nam convallis integer malesuada. Dis nec nunc
												faucibus cras adipiscing nulla nisi sit sagittis. Nec montes odio ut et leo tempor
												consectetur. Tellus faucibus iaculis...{" "}
											</span>
											<span className="text-[#00b2c8]">
												Read more
											</span>
										</p>
									</div>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	</div>
}
