'use client'

import { ButtonBlue } from '@/components/buttonBlue'
import styles from './processing.module.scss'
import cn from 'classnames'
import change from '@/ui/icons/check_circle.svg'
import Image from 'next/image';
import { Input } from '@/shadcn/ui/input';
import { UnderlineButton } from '@/components/underlineButton'
import { ButtonBorder } from '@/components/buttonBorder'
import Link from 'next/link'

export default function Processing() {
	return 	<div className={styles.body}>
	<div className="flex flex-col gap-[24px] w-full">
				<p className={styles.title}>
					BTC withdrawal
				</p>

				<div className={styles.list}>
					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className='  basis-[32px]'><Image src={change} width={32} height={32} alt='icon'></Image></div>
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

			<div className="flex flex-col justify-center  self-stretch   gap-[16px] p-[16px] rounded-[6px] border border-solid border-[#e6e6e6]">
  <div className="flex     relative gap-[16px]">
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="  w-[24px] h-[24px] relative flex-shrink-0 flex-grow-0 basis-[24px]"
      preserveAspectRatio="none"
    >
      <path
        d="M3 12.5333L8.68421 19.7333L21 5.33333"
        stroke="#45C688"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p className="  text-[14px]   ">
      Waiting for payment processor
    </p>
  </div>
  <div className="flex items-center relative gap-[16px]">
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="  w-[24px] h-[24px] relative flex-shrink-0 flex-grow-0 basis-[24px]"
      preserveAspectRatio="none"
    >
      <path
        d="M3 12.5333L8.68421 19.7333L21 5.33333"
        stroke="#45C688"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p className="  text-[14px]   ">
      Wallet address validation
    </p>
  </div>
  <div className="flex     relative gap-[16px]">
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="  w-[24px] h-[24px] relative flex-shrink-0 flex-grow-0 basis-[24px]"
      preserveAspectRatio="none"
    >
      <path
        d="M19.0894 8.13332C20.1994 9.61332 20.8894 11.4433 20.8894 13.4433C20.8894 18.3533 16.9094 22.3333 11.9994 22.3333C7.08939 22.3333 3.10938 18.3533 3.10938 13.4433C3.10938 8.53331 7.08939 4.5533 11.9994 4.5533C12.6794 4.5533 13.3394 4.64335 13.9794 4.79335"
        stroke="#00B2C8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p className="  text-[14px]   ">
      Creating a transaction
    </p>
  </div>
</div>


<div className="flex flex-col justify-center items-center self-stretch  relative gap-[16px] p-[16px] rounded-[6px] border border-solid border-[#e6e6e6]">
  <p className="self-stretch flex-grow text-[10px] text-center">
    <span className="self-stretch mr-[4px] flex-grow  text-[10px] font-medium text-center ">
      Transaction link:
    </span>
    <span className="self-stretch flex-grow  text-[10px] text-center text-[#00b2c8]">
      https://tronscan.io/#/transaction/c524d7e9e26ec4063de08df0d7bc7af3424fa5675747987d49a472bd225cf85f
    </span>
  </p>
</div>


		<div className={styles.buttons}>
			<Link href='/wallets/withdrawal'>
				<ButtonBlue
					text='Close'
				></ButtonBlue>
			</Link>
			</div>

	</div>
}