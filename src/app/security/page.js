'use client'

import cn from 'classnames'
import styles from "./security.module.scss";
import { Section } from '@/components/section';
import { Typography } from '@/components/typography';
import { ChecklistItem } from '@/components/checklistItem';
import security from "@/ui/images/security.svg";
import Image from 'next/image';
import interface_id from "@/ui/icons/interface_id.svg";
import advanced from "@/ui/icons/advanced.svg";
import identification from "@/ui/icons/identification.svg";
import safe from "@/ui/icons/safe.svg";
import backgroundBlue from "@/ui/icons/background_blue.svg";
import blue from "@/ui/images/blue.png";



export default function Security() {
	return <div className="main">
		<div className="_container">
		  <Section imageSRC={security} width={353} height={352} previewTop={true}> 
				<Typography
					size="h1"
					title="Our Commitment to Your Security"
					text="At Company, safeguarding your funds and personal information is our top priority. We adhere to the highest standards of security to ensure that your investments and data are protected at all times. Here’s how we keep your information safe and secure on our website and platform"
				></Typography>

				<div className="flex gap-6 flex-wrap">
					<div className={styles.check_list}>
						<ChecklistItem
							text="Data protection"
						></ChecklistItem>
						<ChecklistItem
							text="Fraud Prevention"
						></ChecklistItem>
					</div>
					<div className={styles.check_list}>
						<ChecklistItem
							text="Dedicated Insurance capital"
						></ChecklistItem>
						<ChecklistItem
							text="Physical Security"
						></ChecklistItem>
					</div>
				</div>
      </Section>
		</div>




		<div className='_container'>
			<Typography
				size="h2"
				title="Advanced tools that meet standards"
				text="At Company, we leverage cutting-edge tools and technologies to meet the highest standards of security, efficiency, and reliability."
			></Typography>
		</div>



		
		<div className={cn(styles.card_wrapper, '_container')}>
			<div className={styles.card}>
			<Image src={interface_id} width={41} height={41} alt='icon'></Image>
				<h6>Advanced Data Protection and Privacy</h6>
				<ChecklistItem
					icon='green'
					title='Encryption: '
					text="All your data is encrypted using state-of-the-art AES-256 encryption, both when it is stored and during transmission, ensuring it remains confidential and secure."
				></ChecklistItem>
				<ChecklistItem
					icon='green'
					title='Access Controls: '
					text="We implement stringent role-based access controls (RBAC) to ensure that only authorized personnel can access sensitive information."
				></ChecklistItem>
				<ChecklistItem
				icon='green'
					title='Secure Storage: '
					text="Your data is stored in secure, compliant data centers with robust physical and network security measures."
				></ChecklistItem>
			</div>

			<div className={styles.card}>
			<Image src={advanced} width={42} height={51} alt='icon'></Image>
				<h6>Robust Cybersecurity Measures</h6>
				<ChecklistItem
					icon='green'
				title='Firewalls and IDS: '
					text="Our systems are protected by advanced firewalls and Intrusion Detection Systems (IDS) to monitor and block any suspicious activities."
				></ChecklistItem>
				<ChecklistItem
				icon='green'
					title='Anti-Malware Protection: '
					text="We use top-tier anti-malware software that is regularly updated to protect against the latest threats."
				></ChecklistItem>
				<ChecklistItem
					icon='green'
					title='Regular Security Audits: '
					text="We conduct frequent security audits and vulnerability assessments to identify and mitigate potential risks."
				></ChecklistItem>
			</div>

			<div className={styles.card}>
			<Image src={identification} width={42} height={41} alt='icon'></Image>
				<h6>Fraud Prevention</h6>
				<ChecklistItem
					icon='green'
				title='Comprehensive Measures: '
					text="We employ all protective measures to prevent fraud, including advanced monitoring and alert systems to detect and mitigate fraudulent activities"
				></ChecklistItem>
				<ChecklistItem
					icon='green'
					title='Client Education: '
					text="We provide resources and tips to help you protect your account and personal information from potential fraud."
				></ChecklistItem>
				<ChecklistItem
					icon='green'
					title='Detailed Logging: '
					text="We maintain comprehensive logs of all access and activities, which are regularly reviewed to detect any anomalies."
				></ChecklistItem>
			</div>
		</div>




		<div className='_container'>
			<Typography
				size="h2"
				title="Our Comprehensive Fund Insurance Program"
				text="At Company, we understand the importance of protecting your investments against unforeseen circumstances. That’s why we’ve developed a robust Fund Insurance Program and pledged capital to cover potential losses. Here’s how our program works:"
			></Typography>
		</div>




		<div className={cn(styles.section, '_container')}>

			<div className="flex flex-1 flex-col gap-6">
				<p className="text-[28px] text-black">
					Overview of the Fund Insurance Program
				</p>
				<p className="max-w-[363px] text-[16px]">
					Our Fund Insurance Program is designed to provide an additional layer of security and peace of
					mind to our clients. This program is backed by our own capital reserves and a commitment to
					safeguarding your investments.
				</p>
			</div>

			<div className="flex flex-col justify-center items-end gap-[24px]">

				<p className={styles.text}>
					INVESTMENT PROTECTION
				</p>

				<p className="max-w-[489.45px] text-[16px] text-right">
					The program covers the full range of potential losses, including market downturns, unexpected
					economic events and other financial risks for all of our products.
				</p>

				<div className={styles.check_box}>
					<ChecklistItem
						text="Dynamic Strategies"
					></ChecklistItem>

					<ChecklistItem
						text="Copy Trading"
					></ChecklistItem>

					<ChecklistItem
						text="Stable Strategies"
					></ChecklistItem>
				</div>

			</div>
		</div>



		<div className='_container'>
			<Typography
				size="h2"
				title="Pledged Capital Reserve"
				text="We have set aside a substantial amount of our capital specifically for the Fund Insurance Program."
			></Typography>
		</div>




		<div className={cn(styles.reserve, '_container')}>
			<div className="flex flex-col gap-6 max-w-[750px]">
				<p className={styles.text}>
					DEDICATED FUND
				</p>

				<p className="text-[16px]">
					This dedicated fund ensures that we have the financial capacity to cover potential claims
					without impacting our operational stability.
				</p>
				
				<div className={styles.string}>
					<ChecklistItem
						text="We have set aside a substantial amount of our capital specifically for the Fund Insurance Program. This dedicated fund ensures that we have the financial capacity to cover potential claims without impacting our operational stability."
					></ChecklistItem>
				</div>

				<div className={styles.string}>
					<ChecklistItem
						text="Our capital reserve is regularly reviewed and replenished as necessary to maintain adequate coverage levels. This ensures continuous protection for our clients’ investments."
					></ChecklistItem>
				</div>
			</div>

			<div className={styles.image}>
				<Image src={safe} width={200} height={201} alt='img' ></Image>

				<p className="text-[28px]">$18.4m</p>
				<p className="text-[12px]">UNDER INSURANCE</p>
			</div>
		</div>





		<div className={'_container'}>
			<Typography
				size="h2"
				title="Automatic Growth of Our Fund Insurance Program"
			></Typography>
			
			<div className={styles.automatic}>
				<p className="max-w-[580px] text-[14px">
					<span className="text-[14px] font-semibold">
						1. Client Profit Generated:
					</span>
					<span className="max-w-[580px] text-[14px] "> Clients generate profits from their investments.
					</span>
					<br />
					<span className="text-[14px] font-semibold"> 
						2. Small Portion Allocated to Insurance Fund:
					</span>
					<span className="max-w-[580px] text-[14px] "> A small portion of each client’s profit is automatically allocated to the insurance fund.
					</span>
					<br />
					<span className="text-[14px] font-semibold"> 
						3. Fund Insurance Program Grows:
					</span>
					<span className="max-w-[580px] text-[14px] "> This allocation helps the Fund Insurance Program grow over time.
					</span>
					<br />
					<span className="text-[14px] font-semibold"> 
						4. Coverage for Potential Losses Ensured:
					</span>
					<span className="max-w-[580px] text-[14px] "> The growing fund ensures coverage for any potential losses.
					</span>
					<br />
					<span className="text-[14px] font-semibold"> 
						5. Investment Offers and Returns Unaffected:
					</span>
					<span className="max-w-[580px] text-[14px] "> This process does not affect the investment offers and returns described on our site.
					</span>
					<br />
				</p>
				<p className={styles.typography}>
					Our Fund Insurance Program is designed to grow automatically by taking a small portion of each
					client’s profit. This process ensures that the fund remains robust and capable of covering
					potential losses, without affecting the investment offers and returns described on our site.
					This approach allows us to maintain the highest standards of security and protection for all
					our clients, while still delivering the exceptional investment performance you expect.
				</p>
			</div>
		</div>




		<div className={styles.blue}>
			<Image className="absolute z-0 bottom-0 w-full" src={backgroundBlue} alt="img" width={1440} height={280}></Image>
			<Image className="h-[376px] w-full" src={blue} alt="img" width={1440} height={376}></Image>

			<div className="_container absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center">
				<h3 className="font-normal text-[32px]">Commitment to Security and Trust</h3>
				<p className="font-normal text-[16px] max-w-[857px]">Our Fund Insurance Program reflects our unwavering commitment to the security and trust of our clients. By pledging our own capital and continuously monitoring risks, we ensure that your investments are protected against unforeseen events. This program, combined with our extensive security measures, provides a comprehensive safety net for your financial future.</p>
				<button className="font-normal text-xl flex items-center last:justify-center rounded py-0 px-[48px] h-[62px] bg-[#E4FAFC] text-black w-fit mx-auto hover:bg-white">Sign Up</button>
			</div>
		</div>
	</div>
}