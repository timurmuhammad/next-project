'use client'

import { ButtonBlue } from '@/components/buttonBlue'
import styles from './confirmation.module.scss'
import cn from 'classnames'
import change from '@/ui/icons/check_circle.svg'
import Image from 'next/image';
import { Input } from '@/shadcn/ui/input';
import { UnderlineButton } from '@/components/underlineButton'
import { ButtonBorder } from '@/components/buttonBorder'
import Link from 'next/link'

export default function Confirmation() {
	return 	<div className={styles.body}>
	<div className="flex flex-col gap-[24px] w-full">
				<p className={styles.title}>
					BTC withdrawal
				</p>

				<div className={styles.list}>
					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className='flex-shrink-0 flex-grow-0 basis-[32px]'><Image src={change} width={32} height={32} alt='icon'></Image></div>
						<p className="  text-[14px] text-nowrap text-center text-[#00b2c8]">Place an Order</p>
					</div>
					<div className= {cn(styles.line, 'bg-[#00b2c8]')} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={cn(styles.circle, styles.blue)}>
							2
						</div>
						<p className="  text-[14px] text-center ">Confirmation</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={styles.circle}>
							3
						</div>
						<p className="  text-[14px] text-center ">Processing</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col self-stretch    gap-[16px] p-[16px] rounded-md  border border-solid border-[#e6e6e6]">
			<p className="text-[16px] text-black font-[400]">
				Payment Information
			</p>
			<ul className={styles.ul}>
				<li>
					<span className="flex-grow  text-[14px]   ">
					Cryptocurrency:
					</span>
					<span className="flex-grow  text-[14px]  mx-[4px] font-medium  ">
					Bitcoin
					</span>
				</li>
				<li>
					<span className="flex-grow text-[14px]   ">
					Network:
					</span>
					<span className="flex-grow  mx-[4px] text-[14px] font-medium  ">
					BTC
					</span>
				</li>
				<li>
					<span className="flex-grow  text-[14px]   ">
					Wallet address for withdrawal: 
					</span>
					<span className="flex-grow  text-[14px]  mx-[4px] font-medium  ">
					3KSwAmKxM5ifHVLFoPWZPKHADeDsFc5H4y
					</span>
				</li>
				<li>
					<span className="flex-grow  text-[14px]   ">
					Fee:
					</span>
					<span className="flex-grow  text-[14px]  mx-[4px] font-medium  ">
					0.00005 BTC
					</span>
				</li>
				<li>
					<span className="flex-grow  text-[14px]   ">
					You receive:
					</span>
					<span className="flex-grow  text-[14px]  mx-[4px] font-medium  ">
					0.005 BTC
					</span>
				</li>
			</ul>
				</div>


				<div className={styles.ammount}>
					<div className="flex flex-col max-w-[319px] flex-grow flex-shrink gap-[16px]">
						<p className="self-stretch text-[14px]">
						Enter PIN-code
						</p>
						<div className={styles.input}>
						<Input placeholder='0' type="text" />
						<p className={styles.setup}>Setup </p>
						</div>
					</div>
					<div className="flex flex-col max-w-[319px] flex-grow flex-shrink  gap-[16px]">
						<p className="self-stretch text-[14px]">
						Enter 6-digit code (2FA)
						</p>
						<div className="w-full relative rounded-[6px] border-[1px] border-solid border-[#cecece]">
							<Input type="text" />
						</div>
					</div>
				</div>


		<div className={styles.buttons}>
			<Link href='/wallets/withdrawal'>
				<ButtonBorder
					text='Back'
				></ButtonBorder>
			</Link>
			<Link href='/wallets/processing'>
				<ButtonBlue
					text='Next'
				></ButtonBlue>
			</Link>
			</div>

	</div>
}