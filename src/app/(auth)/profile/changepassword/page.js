'use client'

import styles from './changepassword.module.scss'
import cn from 'classnames'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shadcn/ui/breadcrumb';
import Link from "next/link";
import { tabs } from '@/types/auth';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import person from "@/ui/icons/person.png";
import upload from "@/ui/icons/upload.svg";
import trash from "@/ui/icons/trash.svg";
import { Languages } from '@/components/languages';
import { ButtonBlue } from '@/components/buttonBlue';
import key from "@/ui/icons/key.svg";
import shield_security from "@/ui/icons/shield_security.svg";
import lock from "@/ui/icons/lock.svg";
import card_edit from "@/ui/icons/card_edit.svg";
import notification_bing from "@/ui/icons/notification_bing.svg";
import authentification from "@/ui/images/authentification.png";
import copy from "@/ui/icons/copy.svg";
import { Input } from '@/shadcn/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shadcn/ui/input-otp"
import { Switch } from '@/shadcn/ui/switch';
import { useState } from 'react';

export default function ChangePassword() {
	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);
	const [open, setOpen] = useState(true)
	const [open1, setOpen1] = useState(true)
	const [open2, setOpen2] = useState(true)
	const [open3, setOpen3] = useState(true)
	const [open4, setOpen4] = useState(true)
	const [open5, setOpen5] = useState(true)

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




		<div className={styles.top}>
			<div className="flex flex-col  items-center flex-grow  gap-[40px]">
				<Image src={key} width={60} height={60}  alt='icon'></Image>
				<div className="flex flex-col  items-center self-stretch   ">
					<p className="self-stretch    text-[16px] text-center ">
						Change Your Password
					</p>
					<p className="self-stretch    text-[14px]  text-center ">
						Use a unique password to protect your account
					</p>
				</div>
				<div className="flex flex-col   self-stretch   gap-[24px]">
					<div className="flex self-stretch gap-[24px]">
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">New Password</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Repeat New Password</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

					<div className={styles.input}>
						<p className="text-[14px] font-[400]">Current Password</p>
						<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
							<Input type="text" />
						</div>
					</div>
				</div>

				<div className={styles.button_personal}>
					<ButtonBlue
						text='Change'
					></ButtonBlue>
				</div>
			</div>

			<div className="flex flex-col justify-center  self-stretch flex-grow  gap-[16px] p-[16px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<h3 className="  text-[14px]  text-black">Additional Information</h3>
				<p className="self-stretch    text-[12px]   ">
						Creating a strong and secure password is crucial for protecting your account and funds. Here
						are some tips:
					</p>
				<ul className={styles.ul}>
					<li className="self-stretch    text-[12px]   ">
						Use a Mix of Characters Include uppercase letters, lowercase letters, numbers, and special
						characters (e.g., !, @, #, $)
					</li>
					<li className="self-stretch    text-[12px]   ">
						Avoid Common Words: Don't use easily guessable words or phrases like "password" or "123456".
					</li>
					<li className="self-stretch    text-[12px]   ">
						Aim for at least 12-16 characters.
					</li>
					<li className="self-stretch    text-[12px]   ">
						Don't use easily accessible information like your name, birthdate, or address.
					</li>
					<li className="self-stretch    text-[12px]   ">
						Use a different password for each of your accounts.
					</li>
					<li className="self-stretch    text-[12px]   ">
						Password Manager: Use a password manager to generate and store complex passwords.
					</li>
				</ul>
			</div>
		</div>



		<div className="flex justify-center flex-col items-center self-stretch   overflow-hidden gap-[24px] px-[16px] py-[48px] rounded-[6px]  border border-solid border-[#e6e6e6]">
			<Image src={lock} width={60} height={60} alt='icon'></Image>
			<p className="text-[16px] font-[400]  text-center">PIN Code</p>
			<p className="self-stretch    text-[12px]  text-center max-w-[230px] mx-auto">
				Create a four-digit PIN code that will be requested when withdrawing funds
			</p>
			<div className="flex flex-col items-center self-stretch flex-grow gap-[16px] flex-1">
				<p className="text-[14px] text-center font-[400]">Enter PIN Code</p>
				<InputOTP maxLength={4}>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
						<InputOTPSlot index={3} />
					</InputOTPGroup>
				</InputOTP>
			</div>
			<div className="flex flex-col items-center self-stretch flex-grow gap-[16px] flex-1">
				<p className="text-[14px] text-center font-[400]">Repeat PIN Code</p>
				<InputOTP maxLength={4}>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
						<InputOTPSlot index={3} />
					</InputOTPGroup>
				</InputOTP>
			</div>
			<div className={styles.button_personal}>
				<ButtonBlue
					text='Activate'
				></ButtonBlue>
			</div>
		</div>




		<div className={styles.block}>
			<div className="flex flex-col  items-center flex-grow  gap-[40px]">
				<Image src={shield_security} width={60} height={60} alt='icon'></Image>
				<div className="flex flex-col  items-center self-stretch   ">
					<p className="self-stretch  font-[400]  text-[16px] text-center ">
						2FA Authentification
					</p>
					<p className="self-stretch    text-[14px]  text-center ">
						An additional layer to protect your account and funds
					</p>
				</div>
				<Image src={authentification} width={100} height={100} alt='img'></Image>
				<p className="self-stretch   text-[16px] text-center ">
					Open the 2FA app and scan the QR code or enter it manually
				</p>
				<div className={styles.copy}>
					<div className="flex justify-center items-center flex-grow flex-shrink py-[8px] px-[16px] w-full">
					<p className="flex-grow flex-shrink text-[20px] text-center text-[#333]">6HFDK24JSH</p>
					</div>
					<div className="flex justify-center cursor-pointer   items-center self-stretch px-[16px] border-l  border-solid border-[#cecece]">
						<Image className=' basis-[24px] ' src={copy} width={24} height={24} alt='icon'></Image>
					</div>
				</div>
				<div className={styles.input}>
					<p className="text-[14px] font-[400]">Enter 6-digit code from the app</p>
					<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
						<Input type="text" />
					</div>
				</div>
				<div className={styles.button_personal}>
					<ButtonBlue
						text='Activate'
					></ButtonBlue>
				</div>
			</div>



			<div className="flex flex-col justify-center  flex-grow  gap-[16px] p-[16px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<h3 className="  text-[14px]  text-black">Tutorial for activation</h3>
				<ul className={styles.list_counter}>
					<li className="self-stretch    text-[12px]   ">
					Download or open the Authenticator app from App store or Play market
					</li>
					<li className="self-stretch    text-[12px]   ">
					Open the Authenticator app and scan the QR code or enter it manually
					</li>
					<li className="self-stretch    text-[12px]   ">
					Enter 6-digit code generated by the application into field to verify
					</li>
					<li className="self-stretch    text-[12px]   ">
					Click “Activate” Button
					</li>
				</ul>
				<p className="self-stretch italic text-[12px]">
				Please keep the provided backup codes in a safe place.
					</p>
			</div>
		</div>


		<div className={styles.wallets}>
				<Image src={card_edit} width={60} height={60}  alt='icon'></Image>
				<div className="flex flex-col  items-center self-stretch   ">
					<p className="self-stretch  font-[400]  text-[16px] text-center ">
					Wallets
					</p>
					<p className="self-stretch    text-[14px]  text-center ">
					Add your personal wallets for quick withdrawals from the platform.
					</p>
				</div>
				<div className="flex flex-col   self-stretch   gap-[24px]">
					<div className={styles.group}>
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Bitcoin</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" placeholder="Test" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">USDT TRC20</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">ETH ERC-20</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

					<div className={styles.group}>
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Bitcoin</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" placeholder="Test" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">USDT</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">ETH</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

					<div className={styles.group}>
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Bitcoin</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" placeholder="Test" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">USDT</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">ETH</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

					<div className={styles.group}>
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Bitcoin</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" placeholder="Test" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">USDT</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">ETH</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

					<div className={styles.group}>
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Bitcoin</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" placeholder="Test" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">USDT</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">ETH</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

				<div className={styles.button_personal}>
					<ButtonBlue
						text='Save'
					></ButtonBlue>
				</div>
				</div>
			</div>




		<div className={styles.bottom}>
			<Image src={notification_bing} width={60} height={60} alt='icon'></Image>
			<div className="flex flex-col  items-center self-stretch   ">
				<p className="self-stretch  font-[400]  text-[16px] text-center ">
					Notifications
				</p>
				<p className="self-stretch    text-[14px]  text-center ">
					Configure the notifications you want to receive from Company
				</p>
			</div>

			<div className={styles.list_switch}>
				<div className={styles.switch}>
					<p className="  text-[14px] text-center  font-[400]">
						Login from new device or IP
					</p>
					<Switch  checked={open} onClick={() => setOpen(!open)}></Switch>
				</div>
				<div className={styles.switch}>
					<p className="  text-[14px] text-center  font-[400]">
					WIthdrawal notifications
					</p>
					<Switch checked={open1} onClick={() => setOpen1(!open1)}></Switch>
				</div>
				<div className={styles.switch}>
					<p className="  text-[14px] text-center  font-[400]">
					Replenishment notifications
					</p>
					<Switch checked={open2} onClick={() => setOpen2(!open2)}></Switch>
				</div>
			</div>

			<div className={styles.list_switch}>
				<div className={styles.switch}>
					<p className="  text-[14px] text-center  font-[400]">
					New referral investments
					</p>
					<Switch checked={open3} onClick={() => setOpen3(!open3)}></Switch>
				</div>
				<div className={styles.switch}>
					<p className="  text-[14px] text-center  font-[400]">
					Promo Letters
					</p>
					<Switch checked={open4} onClick={() => setOpen4(!open4)}></Switch>
				</div>
				<div className={styles.switch}>
					<p className="  text-[14px] text-center  font-[400]">
					Completion of the investment plan
					</p>
					<Switch checked={open5} onClick={() => setOpen5(!open5)}></Switch>
				</div>
			</div>

			<div className={styles.button_personal}>
					<ButtonBlue
						text='Save'
					></ButtonBlue>
				</div>
		</div>
	</div>
}