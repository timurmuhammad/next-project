'use client'

import React from 'react'
import Image from 'next/image'
import arrowWhite from '@/ui/icons/arrow_white.svg';

type Props = {
	text: string
}

export const ArrowButton: React.FC<Props> = ({ text }) => {
	return <button className='rounded ease-in-out inline-flex w-fit h-[46px] items-center hover:bg-[#00b2c8] hover:text-[#fff] hover:shadow-[0_0_11px_0_#00b2c8]'>
		<div className="flex items-center justify-center rounded h-full bg-[#00b2c8] w-[52px]">
			<Image src={arrowWhite} alt='icon' width={21} height={16}></Image>
		</div>
		<p className='font-normal text-[20px] px-[10px]'>{text}</p>
	</button>
}