'use client'

import styles from './statistics.module.scss'
import cn from 'classnames'
import Image from 'next/image';
import { useState } from 'react'
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from "next/link";
import { tabs } from '@/types/auth';
import invested from "@/ui/icons/invested.svg";
import withdrawn from "@/ui/icons/withdrawn.svg";
import earned from "@/ui/icons/earned.svg";
import briefcase from '@/ui/icons/briefcase.svg'
import gift from '@/ui/icons/gift.svg'


export default function LayoutStatistics({ children }) {
	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);
	const [ plan, setPlan ] = useState('All')
	const [ value, setValue ] = useState('')

	return <div className="main_auth _container">
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



		<div className="flex overflow-hidden border border-solid rounded-[6px] border-[#e6e6e6]  h-[40px]">
			<div onClick={() => setPlan('All')} className={cn(styles.plan, { [styles.active]: plan === 'All' })}>
			All
			</div>
			<div onClick={() => setPlan('Fundings')} className={cn(styles.plan, { [styles.active]: plan === 'Fundings' })}>
			Fundings
			</div>
			<div onClick={() => setPlan('PAyouts')} className={cn(styles.plan, { [styles.active]: plan === 'PAyouts' })}>
			PAyouts
			</div>
			<div onClick={() => setPlan('Bonuses')} className={cn(styles.plan, { [styles.active]: plan === 'Bonuses' })}>
			Bonuses
			</div>
		</div>




		<div className='self-stretch'>{children}</div>




		<div className={styles.statistics}>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[16px]">
					<Image src={invested} width={24} height={24} alt="icon"></Image>
					<p className="  text-[14px] font-medium  uppercase text-[#828282]">
					Replenished
					</p>
				</div>
				<p className="   font-medium  text-[18px]">$ 0.00</p>
			</div>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[8px]">
					<Image src={withdrawn} width={24} height={24} alt="icon"></Image>

					<p className=" text-[12px] font-medium  uppercase text-[#828282]">
						Withdrawn
					</p>
				</div>
				<p className="   font-medium  text-[18px]">$ 0.00</p>
			</div>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[8px]">
					<Image src={briefcase} width={24} height={24} alt="icon"></Image>

					<p className=" text-[12px] font-medium  uppercase text-[#828282]">
					Invested
					</p>
				</div>
				<p className="   font-medium  text-[18px]">$ 0.00</p>
			</div>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[8px]">
					<Image src={earned} width={24} height={24} alt="icon"></Image>

					<p className=" text-[12px] font-medium  uppercase text-[#828282]">
						Earned
					</p>
				</div>
				<p className="   font-medium  text-[18px]">$ 0.00</p>
			</div>
			<div className={styles.stats}>
				<div className="flex  items-center     gap-[8px]">
					<Image src={gift} width={24} height={24} alt="icon"></Image>

					<p className=" text-[12px] font-medium  uppercase text-[#828282]">
					Bonuses
					</p>
				</div>
				<p className="   font-medium  text-[18px]">$ 0.00</p>
			</div>
		</div>
	</div>
}