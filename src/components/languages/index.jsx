import styles from './languages.module.scss';
import en from '@/ui/icons/en.svg';
import nl from "@/ui/icons/nl.png";
import es from "@/ui/icons/es.png";
import de from "@/ui/icons/de.png";
import fr from "@/ui/icons/fr.png";
import pg from "@/ui/icons/pg.png";
import zh from "@/ui/icons/zh.png";
import jp from "@/ui/icons/jp.png";
import id from "@/ui/icons/id.png";
import cz from "@/ui/icons/cz.png";
import hi from "@/ui/icons/hi.png";
import hu from "@/ui/icons/hu.png";


import Image from 'next/image';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/shadcn/ui/dropdown-menu"
import { useEffect, useState } from 'react';


export function Languages() {

  return (
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<div className={styles.body}>
							<Image src={en} alt='icon' width={25} height={18}></Image>
							<p>EN</p>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-[186px] my-[8px] mr-[16px]'>
						<div className="flex  flex-wrap  justify-between gap-[16px] p-[16px] rounded-[6px] bg-neutral-50 border border-solid border-[#d9d9d9]">
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={en}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">EN</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={nl}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">NL</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={es}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">ES</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={de}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">DE</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={fr}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">FR</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={pg}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">PH</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={zh}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">ZH</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={jp}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">JP</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={id}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">ID</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={cz}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">CZ</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={hi}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">HI</p>
							</DropdownMenuItem>
							<DropdownMenuItem className={styles.lang}>
								<Image
									src={hu}
									width={25}
									height={17}
									alt='icon'
									className="flex-grow-0 flex-shrink-0"
								></Image>
								<p className=" text-[16px]  text-black">HU</p>
							</DropdownMenuItem>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
  )
}