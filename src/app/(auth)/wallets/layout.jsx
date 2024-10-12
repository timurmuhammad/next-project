'use client'

import styles from './wallets.module.scss'
import cn from 'classnames'
import { usePathname } from "next/navigation";
import {  useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from "next/link";
import { tabs } from '@/types/auth';
import btc from "@/ui/icons/btc.svg";
import usdt from "@/ui/icons/usdt.svg";
import Image from 'next/image';
import eth from "@/ui/icons/eth.svg";
import ethereum_auth from "@/ui/icons/ethereum_auth.svg";
import { AddWallet } from "@/components/addWallet";




export default function WalletsLayout({ children }) {
	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);
	const [ wallet, setWallet ] = useState('replenishment')

	const isWithdrawalPage = pathname === "/wallets/withdrawal";

	return <div className={cn('_container', 'main_auth')}>
		<div className={styles.breadcrumb}>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink>
								<Link href="">Personal account</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						{activeLinks.map((item, index) => {
							const currentItem = tabs.find((el) => pathname.includes(el.path) && el.path === item);
							console.log(currentItem)
						return <span className='flex gap-1.5 items-center'>
							<BreadcrumbSeparator />
							{
								activeLinks.length - 1 === index 
								? <BreadcrumbItem>
									<div className='font-[400] text-[#000]'><BreadcrumbPage className='flex gap-[4px] items-center capitalize'>{currentItem ? currentItem.text : item}</BreadcrumbPage></div>
								</BreadcrumbItem>
								: <BreadcrumbItem>
									<BreadcrumbLink>
										<Link className='capitalize' href={currentItem ? `/${currentItem.path}` : `/${item}`}>{currentItem ? currentItem.text : item}</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>
							}
						</span>
						})}
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{pathname === '/wallets/exchange' ? children : <div className={styles.body}>
			<div className="flex flex-col gap-[16px] w-full min-w-[300px] max-w-[384px]">
				<div className="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[56px]">
					<Link href='/wallets/replenishment' onClick={() => setWallet('replenishment')} className={cn(styles.wallet, { [styles.active]: wallet === 'replenishment' })}>
						Replenishment
					</Link>
					<Link href='/wallets/withdrawal' onClick={() => setWallet('withdrawal')} className={cn(styles.wallet, { [styles.active]: wallet === 'withdrawal' })}>
						withdrawal
					</Link>
				</div>

				<div className={styles.counter}>
					<div className="flex  items-center gap-[16px]">
						<div className={styles.icon}><Image src={btc} width={50} height={50} alt='icon'></Image></div>
						<div className="flex flex-col justify-center">
							<p className="text-[18px] font-[400]">Bitcoin </p>
							<p className='text-[16px]'>
								BTC
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center items-end   ">
						<p className="  text-[20px]  ">$ 0.00</p>
						<p className="  text-[14px]   ">
							BTC 0.000000
						</p>
					</div>
				</div>

				<div className={styles.counter}>
					<div className="flex  items-center gap-[16px]">
						<div className={styles.icon}><Image src={usdt} width={50} height={50} alt='icon'></Image></div>
						<div className="flex flex-col justify-center">
							<p className="text-[18px] font-[400]">Bitcoin </p>
							<p className='text-[16px]'>
								BTC
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center items-end   ">
						<p className="  text-[20px]  ">$ 0.00</p>
						<p className="  text-[14px]   ">
							BTC 0.000000
						</p>
					</div>
				</div>

				<div className={styles.counter}>
					<div className="flex  items-center gap-[16px]">
						<div className={styles.icon}><Image src={ethereum_auth} width={50} height={50} alt='icon'></Image></div>
						<div className="flex flex-col justify-center">
							<p className="text-[18px] font-[400]">Bitcoin </p>
							<p className='text-[16px]'>
								BTC
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center items-end   ">
						<p className="  text-[20px]  ">$ 0.00</p>
						<p className="  text-[14px]   ">
							BTC 0.000000
						</p>
					</div>
				</div>


				{!isWithdrawalPage && 
					<AddWallet></AddWallet>
				}
			</div>
			<div className='flex-grow self-stretch'>{children}</div>

		</div>}
	</div>
}
