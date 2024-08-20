'use client'
import styles from './blog.module.scss'
import views from "@/ui/icons/views.svg";
import { Typography } from '@/components/typography'
import Image from 'next/image'
import { ButtonBorder } from '@/components/buttonBorder';
import { PostSdider } from '@/components/postSdider';


export default function Security() {

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




		<PostSdider></PostSdider>



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


