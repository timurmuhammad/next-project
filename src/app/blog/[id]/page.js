'use client'

import styles from './post.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { ButtonBorder } from '@/components/buttonBorder';
import { media, pinned, popular, latestPosts } from '@/types/blogType'
import { PostDetails } from '@/components/postDetails';
import Link from 'next/link';

export default function( {params} ) {
	const post = media.find((item, index) => item.id === params.id)

	return <div className={cn(styles.body, 'main _container')}>
		<div className="flex flex-col  items-center max-w-[800px] mx-auto  gap-[32px]">
			<PostDetails
				data={post.data}
				viewsAmount={post.views}
			></PostDetails>
			<h1 className="max-w-[585px] text-[24px]  text-black text-center">
				Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
			</h1>
			<div className="opacity-30 w-full rounded-[10px] bg-[#82d3dd] aspect-[800/449]" />
			<p className="text-{20px} font-light  ">
				Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet
				consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor
				sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem
				ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem
				Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet
				consectetur.
			</p>

			<Link className={styles.button} href='/blog'>
				<ButtonBorder
					text='Back to Blog'
				></ButtonBorder>
			</Link>
		</div>
	</div>
}