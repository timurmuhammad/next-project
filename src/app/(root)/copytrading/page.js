'use client'

import cn from "classnames" 
import styles from './copy_trading.module.scss'
import Image from "next/image"
import { Section } from '@/components/section' 
import personsTrading from "@/ui/images/persons_trading.svg" 
import { Typography } from "@/components/typography" 
import { Button } from "@/components/button" 
import { ArrowButton } from "@/components/arrowButton" 
import { Diagram } from "@/components/diagram"
import adapt from "@/ui/icons/adapt.svg";
import monitoring from "@/ui/icons/monitoring.svg";
import continuous from "@/ui/icons/continuous.svg";
import { ButtonBlue } from "@/components/buttonBlue"
import mobile from "@/ui/images/mobile.png";
import lines from "@/ui/icons/lines.svg";
import gradient from "@/ui/images/gradient.png";
import mediaScreenMobile from "@/ui/images/mobile_copytrading.png";
import { Product } from "@/components/product"
import { goods } from "@/types/products";
import { NumericalIndicators } from "@/components/numericalIndicators"
import exchange_arbitrage from '@/ui/icons/exchange_arbitrage.svg'
import market_making from '@/ui/icons/market-making.svg'
import cryptomax from '@/ui/icons/cryptomax.svg'


export default function CopyTrading() {
	return <div className="main">
		<div className={cn(styles.inner, '_container')}>
			<Section imageSRC={personsTrading} width={355} height={295} previewTop={true}>
				<Button
					text='Our Products'
				></Button>
	
				<Typography
					size="h1"
					title="Copy Trading"
					text="Synergy of Comprehensive long-term strategies from Company and the best cryptocurrency bots with high returns"
				></Typography>
	
				<ArrowButton
					text='Button'
				></ArrowButton>
			</Section>
		</div>



		<div className={cn(styles.inner, '_container')}>
			<Typography
				size="h2"
				title="What bots are used for copy trading?"
				text="We have carefully selected and tested the best bots on the market that bring stable and high profits"
			></Typography>
		</div>



		<div className="_container w-full"><NumericalIndicators></NumericalIndicators></div>



		<div className={cn(styles.botCard, '_container')}>
			{goods.map((item, index) => (
				index < 3 && <Product item = {item} key={index} ></Product>
			))}
		</div>


		<div className={cn(styles.inner, '_container')}>
			<ButtonBlue text='Watch Full Listy'></ButtonBlue>
		</div>


		<div className={cn(styles.inner, '_container', styles.diagram)}>
			<Typography
				size="h2"
				title="No need to search for bots manually, use Company pools"
				text="Envios developers have created ready-made solutions, copying the best bots on the market, and connected them together to pools to obtain maximum profits"
			></Typography>
		
			<Diagram></Diagram>	
		</div>




		<div className={cn(styles.inner, '_container')}>
			<Typography
				size="h2"
				title="How Safe Is It?"
				text="While we rigorously test all the bots we offer, we also dynamically track their performance and continuously monitor each bot to ensure optimal operation."
			></Typography>
		</div>




		<div className={cn(styles.inner, '_container')}>
			<div className={styles.program}>
				<div className={styles.card}>
					<Image src={adapt} alt="img" width={120} height={120}></Image>
					<Typography
						size="h4"
						title="Flexibility"
						text="Our portfolio includes a diverse range of bots that are regularly updated and supplemented to adapt to changing market conditions."
					></Typography>
				</div>
	
				<div className={styles.card}>
					<Image src={monitoring} alt="img" width={120} height={120}></Image>
					<Typography
						size="h4"
						title="Constant Monitoring"
						text="Our team of specialists provides round-the-clock monitoring, making adjustments as necessary to align with current market trends and conditions."
					></Typography>
				</div>
	
				<div className={styles.card}>
					<Image src={continuous} alt="img" width={120} height={120}></Image>
					<Typography
						size="h4"
						title="Continuous Development"
						text="In addition to deploying existing bots, we are committed to constantly improving and expanding our offerings by developing new bots and enhancing the performance of current ones."
					></Typography>
				</div>
			</div>
		</div>




		<div className={cn(styles.inner, '_container')}>
			<ButtonBlue text='Read More About Security'></ButtonBlue>
		</div>




		<div className={cn(styles.section_wrapper, styles._dApp, '_container')}>
			<Image src={gradient} alt="image" width={1200} height={327}></Image>
			<Image className={styles.lines} src={lines} alt="image" width={1200} height={449}></Image>

			<picture className={styles.image}>
					<source srcSet={mediaScreenMobile.src} media="(max-width: 670px)" />
					<source srcSet={mobile.src} media="(min-width: 671px)" />
					<Image src={mobile} className={styles.mobile} alt="img" width={327} height={410}></Image>
			</picture>

			<div className={cn('section_inner', styles.section_inner)}>
				<Typography
					size="h2"
					title="Ready to start? "
					text="Join Now and Get 5% to your first copy trading package"
				></Typography>

				<div className={styles.buttons}>
					<button className={styles.register}>Get Promocode</button>
					<button className={styles.register}>Register Account</button>
				</div>
			</div>
		</div>

	</div>
}