import styles from '../statistics.module.scss'
import cn from 'classnames'
import btc from '@/ui/icons/btc1.svg'
import Image from 'next/image';
import clip from "@/ui/icons/clip.svg";
import invested from "@/ui/icons/invested.svg";
import withdrawn from "@/ui/icons/withdrawn.svg";
import earned from "@/ui/icons/earned.svg";
import briefcase from '@/ui/icons/briefcase.svg'
import gift from '@/ui/icons/gift.svg'
import refresh_square from '@/ui/icons/refresh_square.svg'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/ui/table"
import { ButtonBorder } from '@/components/buttonBorder';

const accruals = [
  {
    date: "04.04.24",
    currency: btc.src,
    percent: "2.86%",
		amount: '50.00',
		clip: clip.src,
		status: 'Pending',
		typeImage: withdrawn.src,
		typeText: 'Withdrawal',
	},
	{
    date: "04.04.24",
    currency: btc.src,
    percent: "2.86%",
		amount: '50.00',
		clip: clip.src,
		status: 'Completed',
		typeImage: earned.src,
		typeText: 'Profits',
		opacity: true,
	},
  {
    date: "03.04.24",
    currency: btc.src,
    percent: "2.71%",
		amount: '50.00',
		clip: clip.src,
		status: 'Completed',
		typeImage: invested.src,
		typeText: 'Replenishment',
	},
  {
    date: "04.05.24",
		currency: btc.src,
    percent: "2.52%",
		amount: '2550.00',
		clip: clip.src,
		status: 'Canceled',
		typeImage: refresh_square.src,
		typeText: 'Exchange',
	},
  {
    date: "02.04.24",
		currency: btc.src,
    percent: "2.90%",
		amount: '300.00',
		clip: clip.src,
		status: 'Completed',
		typeImage: gift.src,
		typeText: 'Bonuses',
	},
  {
    date: "02.04.24",
		currency: btc.src,
    percent: "2.60%",
		amount: '300.00',
		clip: clip.src,
		status: 'Pending',
		typeImage: earned.src,
		typeText: 'Withdrawal',
	},
	{
    date: "04.05.24",
		currency: btc.src,
    percent: "2.60%",
		amount: '300.00',
		clip: clip.src,
		status: 'Completed',
		typeImage: invested.src,
		typeText: 'Profits',
		opacity: true,
	},
	{
    date: "02.04.24",
		currency: btc.src,
    percent: "2.60%",
		amount: '300.00',
		clip: clip.src,
		status: 'Completed',
		typeImage: withdrawn.src,
		typeText: 'Replenishment',
	},
	{
    date: "02.04.24",
		currency: btc.src,
    percent: "2.60%",
		amount: '300.00',
		clip: clip.src,
		status: 'Canceled',
		typeImage: refresh_square.src,
		typeText: 'Exchange',
	},
	{
    date: "02.04.24",
		currency: btc.src,
    percent: "2.60%",
		amount: '300.00',
		clip: clip.src,
		status: 'Completed',
		typeImage: gift.src,
		typeText: 'Exchange',
	},
]



export default function AllStatistics() {
	return <div className={styles.content}>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Date</TableHead>
					<TableHead>Type</TableHead>
					<TableHead>Currency</TableHead>
					<TableHead>$ Amount</TableHead>
					<TableHead>TXid</TableHead>
					<TableHead>Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{accruals.map((accrual, index) => (
					<TableRow className={styles.tablerow} key={index}>
						<TableCell>{accrual.date}</TableCell>
						<TableCell>
							<div className="flex justify-center w-fit mx-auto items-center gap-[8px] px-[8px] rounded-[4px] border-solid border border-[#e6e6e6]">
								<Image src={accrual.typeImage} width={14} height={14} alt='icon'></Image>
								<p className="text-[10px]">
									{accrual.typeText}
								</p>
							</div>
						</TableCell>
						<TableCell>
							<div className='flex items-center justify-center'><Image src={accrual.currency} width={20} height={20} alt='icon'></Image></div>
						</TableCell>
						<TableCell>{accrual.amount}</TableCell>
						<TableCell>
							<div style={{ opacity: accrual.opacity ? 0.4 : 1 }} className='flex items-center justify-center'><Image src={accrual.clip} width={16} height={16} alt='icon'></Image></div>
						</TableCell>
						<TableCell>
							<div className="flex w-fit mx-auto justify-center items-center gap-[8px] px-[8px] rounded-[4px] border border-solid border-[#e6e6e6]">
								<div style={{ 
									backgroundColor: accrual.status === 'Pending' ? '#FDE400' : accrual.status === 'Completed' ? '#00B2C8' : 'red',
									opacity: accrual.opacity ? 0.3 : 1
								}} 
								className="h-[6px] w-[6px] rounded-full bg-black"></div>
								<p className="text-[10px]">
									{accrual.status}
								</p>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>

		<div className={styles.button_border}>
			<ButtonBorder
				text='Prev'
			></ButtonBorder>
			<ButtonBorder
				text='Next'
			></ButtonBorder>
		</div>
	</div>
}