'use client'

import styles from './profile.module.scss'
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
import { Input } from '@/shadcn/ui/input';
import { Suspense } from 'react';


export default function Profile() {
	const pathname = usePathname()
	const params = pathname.split('/')
	const activeLinks = params.filter((item, index) => index !== 0);

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



		<h2 className='text-[16px] uppercase text-[#828282] font-[400]'>Personal information</h2>



		<div className={styles.personal}>
			<div className="flex flex-col  items-center self-stretch  overflow-hidden gap-[32px] px-[32px] py-[24px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<div className="w-full aspect-square max-w-[317px]">
					<Image src={person} width={0} height={0} sizes="100vw" style={{ width: '100%', objectFit: 'cover', height: 'auto' }} alt='icon'></Image>
				</div>

				<div className="flex justify-between gap-[24px] self-stretch  ">
					<div className="flex cursor-pointer  items-center flex-grow gap-[16px] px-[16px] h-[42px] rounded-[6px]  border border-solid border-[#e6e6e6]">
						<Image src={upload} width={24} height={24}alt='icon'></Image>
						<p className="text-[14px]">Upload</p>
					</div>

					<div className="flex cursor-pointer items-center flex-grow gap-[16px] px-[16px] h-[42px] rounded-[6px]  border border-solid border-[#e6e6e6]">
						<Image src={trash} width={24} height={24}alt='icon'></Image>
						<p className="text-[14px]">Remove</p>
					</div>
				</div>
			</div>


			<div className="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-[40px] p-[32px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<div className="flex flex-col   self-stretch   gap-[24px]">
					<div className="flex  items-center self-stretch flex-wrap  gap-[24px]">
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Full Name</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" placeholder="Test Name" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Backup mail</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

					<div className="flex  items-center self-stretch   gap-[24px]">
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Phone number</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Telegram</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>
					</div>

					<div className="flex  items-center self-stretch   gap-[24px]">
						<div className={styles.input}>
							<p className="text-[14px] font-[400]">Country</p>
							<div className="w-full rounded-[6px] border-[1px] border-solid border-[#cecece]">
								<Input type="text" />
							</div>
						</div>

						<div className={cn(styles.input, styles.languages)}>
							<p className="text-[14px] font-[400]">Language</p>
							<Suspense fallback={<div>Загрузка...</div>}>
								<Languages></Languages>
							</Suspense>
						</div>
					</div>
				</div>


				<div className="flex gap-[24px] items-center justify-center flex-1">
					<div className={styles.button_border}>
						<p>Cancel</p>
					</div>
					<div className={styles.button_personal}>
						<ButtonBlue
							text='Save changes'
						></ButtonBlue>
					</div>
				</div>
			</div>
		</div>



		<h2 className='text-[16px] uppercase text-[#828282] font-[400]'>Security settings</h2>


		<div className={styles.cards}>
			<div className="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<Image src={key} width={60} height={60} alt='icon'></Image>
				<p className="  text-[16px] font-[400]  ">Change Password</p>
				<p className="self-stretch    text-[12px]  text-center ">
					Use a unique password to protect your account
				</p>
				<div className={styles.button}>
					<ButtonBlue
						text='Change'
					></ButtonBlue>
				</div>
			</div>

			<div className="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<Image src={shield_security} width={60} height={60} alt='icon'></Image>
				<p className="  text-[16px] font-[400]  ">2FA Authentification</p>
				<p className="self-stretch    text-[12px]  text-center ">
				An additional layer to protect your account and funds
				</p>
				<div className={styles.button}>
					<ButtonBlue
						text='Setup'
					></ButtonBlue>
				</div>
			</div>

			<div className="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<Image src={lock} width={60} height={60} alt='icon'></Image>
				<p className="  text-[16px] font-[400]  ">PIN Code</p>
				<p className="self-stretch    text-[12px]  text-center ">
				Create a four-digit PIN code that will be requested when withdrawing funds
				</p>
				<div className={styles.button}>
					<ButtonBlue
						text='Setup'
					></ButtonBlue>
				</div>
			</div>
		</div>


		<h2 className='text-[16px] uppercase text-[#828282] font-[400]'>Wallets and notifications</h2>


		<div className={styles.cards}>
			<div className="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<Image src={card_edit} width={60} height={60}  alt='icon'></Image>
				<p className="  text-[16px] font-[400]  ">Wallets</p>
				<p className="self-stretch    text-[12px]  text-center ">
				Add your personal wallets for quick withdrawals from the platform.
				</p>
				<div className={styles.button}>
					<ButtonBlue
						text='SetuAdd wallet addressesp'
					></ButtonBlue>
				</div>
			</div>

			<div className="flex flex-col justify-between items-center self-stretch flex-grow  overflow-hidden gap-[16px] p-[30px] rounded-[6px]  border border-solid border-[#e6e6e6]">
				<Image src={notification_bing} width={60} height={60}  alt='icon'></Image>
				<p className="  text-[16px] font-[400]  ">Notifications</p>
				<p className="self-stretch    text-[12px]  text-center ">
				Notifications
				</p>
				<div className={styles.button}>
					<ButtonBlue
						text='Configure'
					></ButtonBlue>
				</div>
			</div>
		</div>



		<div className={styles.bottom}>
			<div className="flex flex-col  items-center flex-grow  gap-[40px]">
				<Image src={key} width={60} height={60}  alt='icon'></Image>
				<div className="flex flex-col  items-center self-stretch   ">
					<p className="self-stretch    text-base text-center ">
						Change Your Password
					</p>
					<p className="self-stretch    text-[14px]  text-center ">
						Use a unique password to protect your account
					</p>
				</div>
				<div className="flex flex-col   self-stretch   gap-[24px]">
					<div className="flex  items-center self-stretch flex-wrap  gap-[24px]">
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
	</div>
}