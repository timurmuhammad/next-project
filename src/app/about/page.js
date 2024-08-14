'use client'

import { Section } from "@/components/section"
import styles from "./about.module.scss"
import cn from "classnames"
import { Typography } from "@/components/typography"
import { UnderlineButton } from "@/components/underlineButton"
import { Button } from "@/components/button"
import Image from "next/image"
import  persons  from "../../ui/icons/persons.svg";
import { ChecklistItem } from "../../components/checklistItem"
import clockHistory from "../../ui/icons/clock-history.svg";
import dollarCrosshair from "../../ui/icons/dollar-crosshair.svg";
import dollar from "../../ui/icons/dollar.svg";
import dollarSwirl from "../../ui/icons/dollar-swirl.svg";
import list from "../../ui/icons/list.svg";
import click from "../../ui/icons/click.svg";
import markingLine from "../../ui/icons/marking_line.svg";
import collectTests from "../../ui/icons/collect-tests.svg";
import lookingglassCheck from "../../ui/icons/lookingglass_check.svg";
import marketArbitrage from "../../ui/icons/market-arbitrage.svg";
import diagram from "../../ui/icons/diagram.svg";
import backgroundBlue from "../../ui/icons/background_blue.svg";
import blue from "../../ui/images/blue.png";
import excellent from "../../ui/images/excellent.png";
import map from "../../ui/images/map.svg";
import line from "../../ui/images/line.svg";
import benzingaSeeklogo from "../../ui/icons/benzinga-seeklogo.svg";
import marketwatch from "../../ui/icons/marketwatch.svg";
import fox from "../../ui/icons/fox.svg";
import yahoo from "../../ui/icons/yahoo.svg";
import shield from "../../ui/images/shield.svg";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shadcn/ui/accordion.tsx"
import { ButtonBlue } from "@/components/buttonBlue"

// export const metadata = {
// 	title: "About Us",
// 	description: ""
// }

