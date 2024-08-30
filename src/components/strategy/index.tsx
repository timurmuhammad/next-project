'use client'

import { useState } from 'react'
import styles from './strategy.module.scss'
import cn from 'classnames'
import { Typography } from '../typography'
import Image from 'next/image'
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


type PlanItem = {
  days: number;
  percent: string;
	amount: number;
	daily: number;
	weekly: number;
	totalProfit: number;
	totalAmount: number;
};

const dynamicStrategy = {
	name: 'Dynamic Strategy',
	description: 'A strategy with a wide range of investment amounts and short investment periods',
	plan: [
		{days: 15, percent: '0.7-0.9', amount: 10, daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 25, percent: '0.9-1.2', amount: 20, daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 35, percent: '1.2-1.5', amount: 30, daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
		{days: 45, percent: '1.5-1.8', amount: 40, daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
	] as PlanItem[]
}

const staticStrategy = {
	name: 'Static Strategy',
	description: 'Profitable medium-term strategy with fixed income and investment amount',
	plan: [
		{days: 50, percent: '1.4', amount: 100, daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
		{days: 60, percent: '1.7', amount: 200, daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
		{days: 70, percent: '1.9', amount: 300, daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
		{days: 80, percent: '2.1', amount: 400, daily: 9.6, weekly: 67.2, totalProfit: 384, totalAmount: 984},
	] as PlanItem[]
}


export const Strategy = () => {
	const [ strategy, setStrategy ] = useState(dynamicStrategy || '')
	const [ compounding, setCompounding ] = useState(false)
	const [ reactivation, setReactivation ] = useState(false)
	const [ planDynamic, setPlanDynamic ] = useState(dynamicStrategy.plan[0])
	const [ planStatic, setPlanStatic ] = useState(staticStrategy.plan[0])

	return <div className={styles.body}>
			<div className={cn(styles.inner, {[styles.active]: staticStrategy === strategy})}>
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
						<h5 className='text-[16px] font-[400]'>Plan</h5>
		
						<div className={styles.plan__list}>
							{
								dynamicStrategy.plan.map((item: PlanItem, index: number) => (
									<div key={index} onClick={() => setPlanDynamic(item)} className={cn(styles.plan__box, {[styles.active]: item.days === planDynamic.days})}>
										<p className=' text-[#000] text-[20px] font-[400]'> {item.percent}%<span className='text-[#303030] pl-[2px] font-[300] text-[16px]'> DAILY</span > </p>
										<p className='text-[14px]'>{item.days} days</p>
									</div>
								))
							}
						</div>
		
						<h5 className='flex justify-between text-[16px] font-[400] translate-y-[10px]'>Amount <span className='text-[14px] font-[400]'> ${planDynamic.amount}</span> </h5>
		
						<p className='flex text-[20px] font-[400] w-full flex-auto items-center justify-center rounded-[6px] py-0  px-[16px]  h-[56px] bg-[#fafafa] border-[1px] border-solid border-[#cecece]'>${planDynamic.amount}</p>
		
						<Slider defaultValue={[planDynamic.amount]} max={100} step={1}></Slider>
						
					</div>
		
					<div className='flex flex-col gap-[30px]'>
						<h5 className='text-[16px] font-[400] flex justify-between items-center gap-[12px]'>Profit calculation
							<div className="overflow-hidden border-[1px] border-solid border-[#e6e6e6] rounded-[6px] flex items-center h-[40px] flex-shrink-0 flex-grow-0">
								<p className='px-[16px] flex gap-[4px] items-center font-[300] h-full text-[#4a4a4a] text-[14px]' ><span className='' >% </span> INTEREST</p>
		
								<p className='bg-[#00B2C8] px-[16px] flex items-center font-[500] h-full text-[#fff] text-[14px] text-nowrap' >$ USD</p>						
							</div>
						</h5>
		
						<div className={styles.plan__calculation}>
							<div>
								<p className={styles.calc}>
									<span>Daily
									</span>
									<span> ${planDynamic.amount}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Weekly
									</span>
									<span> ${planDynamic.amount}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Total Profit
										<span className={styles.span}>?</span>
									</span>
									<span> ${planDynamic.amount}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Total with investment amount
										<span className={styles.span}>?</span>
									</span>
									<span> ${planDynamic.amount}</span>
								</p>
								
							</div>
						</div>
		
						<div className={styles.switch}>
							<Switch></Switch>
							<Switch></Switch>
						</div>
					</div>
				</div>
		
	
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
			</div>




			<div className={cn(styles.inner, {[styles.active]: dynamicStrategy === strategy})}>
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
						<h5 className='text-[16px] font-[400]'>Plan</h5>
		
						<div className={styles.plan__list}>
							{
								staticStrategy.plan.map((item: PlanItem, index: number) => (
									<div key={index} onClick={() => setPlanStatic(item)} className={cn(styles.plan__box, {[styles.active]: item.days === planStatic.days})}>
										<p className=' text-[#000] text-[20px] font-[400]'> {item.percent}%<span className='text-[#303030] pl-[2px] font-[300] text-[16px]'> DAILY</span > </p>
										<p className='text-[14px]'>{item.days} days</p>
									</div>
								))
							}
						</div>
		
						<h5 className='flex justify-between text-[16px] font-[400] translate-y-[10px]'>Amount <span className='text-[14px] font-[400]'> ${planStatic.amount}</span> </h5>
		
						<p className='flex text-[20px] font-[400] w-full flex-auto items-center justify-center rounded-[6px] py-0  px-[16px]  h-[56px] bg-[#fafafa] border-[1px] border-solid border-[#cecece]'>${planStatic.amount}</p>
		
						<Slider defaultValue={[planStatic.amount]} max={100} step={1}></Slider>
						
					</div>
		
					<div className='flex flex-col gap-[30px]'>
						<h5 className='text-[16px] font-[400] flex justify-between items-center gap-[12px]'>Profit calculation
							<div className="overflow-hidden border-[1px] border-solid border-[#e6e6e6] rounded-[6px] flex items-center h-[40px] flex-shrink-0 flex-grow-0">
								<p className='px-[16px] flex gap-[4px] items-center font-[300] h-full text-[#4a4a4a] text-[14px]' ><span className='' >% </span> INTEREST</p>
		
								<p className='bg-[#00B2C8] px-[16px] flex items-center font-[500] h-full text-[#fff] text-[14px] text-nowrap' >$ USD</p>						
							</div>
						</h5>
		
						<div className={styles.plan__calculation}>
							<div>
								<p className={styles.calc}>
									<span>Daily
									</span>
									<span> ${planStatic.amount}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Weekly
									</span>
									<span> ${planStatic.amount}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Total Profit
										<span className={styles.span}>?</span>
									</span>
									<span> ${planStatic.amount}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Total with investment amount
										<span className={styles.span}>?</span>
									</span>
									<span> ${planStatic.amount}</span>
								</p>
							</div>
						</div>
		
						<div className={styles.switch}>
							<Switch></Switch>
							<Switch></Switch>
						</div>
					</div>
				</div>
		
	
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
			</div>
		</div>
}

