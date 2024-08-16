'use client'

import * as React from "react"
import Link from "next/link"
import cn from "classnames" 
import styles from './botlist.module.scss'
import { Product } from "@/components/product"
import { goods } from "@/types/products";
import { NumericalIndicators } from "@/components/numericalIndicators";
import { Typography } from "@/components/typography";
import Image from "next/image";
import lines_botlist from "@/ui/images/lines_botlist.svg";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shadcn/ui/breadcrumb"
import { ButtonBlue } from "@/components/buttonBlue"

const items = [
  { href: "#", label: "Home" },
  { href: "#", label: "Copy Trading" },
  { href: "#", label: "Bot list" },
]

// export const metadata = {
// 	title: 'Bot list',
// 	description: ''
// }

export default function BotList() {

	return <div className={styles.main}> 	
		<div className="relative w-full">
			<div className={cn("_container", styles.top)}>
				<Typography
					size="h2"
					title="The best copy trading bots on the market from Company"
					text="Multiple strategies to diversify and stabilize your investments"
				></Typography>
	
				<NumericalIndicators></NumericalIndicators>
			</div>

			<div className={styles.background}><Image src={lines_botlist} width={1440} height={1290} alt="img"></Image></div>
		</div>



    <div className={cn("_container", styles.breadcrumb)}>
    	<Breadcrumb>
	      <BreadcrumbList>
	        <BreadcrumbItem>
	          <BreadcrumbLink>
	            <Link href="/">Home</Link>
	          </BreadcrumbLink>
	        </BreadcrumbItem>
	        <BreadcrumbSeparator />
	        <BreadcrumbItem>
	          <BreadcrumbLink>
	            <Link href="/copytrading">Copy Trading</Link>
	          </BreadcrumbLink>
	        </BreadcrumbItem>
	        <BreadcrumbSeparator />
	        <BreadcrumbItem>
	          <BreadcrumbPage>Bot list</BreadcrumbPage>
	        </BreadcrumbItem>
	      </BreadcrumbList>
	    </Breadcrumb>
    </div>



		<div className={cn("_container", styles.list)}>
			{goods.map((item, index) => (
				<Product item={item} key={index}>
					
				</Product>
			))}
		</div>

		<div className="_container">
			<ButtonBlue
				text='Back to Copy Trading page'
			></ButtonBlue>
		</div>
	</div>
}