export default function About() {
	return <div className="main">


		<div className="_container">
		  <Section imageSRC={persons} width={353} height={309} previewTop={true}>
          <Button
            text="About Us"
          ></Button>
  
          <Typography
            size="h1"
            title="Get to Know About Company"
            text="We are dedicated to providing investors with secure, innovative, and user-friendly investment solutions that
            empower them to achieve their financial goals."
          ></Typography>
  
          <div className="flex gap-6 flex-wrap">
            <div className={styles.check_list}>
              <ChecklistItem
      					text="High yield strategies"
      				></ChecklistItem>
              <ChecklistItem
                text="Experienced team"
      				></ChecklistItem>
            </div>
            <div className={styles.check_list}>
              <ChecklistItem
      					text="Flexible Solutions for everyone"
      				></ChecklistItem>
              <ChecklistItem
      					text="Strong protection of crypto assets"
      				></ChecklistItem>
            </div>
          </div>
      </Section>
		</div>



    <div className={styles.button}>
      <ButtonBlue
        text='Read Presentation'
      ></ButtonBlue>
    </div>



      <Accordion type="single" collapsible>
      <div className={cn(styles.advantages, "_container")}>
          <AccordionItem value="item-1">
            <AccordionTrigger> 
              <div className={styles.box}>
                <Image src={clockHistory} width={42} height={42} alt="icon"></Image>
                <p className={styles.text}>Support 24/7</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our team of experts ready to help you with any questions through email, web chat or phone
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className={styles.box}>
                <Image src={dollarCrosshair} width={42} height={42} alt="icon"></Image>
                <p className={styles.text}>Low entry theshold</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our team of experts ready to help you with any questions through email, web chat or phone
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className={styles.box}>
                <Image src={dollarSwirl} width={42} height={42} alt="icon"></Image>
                <p className={styles.text}>More than 14 coins to invest</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our team of experts ready to help you with any questions through email, web chat or phone
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className={styles.box}>
                <Image src={list} width={42} height={42} alt="icon"></Image>
                <p className={styles.text}>No KYC required</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our team of experts ready to help you with any questions through email, web chat or phone
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className={styles.box}>
                <Image src={dollar} width={42} height={42} alt="icon"></Image>
                <p className={styles.text}>No hiden commissions or fees</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our team of experts ready to help you with any questions through email, web chat or phone
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              <div className={styles.box}>
                <Image src={click} width={42} height={42} alt="icon"></Image>
                <p className={styles.text}>Fully automated products</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Our team of experts ready to help you with any questions through email, web chat or phone
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>



    <div className="_container">
      <div className="max-w-[363px] mx-auto">
        <Typography
          size="h2"
          title="Roadmap"
          text="Explore all the stages of the Company formation and its upcoming plans"
        ></Typography>
      </div>
    </div>



    <div className={cn(styles.roadmap, "_container")}>
      <Image src={markingLine} width={1205} height={124} alt="img"></Image>

      <div className={styles.list_wrapper}>
        <div className={styles.list}>
          <h3 className={styles.title}>2022-2024</h3>
          <p className={styles.title}>Inception and Development</p>
          <ChecklistItem
            icon='green'
            text="Inception of the Company Ecosystem concept."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Legal consultations and incorporation of the company in Denmark."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Development of the business plan and roadmap. Formation of the core team and advisors."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Market research feasibility study. Selecting product strategies and technologies"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Programming cryptocurrency trading software. API Intergrations. Testing approved strategies in real market"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Platform development, UI/UX design creation. Fixed platform bugs and improved features and interface."
          ></ChecklistItem>
          
          <ChecklistItem
            icon='green'
            text="Setting up API gateways and connecting crypto wallets to Company software."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Creation and optimization of platform security mechanisms"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Extensive testing and refinement of the platform to ensure security, usability, and scalability."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Beta testing of the platform with a limited number of users."
          ></ChecklistItem>
        </div>

        <div className={styles.list}>
          <h3 className={styles.title}>2024-2025</h3>
          <p className={styles.title}>Public Launch and Expanding</p>
          <ChecklistItem
            icon='green'
            text="Official public launch of the Company platform internationally."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Public access to Copy Trade and Automatic Trading products."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='green'
            text="Onboarding of users and provision of educational resources. Expanding the international Company community."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Continued marketing efforts to attract new users and investors."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Expansion of the headquarters of specialists in the field of artificial intelligence to refine the Company Crosschain trading strategy."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Development of a mobile application based on Android/IOS."
          ></ChecklistItem>
          
          <ChecklistItem
            icon='orange'
            text="Expanding partnerships and introducing services to companies and private crypto funds."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Launch and improvement of the mobile application in beta testing mode"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Improvement of the security system and protection of user data."
          ></ChecklistItem>
        </div>

        <div className={styles.list}>
          <h3 className={styles.title}>2025-2026</h3>
          <p className={styles.title}>Technological improvements</p>
          <ChecklistItem
            icon='orange'
            text="Monitoring the market and opportunities in the field of artificial intelligence, improving the Company Crosschain product and implementation in partner companies"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Optimization of trading commissions due to trading volumes. Discussing terms with cryptocurrency exchanges"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Expanding the Company ecosystem with new products, services and partners."
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Implementation of neural networks in security protocols for additional protection"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Regulatory approvals in the countries of the European Union for the implementation of Company Debit cards. Introduction of fiat transactions within the platform"
          ></ChecklistItem>
          
          <ChecklistItem
            icon='orange'
            text="Improving Marketing Strategies, Local Conferences and Meetings"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="Expansion of headquarters, opening of branches in the countries of the European Union"
          ></ChecklistItem>
  
          <ChecklistItem
            icon='orange'
            text="The list of plans will be growing..."
          ></ChecklistItem>
        </div>
      </div>  
    </div>



    <div className="_container">
      <div className="max-w-[770px] mx-auto">
        <Typography
          size="h2"
          title="How the system works and operates."
          text="Our team has developed software that allows us to take full advantage of trading opportunities, providing stable and sustainable profits for our clients."
        ></Typography>
      </div>
    </div>



    <div>
      <div className={cn(styles.card_wrapper, "_container")}>
        <div className={styles.card}>
          <Image src={collectTests} alt="icon" width={42} height={42}></Image>
          <h3 className={styles.card__title}>Data collection</h3>
          <p className={styles.card__text}> Our algorithms efficiently analyze a comprehensive collection of both historical and current market data that we meticulously compile and organize.
          </p>
        </div>

        <div className={styles.card}>
          <Image src={lookingglassCheck} alt="icon" width={42} height={42}></Image>
          <h3 className={styles.card__title}>Market analysis</h3>
          <p className={styles.card__text}>Our software is designed to thoroughly study market trends, identify potential trading opportunities, and predict future market dynamics with a high degree of accuracy.
          </p>
        </div>

        <div className={styles.card}>
          <Image src={marketArbitrage} alt="icon" width={42} height={42}></Image>
          <h3 className={styles.card__title}>Automated trading execution</h3>
          <p className={styles.card__text}> Our system automatically executes profitable trades through API connections with various exchanges, ensuring that each trade is optimized to achieve the highest possible profit.
          </p>
        </div>

        <div className={styles.card}>
          <Image src={diagram} alt="icon" width={42} height={42}></Image>
          <h3 className={styles.card__title}>Monitoring and optimization</h3>
          <p className={styles.card__text}>We consistently oversee the performance of our system and make adjustments to our software to guarantee the highest levels of efficiency and profitability.
          </p>
        </div>
      </div>

      <div className={styles.blue}>
        <Image className="absolute z-0 bottom-0 w-full" src={backgroundBlue} alt="img" width={1440} height={280}></Image>
        <Image className="h-[376px] w-full" src={blue} alt="img" width={1440} height={376}></Image>

        <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center gap-[48px]">
          <h3 className="font-normal text-[32px]">Join Company today</h3>
          <p className="font-normal text-[24px]">Earn crypto around the clock with high-tech solutions</p>
          <button className="font-normal text-xl flex items-center last:justify-center rounded py-0 px-[48px] h-[62px] bg-[#E4FAFC] text-black w-fit mx-auto hover:bg-white">Sign Up</button>
        </div>
      </div>
    </div>



    <div className="_container">
      <Typography
        size="h2"
        title="Company is trusted by more than 7,382 investors around the world."
        text="WJoin global community and increase your wealth today!"
      ></Typography>

      <Image className={styles.excellent} src={excellent} height={66} width={232} alt="img"></Image>

      <Image src={map} height={635} width={1063} alt="img"></Image>
    </div>



    <div>
      <div className="_container">
        <Typography
          size="h2"
          title="Press about Company"
        ></Typography>
      </div>

      <div className="relative">
        <Image className={styles.line} src={line} height={107} width={1440} alt="img"></Image>
  
        <div className={styles.press}>
          <Image src={benzingaSeeklogo} height={22} width={159} alt="img"></Image>
          <Image src={marketwatch} height={61} width={121} alt="img"></Image>
          <Image src={fox} height={45} width={104} alt="img"></Image>
          <Image src={yahoo} height={107} width={158} alt="img"></Image>
        </div>
      </div>
    </div>



    <div className="_container">
      <Section imageSRC={shield} width={406} height={407}>
          <Typography
            size="h3"
            title="Secure & Protected Investment Platform"
            text="Explore how Company implements top-tier security measures to safeguard your funds and personal information."
          ></Typography>
  
          <UnderlineButton text="Read more about security"></UnderlineButton>
      </Section>
    </div>
	</div>
}