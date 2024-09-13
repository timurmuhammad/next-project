'use client'


import { ButtonBlue } from '@/components/buttonBlue'
import styles from './exchange.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import triangle_blue from '@/ui/icons/triangle_blue.svg'
import ethereum_auth from '@/ui/icons/ethereum_auth.svg'
import binance_coin from '@/ui/icons/binance_coin.svg'
import { useState } from 'react'
import usdt from '@/ui/icons/usdt.svg'



import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/shadcn/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/ui/popover"

const from = [
  {
    value: "usdttrc20",
    label: "USDT TRC20",
		logo: usdt,
  },
  {
    value: "etherc-20",
    label: "ETH ERC-20",
		logo: ethereum_auth,
  },
  {
    value: "bnbbep-20",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
  {
    value: "r6kmhht",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
  {
    value: "rjmykjd",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
	{
    value: "srkyerhj",
    label: "BNB BEP-20",
		logo: binance_coin,
  }
]


const to = [
  {
    value: "usdttrc20",
    label: "USDT TRC20",
		logo: usdt,
  },
  {
    value: "etherc-20",
    label: "ETHERC-20",
		logo: ethereum_auth,
  },
  {
    value: "bnbbep-20",
    label: "BNBBEP-20",
		logo: binance_coin,
  },
  {
    value: "r6kmhht",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
  {
    value: "rjmykjd",
    label: "BNB BEP-20",
		logo: binance_coin,
  },
	{
    value: "srkyerhj",
    label: "BNB BEP-20",
		logo: binance_coin,
  }
]





export default function Exchange() {
	const [openFrom, setOpenFrom] = useState(false)
	const [ openTo, setOpenTo ] = useState(false)
  const [valueFrom, setValueFrom] = useState("etherc-20")
	const [valueTo, setValueTo] = useState("usdttrc20")

	function onClick(item) {
		item === 'from' ? setOpenFrom(!openFrom)
		: setOpenTo(!openTo)
	}

	return <div className={styles.wrapper}>
		<div className={styles.body}>
			<div className="flex flex-shrink flex-col justify-center flex-grow gap-[40px]">
				<div className={styles.exchange}>

					<Popover className={styles.popover} open={openFrom} onOpenChange={setOpenFrom}>
						<PopoverTrigger asChild>
						<div onClick={() => onClick('from')} className={cn(styles.counter, {[styles.active]: openFrom})}>
						<div className="flex flex-col justify-between gap-[16px] self-stretch">
							<p className="  text-[12px]   ">From</p>
							<div className="flex flex-col justify-center    h-[25px]">
								<div className="flex  items-center    gap-[16px]">
									<Image src={valueFrom
									? from.find((coin) => coin.value === valueFrom)?.logo
									: null} width={25} height={25} alt='icon'></Image>
									<div className="flex flex-col justify-center items-center">
										<p className="  text-[14px] text-nowrap ">{valueFrom
									? from.find((coin) => coin.value === valueFrom)?.label
									: 'Select coin...'}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-between items-end self-stretch">
							<p className="  text-[12px] text-nowrap">
								<span className="  text-[12px]   ">
									Balance:
								</span>
								<span className="ml-[4px]  text-[12px] font-medium  text-[#00b2c8]">
									0.05 BTC
								</span>
							</p>
							<div className={styles.arrow}><Image src={triangle_blue} width={25} height={25} alt='icon'></Image></div>
						</div>
					</div>
						
						</PopoverTrigger>
						<PopoverContent className="w-[308px] rounded-md bg-white border-solid border-[0.5px] border-[#cecece]">
							<Command>
								<CommandInput placeholder="Search coins..." />
								<CommandList>
									<CommandEmpty>No coins found.</CommandEmpty>
									<CommandGroup>
										{to.map((coin) => (
											<CommandItem
												key={coin.value}
												value={coin.value}
												onSelect={(currentValue) => {
													setValueFrom(currentValue)
													setOpenFrom(false)
												}}
											>
												<div className='flex items-center gap-[16px]'>
													<Image src={coin.logo} width={25} height={25} alt='icon'></Image>
													{coin.label}
												</div>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>


					<div className={styles.swap}>
						<svg
							width={24}
							height={25}
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-grow-0 flex-shrink-0 w-6 h-6"
							preserveAspectRatio="none"
						>
							<path
								d="M20.5002 15.49L15.4902 20.51"
								stroke="#292D32"
								stroke-width="1.5"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3.5 15.49H20.5"
								stroke="#292D32"
								stroke-width="1.5"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3.5 9.50999L8.51 4.48999"
								stroke="#292D32"
								stroke-width="1.5"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M20.5 9.51001H3.5"
								stroke="#292D32"
								stroke-width="1.5"
								stroke-miterlimit={10}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p className="text-[10px] leading-normal">Swap</p>
					</div>




					<Popover className={styles.popover} open={openTo} onOpenChange={setOpenTo}>
						<PopoverTrigger asChild>
							<div onClick={() => onClick('to')} className={cn(styles.counter, { [styles.active]: openTo })}>
								<div className="flex flex-col justify-between gap-[16px] self-stretch">
									<p className="  text-[12px]   ">To</p>
									<div className="flex flex-col justify-center    h-[25px]">

										<div className="flex  items-center    gap-[16px]">
											<Image src={valueTo
												? to.find((coin) => coin.value === valueTo)?.logo
												: null} width={25} height={25} alt='icon'></Image>
											<div className="flex flex-col justify-center items-center   ">
												<p className="  text-[14px] text-nowrap ">{valueTo
													? to.find((coin) => coin.value === valueTo)?.label
													: 'Select coin...'}</p>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col justify-between items-end self-stretch">
									<p className="  text-[12px] text-nowrap">
										<span className="  text-[12px]   ">
											Balance:
										</span>
										<span className="ml-[4px]  text-[12px] font-medium  text-[#00b2c8]">
											1240.05 USDT
										</span>
									</p>
									<div className={styles.arrow}><Image src={triangle_blue} width={25} height={25} alt='icon'></Image></div>
								</div>
							</div>
						</PopoverTrigger>

						<PopoverContent className="w-[308px] rounded-md bg-white border-solid border-[0.5px] border-[#cecece] p-0">
							<Command>
								<CommandInput placeholder="Search coins..." />
								<CommandList>
									<CommandEmpty>No coins found.</CommandEmpty>
									<CommandGroup>
										{to.map((coin) => (
											<CommandItem
												key={coin.value}
												value={coin.value}
												onSelect={(currentValue) => {
													setValueTo(currentValue)
													setOpenTo(false)
												}}
											>
												<div className='flex items-center gap-[16px]'>
													<Image src={coin.logo} width={25} height={25} alt='icon'></Image>
													{coin.label}
												</div>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>







					{/* <div onClick={() => onClick()} className={cn(styles.counter, {[styles.active]: open})}>
						<div className="flex flex-col justify-between gap-[16px] self-stretch">
							<p className="  text-[12px]   ">To</p>
							<div className="flex flex-col justify-center    h-[25px]">
								<div className="flex  items-center    gap-[16px]">
									<Image src={ethereum_auth} width={25} height={25} alt='icon'></Image>
									<div className="flex flex-col justify-center items-center   ">
										<p className="  text-[14px] text-nowrap ">USDT TRC20</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-between items-end self-stretch">
							<p className="  text-[12px] text-nowrap">
								<span className="  text-[12px]   ">
									Balance:
								</span>
								<span className="ml-[4px]  text-[12px] font-medium  text-[#00b2c8]">
								1240.05 USDT
								</span>
							</p>
							<div className={styles.arrow}><Image src={triangle_blue} width={25} height={25} alt='icon'></Image></div>
						</div>
					</div> */}
				</div>
	
	
				<div className={styles.ammount}>
					<div className="flex flex-col max-w-[321px] flex-grow flex-shrink gap-[16px]">
						<p className="self-stretch    text-[14px]   ">
							Enter amount ETH (ERC-20)
						</p>
						<div className="flex  text-[14px] self-stretch rounded-md bg-neutral-50 border-solid border-[1px] border-[#cecece]">
							<div className="flex justify-between items-center self-stretch flex-grow  h-[40px] px-[16px] gap-[16px]">
								<p>
									0
								</p>
								<p className='text-[#00b2c8]'>MAX</p>
							</div>
							<div className="flex text-[#8a8181] justify-center w-[79px] items-center self-stretch border-solid border-l-[1px] border-[#cecece]">
								$ 0
							</div>
						</div>
					</div>
					<div className="flex flex-col max-w-[321px] flex-grow flex-shrink  gap-[16px]">
						<p className="self-stretch    text-[14px]   ">
							You receive
						</p>
						<div className="flex  text-[14px] self-stretch rounded-md bg-neutral-50 border-solid border-[1px] border-[#cecece]">
							<div className="flex justify-between items-center self-stretch flex-grow  h-[40px] px-[16px] gap-[16px]">
								<p>
									0
								</p>
								<p>USDT</p>
							</div>
							<div className="flex text-[#8a8181] justify-center w-[79px] items-center self-stretch border-solid border-l-[1px] border-[#cecece]">
								$ 1189.52
							</div>
						</div>
					</div>
				</div>
	
	
				<div className="flex flex-col   self-stretch    gap-6 px-4 pt-4 rounded-md bg-white">
					<p className="  text-base  text-black">Swap Details</p>
					<div className="flex flex-col   self-stretch  ">
						<div className="flex justify-between items-center self-stretch    py-[8px] border-t-0 border-r-0 border-b border-solid border-l-0 border-[#cecece]">
							<p className="  text-[14px]   ">
								Output
							</p>
							<p className="  text-[14px]   ">
								USDT 250.00
							</p>
						</div>
						<div className="flex justify-between items-center self-stretch    py-[8px] border-t-0 border-r-0 border-b border-solid border-l-0 border-[#cecece]">
							<p className="  text-[14px]   ">
								Comission
							</p>
							<p className="  text-[14px]   ">
								USDT 0.00
							</p>
						</div>
						<div className="flex justify-between items-center self-stretch    py-[8px] border-t-0 border-r-0 border-b border-solid border-l-0 border-[#cecece]">
							<p className="  text-[14px]   ">Type</p>
							<p className="  text-[14px]   ">
								Internal transfer
							</p>
						</div>
					</div>
				</div>
	
			</div>
	
	
	
			<div className="flex flex-col justify-center min-w-[250px] self-stretch flex-grow max-w-[328px] gap-[16px] flex-shrink basis-[250px] p-[16px]  rounded-md border-solid bg-white border border-[#e6e6e6]">
				<p className="  text-[14px]  text-black">Additional Information</p>
				<ul className={styles.ul}>
					<li className="self-stretch    text-[12px]   ">
						Exchange is carried out between any currencies
					</li>
					<li className="self-stretch    text-[12px]   ">
						There are no restrictions on the minimum amount for exchange
					</li>
					<li className="self-stretch    text-[12px]   ">
						You can make no more than 5 exchanges in 24 hours
					</li>
					<li className="self-stretch    text-[12px]   ">
						There is no commission for exchange within the platform
					</li>
					<li className="self-stretch    text-[12px]   ">
						The exchange occurs automatically at the rate at the time of exchange
					</li>
				</ul>
			</div>
		</div>



		<div className={styles.button}>
			<ButtonBlue
				text='Exchange'
			></ButtonBlue>
		</div>
	</div>
}











