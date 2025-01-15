'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadcn/ui/accordion';
import styles from './help_center.module.scss'
import cn from "classnames";
import {helpList} from '@/types/helpType'
import { useState } from 'react';
import arrow_grey from "@/ui/icons/arrow_grey.svg";
import Image from 'next/image';
import { Button } from '@/components/button';

const defaultText = {
	title: 'Help Center',
	text: 'Lorem ipsum dolor sit amet consectetur. Enim leo nisl diam sollicitudin placerat aenean nunc. Blandit at sit cum pharetra sed. Accumsan hac arcu sed gravida. Imperdiet scelerisque mauris eget in.'
}


export default function HelpCenter() {
	const [ current, setCurrent ] = useState(defaultText)
	const [ value, setValue ] = useState('')
	const [ next, setNext ] = useState()
	const [ prev, setPrev ] = useState()
	const [ childNext, setChildNext ] = useState()


	function handleClick(item) {
			setCurrent(item)

			for(let i = 0; i < helpList.length; i++) {

				if (helpList[i].key === item.key) {
					setValue(helpList[i].key)
					setNext(helpList[i + 1])
					setPrev(helpList[i - 1])
					setChildNext(null)
				}
				if(item.key === current.key && helpList[i].key === item.key) {
					setCurrent(defaultText)
					setNext(null)
					setPrev(null)
					setChildNext(null)
					setValue('')
				} 
	
				const child = helpList[i].childs
				if (child) {
					for(let j = 0; j < child.length; j++) {
						if (child[j] === item) {
							setNext(helpList[i + 1])
							setPrev(helpList[i - 1])
							setChildNext(child[j + 1])
							setValue(helpList[i].key)
						}
						if (child[j].key === current.key && item.key === helpList[i].key) {
							setCurrent(defaultText)
							setNext(null)
							setPrev(null)
							setChildNext(null)
							setValue('')
						}
					}
				}
			}
	}

	return <div className="main _container">
		<div className={styles.title}>
			<Button
				text='Help Center'
			></Button>
		</div>

		<div className={styles.body}>
			<div className={styles.nav}>
	
				<Accordion type="single" collapsible value={value} onValueChange={setValue}>
					<div className={cn(styles.advantages, "_container")}>
						{helpList.map((item, index) => {
							return <AccordionItem className={styles.item} key={item.key} value={item.key}>
							<div onClick={() => handleClick(item)}>
								<AccordionTrigger className={styles.trigger}>
									<div className={styles.box}>
										<p className={styles.text}>{item.title}</p>
									</div>
								</AccordionTrigger>
							</div>
							<AccordionContent>
								<p className='pb-[8px]'>{item.text || ''}</p>
								{item.childs && item.childs.map((child, childsIndex) => <p className={cn(styles.child, {[styles.active]: child === current})} key={childsIndex} onClick={() => handleClick(child)}>{child.title}</p>)}
							</AccordionContent>
						</AccordionItem>
						})
						}
					</div>
				</Accordion>
			</div>
	
	
	
			<div className={styles.description}>
	  <p className="text-[32px]  text-[#303030]">{current.title}</p>
	  <p className="text-[16px] font-light  text-black">{current.text}</p>
	  {childNext && <div onClick={() => handleClick(childNext)} className="flex cursor-pointer justify-between items-center px-[16px] py-[8px] rounded-[6px] border border-solid border-[#cecece]">
	    <div className="flex flex-col gap-[8px]">
	      <p className="text-[12px] text-[#717171]">Next</p>
	      <p className="text-[16px]  text-black">{childNext.title}</p>
	    </div>
	    <Image src={arrow_grey} width={10} height={10} alt='icon'></Image>
	  </div>}
	  <div className="flex      gap-10">
	    {prev && <div onClick={() => handleClick(prev)} className="cursor-pointer flex flex-1 justify-between items-center px-[16px] py-[8px] rounded-[6px] border border-solid border-[#cecece]">
			<Image className={styles.left} src={arrow_grey} width={10} height={10} alt='icon'></Image>
	      <div className="flex flex-col  items-end    gap-2">
	        <p className="text-[12px] text-[#717171]">
	          Previous
	        </p>
	        <p className="text-right text-[16px]  text-black">{prev.title}</p>
	      </div>
	    </div>}
	    {next && <div onClick={() => handleClick(next)} className="cursor-pointer flex flex-1 justify-between items-center px-[16px] py-[8px] rounded-[6px] border border-solid border-[#cecece]">
	      <div className="flex flex-col gap-[8px]">
	        <p className="text-[12px] text-[#717171]">
	          Next
	        </p>
	        <p className="  text-[16px]  text-black">{next.title}</p>
	      </div>
	      <Image src={arrow_grey} width={10} height={10} alt='icon'></Image>
	    </div>}
	  </div>
	</div>
		</div>




	</div>
}