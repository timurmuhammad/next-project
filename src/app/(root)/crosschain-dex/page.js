'use client'

import cn from 'classnames'
import { Button } from '@/components/button'
import styles from './crosschain_dex.module.scss'
import { Section } from '@/components/section'
import { ArrowButton } from '@/components/arrowButton'
import cross_chain from "@/ui/images/cross_chain.svg";
import { Typography } from '@/components/typography'
import Image from 'next/image'
import chain from "@/ui/images/chain.svg";
import reshot_atom from "@/ui/icons/reshot_atom.svg";
import reshot_react from "@/ui/icons/reshot_react.svg";
import reshot_tee from "@/ui/icons/reshot_tee.svg";
import list_key from "@/ui/icons/list_key.png";
import blockchain from "@/ui/icons/blockchain.svg";
import blockchain_cube from "@/ui/icons/blockchain_cube.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadcn/ui/accordion'
import discount_shape from "@/ui/icons/discount_shape.svg";
import chart_success from "@/ui/icons/chart_success.svg";
import wallet_money from "@/ui/icons/wallet_money.svg";
import routing from "@/ui/icons/routing.svg";
import trade from "@/ui/icons/trade.svg";
import chart_square from "@/ui/icons/chart_square.svg";
import { Calculate } from '@/components/calculate'
import { ChecklistItem } from '@/components/checklistItem'
import { ButtonBlue } from '@/components/buttonBlue'
import group_bg_dex from "@/ui/images/group_bg_dex.svg";



