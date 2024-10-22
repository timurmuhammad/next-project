
'use client'

import styles from './add_wallet.module.scss'
import cn from 'classnames'
import binance_coin from "@/ui/icons/binance_coin.png";
import digibyte from "@/ui/icons/digibyte.png";
import dogecoin from "@/ui/icons/dogecoin.png";
import ethereum from "@/ui/icons/ethereum.png";
import monero from "@/ui/icons/monero.png";
import litecoin from "@/ui/icons/litecoin.png";
import notcoin from "@/ui/icons/notcoin.png";
import polygon from "@/ui/icons/polygon.png";
import solana from "@/ui/icons/solana.png";
import shiba_inu from "@/ui/icons/shiba_inu.png";
import tether from "@/ui/icons/tether.png";
import ton from "@/ui/icons/ton.png";
import tron from "@/ui/icons/tron.png";
import usdc from "@/ui/icons/usdc.png";
import Image from 'next/image';
import eth from "@/ui/icons/eth.svg";
import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
	DialogClose,
} from "@/shadcn/ui/dialog"

const listWallets = [ binance_coin.src, digibyte.src, dogecoin.src, ethereum.src, monero.src, litecoin.src, notcoin.src, polygon.src, solana.src, shiba_inu.src, tether.src, ton.src, tron.src, usdc.src, ]

export const AddWallet = () => {
	const [open, setOpen] = useState(false);
	const [ list, setList ] = useState([])

	useEffect(() => {
		if (typeof document !== 'undefined') {
			const bg = document.querySelector('.bg');
			const scrollPosition = window.scrollY; 

			if (bg) {
				if (open) {
					bg.style.zIndex = 500;
					bg.style.opacity = '1';
					bg.style.background = 'rgba(0, 0, 0, 0.3)';

						const preventScroll = (e) => {
							if (!e.target.closest('.popup_absolute')) {
								e.preventDefault();
							}
							
							console.log(scrollPosition - window.scrollY)

							if (window.scrollY - scrollPosition > 0) {
								setOpen(false)
							}
						}
						document.addEventListener('wheel', preventScroll, { passive: false });
						document.addEventListener('touchmove', preventScroll, { passive: false });
						return () => {
							document.removeEventListener('wheel', preventScroll);
							document.removeEventListener('touchmove', preventScroll);
						};
	
				} else {
					bg.style.zIndex = -100;
					bg.style.opacity = '0';
					bg.style.background = 'transparent';
				}
			}
		}
	}, [open]);


	function add(item) {
		if (list.includes(item)) {
			setList(list.filter(i => i !== item));
	} else {
			setList([...list, item]);
	}
	}


	return <Dialog modal={false} open={open} onOpenChange={setOpen}>
		<DialogTrigger asChild>
			<div className={styles.new_plan}>
				<div className={styles.add}>
					<Image src={eth} width={50} height={50} alt='icon'></Image>
				</div>
				<p className="text-[14px]">ADD WALLET</p>
			</div>
		</DialogTrigger>
		<DialogContent className="max-w-[759px] flex-shrink popup_absolute">
			<div className={styles.body}>
				<div className="flex justify-between flex-shrink items-center self-stretch  ">
					<p className=" text-[14px] font-[400] text-black">Add wallet</p>

					<DialogClose className='cursor-pointer' asChild>
						<svg
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className=" w-6 h-6 "
							preserveAspectRatio="none"
						>
							<path
								opacity="0.4"
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								fill="#D9D9D9"
							/>
							<path
								d="M13.0594 12L15.3594 9.7C15.6494 9.41 15.6494 8.93 15.3594 8.64C15.0694 8.35 14.5894 8.35 14.2994 8.64L11.9994 10.94L9.69937 8.64C9.40937 8.35 8.92937 8.35 8.63938 8.64C8.34938 8.93 8.34938 9.41 8.63938 9.7L10.9394 12L8.63938 14.3C8.34938 14.59 8.34938 15.07 8.63938 15.36C8.78938 15.51 8.97937 15.58 9.16937 15.58C9.35937 15.58 9.54937 15.51 9.69937 15.36L11.9994 13.06L14.2994 15.36C14.4494 15.51 14.6394 15.58 14.8294 15.58C15.0194 15.58 15.2094 15.51 15.3594 15.36C15.6494 15.07 15.6494 14.59 15.3594 14.3L13.0594 12Z"
								fill="#292D32"
							/>
						</svg>
					</DialogClose>

				</div>
				<p className="self-stretch text-[16px]  text-center ">
					Select the desired currencies and click Add Wallet
				</p>
				<div className="flex flex-wrap justify-center items-center gap-[22px]">

				{listWallets.map((item, index) => <div onClick={() => add(item)} className={cn(styles.item, { [styles.active]: list.includes(item) })}>
						<Image key={index} src={item} width={60} height={60} alt='icon' ></Image>
					</div>)}
				</div>

				<div className={styles.button_blue}><p>Add Wallet</p></div>

				{/* <div className="flex flex-col    gap-[10px]">
					<div className="flex justify-center items-center  px-[12px] py-[6px] rounded bg-[#00b2c8]">
						<div className="flex justify-center items-center   gap-[4px]">
							<p className=" text-[16px]  text-center text-white">
								Add Wallet
							</p>
						</div>
					</div>
				</div> */}
			</div>
		</DialogContent>
	</Dialog>
}

