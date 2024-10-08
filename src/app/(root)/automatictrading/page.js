'use client'

import Image from "next/image" 
import styles from './automatic_trading.module.scss'
import cn from 'classnames'
import {Section} from "@/components/section"
import {Button} from "@/components/button"
import { Typography } from "@/components/typography"
import lottie from "@/ui/images/lottie.svg"
import { ArrowButton } from "@/components/arrowButton"
import { Strategy } from "@/components/strategy"
import lookingglassCheck from "@/ui/icons/lookingglass_check.svg"
import marketMaking from "@/ui/icons/market_making.svg"
import arbitrage from "@/ui/icons/arbitrage.svg"
import scalping from "@/ui/icons/scalping.svg"
import { ChecklistItem } from "@/components/checklistItem"

import tether from "@/ui/icons/tether.svg" 
import bitcoin from "@/ui/icons/bitcoin.svg" 
import ethereum from "@/ui/icons/ethereum.svg" 
import bnb from "@/ui/icons/bnb.svg" 
import tron from "@/ui/icons/tron.svg" 
import ton from "@/ui/icons/ton.svg" 
import dogecoin from "@/ui/icons/dogecoin.svg" 
import shibaInu from "@/ui/icons/shiba_inu.svg" 
import digibyte from "@/ui/icons/digibyte.svg" 

import dollar from "@/ui/icons/dollar-swirl.svg";
import diagram from "@/ui/icons/diagram.svg";
import compoundInterest from "@/ui/icons/compound_interest.svg";
import trading from "@/ui/icons/trading.svg";
import { ButtonBlue } from "@/components/buttonBlue"
import { useState } from "react"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shadcn/ui/accordion.tsx"


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


export default function AutomaticTrading() {
	const [strategiesUsed, setStrategiesUsed] = useState(strategies[0])

	return <div className="main _container">
		<div className={styles.section}>
			<Section imageSRC={lottie} width={356} height={340} previewTop={true}>
				<Button
					text='Our Products'
				></Button>


	
				<Typography
					size="h1"
					title="Automatic Trading"
					text="Earn passive income with Company automated trading software. Use time-tested, ready-made high yeild strategies"
				></Typography>
	
				<ArrowButton
					text='Button'
				></ArrowButton>
			</Section>
		</div>



		<div className={styles.inner}>
			<Typography
				size="h2"
				title="Select appropriate software operating modes"
				text="Our offers are suitable for any investor with any investment goals, choose the appropriate mode with different amounts, terms and other advantages"
			></Typography>

			<Strategy></Strategy>
		</div>



		<div className={styles.inner}>
			<Typography
				size="h2"
				title="Strategies Used"
				text="Automatic Trading software delivers exceptional results thanks to the puzzle of strategies we put together to make it work. "
			></Typography>
	
	
	
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
            <AccordionItem  key={item.key} value={item.key}>
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



		<div className={styles.inner}>
			<Typography
				size="h2"
				title="Cryptocurrencies we work with"
				text="Automatic Trading works with more than 15 cryptocurrencies. Use any of them"
			></Typography>
	
	
	
			<div className='flex justify-center items-center gap-[16px] flex-wrap'>
				<div className={styles.company}>
					<Image src={tether} width={35} height={35} alt="icon"></Image>
		
					<p>
						Tether TRC20
					</p>
				</div> 
		
				<div className={styles.company}>
					<Image src={bitcoin} width={35} height={35} alt="icon"></Image>
		
					<p>
						Bitcoin
					</p>
				</div> 
		
				<div className={styles.company}>
					<Image src={ethereum} width={35} height={35} alt="icon"></Image>
		
					<p>
						Ethereum
					</p>
				</div> 
		
				<div className={styles.company}>
					<Image src={bnb} width={35} height={35} alt="icon"></Image>
		
					<p>
						BNB
					</p>
				</div> 
		
				<div className={styles.company}>
					<Image src={tron} width={35} height={35} alt="icon"></Image>
		
					<p>
						Tron
					</p>
				</div> 
		
				<div className={styles.company}>
					<Image src={ton} width={35} height={35} alt="icon"></Image>
		
					<p>
						Ton
					</p>
				</div> 
				
				<div className={styles.company}>
					<Image src={dogecoin} width={35} height={35} alt="icon"></Image>
		
					<p>
						Dogecoin
					</p>
				</div> 
		
				<div className={styles.company}>
					<Image src={shibaInu} width={35} height={35} alt="icon"></Image>
		
					<p>
						Shiba Inu
					</p>
				</div> 
				
		
		
				<div className={styles.company}>
					<Image src={digibyte} width={27} height={35} alt="icon"></Image>
					<p>
						Digibyte
					</p>
				</div>
			</div>
	
		</div>


		<div className={styles.inner}>
			<Typography
				size="h2"
				title="Maximize Your Earnings With Our Trading System"
				text="Crypto trading works 24/7. Just like our software. Give yourself an edge, and while everyone else is sleeping, you won't slow down."
			></Typography>
	
	
			<div className={styles.system}>
	
				<div className={styles.system__box}>
					<Image src={dollar} width={42} height={42} alt="icon"></Image>
					<h5>
						More than 12 coins to invest
					</h5>
					<p className="text-[16px]">
						Use more than 12 cryptocurrencies for investment, get profit in the coin you want
					</p>
				</div>
	
				<div className={styles.system__box}>
					<Image src={diagram} width={42} height={42} alt="icon"></Image>
					<h5>
						Real-Time Earning Insights
					</h5>
					<p className="text-[16px]">
						Stay updated with real-time insights on your earnings and software performance.
					</p>
				</div>
	
				<div className={styles.system__box}>
					<Image src={compoundInterest} width={42} height={42} alt="icon"></Image>
					<h5>
						Compound interest
					</h5>
					<p className="text-[16px]">
						Let your capital work using 100% of its capabilities
					</p>
				</div>
	
				<div className={styles.system__box}>
					<Image src={trading} width={42} height={42} alt="icon"></Image>
					<h5>
						Non-stop trading
					</h5>
					<p className="text-[16px]">
						Let the software work for you 24/7, earning profits from trading strategies
					</p>
				</div>
	
				
			</div>
		</div>



		<ButtonBlue text='Get Started'></ButtonBlue>
	</div>
}
