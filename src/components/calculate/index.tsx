'use client'

import { useEffect, useState } from 'react'
import styles from './calculate.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { Slider } from '@/shadcn/ui/slider'
import candle from "@/ui/icons/candle.svg";
import sell from "@/ui/icons/sell.svg";
import clockHistoryBlack from "@/ui/icons/clock-history-black.svg";
import dollarCrosshairBlack from "@/ui/icons/dollar-crosshair-black.svg";
import dollarSwirlBlack from "@/ui/icons/dollar-swirl-black.svg";
import bag from "@/ui/icons/bag.svg";
import { AllTooltip } from '../allTooltip'


const planCalculate = [
	{days: 15, percent: '0.7-0.9', interest: 0, usd: 10, amount: 10, daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
	{days: 25, percent: '0.9-1.2',  interest: 1, usd: 20, amount: 20, daily: -0.8, weekly: -5.6, totalProfit: -12, totalAmount: -22},
]


export const Calculate = () => {
	const [ plan, setPlan ] = useState<any>(planCalculate[0])
	const [ profitDinamic, setProfitDinamic ] = useState<any>(plan.interest)
	const [ profit, setProfit ] = useState('interest')

	useEffect(() => {
		setProfitDinamic(plan[profit]);
	}, [plan, profitDinamic, profit]);

	function onChangeProfit(item: any, value: any) {
		setProfitDinamic(item[value]);
		setProfit(value)
	}

	return <div className={styles.body}>	
		
				<div className={styles.main}>
					<div className={styles.plans}>
						<h5 className='text-[16px] font-[400]'>Plan</h5>
		
						<div className={styles.plan__list}>
							{
								planCalculate.map((item: any, index: number) => (
									<div key={index} onClick={() => setPlan(item)} className={cn(styles.plan__box, {[styles.active]: item.days === plan.days})}>
										<p className=' text-[#000] text-[20px] font-[400]'> {item.percent}%<span className='text-[#303030] pl-[2px] font-[300] text-[16px]'> DAILY</span > </p>
										<p className='text-[14px]'>{item.days} days</p>
									</div>
								))
							}
						</div>
		
						<h5 className='flex justify-between text-[16px] font-[400] translate-y-[10px]'>Amount <span className='text-[14px] font-[400]'> ${plan.amount}</span> </h5>
		
						<p className='flex text-[20px] font-[400] w-full  items-center justify-center rounded-[6px] py-0  px-[16px]  h-[56px] bg-[#fafafa] border-[1px] border-solid border-[#cecece]'>${plan.amount}</p>
		
						<Slider defaultValue={[plan.amount]} max={100} step={1}></Slider>
						
					</div>
		
					<div className='flex flex-col gap-[30px] w-full'>
						<h5 className='text-[16px] font-[400] flex justify-between items-center gap-[12px]'>Profit calculation
							<div className="border-[1px] border-solid border-[#e6e6e6] rounded-[6px] flex items-center h-[40px]">
							<p onClick={() => onChangeProfit(plan.interest, 'interest')} className={cn(styles.tab, { [styles.active]: profit === 'interest' })} ><span className='' >% </span> INTEREST</p>		

<p onClick={() => onChangeProfit(plan.usd, 'usd')} className={cn(styles.tab, { [styles.active]: profit === 'usd' })} >$ USD</p>						
							</div>
						</h5>

						<div className={styles.plan__calculation}>
							<div>
								<p className={styles.calc}>
									<span>Daily
									</span>
									<span> ${profitDinamic}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Weekly
									</span>
									<span> ${profitDinamic}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Total Profit
										<AllTooltip
										text='Adds profit to the invested amount, increasing profits for subsequent days. Can be changed at any time'
									></AllTooltip>
									</span>
									<span> ${profitDinamic}</span>
								</p>
		
								<p className={styles.calc}>
									<span>Total with investment amount
										<AllTooltip
										text='Adds profit to the invested amount, increasing profits for subsequent days. Can be changed at any time'
									></AllTooltip>
									</span>
									<span> ${profitDinamic}</span>
								</p>
								
							</div>
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

}

