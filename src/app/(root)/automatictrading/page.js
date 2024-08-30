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


// export const metadata = {
// 	title: 'Automatic Trading',
// 	description: ''
// }

export default function AutomaticTrading() {
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
				<div className={styles.card}>
					<Image src={lookingglassCheck} width={84} height={84} alt="icon"></Image>
		
					<Typography
					size="h4"
					title="Market Making"
					text="Profit from the spread between the buy and sell prices."
				></Typography>
				</div>
		
				<div className={styles.card}>
					<Image src={marketMaking} width={84} height={84} alt="icon"></Image>
					
					<Typography
					size="h4"
					title="Arbitrage"
					text="Earnings from price differences on exchanges"
				></Typography>
				</div>
	
				<div className={styles.trend}>
					<h6 className="text-[16px] text-[#00b2c8]">
						Trend Following
					</h6>
					<p className="text-[12px] text-[#303030]">
						This strategy capitalize on price discrepancies of the same cryptocurrency across different
						exchanges. The software buys the cryptocurrency on one exchange where the price is lower and
						sells it on another where the price is higher, pocketing the difference as profit.
					</p>
					<div className="flex gap-6">
	          <div className={styles.check_list}>
	            <ChecklistItem
	    					text="Market Scanning"
	    				></ChecklistItem>
	            <ChecklistItem
	              text="Latency Management"
	    				></ChecklistItem>
	          </div>
	          <div className={styles.check_list}>
	            <ChecklistItem
	    					text="Automated Trading"
	    				></ChecklistItem>
	            <ChecklistItem
	    					text="Profit Calculation"
	    				></ChecklistItem>
	          </div>
	        </div>
			</div>
		
				<div className={styles.card}>
					<Image src={arbitrage} width={84} height={84} alt="icon"></Image>
					
					<Typography
					size="h4"
					title="Scalping"
					text="High-frequency trading to profit from small price movements."
				></Typography>
				</div>
		
				<div className={styles.card}>
					<Image src={scalping} width={84} height={84} alt="icon"></Image>
					
					<Typography
					size="h4"
					title="Trend Following"
					text="Using technical indicators to identify and track market trends"
				></Typography>
				</div>
	
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
