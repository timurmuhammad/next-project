
'use client'

import { ButtonBlue } from '@/components/buttonBlue'
import styles from './replenishment.module.scss'
import cn from 'classnames'
import barcode from '@/ui/images/barcode.png'
import Image from 'next/image';


	export default function Replenishment() {
	return 	<div className={styles.body}>


				<p className="self-stretch    text-[16px] text-center ">
					To top up your BTC balance, send any amount to the wallet below, or using the QR code
				</p>
				<Image src={barcode} width={120} height={120} alt='icon'></Image>


				<div className={styles.copy}>
					<div className="flex justify-center items-center flex-grow min-h-[45px]  gap-[8px] px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-[1px] border-solid border-[#cecece] w-full">
						<p className="text-[14px] text-wrap break-words text-[#7b7b7b]">
							3CLu918uGeB1BoMuZBHLYoTJTMQP3dfusF
						</p>
					</div>
					<button className={styles.button}>
						<p>
							COPY
						</p>
					</button>
				</div>



				<div className="flex  items-center self-stretch    gap-[32px] p-[16px] rounded-md  border border-solid border-[#e6e6e6]">
					<ul className={styles.ul}>
						<li>
							<span className="flex-grow  text-[14px]   ">
								Send only
							</span>
							<span className="flex-grow  text-[14px]  mx-[4px] font-medium  ">
								BTC Bitcoin
							</span>
							<span className="flex-grow  text-[14px]   ">
								to this address
							</span>
						</li>
						<li>
							<span className="flex-grow text-[14px]   ">
								The minimum amount for replenishment is
							</span>
							<span className="flex-grow  mx-[4px] text-[14px] font-semibold  ">
								0.0001 BTC
							</span>
						</li>
						<li>
							<span className="flex-grow  text-[14px]   ">
								Funds will be credited to the balance after
							</span>
							<span className="flex-grow  text-[14px]  mx-[4px] font-semibold  ">
								1 confirmation
							</span>
							<span className="flex-grow  text-[14px]   ">

								in the blockchain network automatically
							</span>
						</li>
					</ul>
				</div>
	</div>
}