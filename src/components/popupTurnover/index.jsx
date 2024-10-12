import styles from './popup_turnover.module.scss'
import cn from 'classnames'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import document_download from "@/ui/icons/document_download.svg";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
	TableFooter,
} from "@/shadcn/ui/table"


const accruals = [
	{turnover: '1000', bonus: '30', investment: '250'},
	{turnover: '2500', bonus: '75', investment: '500'},
	{turnover: '5000', bonus: '150', investment: '1000'},
	{turnover: '10000', bonus: '300', investment: '2500'},
	{turnover: '25000', bonus: '750', investment: '5000'},
	{turnover: '50000', bonus: '1500', investment: '10000'},
	{turnover: '100000', bonus: '3000', investment: '25000'},
	{turnover: '250000', bonus: '7500', investment: '50000'},
	{turnover: '500000', bonus: '1500', investment: '100000'},
	{turnover: '1000000', bonus: '30000', investment: '250'},
]



import {
  Dialog,
  DialogContent,
  DialogTrigger,
	DialogClose,
} from "@/shadcn/ui/dialog"

export const PopupTurnover = () => {
	const [ plan, setPlan ] = useState('468x60')
	const [open, setOpen] = useState(false);

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


	return <Dialog modal={false} open={open} onOpenChange={setOpen}>
		<DialogTrigger asChild>
			<div className="flex justify-center items-center cursor-pointer gap-[8px] px-[8px] rounded border-solid border border-[#e6e6e6]">
				<Image src={document_download} width={16} height={16} alt='icon'></Image>
				<p className="text-[10px]">
					Promo materials
				</p>
			</div>
		</DialogTrigger>
		<DialogContent className="max-w-[832px] flex-shrink popup_absolute">
			<div className={styles.body}>
				<div className="flex justify-between items-center self-stretch   ">
					<p className="  text-[14px] font-[400] text-black">Bonuses for Turnover</p>
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
				<p className="self-stretch     ">
					<span className="self-stretch    text-[12px]   ">
						When you reach a turnover, bonuses are automatically credited to your USDT wallet in the
						“Wallets” section
					</span>
					<br />
					<br />
					<span className="self-stretch    text-[10px] italic  ">
						*The turnover is calculated according to the following principle: 1 Lvl 100% to the turnover
						from the amount invested by the partner; 2-3 lvl = 50% 3-10 lvl = 10% to the turnover
					</span>
				</p>

				<div className="bg-[#E6E6E6] w-full h-[1px] flex-shrink-0"></div>
				
				<div className='flex-grow'>
					<Table>
						<TableHeader>
							<TableRow className={styles.tablerow}>
								<TableHead>L$ TurnoverVL</TableHead>
								<TableHead>USDT Bonus</TableHead>
								<TableHead>$ Personal investment</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{accruals.map((item, index) => (
								<TableRow className={styles.tablerow} key={index}>
									<TableCell><p className='text-[12px]'>{item.turnover}</p></TableCell>
									<TableCell><p className='text-[12px]'>{item.turnover}</p></TableCell>
									<TableCell><p className='text-[12px]'>{item.turnover}</p></TableCell>
									
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</DialogContent>
	</Dialog>
}