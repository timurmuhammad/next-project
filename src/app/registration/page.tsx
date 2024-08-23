'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import styles from './registration.module.scss'
import cn from 'classnames'
import logo_icon from "@/ui/icons/logo_icon.svg";
import trustpilot from "@/ui/icons/trustpilot.svg";
import { Switch } from "@/shadcn/ui/switch";
import eye from '@/ui/icons/eye.svg'
import media_screen_mobile from "@/ui/images/media_screen_mobile.png";
import domain from "@/ui/icons/domain.png";
import lock from "@/ui/icons/lock.png";
import auth from "@/ui/icons/auth.png";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import group_lines from "@/ui/images/group_lines.svg";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shadcn/ui/form"
import { Input } from "@/shadcn/ui/input"
import Link from 'next/link';
import { Languages } from '@/components/languages';


const FormSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters."}),
	email: z.string().email({ message: 'Please enter a valid email address' }),
	country: z.string().min(4, { message: 'Please enter the correct country' }),
  password: z.string().min(4, { message: 'Please enter the correct password' }),
	repeatPassword: z.string().min(4, { message: 'Please enter the correct password' }),
	code: z.string().min(4, { message: 'Please enter the correct code' }),
})


export default function Login() {
	const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };


  function onSubmit(data: z.infer<typeof FormSchema>) {}

	return <div className='relative'>
		<div className={styles.background}>
		</div>

		<div className="main _container">
			<div className={styles.inner}>
				<Form {...form}>
					<form className='flex-1 w-full' onSubmit={form.handleSubmit(onSubmit)}>
						<div className='w-full mx-auto max-w-[540px] border border-solid border-[#c9cccc] flex-1 rounded-[6px]'>
							<div className="mx-auto w-full flex-grow-1 max-w-[430px] flex flex-col  items-center    gap-[26px] px-[40px] py-[40px]">
								<p className=" text-[28px] text-center text-black">Create your account</p>
								<p className=" text-[16px] text-center">
									<span className=" text-[16px]  text-center text-black">
										Already have an account?
									</span>
									<Link href='/login' className="text-nowrap ml-[4px] underline cursor-pointer text-[16px] text-center text-[#00b2c8]">Login</Link>
								</p>
								<div className={styles.country}>
									<div className={styles.input}>
										<FormField
											control={form.control}
											name="country"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<div className="w-full rounded-[6px] border border-[#a09997] border-solid">
															<Input placeholder="Country" {...field} />
														</div>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
		
									<div className={styles.lang}>
										<p className='text-[16px] text-black'>Language</p>
										<Languages></Languages>
									</div>
								</div>
		
								<div className={styles.form}>
									<div className={styles.input}>
										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<div className="w-full rounded-[6px] border border-[#a09997] border-solid">
															<Input placeholder="E-mail" {...field} />
														</div>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
		
									<div className={styles.input}>
										<FormField
											control={form.control}
											name="username"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<div className="w-full rounded-[6px] border border-[#a09997] border-solid">
															<Input placeholder="Username" {...field} />
														</div>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
								<div className='w-full'>
									<div className={styles.input}>
										<FormField
											control={form.control}
											name="password"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<div className="rounded-[6px] relative border border-[#9897a0] border-solid">
															<Input type={showPassword ? 'text' : 'password'} className='pr-[40px]' placeholder="Password" {...field} />
															<div className={cn(styles.password, {[styles.active]: showPassword})} onClick={() => togglePasswordVisibility()} ><Image src={eye} width={18} height={13} alt='logo'></Image></div>
														</div>
													</FormControl>
													<div className='flex gap-[12px] mt-[7px] items-center'>{Array.from({ length: 5 }, (_, index) => <div className="flex-1 h-[4px] bg-[#dfdfdf]"></div>)}</div>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
		
								<p className='text-[14px] font-light text-[#848484]'>For your security, use 8 or more characters with a mix of letters, numbers and symbols</p>
		
								<div className={styles.input}>
									<FormField
										control={form.control}
										name="repeatPassword"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<div className="rounded-[6px] border border-[#9897a0] border-solid">
														<Input type='password' placeholder="Repeat Password" {...field} />
													</div>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<button className={styles.button}><p>Sign Up</p></button>
		
								<div className="flex w-full flex-1 justify-between items-center gap-[10px]">
									<p className=" text-[14px] text-black text-wrap">
										
										I Accept the
						
										<Link href='#' className="mx-[4px] underline cursor-pointer text-[14px] text-center  text-[#00b2c8]">Terms of Use</Link>
									
										and
								
										<Link href='#' className="mx-[4px] underline cursor-pointer text-nowrap text-[14px] text-center  text-[#00b2c8]">Privacy Policy</Link>
									</p>
		
									<Switch></Switch>
								</div>
							</div>
						</div>
					</form>
				</Form>
		
		
		
	
	
	
	
				<div className={styles.right}>
					<Image src={logo_icon} width={75} height={64} alt='icon'></Image>
	
					<div className={styles.trustpilot}><Image src={trustpilot} width={80} height={40} alt='icon'></Image></div>
	
					<Languages></Languages>
	
					<div className={styles.mobile}>
						<Image className='mx-auto' src={media_screen_mobile} width={188} height={264} alt='icon'></Image>
		
						<div className={styles.card}>
							<p className="  text-[16px] font-light  text-black">
								Always make sure:
							</p>
							<div className={styles.list}>
								<div className="flex text-[14px] font-light items-center gap-[8px]">
									<Image src={domain} width={35} height={35} alt='icon'></Image>
									<div>
										<p>
											The domain is
										</p>
										<p>website.com</p>
									</div>
								</div>
								<div className="flex text-[14px] font-light items-center gap-[8px]">
									<Image src={lock} width={35} height={35} alt='icon'></Image>
									<div>
										<p>The page is</p>
										<p>encrypted with https</p>
									</div>
								</div>
								<div className="flex text-[14px] font-light items-center gap-[8px]">
									<Image src={auth} width={35} height={35} alt='icon'></Image>
									<div>
										<p>
											You use 2FA
										</p>
										<p>(multifactor auth)</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center items-center gap-12 text-[14px]">
						<p>
							Privacy Policy
						</p>
						<p>
							User Agreement
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
}