export default function CrossChainDex() {

	// const translatePageToUkrainian = () => {
  //   const meta = document.createElement('meta');
  //   meta.name = 'google-translate-customization';
  //   meta.content = 'language:uk';
  //   document.head.appendChild(meta);
  //   // Программно вызываем функцию перевода в Chrome
  //   const script = document.createElement('script');
  //   script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  //   document.head.appendChild(script);

  //   window.googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       { pageLanguage: 'en', includedLanguages: 'uk' },
  //       'google_translate_element'
  //     );
  //   };
  // };

	const translatePageToUkrainian = () => {
    const currentUrl = window.location.href;
    const translateUrl = `https://translate.google.com/translate?hl=uk&sl=en&u=${encodeURIComponent(
      currentUrl
    )}`;
    window.location.href = translateUrl;
  };




	return <div className={cn("main", styles.body)}>
		<div className='_container w-full'>
			<Section imageSRC={cross_chain} width={355} height={295} previewTop={true}>
				<Button
					text='Our Products'
				></Button>
	
				<Typography
					size="h1"
					title="Cross-chain DEX trading"
					text="Leverage the power of DEX cross-chain trading technology to ensure maximum returns and a secure investment experience."
				></Typography>
	
				<ArrowButton
					text='Sign up'
				></ArrowButton>
			</Section>
		</div>




		<div className={cn(styles.blue, '_container')}>
		<Typography
				size="h2"
				title="What is Cross Chain DEX-Trading"
				text="Cross-chain DEX (Decentralized Exchange) trading refers to the ability to trade cryptocurrencies and other digital assets across different blockchain networks without relying on a centralized intermediary. This type of trading leverages decentralized technologies to facilitate seamless exchanges between assets on separate blockchains."
			></Typography>
			<div className={styles.chain}><Image src={chain} width={422} height={403} alt='img'></Image></div>
		</div>




		<div className='_container w-full'>
			<Typography
				size="h2"
				title="Key Components and Features"
				text="By connecting different blockchains, cross-chain DEXs can access a wider range of assets and liquidity pools, improving the overall liquidity available to us."
			></Typography>
		</div>



		<div className={cn(styles.program, '_container')}>
			<div className={styles.card}>
				<Image src={reshot_atom} alt="img" width={60} height={60}></Image>
				<Typography
					size="h4"
					title="Flexibility"
					text="Our portfolio includes a diverse range of bots that are regularly updated and supplemented to adapt to changing market conditions."
				></Typography>
			</div>

			<div className={styles.card}>
				<Image src={reshot_react} alt="img" width={60} height={60}></Image>
				<Typography
					size="h4"
					title="Constant Monitoring"
					text="Our team of specialists provides round-the-clock monitoring, making adjustments as necessary to align with current market trends and conditions."
				></Typography>
			</div>

			<div className={styles.card}>
				<Image src={reshot_tee} alt="img" width={60} height={60}></Image>
				<Typography
					size="h4"
					title="Continuous Development"
					text="In addition to deploying existing bots, we are committed to constantly improving and expanding our offerings by developing new bots and enhancing the performance of current ones."
				></Typography>
			</div>

			<div className={styles.card}>
				<Image src={list_key} alt="img" width={60} height={60}></Image>
				<Typography
					size="h4"
					title="Continuous Development"
					text="In addition to deploying existing bots, we are committed to constantly improving and expanding our offerings by developing new bots and enhancing the performance of current ones."
				></Typography>
			</div>

			<div className={styles.card}>
				<div className={styles.blockchain}><Image src={blockchain} alt="img" width={58} height={58}></Image></div>
				<Typography
					size="h4"
					title="Continuous Development"
					text="In addition to deploying existing bots, we are committed to constantly improving and expanding our offerings by developing new bots and enhancing the performance of current ones."
				></Typography>
			</div>

			<div className={styles.card}>
				<Image src={blockchain_cube} alt="img" width={60} height={60}></Image>
				<Typography
					size="h4"
					title="Continuous Development"
					text="In addition to deploying existing bots, we are committed to constantly improving and expanding our offerings by developing new bots and enhancing the performance of current ones."
				></Typography>
			</div>
		</div>




		<div className='_container w-full'>
			<Typography
				size="h2"
				title="Earn with Cross-chain DEX trading"
				text="Our comprehensive money management services are designed to leverage the power of cross-chain DEX trading technology, providing you with maximum returns and a secure investment experience."
			></Typography>
		</div>





<div className={styles.accordion}>
    <Image src={group_bg_dex} width={0} height={923} sizes="100vw" alt="icon"></Image>
      <div className="accordion_body _container">
        <div className="accordion_wrapper">
          <div className="accordion">
            <p className="accordion-toggle"><Image src={discount_shape} width={42} height={42} alt="icon"></Image>
            <a>Transaction Fees Management
						</a></p>
            <div className="accordion-content">
              <div className="accordion-inner">
                <p>Our team of experts ready to help you with any questions through email, web chat or phone</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="accordion_wrapper">
          <div className="accordion">
            <p className="accordion-toggle"><Image src={chart_success} width={42} height={42} alt="icon"></Image>
            <a>Strategic Advertising and Partnerships
						</a></p>
            <div className="accordion-content">
              <div className="accordion-inner">
                <p>Our team of experts ready to help you with any questions through email, web chat or phone</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="accordion_wrapper">
          <div className="accordion">
            <p className="accordion-toggle"><Image src={wallet_money} width={42} height={42} alt="icon"></Image>
            <a>Liquidity Provision
						</a></p>
            <div className="accordion-content">
              <div className="accordion-inner">
                <p>Our team of experts ready to help you with any questions through email, web chat or phone</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="accordion_wrapper">
          <div className="accordion">
            <p className="accordion-toggle"><Image src={routing} width={42} height={42} alt="icon"></Image>
            <a>Cross-Chain Investment Solutions
						</a></p>
            <div className="accordion-content">
              <div className="accordion-inner">
                <p>Our team of experts ready to help you with any questions through email, web chat or phone
								</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="accordion_wrapper">
          <div className="accordion">
            <p className="accordion-toggle"><Image src={trade} width={42} height={42} alt="icon"></Image>
            <a>Token Management
						</a></p>
            <div className="accordion-content">
              <div className="accordion-inner">
                <p>Our team of experts ready to help you with any questions through email, web chat or phone
								</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="accordion_wrapper">
          <div className="accordion">
              <p className="accordion-toggle">
                <Image src={chart_square} width={42} height={42} alt="icon"></Image>
                <a>Data-Driven Investment Decisions
								</a>
              </p>
              <div className="accordion-content">
                <div className="accordion-inner">
                  <p>Our team of experts ready to help you with any questions through email, web chat or phone
									</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>



      <div className={styles.accordion_lg}>
        <Accordion type="single" collapsible>
        <div className={cn(styles.advantages, "_container")}>
            <AccordionItem value="item-1">
              <AccordionTrigger> 
                <div className={styles.box}>
                  <Image src={discount_shape} width={42} height={42} alt="icon"></Image>
                  <p className={styles.text}>Transaction Fees Management
									</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Our team of experts ready to help you with any questions through email, web chat or phone
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className={styles.box}>
                  <Image src={chart_success} width={42} height={42} alt="icon"></Image>
                  <p className={styles.text}>Strategic Advertising and Partnerships
									</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Our team of experts ready to help you with any questions through email, web chat or phone
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className={styles.box}>
                  <Image src={wallet_money} width={42} height={42} alt="icon"></Image>
                  <p className={styles.text}>Liquidity Provision
									</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Our team of experts ready to help you with any questions through email, web chat or phone
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className={styles.box}>
                  <Image src={routing} width={42} height={42} alt="icon"></Image>
                  <p className={styles.text}>Cross-Chain Investment Solutions
									</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Our team of experts ready to help you with any questions through email, web chat or phone
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className={styles.box}>
                  <Image src={trade} width={42} height={42} alt="icon"></Image>
                  <p className={styles.text}>Token Management
									</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Our team of experts ready to help you with any questions through email, web chat or phone
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <div className={styles.box}>
                  <Image src={chart_square} width={42} height={42} alt="icon"></Image>
                  <p className={styles.text}>Data-Driven Investment Decisions
									</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Our team of experts ready to help you with any questions through email, web chat or phone
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </div>



		<div className='_container w-full'>
			<Typography
				size="h2"
				title="Calculate your profit"
			></Typography>
		</div>



		<div className='_container w-full'>
			<Calculate
				// planCalculate={planCalculate}
			></Calculate>
		</div>



		<div className='_container w-full'>
			<Typography
				size="h2"
				title="Why us?"
				text="Our comprehensive money management services are designed to leverage the power of cross-chain DEX trading technology, providing you with maximum returns and a secure investment experience."
			></Typography>
		</div>




<div className={cn(styles.section, '_container')}>
	<p className="max-w-[417.55px] text-[16px]">
		By choosing our company, you benefit from a comprehensive suite of services designed to
		optimize your investments in the dynamic world of cross-chain DEX trading. Our expertise,
		innovative solutions, and commitment to security and compliance ensure that your financial
		growth is our top priority.
	</p>

  <div className={styles.list}>
		<ChecklistItem
			text='Expertise in Cross-Chain DEX Trading'
		></ChecklistItem>

		<ChecklistItem
			text='Optimized Returns'
		></ChecklistItem>

		<ChecklistItem
			text='Security and Compliance'
		></ChecklistItem>

		<ChecklistItem
			text='Diversified Investment Opportunities'
		></ChecklistItem>

		<ChecklistItem
			text='Cost-Effective Management'
		></ChecklistItem>

		<ChecklistItem
			text='Stable Strategies'
		></ChecklistItem>

		<ChecklistItem
			text='Strategic Partnerships'
		></ChecklistItem>

		<ChecklistItem
			text='Continuous Learning:'
		></ChecklistItem>

		<ChecklistItem
			text='Data-Driven Insights'
		></ChecklistItem>
  </div>

	</div>


	<div onClick={translatePageToUkrainian} className='_container w-full'>
		<ButtonBlue
			text='Start now'
		></ButtonBlue>
	</div>
	</div>
}