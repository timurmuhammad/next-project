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


{/* <Image src={interface_id} width={41} height={41} alt='icon'></Image>
<Image src={advanced} width={42} height={51} alt='icon'></Image>
<Image src={identification} width={42} height={41} alt='icon'></Image>
<Image src={safe} width={200} height={201} alt='icon'></Image> */}


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



		
		<div className="flex flex-wrap gap-[24px] justify-center _container">
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




		<div className='_container'>
			<Typography
				size="h2"
				title="Automatic Growth of Our Fund Insurance Program"
			></Typography>
		</div>
	</div>
}