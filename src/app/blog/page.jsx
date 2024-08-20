'use client'
import styles from './blog.module.scss'
import views from "@/ui/icons/views.svg";
import { pinned, popular, media, latestPosts } from '@/types/blogType'
import { Typography } from '@/components/typography'
import Image from 'next/image'
import { ButtonBorder } from '@/components/buttonBorder';
import { Carousel, CarouselContent, CarouselItem } from '@/shadcn/ui/carousel';
import { useEffect, useState } from 'react'
import cn from "classnames";



export default function Security() {
	const pagination = Math.ceil(media.length / 3)
	const paginationLg = Math.ceil(media.length / 2)
	const paginationMd = Math.ceil(media.length / 1)
	const [ currentSlide, setCurrentSlide ] = useState(0)
	const [ currentSlidesshow, setCurrentSlidesshow ] = useState(0)

	const [md, setMd] = useState(
    window.matchMedia("(max-width: 768px)").matches
  )
	const [lg, setLg] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMd( e.matches ));

		window
    .matchMedia("(max-width: 1024px)")
    .addEventListener('change', e => setLg( e.matches ));
  }, []);


	return <div className="main _container">
		<div className="text-center">
			<Typography
				size='h1'
				title='Blog and News'
			></Typography>
		</div>




		<div className={styles.body}>
			<div className="flex flex-col gap-[16px]">
				<p className={styles.subtitle}>
					Pinned
				</p>
				<div className={styles.image} />
				<div className="flex gap-[100px]" />
				<p className=" text-[24px]  text-black font-[400]">
					Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
				</p>
				<p className="text-[16px] font-light">
					Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Lorem Ipsum Lorem ipsum dolor sit amet
					consectetur. Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
				</p>
				<div className={styles.post_details}>
					<p className="  text-[14px] font-extralight  text-black">
						01 Jun 2024
					</p>
					<div className="flex  items-center   gap-[8px]">
						<Image src={views} width={19} height={14} alt='icon'></Image>
						<p className="  text-[14px] font-extralight text-center text-black">
							244
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-[24px]">
				<div className="flex flex-col justify-center      gap-[16px]">
					<p className={styles.subtitle}>
						Popular
					</p>
					<div className={styles.list}>
						<div className="flex flex-col flex-1    gap-[16px]">
							<div className={styles.image} />
							<div className="flex flex-col       gap-[8px]">
								<p className="text-[20px]  text-black font-[400]">
									Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
								</p>
								<div className={styles.post_details}>
									<p className="  text-[14px] font-extralight  text-black">
										01 Jun 2024
									</p>
									<div className="flex  items-center   gap-[8px]">
										<Image src={views} width={19} height={14} alt='icon'></Image>
										<p className="  text-[14px] font-extralight text-center text-black">
											244
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col flex-1    gap-[16px]">
							<div className={styles.image} />
							<div className="flex flex-col       gap-[8px]">
								<p className="text-[20px]  text-black font-[400]">
									Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
								</p>
								<div className={styles.post_details}>
									<p className="  text-[14px] font-extralight  text-black">
										01 Jun 2024
									</p>
									<div className="flex  items-center   gap-[8px]">
										<Image src={views} width={19} height={14} alt='icon'></Image>
										<p className="  text-[14px] font-extralight text-center text-black">
											244
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.list}>
					<div className="flex flex-col flex-1 gap-[16px]">
						<div className={styles.image} />
						<div className="flex flex-col gap-[8px]">
							<p className=" text-[20px]  text-black font-[400]">
								Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
							</p>
							<div className={styles.post_details}>
								<p className="  text-[14px] font-extralight  text-black">
									01 Jun 2024
								</p>
								<div className="flex  items-center   gap-[8px]">
									<Image src={views} width={19} height={14} alt='icon'></Image>
									<p className="  text-[14px] font-extralight text-center text-black">
										244
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col flex-1    gap-[16px]">
						<div className={styles.image} />
						<div className="flex flex-col       gap-[8px]">
							<p className="text-[20px]  text-black font-[400]">
								Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
							</p>
							<div className={styles.post_details}>
								<p className="  text-[14px] font-extralight  text-black">
									01 Jun 2024
								</p>
								<div className="flex  items-center   gap-[8px]">
									<Image src={views} width={19} height={14} alt='icon'></Image>
									<p className="  text-[14px] font-extralight text-center text-black">
										244
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>




		<div className={styles.section}>
			<p className={styles.subtitle}>Media</p>

			<Carousel
				opts={{
					align: "center",
					slidesToScroll: md ? 1 : lg ? 2 : 3,
					watchDrag: false,
				}}
				pagination={currentSlide}
			>
				<CarouselContent>
					{media.map((item, index) => {
						return <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
						<div className="flex flex-col gap-[16px]">
							<div className={styles.image} />
							<div className="flex flex-col gap-[8px]">
								<p className="    text-[20px]  text-black font-[400]">
									{item.title}
								</p>
							</div>
						</div>
					</CarouselItem>
					})}
				</CarouselContent>
			</Carousel>

			{media.length > 3 && <div className="flex justify-center h-[17px] gap-[24px]">
				{Array.from({ length: md ? paginationMd : lg ? paginationLg : pagination }, (_, index) => (
	        <button onClick={() => {
						setCurrentSlide(index)
						setCurrentSlidesshow(index)
					}} key={index} className={cn(styles.pagination, {[styles.active]: index === currentSlidesshow})} />
	      ))}
			</div>}			
		</div>



		<div className={styles.section}>
			<p className={styles.subtitle}>Latest posts</p>

			<div className={styles.posts}>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className="flex  items-center     gap-[16px]">
							<p className="  text-[14px] font-extralight  text-black">
								01 Jun 2024
							</p>
							<div className="flex  items-center   gap-[8px]">
								<Image src={views} width={19} height={14} alt='icon'></Image>
								<p className="  text-[14px] font-extralight text-center text-black">
									244
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className="flex  items-center     gap-[16px]">
							<p className="  text-[14px] font-extralight  text-black">
								01 Jun 2024
							</p>
							<div className="flex  items-center   gap-[8px]">
								<Image src={views} width={19} height={14} alt='icon'></Image>
								<p className="  text-[14px] font-extralight text-center text-black">
									244
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className="flex  items-center     gap-[16px]">
							<p className="  text-[14px] font-extralight  text-black">
								01 Jun 2024
							</p>
							<div className="flex  items-center   gap-[8px]">
								<Image src={views} width={19} height={14} alt='icon'></Image>
								<p className="  text-[14px] font-extralight text-center text-black">
									244
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>




			<div className={styles.posts}>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className="flex  items-center     gap-[16px]">
							<p className="  text-[14px] font-extralight  text-black">
								01 Jun 2024
							</p>
							<div className="flex  items-center   gap-[8px]">
								<Image src={views} width={19} height={14} alt='icon'></Image>
								<p className="  text-[14px] font-extralight text-center text-black">
									244
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className="flex  items-center     gap-[16px]">
							<p className="  text-[14px] font-extralight  text-black">
								01 Jun 2024
							</p>
							<div className="flex  items-center   gap-[8px]">
								<Image src={views} width={19} height={14} alt='icon'></Image>
								<p className="  text-[14px] font-extralight text-center text-black">
									244
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col     gap-[16px]">
					<div className={styles.image} />
					<div className="flex flex-col       gap-[8px]">
						<p className="    text-[20px]  text-black font-[400]">
							Lorem Ipsum Lorem ipsum dolor sit amet consectetur.
						</p>
						<div className="flex  items-center     gap-[16px]">
							<p className="  text-[14px] font-extralight  text-black">
								01 Jun 2024
							</p>
							<div className="flex  items-center   gap-[8px]">
								<Image src={views} width={19} height={14} alt='icon'></Image>
								<p className="  text-[14px] font-extralight text-center text-black">
									244
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>



			<div className='max-w-[132px] mx-auto'>
				<ButtonBorder
					text='Load More'
				></ButtonBorder>
			</div>
		</div>




		
		
	</div>
}


