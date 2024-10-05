'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import styles from './recovery.module.scss'
import cn from 'classnames'
import logo_icon from "@/ui/icons/logo_icon.svg";
import { Switch } from "@/shadcn/ui/switch";
import eye from '@/ui/icons/eye.svg'
import domain from "@/ui/icons/domain.png";
import lock from "@/ui/icons/lock.png";
import auth from "@/ui/icons/auth.png";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shadcn/ui/form"
import { Input } from "@/shadcn/ui/input"
import Link from 'next/link';


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
	email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(4, { message: 'Please enter the correct password' }),
	code: z.string().min(4, { message: 'Please enter the correct code' }),
})


export default function Recovery() {
	const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };


  function onSubmit(data: z.infer<typeof FormSchema>) {}
	

	return <div className="main _container">
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='mx-auto max-w-[443px] border border-solid border-[#c9cccc] rounded-[6px]'>
					<div className="mx-auto max-w-[340px] flex flex-col  items-center    gap-[24px] px-[40px] py-[40px]">
						<Image src={logo_icon} width={40} height={34} alt='logo'></Image>
						<p className=" text-[28px] text-center text-black">Recovery</p>
						<p className=" text-[16px] text-center">
							<span className=" text-[16px]  text-center text-black">
								Back to Login
							</span>
							<Link href='/registration' className="text-nowrap ml-[4px] underline cursor-pointer text-[16px] text-center text-[#00b2c8]">Login</Link>
						</p>
						<div className={styles.input}>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="w-full rounded-[6px] border border-[#a09997] border-solid">
												<Input placeholder="E-mail/Username" {...field} />
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<button className={styles.button}><p>Send letter</p></button>
					</div>
				</div>
			</form>
		</Form>



		<div className="flex flex-col items-center gap-[24px]">
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
	
}






